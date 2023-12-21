import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getProductsList } from "../store/list-slice";
import Spinner from "../spinner/spinner";

const Products: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProductsList());
	}, [dispatch]);

	const { productsList, loading } = useAppSelector((state) => state.list);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<h4>Common page</h4>
			<div className="list">
				{productsList.map(({ name, description, department }, index) => {
					return (
						<div
							key={index}
							className="listItemProducts"
						>
							<div className="itemTitle">{name}</div>
							<div className="itemDescription">{description}</div>
							<div className="itemDepartment">Department: {department}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Products;
