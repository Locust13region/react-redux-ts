const baseUrl = "https://usman-fake-api.herokuapp.com/api";
const authUrl = baseUrl + "/auth";
const tokenUrl = baseUrl + "/users";
const userUrl = baseUrl + "/users/me";
const productsUrl = baseUrl + "/products";
const recipesUrl = baseUrl + "/recipes";

interface IUser {
	name: string;
	password: string;
	email: string;
}
export const tokenRequest = async (isLoginChecked: boolean, user: IUser) => {
	const postBody = isLoginChecked
		? { email: user.email, password: user.password }
		: { name: user.name, email: user.email, password: user.password };
	const response = await fetch(isLoginChecked ? authUrl : tokenUrl, {
		method: "POST",
		body: JSON.stringify(postBody),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.text();
	if (!response.ok) {
		throw new Error(result);
	}
	return result;
};

export const userRequest = async (token: string) => {
	const response = await fetch(userUrl, {
		method: "GET",
		headers: {
			"x-auth-token": token,
		},
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const result = await response.json();
	return result;
};

export const productsRequest = async () => {
	return await fetch(productsUrl);
};

export const recipesRequest = async () => {
	return await fetch(recipesUrl);
};
