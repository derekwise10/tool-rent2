import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from "@expo/vector-icons";

const MessagesScreen = ({ navigation }) => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const messages = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://i.pravatar.cc/150?img=1',
            message: 'Hi there! Is the tool still available?',
            timestamp: '1 min ago',
        },
        {
            id: 2,
            name: 'Mary Smith',
            image: 'https://i.pravatar.cc/150?img=2',
            message: 'Great, thank you!',
            timestamp: '5 min ago',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            image: 'https://i.pravatar.cc/150?img=3',
            message: 'Can I pick it up tomorrow?',
            timestamp: '10 min ago',
        },
        {
            id: 4,
            name: 'Emma Lee',
            image: 'https://i.pravatar.cc/150?img=4',
            message: 'Sorry, I found another tool. Thanks anyway!',
            timestamp: '20 min ago',
        },
    ];

    const handleSelectedMessage = (message) => {
        setSelectedMessage(message);
        navigation.navigate("MessageDetailsScreen", { message });
    }

    return (
      <SafeAreaView style={tw `bg-white h-full`}>
        <ScrollView contentContainerStyle={styles.container}>
          {messages.map((message) => (
              <TouchableOpacity key={message.id} onPress={() => handleSelectedMessage(message)}>
                  <View style={styles.messageContainer}>
                    <Image source={{ uri: message.image }} style={styles.avatar} />
                    <View style={styles.messageContent}>
                      <View style={styles.header}>
                        <Text style={styles.name}>{message.name}</Text>
                        <Text style={styles.timestamp}>{message.timestamp}</Text>
                      </View>
                      <View style={styles.preview}>
                        <Ionicons name="checkmark-done-outline" size={20} color="#A1A1A1" />
                        <Text style={styles.previewText}>{message.message}</Text>
                      </View>
                    </View>
                  </View>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
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
      borderRadius: 30,
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
  });
  