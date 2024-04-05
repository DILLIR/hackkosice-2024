import { Button, Stack } from "@mui/joy";

function App() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", background: "#000", color: "#fff" }}
    >
      <h1 style={{ textAlign: "center" }}>Argon the best!</h1>
      <Button>Win!</Button>
    </Stack>
  );
}

export default App;
