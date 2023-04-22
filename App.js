import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import ToolScreen from "./screens/ToolScreen";
import MessagesScreen from "./screens/MessagesScreen";
import AccountScreen from "./screens/AccountScreen";
import LocationScreen from "./screens/LocationScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToolDetailsScreen from "./screens/ToolDetailsScreen";


export default function App() {
    const Stack = createNativeStackNavigator();
  return (
  <Provider store={store}>
  <NavigationContainer>
  <SafeAreaProvider>
  <Stack.Navigator>

  <Stack.Screen
    name= "HomeScreen"
    component={HomeScreen}
    options={{
    headerShown: false,
    }}
  />
   <Stack.Screen
      name= "ToolScreen"
      component={ToolScreen}
      options={{
      headerShown: false,
      }}
    />
    <Stack.Screen
          name= "MessagesScreen"
          component={MessagesScreen}
          options={{
          headerShown: false,
          }}
        />
        <Stack.Screen
                  name= "AccountScreen"
                  component={AccountScreen}
                  options={{
                  headerShown: false,
                  }}
                />
            <Stack.Screen
                              name= "LocationScreen"
                              component={LocationScreen}
                              options={{
                              headerShown: false,
                              }}
                            />
                            <Stack.Screen
                                                          name= "ToolDetailsScreen"
                                                          component={ToolDetailsScreen}
                                                          options={{
                                                          headerShown: false,
                                                          }}
                                                        />

  </Stack.Navigator>

      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
