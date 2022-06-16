import { useTheme, useMediaQuery } from "@mui/material";

export default function Resume() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <iframe
        src="https://drive.google.com/file/d/1p_oxNvakx9Wb_UjP6gaQeR9gKzI6orTZ/preview"
        height={matches ? "570px" : "1200px"}
        width="100%"
        style={{ marginTop: "10px" }}
        title="Gautam_Vaja_Resume"
      ></iframe>
    </div>
  );
}
