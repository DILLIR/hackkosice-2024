const express = require('express');
const axios = require('axios');
const fs = require('fs');
const AdmZip = require('adm-zip');
const { generateResponse } = require('./openai');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Function to download a GitHub repository as a zip archive
async function downloadRepoZip(repoUrl, outputFilePath) {
    try {
        const zipUrl = `${repoUrl}/archive/refs/heads/main.zip`; // Assuming 'main' branch
        const response = await axios({
            method: 'get',
            url: zipUrl,
            responseType: 'arraybuffer',
        });

        fs.writeFileSync(outputFilePath, Buffer.from(response.data));
    } catch (error) {
        throw new Error(`Failed to download repository: ${error.message}`);
    }
}

// Function to convert PHP files to Python within a zip file using OpenAI's GPT-3 API
async function convertPhpToPython(inputZipPath, outputZipPath) {
    try {
        const zip = new AdmZip(inputZipPath);
        const zipEntries = zip.getEntries();

        const outputZip = new AdmZip();

        for (const entry of zipEntries) {
            if (entry.entryName.endsWith('.php')) {
                const phpContent = zip.readAsText(entry);

                // Use OpenAI to convert PHP content to Python
                const pythonContent = await generateResponse(
                    'Rewrite the following PHP code in Python:\n' + phpContent + '\n'
                );

                // Add converted Python content to the output zip
                outputZip.addFile(
                    entry.entryName.replace('.php', '.py'),
                    Buffer.from(pythonContent)
                );
            } else {
                // Copy non-PHP files as is to the output zip
                outputZip.addFile(entry.entryName, zip.readFile(entry));
            }
        }

        outputZip.writeZip(outputZipPath);
    } catch (error) {
        throw new Error(`Failed to convert PHP files to Python: ${error.message}`);
    }
}

// Route to process GitHub repository and provide download link
app.post('/processRepo', async (req, res) => {
    const { url } = req.body;

    const downloadFilePath = 'repository.zip';
    const outputFilePath = 'converted_repository.zip';

    try {
        // Download repository zip
        await downloadRepoZip(url, downloadFilePath);

        // Convert PHP to Python in the downloaded zip
        await convertPhpToPython(downloadFilePath, outputFilePath);

        // Send the download link to the client
        const downloadUrl = `http://localhost:${port}/download?filePath=${outputFilePath}`;
        res.json({ downloadUrl });
    } catch (error) {
        console.error('Error processing repository:', error);
        res.status(500).json({ error: 'Failed to process repository' });
    }
});

// Route to download the generated zip file
app.get('/download', (req, res) => {
    const { filePath } = req.query;

    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Send the file as a download
        res.download(filePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).json({ error: 'Failed to download file' });
            }
        });
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Failed to download file' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
