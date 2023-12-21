export interface IProductsList {
	_id: string;
	name: string;
	price: number;
	color: string;
	department: string;
	description: string;
}
export interface IRecipesList {
	_id: string;
	title: string;
	body: string;
}
export type TTokenState = {
	token: string;
};
