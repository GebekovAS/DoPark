import MapView from 'react-native-maps';
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Booking extends React.Component {
  render() {
    return (
      <View>
        <Text>Booking</Text>
        <Button title="title" onPress={this.props.setStage('booking')}>Go to map</Button>
      </View>
    );
  }
}

Booking.propTypes = {
  setStage: PropTypes.function, // eslint-disable-line
}
export default Booking;
