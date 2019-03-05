/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';

import Login from './src/components/loginForm'
import Header from './src/components/header'
import Spinner from './src/components/spinner'
import Logout from './src/components/logout';

type Props = {};
export default class App extends Component<Props> {

    state = {loggedIn : null};

    componentWillMount() {
        firebase.initializeApp({
           apiKey: 'AIzaSyCjMduL-cfm11xatgCBYXbZ9YsivejE4Xw',
           authDomain: 'reactauthdeneme.firebaseapp.com',
           databaseURL: 'https://reactauthdeneme.firebaseio.com',
           projectId: 'reactauthdeneme',
           storageBucket: 'reactauthdeneme.appspot.com',
           messagingSenderId: '627494375899'
       });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn : true})
            } else {
                this.setState({loggedIn : false})
            }
        })
    };


    renderContent () {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                         <Header headerName="Çıkış Yap" />
                         <Logout/>
                    </View>
                );
            case false:
                return (
                    <View>
                        <Header headerName="Giriş Yap" />
                        <Login/>
                    </View>
                );
            default:
                return (
                    <Spinner/>
                );
        }
    }


    render() {
    return (
      <View>
          {this.renderContent()}
      </View>
    );
  }
}
