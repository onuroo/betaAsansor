
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
} from 'react-native';

import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';


export default class BinaBilgileri extends Component {
    constructor(props) {
        super(props);
  
        this.onChangeText = this.onChangeText.bind(this);
  
        this.codeRef = this.updateRef.bind(this, 'code');
        this.nameRef = this.updateRef.bind(this, 'name');
        this.sampleRef = this.updateRef.bind(this, 'sample');
        this.typographyRef = this.updateRef.bind(this, 'typography');
  
        this.state = {
          sample: 'The quick brown fox jumps over the lazy dog',
          typography: 'Headline',
          name: 'Cyan',
          code: 'A700',
        };
      }
    onChangeText(text) {
        ['name', 'code', 'sample', 'typography']
          .map((name) => ({ name, ref: this[name] }))
          .filter(({ ref }) => ref && ref.isFocused())
          .forEach(({ name, ref }) => {
            this.setState({ [name]: text });
          });
      }
      updateRef(name, ref) {
        this[name] = ref;
      }
  
      render() {
        let { typography, name, code, sample } = this.state;
  
        let textStyle = [
          styles.text,
          styles[typography],
          styles[name + code],
        ];
  
        return (

            
          <View style={styles.screen}>
            <View style={styles.container}>
            
            <TouchableOpacity style={{height:30,width:120,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'#fff'}}>
                <Text style={{color:'black',fontSize:14}}>Barkod Oku</Text>
            </TouchableOpacity>
                <Dropdown
                    containerStyle={{height:30,width:210,marginTop:30}}
                    baseColor={'#fff'}
                    textColor={'#fff'}
                    itemColor={'black'}
                    selectedItemColor={'black'}
                    ref={this.typographyRef}
                    value={typography}
                    onChangeText={this.onChangeText}
                    label='Seçiniz'
                    data={typographyData}
                    
                />
                <Dropdown
                    containerStyle={{height:30,width:210,marginTop:30}}
                    baseColor={'#fff'}
                    textColor={'#fff'}
                    itemColor={'black'}
                    selectedItemColor={'black'}
                    ref={this.typographyRef}
                    value={typography}
                    onChangeText={this.onChangeText}
                    label='Seçiniz'
                    data={typographyData}
                    
                />
                <Dropdown
                    containerStyle={{height:30,width:210,marginTop:30}}
                    baseColor={'#fff'}
                    textColor={'#fff'}
                    itemColor={'black'}
                    selectedItemColor={'black'}
                    ref={this.typographyRef}
                    value={typography}
                    onChangeText={this.onChangeText}
                    label='Seçiniz'
                    data={typographyData}
                    
                />
                <Dropdown
                    containerStyle={{height:30,width:210,marginTop:30}}
                    baseColor={'#fff'}
                    textColor={'#fff'}
                    itemColor={'black'}
                    selectedItemColor={'black'}
                    ref={this.typographyRef}
                    value={typography}
                    onChangeText={this.onChangeText}
                    label='Seçiniz'
                    data={typographyData}
                    
                />
                <Dropdown
                    containerStyle={{height:30,width:210,marginTop:30}}
                    baseColor={'#fff'}
                    textColor={'#fff'}
                    itemColor={'black'}
                    selectedItemColor={'black'}
                    ref={this.typographyRef}
                    value={typography}
                    onChangeText={this.onChangeText}
                    label='Seçiniz'
                    data={typographyData}
                    
                />
                <TouchableOpacity style={{marginTop:70,height:35,width:120,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#10c469'}}>
                    <Text style={{color:'white',fontSize:14}}>İleri</Text>
                </TouchableOpacity>
  
            </View>
  
          </View>
        );
      }
    
}

const styles = {
    screen: {
      flex: 1,
      padding: 4,
      paddingTop: 56,
      backgroundColor: '#188ae2',
    },
  
    container: {
      marginHorizontal: 4,
      marginVertical: 8,
      paddingHorizontal: 8,
      justifyContent:'center',
      alignItems:'center'
    },
  
    text: {
      textAlign: 'center',
    },
  
    textContainer: {
      backgroundColor: 'white',
      borderRadius: 2,
      padding: 16,
      elevation: 1,
      shadowRadius: 1,
      shadowOpacity: 0.3,
      justifyContent: 'center',
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
  
    Display2: { fontSize: 45 },
    Display1: { fontSize: 34 },
    Headline: { fontSize: 24 },
    Title: { fontSize: 20, fontWeight: '500' },
    Subheading: { fontSize: 16 },
    Body: { fontSize: 14 },
    Caption: { fontSize: 12 },
  
    Blue900: { color: '#0D47A1' },
    Blue700: { color: '#1976D2' },
    BlueA700: { color: '#2962FF' },
    BlueA400: { color: '#2979FF' },
  
    Teal900: { color: '#004D40' },
    Teal700: { color: '#00796B' },
    TealA700: { color: '#00BFA5' },
    TealA400: { color: '#1DE9B6' },
  
    Cyan900: { color: '#006064' },
    Cyan700: { color: '#0097A7' },
    CyanA700: { color: '#00E5FF' },
    CyanA400: { color: '#00B8D4' },
  };
  
  const typographyData = [
    { value: 'Display2', label: 'Display 2' },
    { value: 'Display1', label: 'Display 1' },
    { value: 'Headline' },
    { value: 'Title' },
    { value: 'Subheading' },
    { value: 'Body' },
    { value: 'Caption' },
  ];
  
  const colorNameData = [
    { value: 'Blue' },
    { value: 'Teal' },
    { value: 'Cyan' },
  ];
  
  const colorCodeData = [
    { value: '900' },
    { value: '700' },
    { value: 'A700' },
    { value: 'A400' },
  ];
