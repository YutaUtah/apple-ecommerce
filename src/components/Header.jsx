// React
import React from "react";
import { Link } from "react-router-dom";

// material UI
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

import { FavIconButton } from "./buttons/icons/FavIcon";
import { CartIconButton } from "./buttons/icons/CartIcon";
import { AppleIconButton } from "./buttons/icons/AppleIcon";

export const Header = () => {
  return (
    <div>
      <Box sx={{ pb: 15 }}>
        <AppBar style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Link to={'/'} >
              <AppleIconButton/>
            </Link>
            <Typography variant="h6">Apple E-Commerce</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link to={`/favorites`} >
              <FavIconButton/>
            </Link>
            <Link to={`/cart`} >
              <CartIconButton/>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
