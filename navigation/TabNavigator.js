import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import ScanNavigation from './ScanNavigation';

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Scan: ScanNavigation,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Scan') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);