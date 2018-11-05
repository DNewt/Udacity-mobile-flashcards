import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {AsyncStorage} from 'react-native';
import {setLocalNotification} from '../notifications'

class DeckScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      decks: {}
    }
  }

  async removeDecks() {
    await AsyncStorage.removeItem("Decks")
    this.getDecks()
  }

  async getDecks() {
    const decks = await AsyncStorage.getItem("Decks")
    this.setState({decks: JSON.parse(decks) || {}})
  }

  componentDidMount () {
    setLocalNotification()
    this.getDecks()
    this.props.navigation.addListener("didFocus", payload => {
      this.getDecks()
    })
  }

  viewDeck(deck) {
    // console.log("viewing deck")
    this.props.navigation.navigate('DeckView', { deck: deck})
  }

  renderDeck(deck, key) {
    var style = {
      padding: 20,
      borderBottomWidth: 1
    }
    return (
      <View key={key} style={style}>
        <Text onPress={() => {this.viewDeck(deck)}}>
          {this.state.decks[deck].title} - {this.state.decks[deck].cards.length} cards
        </Text>
      </View>
    )
  }

  render() {
    var style={
      fontSize: 20,
      textAlign: "center"
    }
    return (
      <View>
        <Text style={style}>Decks</Text>
        {Object.keys(this.state.decks) && Object.keys(this.state.decks).map((deck, key) => {
          return this.renderDeck(deck, key)
        })}

        <Button onPress={() => {this.removeDecks()}} title={"Clear Decks"} />
      </View>
    );
  }

}

export default withNavigationFocus(DeckScreen);