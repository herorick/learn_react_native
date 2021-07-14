import React from 'react';
import styles from './styles';
import { Text, View } from '../Themed';
import {Alert, Image, TouchableOpacity} from 'react-native';

interface Props {
  category: any
}

export default function CategoryListItem(props: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {
      Alert.alert('click vao')
    }}>
      <View style={styles.container}>
        <Text style={styles.text}>Tao la nhat ne</Text>
      </View>
    </TouchableOpacity>
  )
}
