import React from "react";
import {StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import Map from "../components/Map";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import NavOptions from "../components/NavOptions";
import ToolScreen from "./ToolScreen";
import ToolDetailsScreen from "./ToolDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
const LocationScreen = ({navigation}) => {

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
       onPress={(data=null, details=null) => {
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
        title="See available Tools in your Area"
        onPress={()=> navigation.navigate("ToolScreen")}
        />
        <Button
        title="List a Tool in your Area"
        color="#000000"
        onPress={() => navigation.navigate("ListingScreen")}
        />
        <Button
        title="Home Screen"
                  color="#90ee90"
         onPress={()=> navigation.navigate("HomeScreen")}
                  />

    </View>


    );

}

export default LocationScreen

const style = StyleSheet.create({})