import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormInput, FormLabel} from 'react-native-elements';

class SignUpForm extends Component {
    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput />
                </View>
                <Button title="Submit" />
            </View>
        );
    }
}

export default SignUpForm;