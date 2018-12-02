import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import Markers from './Markers';
import getConfig from './mapConfig';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Map extends React.Component {
  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        customMapStyle={ getConfig() }
        style={styles.map}
        initialRegion={{
        latitude: 55.7522,
        longitude: 37.6156,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
        <Markers
          markers={[{
            coordinate: {
              latitude: 55.7522,
              longitude: 37.6156
            },
            handlePress: () =>{
              this.props.setStage('booking');
            }
          }
        ]}/>
      </MapView>

    );
  }
}

Map.propTypes = {
  setStage: PropTypes.function,
}
export default Map;
