import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Results from './Results';
import Search from './Search';

const Stack = createStackNavigator();

const ShortForm = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default ShortForm;
