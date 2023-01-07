import React,{useState} from 'react';
import {StatusBar, StyleSheet, Text, Touchable, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {commonJustify, commonStyle} from '../../Shared/commoStyle/CommonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input} from 'react-native-elements';
import colorValue from '../../Shared/commoStyle/ColorValue';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import fontValue from '../../Shared/commoStyle/FontValue';
import { NavigationContainer } from '@react-navigation/native';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({navigation}) => {
  // const navigate = useNavigate();  
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("./");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <ScrollView>
      <StatusBar backgroundColor="white" />
      <View style={styles.main}>
        <View style={[commonJustify.rowCenter ]}>
          <Image
            style={[styles.image]}
            source={require('../../../assets/image/login-logo.png')}
          />
        </View>

        <View>
          <Input
            placeholder="Enter your name"
            leftIcon={{type: 'ant-design', name: 'user'}}
          />

          <Input
            placeholder="Enter your email"
            leftIcon={{type: 'ant-design', name: 'mail'}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />

          <Input
            placeholder="Enter your password"
            leftIcon={{type: 'ant-design', name: 'lock'}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <Input
            placeholder="Enter your Mobile"
            leftIcon={{type: 'ant-design', name: 'phone'}}
          />

            <Input
            placeholder="Enter your Blood Group"
            leftIcon={{type: 'fontisto', name: 'blood-drop'}}
          />



            <Input
            placeholder="Enter your Adress"
            leftIcon={{type: 'evil-icons', name: 'map'}}
          />

          <Button
            buttonStyle={{backgroundColor: colorValue.primary}}
            title="SIGN UP"
          />
          <View style={commonJustify.rowCenter}>
            <TouchableOpacity
            onPress={()=>{handleSubmission}}
            >
              <Text
                style={
                  commonStyle({
                    fontSize: 14,
                    fontFamily: fontValue.PoppinsMedium,
                    color: colorValue.primary,
                  }).text
                }>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View  >
      
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});