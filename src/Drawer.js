import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

//Components
import ShortForm from './components/ShortForm/ShortForm';

const DrawerNavigation = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <DrawerNavigation.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <DrawerNavigation.Screen name="ShortForm" component={ShortForm} />
    </DrawerNavigation.Navigator>
  );
};

export default MyDrawer;
