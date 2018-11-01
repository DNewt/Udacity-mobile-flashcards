import React, {Component} from 'react'
import {View, Text, Button, Platform} from 'react-native'

class DeckView extends Component {

    addCard() {
        this.props.navigation.navigate("AddCard", {deck: this.props.navigation.state.params.deck})
    }

    startQuiz() {
        this.props.navigation.navigate("Quiz", {deck: this.props.navigation.state.params.deck})
    }

    render () {
        style = {
            marginTop: Platform.OS === 'ios' ? 50 : 40 
        }
        var deck = this.props.navigation.state.params.deck

        return (
            <View style={style}>
                <Text>{deck.title}</Text>
                <Button title={"Add Cards"} onPress={() => {this.addCard()}}/>
                <Button title={"Start Quiz"} onPress={() => {this.startQuiz()}}/>
                
            </View>
        )
    }
}

export default DeckView;