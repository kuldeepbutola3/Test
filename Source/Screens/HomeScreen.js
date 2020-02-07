import React, {useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStateValue} from '../SateManagement/State';

export default function HomeScreen(props) {
  const [{count}, dispatch] = useStateValue();

  // const [fadeValue, setFadeValue] = useState(new Animated.Value(0));
  const [value, setValue] = useState(0);

  let constAnimation = new Animated.Value(value);

  _start = () => {
    Animated.timing(constAnimation, {
      toValue: 100,
      duration: 1000,
    }).start();
  };
  _start2 = () => {
    Animated.timing(constAnimation, {
      toValue: 0,
      duration: 1000,
    }).start(() => {});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // props.navigation.push('Home1', {});

          setValue(value === 0 ? 100 : 0);
          // setTimeout(function() {
          this._start2();
          // }, 1);
        }}>
        <Text>Touch for animationsssss</Text>
        <Text>{count.countValue}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'increment'});
        }}>
        <Text>H0</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          opacity: 1,
          height: constAnimation,
          width: 200,
          margin: 5,
          borderRadius: 12,
          backgroundColor: '#347a2a',
          justifyContent: 'center',
        }}></Animated.View>
    </View>
  );
}
