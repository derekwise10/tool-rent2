import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';

const MessageDetailsScreen = ({ route }) => {
    const { message } = route.params;

    return (
      <SafeAreaView style={tw `bg-white h-full`}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Image source={{ uri: message.image }} style={styles.avatar} />
            <View style={styles.headerContent}>
              <Text style={styles.name}>{message.name}</Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.timestamp}>{message.timestamp}</Text>
            <Text style={styles.messageText}>{message.message}</Text>
          </View>
          {/* Add more messages here */}
        </ScrollView>
      </SafeAreaView>
    );
};

export default MessageDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
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
  headerContent: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },
  messageContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  timestamp: {
    color: '#A1A1A1',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#333333',
  },
})
