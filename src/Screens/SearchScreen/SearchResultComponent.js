import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import colorValue from '../../Shared/commoStyle/ColorValue';

const SearchResultComponent=({item})=>
{
    return(
        <View style={styles.main}>
            <UserAvatar userName="Himanshu Agrawal" size={80} onPress={()=>console.log("Works")} />
        </View>
    )
}

export default SearchResultComponent
const styles=StyleSheet.create({
    // main:{
    //       backgroundColor:colorValue.white,
    //       marginVertical:10,
    //       borderRadius:5,
    //       marginHorizontal:5%
    // }
})
