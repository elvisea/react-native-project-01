import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Pages
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import { AppRoutes } from './src/routes/app.routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0E4EBB" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={AppRoutes} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
('');
