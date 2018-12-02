import {Marker} from 'react-native-maps';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

class Markers extends React.Component {
  render() {
    return (
      <View>
        {this.props.markers.map((item) => (<Marker
							key={item.coordinate.latitude}
              coordinate={item.coordinate}
              onPress={item.handlePress}
              />))
}
      </View>
    );
  }
}

Markers.propTypes = {
	markers: PropTypes.array.isRequired
}

export default Markers;
