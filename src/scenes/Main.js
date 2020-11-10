import React from 'react'
import {Button, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useResetRecoilState} from 'recoil'

import {userTokenState} from 'src/states'

const Main = () => {
	// #region hooks
	const navigation = useNavigation()
	const handleLogoutPress = useResetRecoilState(userTokenState)
	// #endregion hooks

	// #region states
	// #endregion states

	// #region handlers
	// #endregion handlers

	return (
		<View>
			<Button title="logout" onPress={handleLogoutPress} />
			<Button
				title="main2 screen button"
				onPress={() => navigation.navigate('Main2')}
			/>
		</View>
	)
}

export default Main
