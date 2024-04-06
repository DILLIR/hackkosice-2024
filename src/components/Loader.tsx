import { Stack } from "@mui/material";
import "./Loader.css";
export function Loader() {
  return (
    <Stack
      sx={{
        width: "calc(100% - 450px)",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>
    </Stack>
  );
}
