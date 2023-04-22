import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map =() =>{
    const origin = useSelector(selectOrigin);
return (

<MapView
provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
       latitude: 29.203013,
       longitude: -81.050777,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }}
   />

);
};

export default Map;

const styles = StyleSheet.create({
map: {
height: '50%'
}

});
