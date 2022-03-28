import * as React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
  height?: string;
}

const HeaderContainer: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        color: props.color,
        height: props.height,
      }}
    >
      <Typography className="Header">{props.title}</Typography>
    </div>
  );
};

HeaderContainer.defaultProps = {
  color: "white",
  backgroundColor: "#4EC6C7",
  height: "80px",
};

export default HeaderContainer;
