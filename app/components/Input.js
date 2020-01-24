import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  inputField: {
    width: Dimensions.get('window').width,
    height: 50,
    borderColor: 'gray',
    padding: 10,
    borderWidth: 0.5,
    color: 'lightgray',
  }
})

class Input extends Component {
  state = {
    text: '',
  }

  addTodoItem = () => {
    const { onSubmitEditing } = this.props
    const { text } = this.state
    if (!text) return 

    onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    const { placeholder } = this.props
    const { text } = this.state

    return(
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={text}
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={this.addTodoItem}/>
    )
  }
}

export default connect()(Input)