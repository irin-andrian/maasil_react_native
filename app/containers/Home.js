import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Header from '../components/Header'
import List from '../components/List'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class Home extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.addItem(text))
  }

  onCheckItem = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.checkItem(index))
  }

  onDeleteItem = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.removeItem(index))
  }

  render() {
    const { items } = this.props

    return (
      <View style={styles.container}>
        <Header title="Irintsoa test"/>
        <Input
          placeholder="Saisire une tâhe"
          onSubmitEditing={this.onAddItem}/>
        <List
          items={items}
          onCheckItem={this.onCheckItem}
          onDeleteItem={this.onDeleteItem}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(Home)