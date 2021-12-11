import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import styles from './styles'

class SignIn extends React.Component{
    state = {
        showPassword:true,
        email:'',
        password:''
    }
    signUp(){
        this.props.navigation.navigate('SignUp')
    }

    Login(){
        this.props.navigation.navigate('Home')
        console.log(this.state.email)
        console.log(this.state.password)
    }

    ForgotPass(){
        this.props.navigation.navigate('ForgotPassword')
    }
    render(){
        return(
            <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.LoginHeading}>Login</Text>
                <Text style={styles.Enteryouremailsandpassword}>Enter your emails and password</Text>
                <Text style={styles.EmailLabel}>Email</Text>

                <View style={styles.EmailInput}>
                <TextInput onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email" style={styles.InputField}/>
                </View>

                <Text style={styles.PasswordLabel}>Password</Text>
                <View style={styles.PasswordInput}>
                {this.state.showPassword ?
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => this.setState({showPassword:!(this.state.showPassword)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.CrossEyeImageStyle}/>
                </TouchableOpacity>
                }
                <TextInput onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPassword} placeholderTextColor="#929292" placeholder="Password" style={styles.InputField}/>
                </View>
                <View style={styles.ForgotPasswordButton}>
                <TouchableOpacity onPress={() => this.ForgotPass()}>
                <Text style={styles.ForgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.Login()} style={styles.LoginButton}>
                    <Text style={styles.LoginText}>log In</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.DontHaveAnAccount}>
                    <Text style={styles.DonthaveanaccountText}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => this.signUp()}>
                    <Text style={styles.DonthaveanaccountSignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

export default SignIn