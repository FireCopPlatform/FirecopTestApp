import React, {useState, useCallback} from 'react'
import {Alert, Button, View, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMutation} from '@apollo/react-hooks'

import {CREATE_USER} from 'src/services/users'

const CreateUser = () => {
	// #region hooks
	const navigation = useNavigation()
	const [createUser] = useMutation(CREATE_USER)
	// #endregion hooks

	// #region states
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	// #endregion states

	// #region handlers
	const handleEmailChange = (value) => {
		setEmail(value.trim())
	}
	const handleNameChange = (value) => {
		setName(value.trim())
	}
	const handlePasswordChange = (value) => {
		setPassword(value.trim())
	}
	const handleCreateUserPress = useCallback(async () => {
		try {
			await createUser({variables: {email, name, password}})
		} catch (e) {
			console.log(e)
			Alert.alert('Failed fetching data', e.message, [{text: 'OK'}])
		}
	}, [email, name, password])
	// #endregion handlers

	return (
		<SafeAreaView>
			<View>
				<TextInput
					placeholder="email"
					textContentType="username"
					keyboardType="email-address"
					value={email}
					onChangeText={handleEmailChange}
					autoCapitalize="none"
					returnKeyType="next"
				/>
				<TextInput
					placeholder="name"
					textContentType="username"
					value={name}
					onChangeText={handleNameChange}
					autoCapitalize="none"
					returnKeyType="next"
				/>
				<TextInput
					placeholder="password"
					secureTextEntry
					value={password}
					onChangeText={handlePasswordChange}
					autoCapitalize="none"
					returnKeyType="send"
				/>
				<Button title="create user button" onPress={handleCreateUserPress} />
				<Button
					title="login screen"
					onPress={() => navigation.navigate('Login')}
				/>
			</View>
		</SafeAreaView>
	)
}

export default CreateUser
