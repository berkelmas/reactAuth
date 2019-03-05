import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import Button from './button'

class Logout extends Component {

    logOutFire() {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.subcontainerStyle}>
                    <Button onPress={this.logOutFire.bind(this)} >Çıkış Yap</Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : '#ddd',
        borderBottomWidth : 0,
        shadowColor : '#000',
        shadowOffset : { width : 0, height : 2},
        shadowOpacity : 0.2,
        shadowRadius : 2,
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 20,


    },
    subcontainerStyle : {
        borderBottomWidth: 1,
        padding : 5,
        backgroundColor: '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative',
    },
};

export default Logout;