// @flow
import React from 'react';
import BookingPart from 'Components/BookingPart';

type Props = {};
class BookingScreen extends React.Component<Props> {
  static navigationOptions = {
    header: null
  }; // eslint-disable-next-line
  render() {
    return <BookingPart />;
  }
}

export default BookingScreen;
