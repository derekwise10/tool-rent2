import React from "react";
import {StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import Map from "../components/Map";
import MapView from 'react-native-maps';
import NavOptions from "../components/NavOptions";
import ToolScreen from "../screens/ToolScreen";

const MessagesScreen = ({navigation}) => {

 const dispatch =useDispatch();
    return (

          <View>

<Map/>

<GooglePlacesAutocomplete
       placeholder="Enter a location"
       styles={{
        container :{
            flex: 0,
        },
        textInput: {
            fontSize: 18,
        },
       }}
       onPress={(data, details=null) => {
                    dispatch(
                       setOrigin({
                         location: details.geometry.location,
                         description: data.description,
                        })
                    );
                    dispatch(setDestination(null));
                    }}

       fetchDetails={true}
       returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
       query={{
        key:GOOGLE_MAPS_APIKEY,
               language: 'en'
       }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
       />


        <Button
        title="See available Tools in your area"
        onPress={()=> navigation.navigate("ToolScreen")}
        />
        <Button
        title="Return to the Home Screen"
        color="#f194ff"
        onPress={() => navigation.navigate("HomeScreen")}
        />

    </View>


    );

}

export default MessagesScreen

const style = StyleSheet.create({})