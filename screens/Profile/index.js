import React from 'react'
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

class Profile extends React.Component{
    Edit(){
        this.props.navigation.navigate('EditProfile')
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.ProfileWithImage}>
                    
                    <Image style={styles.ProfileImage} source={require('../../assets/clubs/mingoraClub.jpg')}/>
                    
                    <View>
                    <View style={styles.NameWithEditButton}>
                        <Text style={styles.Name}>Shahid Khan</Text>
                        <TouchableOpacity onPress={() => this.Edit()} style={{marginLeft:13}}>
                        <Image style={styles.EditIcon} source={require('../../assets/edit.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Email}>Shahidkahn11@gmail.com</Text>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.GoBox}>
                    <Image style={styles.MyDetailsIcon} source={require('../../assets/myDetails.png')}/>
                    <Text style={styles.MyDetails}>My Details</Text>
                    <Image style={styles.goArrowIcon} source={require('../../assets/goArrow.png')}/>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.LogOutButton}>
                    <Image style={styles.LogoutIcon} source={require('../../assets/logoutIcon.png')}/>
                    <Text style={styles.LogoutText}>Log Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Profile