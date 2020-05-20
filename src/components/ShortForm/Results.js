import React, {useState, useContext, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import AppContext from './../../context';
import {Card, ListItem} from 'react-native-material-ui';

const Results = ({navigation}) => {
  const {navigationRedux, acronymRedux} = useContext(AppContext);
  const navigationDispatch = navigationRedux.dispatch;
  const {state} = acronymRedux;
  const {data} = state;

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
    const onLeftElementPress = () => navigation.goBack();
    navigationDispatch({
      type: 'SET_HEADER',
      centerElement: 'Results',
      leftElement: 'arrow-back',
      onLeftElementPress,
    });
  };

  return (
    <>
      {data.length === 0 ? (
        <Card
          style={{
            container: {
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}>
          <Text>
            Looks like you don't have any acronyms. Go back and try adding a new
            Acronym.
          </Text>
        </Card>
      ) : (
        <></>
      )}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card>
            <ListItem
              centerElement={{
                primaryText: item.lf,
              }}
            />
          </Card>
        )}
      />
    </>
  );
};

export default Results;
