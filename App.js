import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppNavigator from 'Navigation/AppNavigator';
import reducer from 'Reducers';
const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  </Provider>
);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
