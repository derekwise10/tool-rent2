import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const data =[
 {
 id: "123",
 title: "Rent a Tool",
 image: "https://clipground.com/images/cartoon-tools-clipart-1.png",
 screen: "MapScreen",
 },
 {
 id: "456",
 title: "Messages",
 image: "https://www.pngitem.com/pimgs/m/139-1397202_imessage-iphone-text-messaging-transparent-background-bubble-message.png",
 screen: "EatsScreen",
  },
  {
  id: "789",
  title: "User Page",
  image: "https://assets.onlinelabels.com/images/clip-art/acspike/acspike_male_user_icon.png",
  screen: "RatingsScreen",
  },
  ];

const NavOptions = () => {
    const navigation = useNavigation();
return (
<FlatList
data={data}
horizontal
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<TouchableOpacity
onPress={() =>  navigation.navigate(item.screen)}
style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
<View>
<Image
style={{width: 120, height: 120,resizeMode: "contain"}}
source={{uri: item.image   }}/>
<Text style={tw `mt-2 text-lg font-bold`}>{item.title}</Text>
<Icon style={tw `p-2 bg-black rounded-full w-10 mt-4`}
name="arrowright"
color="gray"
type="antdesign"/>
</View>
</TouchableOpacity>
) }
/>
    );
};

export default NavOptions;

