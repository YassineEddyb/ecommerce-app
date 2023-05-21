import React, { useEffect, useState, useContext } from "react";
import "./paginate.scss";

import Pagination from "@mui/material/Pagination";
import axios from "../../utils/axiosConfig";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductContext from "../../context/productsContext";
import { convertLength } from "@mui/material/styles/cssUtils";

function Paginate() {
  const { count } = useContext(ProductContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");

  // console.log(count);

  const handleChange = (e) => {
    setSearchParams({ q: query ? query : "", page: e.target.textContent });
  };

  // useEffect(() => {
  // 	const fetchProductsCount = async () => {
  // 		try {
  // 			const res = await axios("api/products/productsCount");
  // 			setCount(Math.ceil(res.data.count / 10));
  // 		} catch(err) {
  // 			// console.log(err);
  // 		}
  // 	}

  // 	fetchProductsCount();
  // })

  return (
    <div className="pagination">
      {Math.ceil(count / 10) > 1 ? (
        <Pagination
          onChange={handleChange}
          count={Math.ceil(count / 10)}
          RowsPerPage={handleChange}
          shape="rounded"
        />
      ) : null}
    </div>
  );
}

export default Paginate;
