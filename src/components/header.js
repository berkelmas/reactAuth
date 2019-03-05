import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    render(props) {

        const {headerStyle, textStyle} = styles;

        return (
            <View style={headerStyle}>
                <Text style={textStyle}>{this.props.headerName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#f8f8f8',
        marginTop : 10,

    },
    textStyle : {
        fontSize : 28,
    }
});

export default Header;