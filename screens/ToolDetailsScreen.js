// It-project-Tool-Rent/screens/ToolDetailsScreen.js
import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';

const ToolDetailsScreen = ({route}) => {
  const {tool} = route.params;

  const handleRentTool = () => {
    // Add rent tool functionality here
  };

  return (
    <SafeAreaView style={tw `bg-white h-full p-10`}>
      <View>
        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
          source={{
            uri: tool.image,
          }}
        />
        <Text style={tw `mt-2 text-lg font-semibold`}>{tool.name}</Text>
        <Text style={tw `mt-2`}>Renter: {tool.renter}</Text>
        <Text style={tw `mt-2`}>Price: {tool.price}</Text>
        <TouchableOpacity onPress={handleRentTool} style={tw`mt-4 p-2 bg-blue-500 rounded-full w-32`}>
          <Text style={tw `text-white text-center font-semibold`}>Rent Tool</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ToolDetailsScreen;

const styles = StyleSheet.create({});
