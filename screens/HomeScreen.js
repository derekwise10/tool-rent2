import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";



const HomeScreen = () => {




    return(
        <SafeAreaView style={tw `bg-white h-full p-10`}>
       <View>
       <Text style={tw `mt-2 text-lg font-semibold`}>Welcome to Tool Rent</Text>
       <Image style={{width:300, height:200}}
       source={require('../assets/tool-rentals.jpg')}/>
       <Text style={tw `mt-2 text-lg font-semibold`}>Please Select An Option </Text>


        <NavOptions/>
       </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});