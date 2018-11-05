import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {AsyncStorage} from 'react-native'
const uuidv1 = require('uuid/v1'); 

export default class CreateDeckScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  onPress() {
    AsyncStorage.getItem('Decks').then(async (value) => {
      var decks = JSON.parse(value)
      if (!decks) {
        decks = {}
      }
      decks[uuidv1()] = {
        title: this.state.title,
        cards: []
      }
      await AsyncStorage.setItem("Decks", JSON.stringify(decks))
      this.props.navigation.navigate("Deck")
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    var style = {
      padding: 10,
      margin: 10,
      height: 50,
      borderWidth: 1
    }

    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput style={style} onChangeText={(title) => {this.setState({title})}} value={this.state.title}/>
        <Button title={"Submit"} onPress={() => {this.onPress()}}/>
      </View>
    );
  }
}
