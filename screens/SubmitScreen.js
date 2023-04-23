import React from "react"
import {StyleSheet, Text, View, Image,  Button, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import ToolScreen from "../screens/ToolScreen";
const SubmitScreen = ({navigation}) => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>Your listing will be posted shortly. Please check your
          Email for confirmation. Thanks for renting with Tool Rent!</Text>
          <Image style={{width:300, height:200}}
                 source={require('../assets/tool-rentals.jpg')}/>
          <Button
           title="Home Screen"
           color="#90ee90"
           onPress={()=> navigation.navigate("HomeScreen")}
           />

    <Button
    title="Messages Screen"
     color="#4169e1"
     onPress={()=> navigation.navigate("MessagesScreen")}
     />
 <Button
     title="Listings Screen"
      color="#a45a52"
      onPress={()=> navigation.navigate("ToolScreen")}
      />
     <Button
    title="user Page"
    color="#e6be8a"
    onPress={()=> navigation.navigate("AccountScreen")}
    />
    </View>
    </SafeAreaView>

    )

}

export default SubmitScreen;

const style = StyleSheet.create({})