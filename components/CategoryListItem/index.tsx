import React from 'react';
import styles from './styles';
import { Text, View } from '../Themed';
import {Image} from 'react-native';

interface Props {
  category: any
}

export default function CategoryListItem(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tao la nhat ne</Text>
    </View>
  )
}
