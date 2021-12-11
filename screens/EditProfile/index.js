import React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from "react-native-image-picker"
import styles from './styles'

class EditProfile extends React.Component{
    state = {
        showPassword:true,
        firstname:'',
        email:'',
        lastname:'',
        age:'',

    }

    choosePhoto(){
        const options = {
          noData:true
        };
        ImagePicker.launchImageLibrary(options, response => {
          console.log("response", response);
          if(response){
            console.log(response);
          }
        });
      }
    ToSignIn(){
        this.props.navigation.navigate('SignIn')
    }

    gender = ["Male", "Female"]
    skills = ["Skill1", "Skill2", "Skill3", "Skill4"]
    roles = ["Player", "Coach"]
    render(){
        return(
            
            <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}> 
            <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.LoginHeading}>Update Profile</Text>
                <Text style={styles.Enteryouremailsandpassword}>Update your profile</Text>

                <TouchableOpacity style={{width:100, height:100, borderRadius:50, backgroundColor:'green', alignSelf:'center', marginTop:'6%'}} onPress={() => this.choosePhoto()}>
                {/* <Image style={{width:150, height:150, borderRadius:75, backgroundColor:'green'}} source={{uri: this.state.image.uri}}/> */}
                </TouchableOpacity>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({firstname:e})} placeholderTextColor="#929292" placeholder="First Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({lastname:e})} placeholderTextColor="#929292" placeholder="Last Name" style={styles.InputField}/>
                </View>

                <View style={styles.UserNameInput}>
                <TextInput onChangeText={(e) => this.setState({age:e})} placeholderTextColor="#929292" placeholder="Age" style={styles.InputField}/>
                </View>

                <View style={styles.EmailInput}>
                <TextInput onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email" style={styles.InputField}/>
                </View>

                <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Select Gender"
                 buttonStyle={styles.dropDown}
	             data={this.gender}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />

                <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Player Skill"
                 buttonStyle={styles.dropDown}
	             data={this.skills}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />

                <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Role"
                 buttonStyle={styles.dropDown}
	             data={this.roles}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />

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
                <TouchableOpacity style={styles.SignUpButton}>
                    <Text style={styles.SignUpText}>Update</Text>
                </TouchableOpacity>
                </View>
                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
            
            
        )
    }
}

export default EditProfile