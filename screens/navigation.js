import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/ionicons';

import Stack from '../screens/stack'
import Pesan from './pesanan-saya'
import Lainnya from '../screens/lainnya'
import Batal from '../screens/batal'

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Stack}options={{headerShown: false, tabBarIcon: () => (<Icon name={'boat-outline'} size={28}  />)}}/>
        <Tab.Screen name="Pesanan Saya" component={Pesan}options={{headerShown: false, tabBarIcon: () => (<Icon name={'book-outline'} size={28}  />)}}/>
        <Tab.Screen name="Pembatalan" component={Batal}options={{headerShown: false, tabBarIcon: () => (<Icon name={'close-circle-outline'} size={28}  />)}}/>
        <Tab.Screen name="Lainnya" component={Lainnya}options={{headerShown: false, tabBarIcon: () => (<Icon name={'menu-outline'} size={28}  />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;  