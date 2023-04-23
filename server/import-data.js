const fs = require("fs");
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./models/ProductModel");

// dotenv.config({ path: "../config.env" });

// const tours = JSON.parse(
// 	  fs.readFileSync(`${__dirname}/data/tours.json`, "utf-8")
// );

const tours = [
  {
    title: "Men's Slim-Fit Navy & White Stripe Blazer",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/21370524_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/21370524_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/21370525_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21370526_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21370530_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
    ],
    desc: "If you could create the perfect blazer to make your confidence soar, it would probably look a lot like this slim-fit navy and white striped blazer from Tallia.",
    price: 135.99,
    rating: 4.9,
    categories: ["men", "blazers"],
    size: ["S", "L", "M", "XL"],
  },
  {
    title: "INC Men's Ezra Sneakers, Created for Macy's",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/18720336_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/18720336_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/18720337_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/18720339_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18720340_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    ],
    desc: "INC International Concepts® finishes off your relaxed look with the smooth lines and comfortable fit of the Ezra low-top sneakers.",
    price: 30.99,
    rating: 4.9,
    categories: ["men", "women", "shoes"],
    size: ["S", "M", "XL"],
  },
  {
    title: "Men's Fleece Jogger Pants",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19346926_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19346926_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/19346927_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/19346928_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/19362057_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    ],
    desc: "Objects in motion stay in motion. Even after practice is wrapped up, you want the same freedom to move through life with easy comfort. Slip into these adidas pants and go about your routine without a single roadblock.",
    price: 32.99,
    rating: 4.9,
    categories: ["men", "pants"],
    size: ["S", "L", "M"],
  },
  {
    title: "Men's Logo Hoodie",
    picture:
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/19790477_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/19790477_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/19790523_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/19790478_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp",
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19790522_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
    ],
    desc: "Meet and embrace this versatile hoodie with an adidas Badge of Sport. It features an adjustable drawstring hood and the soft, breathable comfort of pure cotton.",
    price: 31.99,
    rating: 4.9,
    categories: ["men", "women", "hoodies"],
    size: ["S", "L", "M", "XL"],
  },
  {
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
    categories: ["men", "T-shirts"],
    size: ["S", "XL"],
  },
  {
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
    categories: ["men", "women", "hoodies"],
  },
  {
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
    categories: ["men", "T-shirts"],
    size: ["M", "XL"],
  },
  {
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
    categories: ["men", "women", "shoes"],
    size: ["S", "L", "M", "XL"],
  },
  {
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
    categories: ["men", "pants"],
    size: ["L", "M", "XL"],
  },
  {
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
    categories: ["men", "women", "hoodies"],
    size: ["S", "L", "XL"],
  },
];

const DB = "mongodb+srv://yessine:yassindyb@cluster0.ovaur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
	      useNewUrlParser: true,
	    })
  .then((result) => {
	      console.log("connected to mongodb");
	    })
  .catch((err) => {
	      console.log(err);
	    });

const importData = async () => {
	  try {
			await Product.create(tours);
			console.log("data successfully loaded");
		} catch (err) {
			console.log(err);
		}
};
const deleteData = async () => {
	  try {
			await Product.deleteMany();
			console.log("data successfully deleted");
		} catch (err) {
			console.log(err);
		}
};

if (process.argv[2] === "--import") {
	  importData();
} else if (process.argv[2] === "--delete") {
	  deleteData();
}
