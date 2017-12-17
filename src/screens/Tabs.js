import React, { PureComponent } from 'react';
import { View,StyleSheet,Dimensions } from 'react-native'
import BinaBilgileri from './BinaBilgileri'
import GorevListesi from './GorevListesi'
import HaritaKaydet from './HaritaKaydet'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };
  
  const F = () => <BinaBilgileri />;
  const S = () => <GorevListesi />;
  const T = () => <HaritaKaydet />;
  

  
  export default class TabViewExample extends PureComponent {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Bina Bilgileri' },
        { key: 'second', title: 'Görev Listesi' },
        { key: 'third', title: 'Harita Kaydet' },
        
      ],
    };
  
    _handleIndexChange = index => this.setState({ index });
  
    _renderHeader = props => <TabBar {...props} />;
  
    _renderScene = SceneMap({
      first: F,
      second: S,
      third: T,
      
    });
  
    render() {
      return (
        <View style={styles.container}>
            <TabViewAnimated
            style={styles.tabViewContainer}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#188ae2'
    },
    tabViewContainer:{
        marginTop:20
    }
  });