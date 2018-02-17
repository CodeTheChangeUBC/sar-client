import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';


var PropTypes = require('prop-types');
var dgram = require('dgram');
console.log(dgram);
console.log(dgram.createSocket())
//console.log(socket);
//socket.bind(8000);

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
        style={{height:40}}
        placeholder="Enter your message here."
        onChangeText={(text) => this.setState({text})}
        />

        <Button
          onPress={() => {
            Alert.alert(this.state.text);
          }}
          title="Send Message"/>
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
