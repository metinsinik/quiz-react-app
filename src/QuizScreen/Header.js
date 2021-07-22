import React from "react";
import { Typography } from "@material-ui/core";

const Header = ({ index, done }) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        style={{ color: "whitesmoke", paddingTop: "12px" }}
      >
        General Quiz
      </Typography>
      {!done ? (
        <Typography style={{ color: "whitesmoke" }}>
          Question #{index + 1}
        </Typography>
      ) : null}
    </>
  );
};

export default Header;
