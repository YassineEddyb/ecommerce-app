import {createContext, useState, useEffect} from "react";
import axios from "axios";

const ProductContext = createContext();


// const products = [
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
//   {
//     id: 1,
//     title: "jacket",
//     picture: "../../images/slider-2.jpg",
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     ],
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium mole`,
//     price: 49.54,
//     rating: 4.9,
//     categories: ["shirts"],
//   },
// ];

const headers = {
  "Content-Type": "application/json",
};

const url = "https://5000-cs-806939113361-default.cs-europe-west1-iuzs.cloudshell.dev/api/products"

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const result = await axios.get(url, {headers});
      setProducts(result.products);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(fetchProducts, [])

  console.log(products);


  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;