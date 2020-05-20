/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

  function App() {
    
    return (
      <View style={{flex:1}}>
        <View style={style.header}>
          <View></View>
          <View>
          <Image source={require('./pic/TextLogo2resized.png')} style={style.ImageLayout}  />   
          </View>
          <View>
            <Image source={require('./pic/selectionIcon.png')}
                  style={{marginTop:12,marginRight:5}}
            />
          </View>
        </View>
      <View style={style.body}>
          <View style={{flex:2.5,flexDirection:"row"}}>
            <Image source={require('./pic/avatar.png')} style={{marginTop:5}} />
              <View style={{flexDirection:"column"}}>
                <Text style={style.text}> username </Text>
                <Text style={{marginLeft:14, color:'#111111'}}>Your place ></Text>
              </View>
            <View>
                <Image source={require('./pic/menu32px.png')} style={{marginTop:16, marginLeft:205}} />
            </View>  
          </View>
          <View style={{flex:12}}>
            <Image source={require('./pic/background.png')} />
          </View>
          <View style={{flex:2,flexDirection:"row", backgroundColor:'white'}}>
            <Image source={require('./pic/heart32px.png') } style={{marginLeft:14, marginTop:5}} />
            <Image source={require('./pic/bubble32px.png')} style={{marginLeft:14, marginTop:5}}/>
            <Image source={require('./pic/fowardArrow32px.png')} style={{marginLeft:14, marginTop:5}}/>
          </View>
          <View style={{flex:1,backgroundColor:'white',flexDirection: "row"}}>
            <Image source={require('./pic/diamondHeart24px.png')} style={{marginLeft:12,marginRight:12}} />
            <Text style={style.text2}>226 likes</Text>
          </View> 
          <View style={{flex:1, backgroundColor:'white',flexDirection:"row"}}>
              <Text style={{marginLeft:12,fontSize:14,fontWeight:"bold"}}>username</Text>
              <Text style={{marginLeft:12}}>Hi! I'm react</Text>
          </View>
          <View style={{flex:1, backgroundColor:'white'}}>
            <Text style={{marginLeft:12, color:'#BBBBBB'}}>view all 22 comments</Text>
          </View>
      </View>

      <View style={style.footer}>
        <View style={{marginTop:4}}>
          <Image source={require('./pic/home32px.png')} style={{marginLeft:17}} />
        </View>
        <View style={{marginTop:4}}>
          <Image source={require('./pic/search32px.png')} />
        </View>
        <View style={{marginTop:4}}> 
          <Image source={require('./pic/cam32px.png')} /> 
        </View>
        <View style={{marginTop:4}}>
          <Image source={require('./pic/heart32px.png')} />
        </View>
        <View style={{marginTop:4}}>
          <Image source={require('./pic/profile30px.png')} style={{marginRight:17}} />
        </View>
      </View>

    </View>
    
  );
}
const style = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    marginTop:10,
    marginLeft:10
  },
  text2:{
    fontSize:16,
    fontWeight: "bold"
  },
  header:{
    flex:3,
    flexDirection:"row",
    justifyContent: "space-between",
    backgroundColor:'white'
  },
  body:{
    flex:29,
    flexDirection: "column",
    backgroundColor:"white"
  },
  footer:{
    flex:2,
    flexDirection:"row",
    justifyContent: "space-between",
    backgroundColor:'#F8F8FF'
  },
  ImageLayout:{
    justifyContent: "center"
  }
})
export default App;

