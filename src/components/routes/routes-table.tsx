import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { menuItems } from "../menu/items";
import { Profile, PageNotFound } from "../pages";

const RoutesTable = () => {
	const currentUser = useAppSelector((state) => state.user.currentUser);

	return (
		<Routes>
			{menuItems.map(({ route, page, privat }, index) => {
				if (privat) {
					return (
						<Route
							key={index}
							path={route}
							element={currentUser ? page() : <PageNotFound />}
						/>
					);
				} else {
					return (
						<Route
							key={index}
							path={route}
							element={page()}
						/>
					);
				}
			})}

			<Route
				path="/profile"
				element={currentUser ? <Profile /> : <PageNotFound />}
			/>
		</Routes>
	);
};

export default RoutesTable;
