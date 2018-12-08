// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import Map from 'Components/BookingPart/Map';
import BookingTable from 'Components/BookingPart/ChooseTable';

type Props = {
  bookingStage: string
};

class BookingPart extends React.Component<Props> {
  renderBookingStage = () => {
    let stage;
    switch (this.props.bookingStage) {
      case 'map':
        stage = <Map />;
        break;
      case 'booking':
        stage = <BookingTable />;
        break;
      case 'confirmBooking':
        stage = null;
        break;
    }
    return stage;
  };
  render() {
    return <View style={styles.container}>{this.renderBookingStage()}</View>;
  }
}

const styles: { container: {} } = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state: { bookingPart: { bookingStage: string } }): Props => ({
  bookingStage: state.bookingPart.bookingStage
});

export default connect<any, any>((mapStateToProps: any))(BookingPart);
