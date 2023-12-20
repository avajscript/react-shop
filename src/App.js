import { useState } from "react";
import MultiCarousel from "./components/MultiCarousel";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Pagination from "./components/navigation/Pagination";

function App() {
    const products = [
        <Product
            name="Coffee Cup"
            description="This cup is made out of pure ceramic with an artisian finish"
            link="/"
            url="images/product.png"
        />,
        <Product
            name="Coffee Cup"
            description="This cup is made out of pure ceramic with an artisian finish"
            link="/"
            url="images/product.png"
        />,
        <Product
            name="Coffee Cup"
            description="This cup is made out of pure ceramic with an artisian finish"
            link="/"
            url="images/product.png"
        />,
        <Product
            name="Coffee Cup"
            description="This cup is made out of pure ceramic with an artisian finish"
            link="/"
            url="images/product.png"
        />,
    ];

    const [page, setPage] = useState(1);

    return (
        <div className="App">
            {/* <Carousel
        image="/images/honey.jpg"
        width="400"
        height="300"
        alt="Honey"
      /> */}
            {/*   <MultiCarousel
        images={[
          "images/image-1.png",
          "images/image-2.jpg",
          "images/image-3.jpg",
          "images/image-4.jpg",
        ]}
        width="400"
        height="300"
        alt="Honey"
      /> */}
            <ProductList products={products} />

            <Pagination pages={20} page={page} setPage={setPage} />
        </div>
    );
}

export default App;
