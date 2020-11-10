import gql from 'graphql-tag'

// getters
export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`
export const GET_USER = gql`
	query($where: UserWhereUniqueInput!) {
		user(where: $where) {
			id
			name
			email
		}
	}
`

// setters
export const SIGN_UP = gql`
	mutation signup($email: String!, $password: String!, $name: String!) {
		signup(email: $email, password: $password, name: $name) {
			user {
				id
				name
				email
			}
			token
		}
	}
`
export const CREATE_USER = gql`
	mutation($data: UserCreateInput!) {
		createUser(data: $data) {
			id
			email
			name
			password
		}
	}
`
