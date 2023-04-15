import React from "react"
import {StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>Select A Tool To rent</Text>
          <Text style={tw `mt-2 text-lg font-semibold`}>Selecting A Tool displays details</Text>
          <Image
                 style={{
                 width: 200,
                 height:200,
                  resizeMode: "contain",
                 }}
                 source ={{
                 uri: "https://i.ebayimg.com/00/s/MTIyM1gxNjAw/z/H7EAAOSwIz5ceGU5/$_57.PNG?set_id=8800005007",

                 }}

                 />
                 <Image
                                  style={{
                                  width: 200,
                                  height:200,
                                   resizeMode: "contain",
                                  }}
                                  source ={{
                                  uri: "https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/y3kAAOSwWxNYsWJR/$_86.JPG",

                                  }}

                                  />
                                       <Image
                                                                    style={{
                                                                    width: 200,
                                                                    height:200,
                                                                     resizeMode: "contain",
                                                                    }}
                                                                    source ={{
                                                                    uri: "https://jamaicaclassifiedonline.com/images/2020/10/28/134621/power-tools-xj7q3sly_0.jpg",

                                                                    }}

                                                                    />
    </View>
    </SafeAreaView>

    )

}

export default MapScreen

const style = StyleSheet.create({})