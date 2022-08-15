// React
import React from "react";
import { Link } from "react-router-dom";

// material UI
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {
  return (
    <div>
      <Box>
        <AppBar style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Link to={'/'} >
              <IconButton size="large" style={{ color: 'white' }} sx={{ mr: 2 }} to="/" >
                <AppleIcon />
              </IconButton>
            </Link>
            <Typography variant="h6">Apple E-Commerce</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link to={`/favorites`} >
              <IconButton size="large" style={{ color: 'white' }} >
                <FavoriteIcon />
              </IconButton>
            </Link>
            <Link to={`/cart`} >
              <IconButton size="large" style={{ color: 'white' }} >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
