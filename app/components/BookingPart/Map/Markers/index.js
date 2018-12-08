// @flow
import { Marker } from 'react-native-maps';
import React from 'react';
import { View } from 'react-native';
import { MarkersType } from 'Types/responses';

type Props = {
  markers: MarkersType,
  handlePress: (key: string) => void
};

const Markers = (props: Props) => (
  <View>
    {props.markers.map(item => (
      <Marker
        key={item.position.latitude}
        title={item.title}
        coordinate={item.position}
        onPress={() => {
          props.handlePress(item.key);
        }}
      />
    ))}
  </View>
);

export default Markers;
