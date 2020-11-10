import React, {useState, useCallback} from 'react'
import {Alert, Button, View, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSetRecoilState} from 'recoil'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useMutation} from '@apollo/react-hooks'

import {LOGIN} from 'src/services/users'
import {userTokenState} from 'src/states'

const LoginScreen = () => {
	// #region hooks
	const navigation = useNavigation()
	const setUserToken = useSetRecoilState(userTokenState)
	const [login] = useMutation(LOGIN)
	// #endregion hooks

	// #region states
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// #endregion states

	// #region handlers
	const handleEmailChange = (value) => {
		setEmail(value.trim())
	}
	const handlePasswordChange = (value) => {
		setPassword(value.trim())
	}
	const handleLoginPress = useCallback(async () => {
		try {
			const data = await login({variables: {email, password}})
			if (data) {
				setUserToken(data.data.login.token)
			}
		} catch (e) {
			console.log(e)
			Alert.alert('Failed fetching data', e.message, [{text: 'OK'}])
		}
	}, [email, password])
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
				<Button title="login button" onPress={handleLoginPress} />
				<Button
					title="signup screen"
					onPress={() => navigation.navigate('Signup')}
				/>
				<Button
					title="get user screen"
					onPress={() => navigation.navigate('GetUser')}
				/>
				<Button
					title="create user screen"
					onPress={() => navigation.navigate('CreateUser')}
				/>
			</View>
		</SafeAreaView>
	)
}

export default LoginScreen
