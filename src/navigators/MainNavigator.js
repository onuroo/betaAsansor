import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Tabs from '../screens/Tabs'

import BinaBilgileri from '../screens/BinaBilgileri'
import GorevListesi from '../screens/GorevListesi'
import HaritaKaydet from '../screens/HaritaKaydet'



const MainNavigator = StackNavigator({
  Login : {
    screen: Login,
  },
  Tabs : {
    screen: Tabs,
  }, 
  BinaBilgileri : {
    screen: BinaBilgileri,
  },  
  GorevListesi : {
    screen: GorevListesi,
  },  
  HaritaKaydet : {
    screen: HaritaKaydet,
  },   
}, {
  headerMode: 'hidden',
  navigationOptions: {
    headerBackTitle: null
  }
})
export default MainNavigator