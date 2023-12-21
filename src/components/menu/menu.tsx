import { menuItems } from "./items";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { useState } from "react";

const Menu = () => {
	const [onHamburger, setHamburger] = useState(false);
	const toggleHamburger = () => {
		setHamburger(!onHamburger);
	};

	const currentUser = useAppSelector((state) => state.user.currentUser);

	return (
		<div>
			<div
				onClick={() => toggleHamburger()}
				className={onHamburger ? "menuWrap" : undefined}
			>
				<div className={onHamburger ? "menuSection showMenu" : "menuSection"}>
					{menuItems
						.filter((item) => currentUser? true:item.privat == false)
						.map(({ title, classname, route }, index) => (
							<NavLink
								key={index}
								to={route}
								className={classname}
								onClick={() => setHamburger(false)}
							>
								{title}
							</NavLink>
						))}
				</div>
				<button
					onClick={() => toggleHamburger()}
					className="hamburger"
				>
					<i className=" material-icons md-24">{onHamburger ? "close":"menu"}</i>
				</button>
			</div>
		</div>
	);
};

export default Menu;
