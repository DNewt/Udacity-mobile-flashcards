import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

class AddCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: ""
        }
    }

    render() {
        return (
            <View>
                <Text>
                    <TextInput style={style} onChangeText={(question) => {this.setState({question})}} value={this.state.question}/>
                    <TextInput style={style} onChangeText={(answer) => {this.setState({answer})}} value={this.state.answer}/>                
                </Text>
            </View>
        )
    }
}

export default AddCard;