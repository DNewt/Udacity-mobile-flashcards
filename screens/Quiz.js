import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            correct: 0,
            viewAnswer: false
        }
    }

    answer(correct) {
        this.setState({
            index: this.state.index + 1,
            correct: this.state.correct += correct ? 1 : 0
        })
    }

    toggleAnswer() {
        this.setState({
            viewAnswer: !this.state.viewAnswer
        })
    }

    backToDeck () {
        this.props.navigation.navigate("DeckView", {deck: this.props.navigation.state.params.deck})
    }

    render() {
        var cards = this.props.navigation.state.params.cards
        var style= {marginTop: 100}
        if (this.state.index >= cards.length) {
            return (
                <View style={style}>
                    <Text>The End. {this.state.correct} out of {cards.length} correct.</Text>
                    <Button onPress={() => {this.setState({
                        correct: 0,
                        index: 0,
                        viewAnswer: false
                    })}} title={"Restart Quiz"} />
                    <Button onPress={() => {this.backToDeck()}}title={"Go back"}/>
                </View>
            )
        } else {
            return (
                <View style={style}>
                    <Text>
                        {this.state.viewAnswer ? cards[this.state.index].answer : cards[this.state.index].question}
                    </Text>
                    <Button onPress={() => this.toggleAnswer()} title={this.state.viewAnswer? "View Question" : "View Answer"} />
                    { !this.state.viewAnswer && 
                        <View>
                            <Button onPress={() => this.answer(true)} title="Correct" />
                            <Button onPress={() => this.answer(false)} title="Incorrect" />
                        </View>
                    }
                </View>
            )
        }
    }
}

export default Quiz;