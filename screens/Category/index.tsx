import React from 'react'
import { View, Text, Button } from 'react-native';

export type Props = {
  navigation: any,
  route: any
}


const Category : React.FC<Props> = ({
  navigation,
  route
}) => {
  return (
    <View>
    <Text>asdasd</Text>
    <Text>itemId: {route.params?.itemId}</Text>
    <Text>initialParams:  {route.params?.initialParams}</Text>
      <Text>otherParam: {route.params?.otherParam}</Text>
    <Button
    title="Go to Details... again"
      onPress={() => { navigation.push('Category')
    }}
  />
  <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  <Button title="Go back" onPress={() => navigation.goBack()} />
</View>
  )

}

export default Category;
