import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import HomeScreen from './screens/HomeScreen';
import Category from './screens/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen initialParams={{ itemId: 42 }}
            name="Home" component={HomeScreen} />
          <Stack.Screen initialParams={{ itemId: 42 }} name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
