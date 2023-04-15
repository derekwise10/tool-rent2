import React from "react"
import {StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';

const RatingsScreen = () => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>This is the Ratings Screen</Text>
    </View>
    </SafeAreaView>

    )

}

export default RatingsScreen

const style = StyleSheet.create({})