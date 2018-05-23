import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormInput, FormLabel} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

//Enter URL for Firebase Cloud Functions Project
const ROOT_URL = '';

class SignInForm extends Component {
    state = { phone: '', code: '' };

    handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone, code: this.state.code
            });

            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput 
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>

                <View>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput 
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>

                <Button 
                    onPress={this.handleSubmit} title="Submit"
                />
            </View>
        );
    }
}

export default SignInForm;