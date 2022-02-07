import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout";
import Home from "./Test";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Home />}></Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
