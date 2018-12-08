//@flow
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from 'Constants/Colors';

const Table = props => (
  <View style={styles.container}>
    <Button style={styles.buttonBack} title="Back" onPress={props.showMap} />
  </View>
);
const styles: any = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: Colors.black
  },
  buttonBack: {
    width: 10,
    backgroundColor: Colors.red
  }
});

export default Table;
