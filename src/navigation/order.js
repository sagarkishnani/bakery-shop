/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Order from '../screens/order/index';
import {colors} from '../../assets/contants/themes';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primaryColor,
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 18,
        },
      }}>
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
