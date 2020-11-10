import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useRecoilValue} from 'recoil'

import {userTokenState} from 'src/states'

import Login from 'src/scenes/Login'
import Signup from 'src/scenes/Signup'
import GetUser from 'src/scenes/GetUser'
import CreateUser from 'src/scenes/CreateUser'
import Main from 'src/scenes/Main'
import Main2 from 'src/scenes/Main2'

const Stack = createStackNavigator()

const AppContainer = () => {
	const userToken = useRecoilValue(userTokenState)

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					{userToken ? (
						<>
							<Stack.Screen name="Main" component={Main} />
							<Stack.Screen name="Main2" component={Main2} />
						</>
					) : (
						<>
							<Stack.Screen name="Login" component={Login} />
							<Stack.Screen name="Signup" component={Signup} />
							<Stack.Screen name="GetUser" component={GetUser} />
							<Stack.Screen name="CreateUser" component={CreateUser} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default AppContainer
