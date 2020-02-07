import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStateValue} from '../SateManagement/State';
import {StackActions, NavigationActions} from 'react-navigation';

export default function HomeScreen1(props) {
  const [{count}, dispatch] = useStateValue();
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // alert('hh');
            props.navigation.push('Tab', {});
            // const resetAction = StackActions.reset({
            //   index: 0,
            //   actions: [NavigationActions.navigate({routeName: 'Home1'})],
            // });
            // props.navigation.dispatch(resetAction);
          }}>
          <Text>{count.countValue}</Text>
          <Text>{count.countValue}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'increment'});
          }}>
          <Text>H1___</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
