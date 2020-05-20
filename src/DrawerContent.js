import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {Drawer, Avatar} from 'react-native-material-ui';

const DrawerContent = ({navigation}) => {
  return (
    <View>
      <Drawer.Header>
        <Drawer.Header.Account
          avatar={<Avatar text="U" />}
          footer={{
            dense: true,
            centerElement: {
              primaryText: 'Hi User',
              secondaryText: 'user@email.com',
            },
          }}
        />
      </Drawer.Header>
      <Drawer.Section
        divider
        items={[
          {
            icon: 'bookmark-border',
            value: 'Acronyms',
            onPress: () => {
              navigation.toggleDrawer();
              navigation.navigate('ShortForm', {screen: 'Search'}) || '';
            },
          },
        ]}
      />
    </View>
  );
};

export default DrawerContent;
