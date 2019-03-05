import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Spinner = ({size}) => {
    return (
        <View style={style.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
};

const style = StyleSheet.create({
    spinnerStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1,
        flexDirection : 'row'

    }
});

export default Spinner;