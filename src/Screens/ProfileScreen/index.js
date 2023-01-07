import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'
import colorValue from '../../Shared/commoStyle/ColorValue'
import UserAvatar from '@muhzi/react-native-user-avatar';
// import { CommonActions } from '@react-navigation/core';
import {commonStyle,commonJustify} from '../../Shared/commoStyle/CommonStyle'
import fontValue from '../../Shared/commoStyle/FontValue';
import { AntDesign } from '@expo/vector-icons';
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View>
                <View style={[commonJustify.rowCenter,{marginVertical:20}]}>
                <UserAvatar userName="Himanshu Agrawal" size={80} />
                </View>
            <View>
        <Text style={[commonStyle({fontSize:25,color:colorValue.liteDark3}).text,commonJustify.textCenter]}>Himanshu</Text>
        </View>
        <View><Text style={[commonStyle({fontSize:22,color:colorValue.liteDark3}).text,commonJustify.textCenter]}>Jaipur, India</Text></View>
        <View style={commonJustify.rowSpaceEvenly}>
            <Button buttonStyle={{backgroundColor:colorValue.info}} title="Call Now"/>
            <Button buttonStyle={{backgroundColor:colorValue.primary}} title={"Request"}/>
        </View>

        <View style={commonJustify.rowSpaceEvenly}>
            <View style={styles.card}>
                <Text style={[commonStyle({fontSize:24,fontFamily:fontValue.PoninsBold, }).text,{textAlign:'center'}]}>A+</Text>
                <Text style={[commonStyle({fontSize:15,fontFamily:fontValue.PoninsBold, }).text,{textAlign:'center'}]}>Blood Type</Text>
            </View>
            <View style={styles.card}>
                <Text style={[commonStyle({fontSize:24,fontFamily:fontValue.PoninsBold, }).text,{textAlign:'center'}]}>05</Text>
                <Text style={[commonStyle({fontSize:15,fontFamily:fontValue.PoppinsRegular, }).text,{textAlign:'center'}]}>Donated</Text>
            </View>
            <View style={styles.card}>
                <Text style={[commonStyle({fontSize:24,fontFamily:fontValue.PoninsBold, }).text,{textAlign:'center'}]}>02</Text>
                <Text style={[commonStyle({fontSize:15,fontFamily:fontValue.PoppinsRegular, }).text,{textAlign:'center'}]}>Requested</Text>
            </View>
            
        </View>
        <View>
  {
    list.map((l, i) => (
      <ListItem containerStyle={{marginTop:10}} key={i} bottomDivider>
        {/* <tem.iconName name={item.icon}/> */}
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
        </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    card:
    {
        backgroundColor:colorValue.white,
        padding:10
    },

    spaceEvenlyContainer: {
        justifyContent: 'space-evenly'
      }
});

const list = [
    {
      name: 'Available for donate',
      icon:'calendar',
      iconName:AntDesign
    },
    {
      name: 'Invited Friend',
      icon:'mail',
      iconName:AntDesign
    },
    {
        name: 'Get Help',
        icon:'infocircleo',
        iconName:AntDesign
      },
      {
        name: 'Sign Out',
        icon:'logout',
        iconName:AntDesign
      },
  ];