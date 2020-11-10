import React, {useState, useCallback} from 'react'
import {Button, View, TextInput, Alert} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import {useMutation} from '@apollo/react-hooks'

import {SIGN_UP} from 'src/services/users'

const SignupScreen = () => {
	// #region hooks
	const navigation = useNavigation()
	const [signup] = useMutation(SIGN_UP)
	// #endregion hooks

	// #region states
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	// #endregion states

	// #region handlers
	const handleEmailChange = (value) => {
		setEmail(value.trim())
	}
	const handlePasswordChange = (value) => {
		setPassword(value.trim())
	}
	const handleNameChange = (value) => {
		setName(value.trim())
	}
	const handleSignupPress = useCallback(async () => {
		try {
			const data = await signup({variables: {email, password, name}})
			if (data) {
				navigation.navigate('Sub')
			}
		} catch (e) {
			console.log(e)
			Alert.alert('로그인 실패', e.message, [{text: '확인'}])
		}
	}, [email, password, name])
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
					placeholder="password"
					secureTextEntry
					value={password}
					onChangeText={handlePasswordChange}
					autoCapitalize="none"
					returnKeyType="send"
				/>
				<TextInput
					placeholder="name"
					textContentType="username"
					value={name}
					onChangeText={handleNameChange}
					autoCapitalize="none"
					returnKeyType="next"
				/>
				<Button title="signup button" onPress={handleSignupPress} />
				<Button
					title="login screen"
					onPress={() => navigation.navigate('Login')}
				/>
			</View>
		</SafeAreaView>
	)
}

export default SignupScreen
