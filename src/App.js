import React, {useEffect} from 'react';
import AcronymApp from './AcronymApp';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return <AcronymApp />;
};

export default App;
