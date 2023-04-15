import React from "react"
import {StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';

const MessagesScreen = () => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>This is the messages screen</Text>
    </View>
    </SafeAreaView>

    )

}

export default MessagesScreen

const style = StyleSheet.create({})