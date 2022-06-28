// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    }}>
      <Text style={{
        fontSize: 20
      }}>
        We have implemented a news list, from which you can click to view the news details.
      </Text>
    </View>
  );
}

export default App;