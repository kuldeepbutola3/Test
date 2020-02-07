import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';

import {FacebookLogin} from '../Component/FacebookLogin';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-native-phone-input';
export default function SplashScreen(props) {
  // config();
  // GoogleSignin.configure();
  const [value, setValue] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>Corona Virus Alert</Text>
          <TextInput
            style={{
              textAlign: 'center',
              marginTop: 20,
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
            }}
            onChangeText={setEmail}
            value={email}
            placeholder="Email or Phone"
            editable
          />
          {/* <TextInput
            style={{
              marginTop: 10,
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
            }}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          /> */}
          {/* <PhoneInput
            style={{
              marginTop: 10,
              width: 200,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
            }}
          /> */}
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              props.navigation.push('Tab', {});
            }}>
            <Text>Continue</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 20, marginBottom: 10}}>Or</Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              FacebookLogin();

              // props.navigation.push('Home', {})
            }}>
            <Text>Facebook Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Text style={{marginBottom: 20}} children="©copyright 2020" />
      {/* children="©copyright 2020" */}
    </SafeAreaView>
  );
}
