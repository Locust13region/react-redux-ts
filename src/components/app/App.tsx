import Menu from "../menu";
import User from "../user";
import "./App.css";
import RoutesTable from "../routes";

export default function App() {
	return (
		<div className="wrapper">
			<header className="header">
				<nav className="navBar">
					<div className="menu">
						<Menu />
						<User />
					</div>
				</nav>
			</header>
			<main className="container">
				<RoutesTable />
			</main>
		</div>
	);
}
