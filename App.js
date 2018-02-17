import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Connect"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
