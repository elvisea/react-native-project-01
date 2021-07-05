import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';
import Freelas from '../pages/Freelas';
import Chat from '../pages/Chat';
import QrCode from '../pages/QRCode';
import Home from '../pages/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#0A3FA5',
        tabStyle: {justifyContent: 'center'},
        labelStyle: {fontSize: 12, fontFamily: 'Poppins-Regular'},
        style: {
          height: 85,
        },
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Wallet" component={Wallet} />
      <Screen name="Freelas" component={Freelas} />
      <Screen name="Chat" component={Chat} />
      <Screen name="QR Code" component={QrCode} />
    </Navigator>
  );
}
