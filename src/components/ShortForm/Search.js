import React, {useContext, useEffect, useState} from 'react';
import {TextInput, ActivityIndicator} from 'react-native';
import AppContext from './../../context';
import {Button} from 'react-native-material-ui';
import {handleShortFormSearch} from './../../service/acronyms';

const Search = ({navigation}) => {
  const {navigationRedux, acronymRedux} = useContext(AppContext);
  const navigationDispatch = navigationRedux.dispatch;
  const {dispatch} = acronymRedux;
  const [acronym, setAcronym] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setHeaders();
    return () => {};
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => setHeaders());
    return () => unsubscribe;
  }),
    [navigation];

  const setHeaders = () => {
    const onLeftElementPress = () => navigation.toggleDrawer();
    navigationDispatch({
      type: 'SET_HEADER',
      centerElement: 'Search',
      leftElement: 'menu',
      onLeftElementPress,
    });
  };

  return (
    <>
      {isFetchingData ? (
        <ActivityIndicator size="large" color="#ff9800" />
      ) : (
        <></>
      )}
      <TextInput
        placeholder="Enter an Acronym."
        value={acronym}
        onChangeText={(value) => setAcronym(value)}
        style={{height: 50, color: '#000000'}}
      />
      <Button
        text="Search Acronym"
        onPress={async () => {
          setIsFetchingData(true);
          const payload = await handleShortFormSearch(acronym);
          dispatch({type: 'SET_ACRONYMS', payload});
          setIsFetchingData(false);
          navigation.navigate('ShortForm', {screen: 'Results'}) || '';
        }}
        style={{
          container: {
            backgroundColor: '#ff9800',
          },
          text: {
            color: '#FFFFFF',
          },
        }}
      />
    </>
  );
};

export default Search;
