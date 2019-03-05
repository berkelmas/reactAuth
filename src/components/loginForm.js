import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import firebase from 'firebase';
import axios from 'axios';

import Button from './button';
import Spinner from './spinner';

class Login extends Component {

    state = {mail : '', password : '', loading : false};

    componentWillMount() {
        console.log('compWillMount');
    };

    firebaseGonder() {
        const {mail, password} = this.state;

        this.setState({loading : true});

        firebase.auth().signInWithEmailAndPassword(mail, password )
            .then(this.loginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(mail, password)
                    .then(this.loginSuccess.bind(this))
                    .catch(this.loginFail.bind(this));
            })
    }

    loginSuccess () {
        console.log('loginSuccess');
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);


                axios.post('http://10.0.2.2:8000/api/firebase-auth/', {
                    user_id : user.uid
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        });
        this.setState({loading : false});
    };

    loginFail () {
        console.log('loginFailed');
        this.setState({loading : false});
    };

    renderButton () {
        if (!this.state.loading) {
            return <Button onPress={this.firebaseGonder.bind(this)}>Giriş</Button>
        }
        return <Spinner/>
    };


    render() {

        const {containerStyle, subcontainerStyle, inputStyle} = styles;

        return (
          <View style={containerStyle}>
              <View style={subcontainerStyle}>
                  <TextInput
                  placeholder={"E-Mail"}
                  style={inputStyle}
                  value={this.state.mail}
                  onChangeText={text => this.setState({mail : text})}
                  />
              </View>

              <View style={subcontainerStyle}>
                  <TextInput
                      secureTextEntry={true}
                      placeholder={"Password"}
                      style={inputStyle}
                      value={this.state.password}
                      onChangeText={text => this.setState({password : text})}
                  />
              </View>

              <View style={subcontainerStyle}>
                    {this.renderButton()}
              </View>

          </View>
        );
    };

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
  inputStyle : {
      color : '#000',
      paddingRight : 5,
      paddingLeft : 5,
      fontSize : 18,
      lineHeight : 23,
      flex : 2
  }
};

export default Login;