import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    findById = async (id) => {
        const response = await fetch('https://n161.tech/t/dummyapi/explorer/#user/' + id);
        this.setState({
            data: response.json()
        })
    }

    render() {
        const { data } = this.state

        return (
            <View style={styles.container}>
                <Header title="Irintsoa test"/>
                <Input
                    placeholder="Entrer l'ID user"
                    onSubmitEditing={this.findById}/>
                { 
                    data && data.map(item => {
                        <View>
                            <Text>{item.firstName}</Text>
                            <Text>{item.lastName}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    })                  
                }
            </View>
        )
    }
}
