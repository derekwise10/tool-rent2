import React from "react"
import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from 'tailwind-react-native-classnames';
import HomeScreen from "../screens/HomeScreen";
const ToolListScreen = ({navigation}) => {
  const tools = [
    {
      name: "Power Drill",
      renter: "John Smith",
      price: "$20/day",
      image: "https://i.ebayimg.com/00/s/MTIyM1gxNjAw/z/H7EAAOSwIz5ceGU5/$_57.PNG?set_id=8800005007"
    },
    {
      name: "Circular Saw",
      renter: "Jane Doe",
      price: "$30/day",
      image: "https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/y3kAAOSwWxNYsWJR/$_86.JPG"
    },
    {
      name: "Angle Grinder",
      renter: "Bob Johnson",
      price: "$25/day",
      image: "https://jamaicaclassifiedonline.com/images/2020/10/28/134621/power-tools-xj7q3sly_0.jpg"
    }
  ];
  const handleToolPress = (tool) => {
    navigation.navigate('HomeScreen', {tool});
  };
  
  return (
    <SafeAreaView style={tw `bg-white h-full p-10`}>
      <ScrollView>
        <View>
          <Text style={tw `mt-2 text-lg font-semibold`}>Select A Tool To Rent</Text>
          <Text style={tw `mt-2 text-lg font-semibold`}>Selecting A Tool Displays Details</Text>
          {tools.map((tool, index) => (
            <TouchableOpacity key={index} onPress={() => handleToolPress(tool)}>
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
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToolListScreen;

