import React from "react"
import {StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';

const ListingScreen = () => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>This is the listing screen Screen</Text>
    </View>
    </SafeAreaView>

    )

}

export default ListingScreen

const style = StyleSheet.create({})