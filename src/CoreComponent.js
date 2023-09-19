import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const CoreComponents = ({title}) => {
    return (
    <>
      <ScrollView>
        <Text style={style.textInput2}>Angel Triany Pangkey</Text>
        <View>
          <Text style={style.textInput}>{title}</Text>
           <View style={style.redBox}></View>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={style.image}
          />
          <View style={style.blueBox}></View>
        </View>
        <TextInput
          style={style.textInput}
          defaultValue="Hello, Let's write some new!"
        />
      </ScrollView>
    </>
    )
  }

const style = StyleSheet.create({
  redBox:
  {
    width: 420,
    height: 100,
    backgroundColor: 'red'
  },

  image: 
  {
    width: 420, 
    height: 420
  },

  blueBox: 
  {
    width: 420,
    height: 100, 
    backgroundColor: 'blue'
  },

  textInput: 
  {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold'
    
  },

  textInput2: 
  {
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 3
  }
})

export default CoreComponents;