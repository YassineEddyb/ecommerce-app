import React, { useState } from "react";
import "./product-galory.scss";

function ProductGalory({ images }) {
  const [image, setImage] = useState(images[0]);

  return (
    <div className="product-galory">
      <div className="images">
        {images.map((el, idx) => {
          return (
            <div className="image">
              <img
                src={el}
                key={idx}
                onClick={(e) => {
                  setImage(el);
                }}
                alt="image"
              />
              ;
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
