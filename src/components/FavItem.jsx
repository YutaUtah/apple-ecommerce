import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import react from "react";

const ItemButton = (props) => {
    return (
      <Box
        sx={{display: "flex",　justifyContent: "center",
              p: 1,
            //   mx: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            }}>
        <Typography variant="h6">
          <Button　style={{ minWidth: "170px", minHeight: "30px" }}　variant="contained"　>
            {props.buttonTitle}
          </Button>
        </Typography>
      </Box>
    );
  };

// TODO: header margin to standardize
// TODO: button to standardize
// TODO: depending on the name, the container gets streched


export const FavItem = (props) => {
  const { productName, image, price } = props;

  const displayPrice = (price) => {
    return `$${price}`
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} key={productName} >
      <Card
        sx={{ minHeight: 250, minWidth: 800, mb: 1, display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <CardMedia component="img" height="300" width="200" image={image} alt={productName} sx={{m:2}}/>
          </Grid>
          <Grid item xs={6} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: "370px"}} >
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}
            sx={{display: "flex",justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h5" color="text.secondary" sx={{display: "column", textAlign: "end", mx: 20 }}>
              <div className="text-end mx-2">{displayPrice(price)}</div>
              <ItemButton buttonTitle="Add Favorite" />
              <ItemButton buttonTitle="Add To Cart" />
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
