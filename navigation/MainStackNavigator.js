import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import BarcodeScanner from '../screens/BarcodeScanner'
import ModalExample from '../screens/ModalExample'

const MainStackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Scan: { screen: BarcodeScanner },
  Products: { screen: ModalExample }
})

const App = createAppContainer(MainStackNavigator)

export default App
