import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AppleIcon from "@mui/icons-material/Apple";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <Box>
      <AppBar style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="apple"
            sx={{ mr: 2 }}
            to="/"
          >
            <AppleIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Apple E-Commerce
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            color="inherit"
            aria-label="favorite"
            to="/favorite"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            edge="end"
            size="large"
            color="inherit"
            aria-label="to shopping page"
            to="/cart"
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
