import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import "react-native-gesture-handler";
import {View,Text, StyleSheet} from 'react-native';
import FlashScreen from './Flash/FlashScreen';
import StackNavigation from './src/Navigation/StackNavigation';
import OnBoardingScreen from './src/Screens/OnBoardingScreen';

const App = () => {
    return (
        <View style={Styles.main}>
          <NavigationContainer>
            <StackNavigation/>
          </NavigationContainer>
          {/* <OnBoardingScreen/> */}
        </View>
    );
}


export default App;
const Styles=StyleSheet.create({
  main:{
    height:'100%',
    width:'100%'
  }
})
