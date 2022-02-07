import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Layout = () => {
	return (
		<>
			<Header />
			{/* Test Component is for test reasons */}
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
