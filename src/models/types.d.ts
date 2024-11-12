export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
export interface AddressGeo {
	lat: string;
	lng: string;
}
export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: AddressGeo;
}
export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}
//==========================================================================================
export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}
//==========================================================================================

export interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}