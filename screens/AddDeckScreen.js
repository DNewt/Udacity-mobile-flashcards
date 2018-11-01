import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {AsyncStorage} from 'react-native'

export default class CreateDeckScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  onPress() {
    AsyncStorage.getItem('Decks').then(async (value) => {
      if (value) {

        decks = JSON.parse(value)
        decks.push({
          title: this.state.title,
          cards: []
        })
        await AsyncStorage.setItem("Decks", JSON.stringify(decks))

      } else {
        decks = []
        decks.push({
          title: this.state.title,
          cards: []
        })
        await AsyncStorage.setItem("Decks", JSON.stringify(decks))
      }
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    var style = {
      height: 80
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
