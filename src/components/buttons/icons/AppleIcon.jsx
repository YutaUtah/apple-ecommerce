import { IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

export const AppleIconButton = () => {
    return (
        <IconButton size="large" style={{ color: 'white' }} sx={{ mr: 2 }} to="/" >
        <AppleIcon />
      </IconButton>    
    )
    
};
