import React, { useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CategoryListItem from '../components/CategoryListItem';
import { FlatList } from 'react-native-gesture-handler';
import styles from './style';

export default function TabOneScreen() {
  const data = [
    {
      id: 1,
      name: 'nguyen anh nhat',
    },
    {
      id: 2,
      name: 'nguyen trung phap'
    },
    {
      id: 3,
      name: 'nguyen thi tu binh'
    },
    {
      id: 4,
      name: 'nguyen thi tu binh'
    },
    {
      id: 5,
      name: 'nguyen thi tu binh'
    },
    {
      id: 6,
      name: 'nguyen thi tu binh'
    }
  ]
  const [listCategory] = useState(data);

  return (
    <View>
      <Text style={styles.title}>Tab One</Text>
        <FlatList
          data={listCategory}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={(item) => `${item.id}`}>
        </FlatList>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

