import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './src/Cart/Cart';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CartPage' component={<Cart/>}  />
      </Stack.Navigator>
        <View>
          <Text>App</Text>
        </View>
  
    </NavigationContainer>
  );
}
