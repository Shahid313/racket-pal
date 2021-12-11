import React from "react";
import {Text,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles'

class OTP extends React.Component{
    CreateNewPassWord(){
        this.props.navigation.navigate('CreateNewPassword')
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.OTPInfo}>
                    <Text style={styles.OTPText}>Verification Code</Text>
                    <Text style={styles.VerifyOTPText}>OTP has been send to your email Please Verify</Text>
                </View>
                <View style={styles.EnteringData}>
                    <View style={styles.OTPInputBoxes}>
                <OTPInputView
                    pinCount={4}
                    style={styles.otpView}
                    codeInputFieldStyle={styles.EachInputFieldStyle}
                    onCodeFilled={value => {
                    console.log(value);
                }}
                />
                <View style={styles.DidntRecievedTheCode}>
                <Text style={styles.DidntRecievedTheCodeText}>Didn't recieved the code?</Text>
                <TouchableOpacity style={styles.ResendLink}>
                    <Text style={styles.DidntRecievedTheCodeResendLink}>Resend</Text>
                </TouchableOpacity>
            </View>
                </View>
                    
            <TouchableOpacity onPress={() => this.CreateNewPassWord()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default OTP;