import Category from "../components/Category.jsx"
import productList from "../data/productList.js";


const defaultProductPage = () => {
    return (
        <Category productList={productList}/>
    )
}

export default defaultProductPage;