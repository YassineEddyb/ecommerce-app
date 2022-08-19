import React, {useEffect, useState} from 'react'
import "./paginate.scss"

import Pagination from '@mui/material/Pagination';
import axios from "../../utils/axiosConfig"
import {useSearchParams} from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Paginate() {
	const [count, setCount] = useState();
	// const [page, setPage] = useState();
	const [searchParams, setSearchParams] = useSearchParams();
	const search = useLocation().search;
	const query = new URLSearchParams(search).get("q");

	const handleChange = (e) => {
   		setSearchParams({q: query ? query : "", page: e.target.textContent});
    };

	useEffect(() => {
		const fetchProductsCount = async () => {
			try {
				const res = await axios("api/products/productsCount");
				setCount(Math.ceil(res.data.count / 10));
			} catch(err) {
				console.log(err);
			}	
		}
		
		fetchProductsCount();
	})

  return (
    <div className="pagination">
       <Pagination onChange={handleChange} count={count} shape="rounded" />
    </div>
  )
}

export default Paginate