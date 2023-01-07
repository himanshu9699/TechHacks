import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DonationRequestScreen from '../Screens/DonationRequestScreen';
import {Icon, Badge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colorValue from '../Shared/commoStyle/ColorValue';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { commonJustify,commonStyle } from '../Shared/commoStyle/CommonStyle';
import fontValue from '../Shared/commoStyle/FontValue';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorValue.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel:"HomeScreen",
          tabBarIcon: ({color, size}) => (
            // <Feather name="home" size={24} color={color} />
            <MaterialCommunityIcons name="bell" color={color} size={size} />
            // <Feather name="home" size={24} color="black" />
            // <Ionicons name="md-checkmark-circle" size={32} color="green" />
          ),
          title: '',
          headerLeft: () => (
            <View style={{marginHorizontal:5}}>
              <Image
                resizeMode="contain"
                style={{width:25}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel:"SearchScreen",
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={commonJustify.rowSpaceEvenly}>
              <Image
                resizeMode="contain"
                style={{width:25, height:25}}
                source={require('../../assets/image/menu.png')}
              />
              <Text style={[commonStyle({fontSize:14,fontFamily:fontValue.PoninsBold}).text, {marginLeft:10}]}>SearchScreen</Text>
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <Image
                resizeMode="contain"
                style={{width:25, height:25}}
                source={require('../../assets/image/feather_edit.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DonationRequestScreen"
        component={DonationRequestScreen}
        options={{
          tabBarLabel:"DonationRequestScreen",
          tabBarIcon: ({color}) => (
            <AntDesign name="rightcircleo" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={commonJustify.rowSpaceEvenly}>
              <Image
                resizeMode="contain"
                style={{width:25, height:25}}
                source={require('../../assets/image/menu.png')}
              />
              <Text style={[commonStyle({fontSize:14,fontFamily:fontValue.PoninsBold}).text, {marginLeft:10}]}>DonationRequestScreen</Text>
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel:"ProfileScreen",
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={commonJustify.rowSpaceEvenly}>
              <Image
                resizeMode="contain"
                style={{width:25, height:25,marginLeft:5}}
                source={require('../../assets/image/menu.png')}
              />
              <Text style={[commonStyle({fontSize:14,fontFamily:fontValue.PoninsBold}).text, {marginLeft:10}]}>Profile</Text>
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="edit" size={25} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});