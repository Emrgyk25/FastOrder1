/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Button } from 'react-native';

function Information(props) {
    function navigateToPage() {
        props.navigation.navigate('Login Page');
    }



    return (
        <View>
            <Text>Information Screen</Text>
            <Button title="Giris Ekrani"
                onPress={navigateToPage} />
        </View>
    );
}

export default Information;
