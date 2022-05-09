import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const products = [
  {
    _id: 1,
    title: "Men's Slim-Fit Navy & White Stripe Blazer",
    picture: require("../assets/images/1.1.webp"),
    images: [
      require("../assets/images/1.1.webp"),
      require("../assets/images/1.2.webp"),
      require("../assets/images/1.3.webp"),
      require("../assets/images/1.4.webp"),
    ],
    desc: "If you could create the perfect blazer to make your confidence soar, it would probably look a lot like this slim-fit navy and white striped blazer from Tallia.",
    price: 135.99,
    rating: 4.9,
    categories: ["blazers"],
  },
  {
    _id: 2,
    title: "INC Men's Ezra Sneakers, Created for Macy's",
    picture: require("../assets/images/2.1.webp"),
    images: [
      require("../assets/images/2.1.webp"),
      require("../assets/images/2.2.webp"),
      require("../assets/images/2.3.webp"),
      require("../assets/images/2.4.webp"),
    ],
    desc: "INC International Concepts® finishes off your relaxed look with the smooth lines and comfortable fit of the Ezra low-top sneakers.",
    price: 30.99,
    rating: 4.9,
    categories: ["shoes"],
  },
  {
    _id: 3,
    title: "Men's Fleece Jogger Pants",
    picture: require("../assets/images/3.1.webp"),
    images: [
      require("../assets/images/3.1.webp"),
      require("../assets/images/3.2.webp"),
      require("../assets/images/3.3.webp"),
      require("../assets/images/3.4.webp"),
    ],
    desc: "Objects in motion stay in motion. Even after practice is wrapped up, you want the same freedom to move through life with easy comfort. Slip into these adidas pants and go about your routine without a single roadblock.",
    price: 32.99,
    rating: 4.9,
    categories: ["pants"],
  },
  {
    _id: 4,
    title: "Men's Logo Hoodie",
    picture: require("../assets/images/4.1.webp"),
    images: [
      require("../assets/images/4.1.webp"),
      require("../assets/images/4.2.webp"),
      require("../assets/images/4.3.webp"),
      require("../assets/images/4.4.webp"),
    ],
    desc: "Meet and embrace this versatile hoodie with an adidas Badge of Sport. It features an adjustable drawstring hood and the soft, breathable comfort of pure cotton.",
    price: 31.99,
    rating: 4.9,
    categories: ["hoodies"],
  },
  {
    _id: 5,
    title: "Men's Logo Long-Sleeve T-Shirt",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/15146050_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/15146050_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/15146068_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/15146060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/15146066_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "Ringspun cotton brings an ultra-soft feel to this adidas T-shirt. A bold logo adds a classic touch, while long sleeves give you added warmth.",
    price: 23.99,
    rating: 4.9,
    categories: ["shirts"],
  },
  {
    _id: 6,
    title: "Men's Fleece Logo Hoodie",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17666921_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17666921_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/17666961_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/17666963_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/17666962_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "Update your go-to with this Puma hoodie, a classic fleece freshened with bold new color.",
    price: 23.99,
    rating: 4.9,
    categories: ["hoodies"],
  },
  {
    _id: 7,
    title: "Men's Tech 2.0 V-Neck T-Shirt",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21476517_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21476517_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21476518_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21476519_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "An active essential with casual style, this tech T-shirt from Under Armour features a V-neck and slim silhouette. Performance technology enhances ultra-soft fabric for lasting comfort.",
    price: 19.99,
    rating: 4.9,
    categories: ["T-shirts"],
  },
  {
    _id: 8,
    title: "Men's Grayson Lace-Up Sneakers, Created for Macy's",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/21013955_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/21013955_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21013956_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/21013964_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "Supple sheen and neat lacing adds a dressy hint to dressed-down looks in the laced Grayson sneakers by Alfani.",
    price: 26.99,
    rating: 4.9,
    categories: ["shoes"],
  },
  {
    _id: 9,
    title: "Men's Game & Go Tapered-Fit Moisture-Wicking Fleece Sweatpants",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21429437_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/21429437_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/19805189_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/19805208_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "Stay comfortable and stylish before, during and after your workouts with these Game & Go tapered sweatpants from adidas, featuring soft fleece and adjustable zipper leg openings.",
    price: 22.99,
    rating: 4.9,
    categories: ["pants"],
  },
  {
    _id: 10,
    title: "Men's Script Logo Powerblend Hoodie",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/21278972_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/21278972_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21278983_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/21278982_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
    ],
    desc: "A classic look in soft fleece, this Champion hoodie resists pilling and shrinking to stay looking good longer.",
    price: 31.99,
    rating: 4.9,
    categories: ["hoodies"],
  },
];

// const headers = {
//   "Content-Type": "application/json",
// };

// const url = "http://localhost:5000/api/products";

export const ProductProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const result = await axios.get(url, { headers });
  //       setProducts(result.data.products);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
