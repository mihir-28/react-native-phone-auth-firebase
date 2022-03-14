
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LogBox } from 'react-native';
import auth from '@react-native-firebase/auth';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './Welcome';

const Stack = createStackNavigator();


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Auth = ({navigation}) => {


  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState('');
  const [code, setcode] = useState('');

  const signin = async () => {
    try {

      const confirmation = await auth().signInWithPhoneNumber('+91' + number);
      console.log('confirmation', confirmation);
      setConfirm(confirmation);

    } catch (e) {
      alert('Error' + e.message);
    }


  }
  const otpvar = async () => {
    try {

      const result = await confirm.confirm(code);
      console.log('Valid code.', result);
      navigation.navigate('Welcome');

    } catch (error) {
      console.log('Invalid code.');

    }

  }

  if (!confirm)
    return (

      <SafeAreaView style={styles.container} >
        <View style={styles.view1}>
          <Text style={styles.text1}>Hello world!</Text>
          <Image
            style={styles.image1}
            source={require('../otpvarify/Indian1.png')} />
          <TextInput
            style={styles.txtinput}
            placeholder='ENTER MOBILE NUMBER'
            keyboardType='numeric'
            onChangeText={(value) => setNumber(value)}
            value={number}
            maxLength={10}
          />
          <TouchableOpacity style={styles.btnopacity}
            onPress={signin}>
            <Text style={styles.btntext}>GET OTP</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>

    )

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.view1}>
        <Text style={styles.text1}>Hello world!</Text>
        <Image
          style={styles.image1}
          source={require('../otpvarify/Indian1.png')} />
        <TextInput
          style={styles.txtinput}

          placeholder='ENTER OTP'
          keyboardType='numeric'
          onChangeText={(value) => setcode(value)}
          value={code}
          maxLength={6}
        />
        <TouchableOpacity style={styles.btnopacity}
          onPress={otpvar}
        >
          <Text style={styles.btntext}>VERIFY</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>



  )

}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#dbf6f9',
    justifyContent: 'center',
  },
  view1: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    padding: 30,

  },
  text1: {
    fontWeight: '700',
    color: 'black',
    fontSize: 42,
    marginTop: 20,
    marginBottom: 20,
  },
  image1: {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  txtinput: {
    height: 40,
    borderColor: "black",
    borderBottomWidth: 1,
    width: "70%",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  btnopacity: {
    backgroundColor: "#a5b2eb",
    width: 120,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  btntext: {
    fontWeight: '700',
    color: '#0017ff',
    fontSize: 16,
  }


})
