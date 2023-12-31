import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/App";
import "./index.css";
import store from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router basename="/react-redux-ts">
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
);
