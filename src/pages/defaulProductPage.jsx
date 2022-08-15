import Category from "../components/Category.jsx";
import Header from "../components/Header.jsx";

// future plan: need to filter productlist
import productList from "../data/productList.js";

const DefaultProductPage = () => {

  return (
    <div>
      <Header />
      <Category productList={productList}/>
    </div>
  );
};

export default DefaultProductPage;