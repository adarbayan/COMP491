import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PatientHolderProps {
  patientName: string;
  hour: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
}

const PatientHolder: React.FC<PatientHolderProps> = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: props.color,
          height: props.height,
          width: "100px",
        }}
      >
        <Typography className="Hour">{props.hour}</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "4px solid #4EC6C7",
          borderColor: props.color,
          height: props.height,
          width: props.width,
        }}
      >
        <Typography
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            paddingLeft: "20px",
            fontSize: props.fontSize,
            fontWeight: "550",
          }}
        >
          {props.patientName}
        </Typography>
      </Box>
    </div>
  );
};

PatientHolder.defaultProps = {
  width: "500px",
  height: "40px",
  color: "#4EC6C7",
  fontSize: "20px",
};

export default PatientHolder;
