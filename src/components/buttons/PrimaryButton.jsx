// React
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const PrimaryButton = (props) => {

    const { changeItemState, boxStyles, buttonStyles, buttonTitle } = props;

    return (
      <Box
        sx={boxStyles} >
        <Typography variant="h6">
          <Button style={buttonStyles} variant="contained" onClick={changeItemState}>
            {buttonTitle}
          </Button>
        </Typography>
      </Box>
    );
  };