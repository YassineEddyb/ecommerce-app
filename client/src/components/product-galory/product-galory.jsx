import React, { useEffect, useState } from "react";
import "./product-galory.scss";

function ProductGalory({ picture, images }) {
  const [image, setImage] = useState(picture);

  return (
    <div className="product-galory">
      <div className="images">
        {images.map((el, idx) => {
          return (
            <div key={idx} className="image">
              <img
                src={el}
                key={idx}
                onClick={() => {
                  setImage(el);
                }}
                alt="image"
              />
            </div>
          );
        })}
      </div>
      <div className="main-img">
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default ProductGalory;
