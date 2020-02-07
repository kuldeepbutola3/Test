import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStateValue} from '../../SateManagement/State';

export default function Tab1(props) {
  const [{count}, dispatch] = useStateValue();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.push('Search', {});
        }}>
        <Text>{count.countValue}</Text>
        <Text>TAB 1____</Text>
      </TouchableOpacity> */}
      <Text>Tab1</Text>
    </View>
  );
}
