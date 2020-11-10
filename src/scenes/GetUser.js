import React from 'react'
import {Button, View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useQuery} from '@apollo/react-hooks'
import {GET_USER} from 'src/services/users'

const GetUser = () => {
	// #region hooks
	const navigation = useNavigation()
	// #endregion hooks

	// #region states
	// #endregion states

	// #region handlers
	// #endregion handlers

	const {loading, error, data} = useQuery(GET_USER, {
		variables: {where: {email: 'test@gmail.com'}},
	})
	if (loading) return <Text>Loading...</Text>
	if (error) return <Text>Error...</Text>

	return (
		<SafeAreaView>
			<View>
				<Text>{data.data.user.id}</Text>
				<Text>{data.data.user.email}</Text>
				<Text>{data.data.user.name}</Text>

				<Button
					title="signup screen"
					onPress={() => navigation.navigate('Login')}
				/>
			</View>
		</SafeAreaView>
	)
}

export default GetUser
