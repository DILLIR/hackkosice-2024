const OpenAI = require('openai');

const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const generateResponse = async (content) => {
    const params = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content }],
        stream: true,
    };
    const stream = await openai.chat.completions.create(params);
    let response = '';
    for await (const chunk of stream) {
        if (chunk.choices && chunk.choices[0]?.delta?.content) {
            response += chunk.choices[0].delta.content;
        }
    }
    return response;
};

module.exports = { generateResponse };
