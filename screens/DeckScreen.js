import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {AsyncStorage} from 'react-native';

class DeckScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      decks: []
    }
  }

  async removeDecks() {
    await AsyncStorage.removeItem("Decks")
  }

  async getDecks() {
    const decks = await AsyncStorage.getItem("Decks")
    console.log(decks)
    this.setState({decks: JSON.parse(decks)})
  }

  componentDidMount () {
    this.props.navigation.addListener("didFocus", payload => {
      this.getDecks()
    })
    this.getDecks()
  }

  componentDidFocus() {
    console.log("wtf m8")
    this.getDecks()
  }

  viewDeck(deck) {
    console.log(deck)
  }

  renderDeck(deck, key) {
    return (
      <Text key={key} onPress={() => {this.viewDeck(deck)}}>
        {deck.title}
      </Text>
    )
  }

  render() {
    return (
      <View>
        <Text>Decks</Text>
        {this.state.decks && this.state.decks.map((deck, key) => {
          return this.renderDeck(deck, key)
        })}

        <Button onPress={() => {this.removeDecks()}} title={"Clear Decks"} />
      </View>
    );
  }

}

export default withNavigationFocus(DeckScreen);