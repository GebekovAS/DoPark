//@flow
import { connect } from 'react-redux';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from 'Constants/Colors';

import { showMap } from 'Actions/BookingPart/index';

type Props = {
  showMap: () => void
};

type State = {
  choosenPlace: string | boolean
};

class Booking extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      choosenPlace: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placesWrapper}>
          <View
            onPress={() => {
              console.log('click');
              this.setState({ choosenPlace: 'hi' });
            }}
            style={styles.place}
          />
          <View style={styles.place} />
          <View style={styles.place} />
          <View style={styles.place} />
          <View style={styles.place} />
          <View style={styles.place} />
          <View style={styles.place} />
          <View style={styles.place} />
        </View>
        {this.state.choosenPlace ? (
          <Text style={styles.text}>Вы выбрали стол</Text>
        ) : (
          <View>
            <Text style={styles.text}>
              Для получения информации, коснитесь подходящего вам стола
            </Text>
            <Button style={styles.buttonBack} title="Back" onPress={this.props.showMap} />
          </View>
        )}
      </View>
    );
  }
}
const styles: any = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.black
  },
  buttonBack: {
    width: 10,
    backgroundColor: Colors.red
  },
  placesWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 2,
    backgroundColor: Colors.black
  },
  place: {
    margin: 5,
    width: 80,
    height: 80,
    backgroundColor: Colors.grey_60
  },
  text: {
    color: Colors.grey,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 50
  }
});

const mapDispatchToProps = (dispatch: empty) => ({
  showMap: () => dispatch(showMap())
});

export default connect(
  null,
  mapDispatchToProps
)(Booking);
