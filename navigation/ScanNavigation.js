import { createStackNavigator } from 'react-navigation-stack';

import BarcodeScanner from '../screens/BarcodeScanner';
import ModalExample from '../screens/ModalExample';

const ScanStack = createStackNavigator(
    {
      Scan: BarcodeScanner,
      ModalExample: ModalExample,
    }
  );
  
  ScanStack.navigationOptions = {
    tabBarLabel: 'Scan',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
  };
  
  export default ScanStack;