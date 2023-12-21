import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getRecipesList } from "../store/list-slice";
import Spinner from "../spinner/spinner";

const PrivateRecipes: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getRecipesList());
	}, [dispatch]);

	const { recipesList, loading } = useAppSelector((state) => state.list);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<h4>Private page</h4>
			<div className="list">
				{recipesList.map(({ title, body }, index) => {
					return (
						<div
							key={index}
							className="listItemRecipes"
						>
							<div className="itemTitle">{title}</div>
							<div className="itemDescription">{body}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default PrivateRecipes;
