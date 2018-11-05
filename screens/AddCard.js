import React, {Component} from 'react'
import {View, AsyncStorage, TextInput, Button} from 'react-native'

class AddCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: ""
        }
    }

    async onSubmit() {
        var decks = JSON.parse(await AsyncStorage.getItem('Decks'))
        var deck = decks[this.props.navigation.state.params.deck]
        deck.cards.push(
            {  
                question: this.state.question,
                answer: this.state.answer
            }
        )
        decks[this.props.navigation.state.params.deck] = deck
        await AsyncStorage.setItem("Decks", JSON.stringify(decks))
        this.props.navigation.navigate("DeckView", {deck: this.props.navigation.state.params.deck})
    }

    render() {
        var style = {
            "input": {
                padding: 10,
                margin: 10,
                height: 50,
                borderWidth: 1
            },
            "view": {
                margin: 50
            }
        }

        return (
            <View style={style.view}>
                <TextInput style={style.input} onChangeText={(question) => {this.setState({question})}} value={this.state.question}/>
                <TextInput style={style.input} onChangeText={(answer) => {this.setState({answer})}} value={this.state.answer}/>
                <Button onPress={() => {this.onSubmit()}} title={"Submit"} />               
            </View>
        )
    }
}

export default AddCard;