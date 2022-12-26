import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Home from "./pages/Home";
import Posts from "./pages/Posts";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "63a804408eb0cb069b57e43a";

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/post`, { headers: { "app-id": APP_ID } })
			.then((res) => res.data)
			.then(({ data }) => setData(data))
			.catch(console.error);
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home posts={data} />} />
				<Route path="/posts" element={<Posts posts={data} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
