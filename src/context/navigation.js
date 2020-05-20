import React from 'react';

const empty = () => {};
const NavigationContext = React.createContext({
  centerElement: '',
  leftElement: '',
  rightElement: {},
  onLeftElementPress: empty,
  onRightElementPress: empty,
});

export default NavigationContext;
