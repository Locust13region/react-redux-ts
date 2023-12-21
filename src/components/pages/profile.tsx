import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { clearCurrentUser } from "../store/user-slice";
import { clearToken } from "../store/token-slice";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Profile: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const currentUser = useAppSelector((state) => state.user.currentUser);
	if (typeof currentUser === "string") {
		return;
	}

	const onLogoff = () => {
		localStorage.removeItem("_rrs_token");
		dispatch(clearCurrentUser());
		dispatch(clearToken());
		navigate("/");
	};

	return (
		<div className="profile">
			<label>User ID: {currentUser._id}</label>
			<label>User name: {currentUser.name}</label>
			<label>User email: {currentUser.email}</label>
			<button onClick={onLogoff}>Logoff</button>
		</div>
	);
};

export default Profile;
