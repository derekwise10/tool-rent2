import React from "react"
import {StyleSheet, Text, View, SafeAreaView, Button, TextInput } from "react-native";
import tw from 'tailwind-react-native-classnames';
import SubmitScreen from "../screens/SubmitScreen";
import LocationScreen from "../screens/LocationScreen";


const ListingScreen = ({navigation}) => {

     return (
        <SafeAreaView style={tw `bg-white h-full p-7`}>
       <TextInput
         style={styles.input}
               placeholder="First name"
                />
            <TextInput
             style={styles.input}
              placeholder="Last Name"
             />
          <TextInput
          style={styles.input}
           placeholder="Email"
                      />
         <TextInput
           style={styles.input}

           placeholder="Cost per Day"
           keyboardType="numeric"
         />
        <TextInput
           style={styles.input}
           placeholder="type of tool"
         />
         <TextInput
                 editable
                 multiline
                 numberOfLines={4}
                 maxLength={250}
                 style={{padding: 50}}
                  placeholder="Description of tool in 250 words or less"
               />











         <Button
                         title="Go Back"
                         color="#800000"
                         onPress={()=> navigation.navigate("LocationScreen")}
                                 />

         <Button
                title="Ready to Submit"
                color="#008000"
                onPress={()=> navigation.navigate("SubmitScreen")}
                />
       </SafeAreaView>
     );
   };

   const styles = StyleSheet.create({
     input: {
       height: 40,
       margin: 10,
       borderWidth: 2,
       padding: 10,
     },
   });

export default ListingScreen;

const style = StyleSheet.create({})