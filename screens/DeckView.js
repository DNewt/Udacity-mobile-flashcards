import React, {Component} from 'react'
import {Animated, View, Text, Button, Platform, AsyncStorage} from 'react-native'
import DeckScreen from './DeckScreen';

class DeckView extends Component {


    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0),
            deck: {}
        }
    }

    componentDidMount () {
        this.getDeck(this.props.navigation.state.params.deck)
        Animated.timing(
            this.state.fadeAnim, {toValue: 1, duration: 3000}
        ).start();
    }

    async getDeck(id) {
        var decks = JSON.parse(await AsyncStorage.getItem("Decks"))
        this.setState({
            deck: decks[id]
        })
    }

    addCard() {
        this.props.navigation.navigate("AddCard", {deck: this.props.navigation.state.params.deck})
    }

    startQuiz() {
        this.props.navigation.navigate("Quiz", {cards: this.state.deck.cards, deck: this.props.navigation.state.params.deck})
    }

    backToDecks() {
        this.props.navigation.navigate("Main")
    }

    render () {
        style = {
            marginTop: Platform.OS === 'ios' ? 50 : 40,
            opacity: this.state.fadeAnim
        }

        return (
            <Animated.View style={style}>
                <Text>{this.state.deck.title}</Text>
                <Text>{this.state.deck.cards && this.state.deck.cards.length} card/s</Text>
                <Button title={"Add Cards"} onPress={() => {this.addCard()}}/>
                <Button title={"Start Quiz"} onPress={() => {this.startQuiz()}}/>
                <Button title={"Back"} onPress={() => {this.backToDecks()}} />
            </Animated.View>
        )
    }
}

export default DeckView;