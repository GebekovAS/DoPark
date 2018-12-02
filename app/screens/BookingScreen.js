import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {connect} from 'react-redux';

import Map from '../components/Map';
import BookingTable from '../components/BookingTable';
// import {getListMarkers} from '../actions/Booking';

export default class BookingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      stage: 'map'
    }
  }

  setStage = (newStage) => {
    this.setState({stage: newStage})
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.stage === 'map'
          ? <Map/>
          : <BookingTable/>
}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { // eslint-disable-line
    flex: 1,
    backgroundColor: '#fff'
  }
});

// const mapStateToProps = state => ({
//   listMarkers:state.listMarkers,
// }
// );

// const mapDispatchToProps = {
//   getListMarkers
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);