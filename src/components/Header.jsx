import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AppleIcon from "@mui/icons-material/Apple";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Box>
        <AppBar style={{ background: "#2E3B55" }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="apple" sx={{ mr: 2 }} to="/" >
              <AppleIcon />
            </IconButton>
            <Typography variant="h6">Apple E-Commerce</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link to={`/favorites`}>
            <IconButton size="large" color="inherit">
              <FavoriteIcon/>
            </IconButton>
            </Link>
            <IconButton edge="end" size="large" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
