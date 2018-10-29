import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export default class CreateDeckScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  onPress() {
    
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput onChangeText={(text) => {this.setState({text})}} value={this.state.text}/>
        <Button title={"Submit"} onPress={this.onPress()}/>
      </View>
    );
  }
}
