import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function SearchResults(props) {
  // const [fadeAnim] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(false);
  // const fadeAnim = new Animated.Value(visible ? 0 : 1);
  buttonTapped2 = () => {
    props.navigation.push('Home1', {});
  };
  buttonTapped = () => {
    props.navigation.navigate('tab');
    return;
    // LayoutAnimation.spring();
    // LayoutAnimation.linear();
    // LayoutAnimation.create(10000, LayoutAnimation.Types.spring)
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.linear,
        LayoutAnimation.Properties.scaleXY,
      ),
    );
    // this.setState({w: this.state.w + 15, h: this.state.h + 15})
    setVisible(!visible);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <TouchableOpacity
        style={{height: 100, backgroundColor: 'green'}}
        onPress={() => buttonTapped()}></TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, backgroundColor: 'blue'}}
        onPress={() => buttonTapped2()}>
        <Text>showa dsjakd kadsa dsassda</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: visible ? 0 : 1,
          backgroundColor: 'blue',
        }}></View>
    </View>
  );
}
