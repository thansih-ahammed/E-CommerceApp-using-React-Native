import {View, Text} from 'react-native';
import React from 'react';
import Cart from './src/Cart/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Profile from './src/components/screens/Profile';

export default function App() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();


  const HomeTabs =()=>(
    <Tab.Navigator>
    <Tab.Screen name='Home' component={<Home/>} />
    <Tab.Screen name='Search' component={<Search/>} />
    <Tab.Screen name='Profile' component={<Profile/>} />
    </Tab.Navigator>

  )

  return (
    <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={<HomeTabs/>} />
      <HomeStack.Screen name='CartScreen' component={<Cart/>} />
    </HomeStack.Navigator>

    </NavigationContainer>
  );
}
