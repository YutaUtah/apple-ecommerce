// components
import Item from "./Item.jsx";
import "./Category.css"
// mui
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Category = () => {

  return (
    <div className="container ">
      <Box sx={{ mt: 15 , overflow: "scroll" }}>
        {/* <Typography sx={{textAlign: "start", margin: 0}} variant="h4">ストア</Typography> */}
        <div className=" ov d-flex mt-5 ">
        <Stack component="div" direction="row" sx={{ mt: 15 , overflow: "scroll" }}>
          {/* {items.map((item) => <Item item={item} key={item.productName} />)} */}
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Stack>
        </div>
      </Box>
    </div>
  );
};

export default Category;
