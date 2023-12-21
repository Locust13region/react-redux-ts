import ModalLogin from "../modal/modal-login";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { NavLink } from "react-router-dom";
import { getUser } from "../store/user-slice";
import { useEffect } from "react";
import { setToken } from "../store/token-slice";

const User = () => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useAppDispatch();

	const localToken = localStorage.getItem("_rrs_token");
	const token = useAppSelector((state) => state.token.token);

	useEffect(() => {
		if (localToken) {
			if (token) {
				dispatch(getUser());
			} else {
				dispatch(setToken(localToken));
			}
		}
	}, [dispatch, token, localToken]);

	const currentUser = useAppSelector((state) => state.user.currentUser);

	const user = typeof currentUser !=="string"? (
		<NavLink
			to="/profile"
			className="loggedIn"
		>
			{currentUser.name[0]}
		</NavLink>
	) : (
		<div
			className="menuItem"
			onClick={() => {
				setShowModal(true);
			}}
		>
			Login
		</div>
	);

	return (
		<>
			<div className="userSection ">{user}</div>
			<ModalLogin
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</>
	);
};

export default User;
