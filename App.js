import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Nav from './Navigators/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default App;
