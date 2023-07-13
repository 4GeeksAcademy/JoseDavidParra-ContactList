import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
// import ScrollToTop from "./element/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Contacts } from "./views/Contacts";
import { Update } from "./views/UpdateContact";
import { AddContact } from "./views/AddContact";

// import { Navbar } from "./element/navbar";
// import { Footer } from "./element/footer";

//create your first element
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		// <div>
		// 	<BrowserRouter basename={basename}>
		// 		<ScrollToTop>
		// 			<Navbar />
		// 			<Routes>
		// 				<Route path="/" element={<Home />} />
		// 				<Route path="/demo" element={<Demo />} />
		// 				<Route path="/single/:theid" element={<Single />} />
		// 				<Route path="*" element={<h1>Not found!</h1>} />
		// 			</Routes>
		// 			<Footer />
		// 		</ScrollToTop>
		// 	</BrowserRouter>
		// </div>
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route exact path="/index.html" element={<Contacts/>} />
						<Route exact path="/" element={<Contacts/>} />
						<Route exact path="/contacts" element={<Contacts/>} />
						<Route exact path="/add" element={<AddContact/>} />
						<Route exact path="/edit" element={<AddContact/>} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
						<Route path="/update/:id" element={<Update/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
