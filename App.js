import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import Inicio from './inicio'
import Cuerpo from './cuerpo'
import Operaciones from './operaciones'

export default class App extends React.Component {

    constructor(){
        super();
        this.state={
            numero:2
        }
    }

    aumentar=() => {

        this.setState({numero:this.state.numero+1})
    }
    disminuir=() => {

        this.setState({numero:this.state.numero-1})
    }

    render() {
        return (
            <View style={styles.container}>

                <Inicio name="Calculadora"/>

                <Cuerpo numero={this.state.numero}/>

                <Operaciones sumar={this.aumentar}  restar={this.disminuir} />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fcde2',
    },
    containerA: {
        flex: 1,
        backgroundColor: '#7ba6e2',
        justifyContent:'center',
        alignItems:'center'
    },
    containerB: {
        flex: 3,
        backgroundColor: '#917ae2',
        justifyContent:'center',
        alignItems:'center'
    },
    containerC: {
        flex: 1,
        backgroundColor: '#e23e0e',

    },


});
