import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native'
import styles from './styles'

class CreateNewPassword extends React.Component{

    state = {
        showPass: true,
        showRetypePass:true,
        password:'',
        confirmpassword:''
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.NewPassWordInfo}>
                    <Text style={styles.CreateNewPassText}>Create New Password</Text>
                    <Text style={styles.PleaseSetYourPasswordForLogin}>Please set your password for login</Text>
                </View>
                <View style={styles.EnteringData}>
                
                <Text style={styles.PasswordPlaceholder}>Password</Text>
                <View style={styles.PasswordInput}>

                <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput onChangeText={(e) => this.setState({password:''})} secureTextEntry={this.state.showPass} style={styles.InputField}/>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                
               </View>

               <Text style={styles.PasswordPlaceholder}>Retype Password</Text>
               <View style={styles.ConfirmPasswordInput}>

               <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput  onChangeText={(e) => this.setState({confirmpassword:e})} secureTextEntry={this.state.showRetypePass} style={styles.InputField}/>

                {this.state.showRetypePass == true ? 
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>}
                
               </View>
            <TouchableOpacity style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>

                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default CreateNewPassword;