import React from "react";
import {Text,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native'
import styles from './styles'

class ForgotPassword extends React.Component{
    state = {
        email:''
    }
    VerifyOTP(){
        this.props.navigation.navigate('OTP')
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.ForgotPassInfo}>
                    <Text style={styles.ForgotPassText}>Forgot password</Text>
                    <Text style={styles.EnterEmailToResetPassText}>Please enter your email address to reset your password</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => this.setState({email:e})} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
            <TouchableOpacity onPress={() => this.VerifyOTP()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default ForgotPassword;