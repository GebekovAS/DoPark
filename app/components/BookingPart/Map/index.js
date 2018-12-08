// @flow
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Markers from './Markers';
import getConfig from './mapConfig';
import { chooseMarker } from 'Actions/BookingPart/index';
import { MarkersType } from 'Types/responses';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

type Props = {
  chooseMarker: (key: string) => void
};
type State = {
  loading: boolean,
  markers: MarkersType,
  error: boolean
};

class Map extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      markers: [],
      error: false
    };
  }
  componentDidMount() {
    this.fetchMarkers();
  }
  fetchMarkers = () => {
    fetch('http://gebekovas.ru:8080/api/marker')
      .then(
        (response: any): any => {
          this.setState({
            loading: false,
            markers: JSON.parse(response._bodyText)
          });
        }
      )
      .catch(() => {
        this.setState({ error: true });
      });
  };
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={getConfig()}
        style={styles.map}
        initialRegion={{
          latitude: 55.7522,
          longitude: 37.6156,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {!this.state.loading ? (
          <Markers
            markers={this.state.markers}
            handlePress={key => {
              this.props.chooseMarker(key);
            }}
          />
        ) : null}
      </MapView>
    );
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch: empty) => ({
  chooseMarker: (key: string) => dispatch(chooseMarker(key))
});

export default connect<any, any>(
  (mapStateToProps: any),
  (mapDispatchToProps: any)
)(Map);
