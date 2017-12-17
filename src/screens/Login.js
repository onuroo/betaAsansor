
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Images from '../assets/images'
const { height, width } = Dimensions.get('window');

export default class Login extends Component<{}> {
    login(){
        const { navigation } = this.props
        navigation.navigate('Tabs')
    }
    render() {
        return (
        <View style={styles.container}>
            <Image source={Images.logo} style={styles.logo} />
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Lütfen Kullanıcı Girişi Yapınız</Text>
                <TextInput style={styles.epostaInput} placeholder={"Kullanıcı Adınız/Eposta Adresiniz"} />
                <TextInput style={styles.passwordInput} placeholder={"Parolanız"} />
                <TouchableOpacity onPress={() => this.login()} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>SİSTEME GİR</Text>
                </TouchableOpacity>
            </View>          
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#188ae2',
  },
  logo:{
    height:60,
    width:width-80,
    marginBottom:10,
    resizeMode:'stretch'
  },
  loginContainer:{
      height:height-280,
      width:width-50,
      backgroundColor:'#fff',
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      
  },
  title:{
      color:'gray',
      fontWeight:'400',
      fontSize:19
  },
  epostaInput:{
    marginTop:30,
    height:40,
    width:width-100,
    borderBottomWidth:1,
    borderColor:'#eee'
  },
  passwordInput:{
    marginTop:30,
    height:40,
    width:width-100,
    borderBottomWidth:1,
    borderColor:'#eee'
  },
  submitButton:{
    marginTop:30,
    backgroundColor:'#188ae2',
    height:40,
    width:width-90,
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center'
  },
  submitButtonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'500',
      
  }
});
