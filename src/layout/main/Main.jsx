import { Paper } from "@mui/material";

const Main = ({ children }) => {
  return <>
    <Paper
      sx={{
        minHeight: "86vh",
      }}
    >
      {children}
    </Paper>
</>
}



export default Main;