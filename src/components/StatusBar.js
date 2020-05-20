import React, {useContext} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Toolbar, COLOR} from 'react-native-material-ui';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import AppContext from './../context';

const bgColor = '#ff9800';
const whiteColor = COLOR.white;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const CustomStatusBar = () => {
  const {navigationRedux} = useContext(AppContext);
  const {state} = navigationRedux;
  const {
    centerElement,
    leftElement,
    onLeftElementPress,
    rightElement,
    onRightElementPress,
  } = state;
  return (
    <>
      <MyStatusBar backgroundColor={bgColor} barStyle="light-content" />
      <SafeAreaView>
        <Toolbar
          centerElement={centerElement}
          leftElement={leftElement}
          onLeftElementPress={onLeftElementPress}
          rightElement={rightElement}
          onRightElementPress={onRightElementPress}
          style={{
            container: {backgroundColor: bgColor},
            leftElement: {color: whiteColor},
            titleText: {color: whiteColor},
            rightElement: {color: whiteColor},
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            height: 50,
          },
          {
            height: 20,
          },
        ),
      },
      android: {
        height: StatusBar.currentHeight,
      },
    }),
  },
});

export default CustomStatusBar;
