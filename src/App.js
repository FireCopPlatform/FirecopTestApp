import React, {useEffect} from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {RecoilRoot} from 'recoil'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

import AppContainer from 'src/navigators'
import client from 'src/services'

const App = () => {
	useEffect(() => SplashScreen.hide(), [])

	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<RecoilRoot>
					<AppContainer />
				</RecoilRoot>
			</ApolloProvider>
		</SafeAreaProvider>
	)
}

export default App
