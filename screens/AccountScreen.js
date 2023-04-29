import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";

const reviews = [
        {
            id: 1,
            name: 'Megan Smith',
            image: 'https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?s=612x612&w=0&k=20&c=K_VInFNDXNAQ-BIkog1Joaxa1kfq1sbnHfC2gqh3Vb0=',
            message: 'Smooth process. I recommend this user.',
            timestamp: '4/25/23',
        },
        {
            id: 2,
            name: 'Alejandro Perez',
            image: 'https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?s=612x612&w=0&k=20&c=K_VInFNDXNAQ-BIkog1Joaxa1kfq1sbnHfC2gqh3Vb0=',
            message: 'Very responsive user, I would do business with him again.',
            timestamp: '4/15/23',
        },
        {
            id: 3,
            name: 'Micah Johnson',
            image: 'https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?s=612x612&w=0&k=20&c=K_VInFNDXNAQ-BIkog1Joaxa1kfq1sbnHfC2gqh3Vb0=',
            message: 'Great service. Everything was done super quickly.',
            timestamp: '3/21/23',
        },
        {
            id: 4,
            name: 'Joshua Levine',
            image: 'https://t3.ftcdn.net/jpg/05/04/49/30/360_F_504493085_jz8go7VaoVE8qrvPgSdntN9l6bB4hHIW.jpg',
            message: 'The user is very responsive, but I think the tool provided was not in great shape.',
            timestamp: '2/22/23',
        },
        {
            id: 5,
            name: 'Andreas Schon',
            image: 'https://media.istockphoto.com/id/1140391316/vector/five-yellow-stars-customer-product-rating-icon-fow-web-applications-and-websites.jpg?s=612x612&w=0&k=20&c=K_VInFNDXNAQ-BIkog1Joaxa1kfq1sbnHfC2gqh3Vb0=',
            message: 'I 100% recommend this user.',
            timestamp: '12/14/22',
                },
    ];

const AccountScreen = () => {
    return (
   <SafeAreaView style={tw `bg-white h-full p-10`}>
          <View>
          <Image style={{width:125, height:125, alignSelf:'center'}}
                 source={require('../assets/yousef.jpg')}/>
          <Text style={style.name2}>Nabeel Yousef</Text>
          <Text style={style.subheading}>Member since 2021</Text>
          <Text style={style.subheading2}>Rating: 4.80/5.00</Text>
          </View>
          <ScrollView contentContainerStyle={style.container}>
                    {reviews.map((reviews) => (
                        <TouchableOpacity key={reviews.id}>
                            <View style={style.messageContainer}>
                              <Image source={{ uri: reviews.image }} style={style.avatar} />
                              <View style={style.messageContent}>
                                <View style={style.header}>
                                  <Text style={style.name}>{reviews.name}</Text>
                                  <Text style={style.timestamp}>{reviews.timestamp}</Text>
                                </View>
                                <View style={style.preview}>
                                  <Text style={style.previewText}>{reviews.message}</Text>
                                </View>
                              </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                  </ScrollView>
    </SafeAreaView>

    )
    
}
export default AccountScreen

const style = StyleSheet.create({
name2: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#333333',
      textAlign: 'center',
    },
subheading: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333333',
      textAlign: 'center',
    },
subheading2: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333333',
      textAlign: 'center',
    },
container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#fff',
    },
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    avatar: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      alignItems: 'stretch',
    },
    messageContent: {
      marginLeft: 20,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333333',
    },
    timestamp: {
      color: '#A1A1A1',
    },
    preview: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    previewText: {
      color: '#A1A1A1',
      marginLeft: 10,
    },
})
