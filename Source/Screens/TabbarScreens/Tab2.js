import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default function Tab2(props) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab2</Text>
      {/* <Text>Tab2</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Tab1', {});
        }}>
        <Text>TAB 222____</Text>
      </TouchableOpacity> */}
    </View>
  );
}
