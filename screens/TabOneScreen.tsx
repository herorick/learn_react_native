import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CategoryListItem from '../components/CategoryListItem';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style';

export default function TabOneScreen() {
  return (
    <View>
      <Text style={styles.title}>Tab One</Text>
        <ScrollView>
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
        </ScrollView>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

