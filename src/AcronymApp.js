/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useContext, useReducer, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import StatusBar from './components/StatusBar';

//CONTEXTS
import AppContext from './context';
import NavigationContext from './context/navigation';
import AcronymContext from './context/acronyms';

//REDUCERS
import navigationReducer from './reducer/navigation';
import acronymReducer from './reducer/acronyms';

const AppState = {};

const App = () => {
  //navigation
  let initialState = useContext(NavigationContext);
  let [state, dispatch] = useReducer(navigationReducer, initialState);
  AppState.navigationRedux = {state, dispatch};
  //acronym
  initialState = useContext(AcronymContext);
  [state, dispatch] = useReducer(acronymReducer, initialState);
  AppState.acronymRedux = {state, dispatch};

  console.log('AppState' + JSON.stringify(AppState));
  console.log('AppState2 ' + AppState);

  return (
    <AppContext.Provider value={AppState}>
      <NavigationContainer>
        <StatusBar />
        <Drawer />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
