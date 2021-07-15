import * as React from 'react';
import { View, Text, Button } from 'react-native'


export type Props = {
  navigation: any;
  route: any;
};

 const HomeScreen: React.FC<Props> = ({
  navigation,
  route
}) => {
  return (
    <View>
      <Text>asdasd</Text>

      <Button
        title="Go to Details"
        onPress={() => {navigation.navigate('Category', {
          itemId: 86,
          otherParam: 'anything you want here',
        })
        navigation.setParams({
          query: 'someText',
        })
      }
      }
      />
    </View>
  )
}

export default HomeScreen;
