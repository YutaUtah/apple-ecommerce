import { IconButton } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartIconButton = () => {
    return (
        <IconButton size="large" style={{ color: 'white' }} >
        <ShoppingCartIcon />
      </IconButton>
    )
}