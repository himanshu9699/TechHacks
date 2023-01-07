import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Image, SearchBar } from 'react-native-elements';
import colorValue from '../../Shared/commoStyle/ColorValue';
import { commonJustify } from '../../Shared/commoStyle/CommonStyle';
import { FlatList } from 'react-native-gesture-handler';
import SearchResultComponent from './SearchResultComponent';
import {SearchData} from './Data.js';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const SearchScreen = () => {
    return (
        <View>
        <View style={[commonJustify.rowSpaceEvenly,{marginTop:20}]}>
            <SearchBar containerStyle={{backgroundColor:colorValue.white,borderTopWidth:0,borderBottomWidth:0,width: windowWidth*0.9}} 
            inputContainerStyle={{
                backgroundColor:colorValue.white 
            }}
            inputStyle={{
            // backgroundColor:colorValue.colorValue.
            }}      
            />
            <View style={{backgroundColor:colorValue.primary,width:50, padding:10}}>
            <AntDesign color={colorValue.white} name='filter' size={30}/>
            </View>
            <FlatList 
            data={SearchData}
            renderItem={({item})=>SearchResultComponent}
            />
            <View>
            <Image source={require('../../../assets/image/feather_edit.png')}/>
            </View>
        </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})