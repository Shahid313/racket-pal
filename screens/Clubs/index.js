import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView} from 'react-native'
import styles from './styles'

const clubs = [
    {
        clubName:'Mingora Club',
        clubImage:require('../../assets/clubs/mingoraClub.jpg')
    },

    {
        clubName:'Manglawar Club',
        clubImage:require('../../assets/clubs/manglawarClub.jpg')
    },

    {
        clubName:'Charbagh Club',
        clubImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        clubName:'Sangota Club',
        clubImage:require('../../assets/clubs/SangotaClub.jpg')
    },

    {
        clubName:'Charbagh Club',
        clubImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        clubName:'Sangota Club',
        clubImage:require('../../assets/clubs/SangotaClub.jpg')
    }

]

class Clubs extends React.Component {
    goToClubDetails() {
        this.props.navigation.navigate('ClubDetails')
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.Location}>
                    <Image style={styles.mapIcon} source={require('../../assets/mapIcon.png')}/>
                    <Text style={styles.LocationName}>Dhaka, Banassre</Text>
                </View>
                <View style={styles.SearchInput}>

                <TouchableOpacity style={styles.SearchButton}>
                <Image source={require('../../assets/search.png')} style={styles.SearchIconStyle}/>
                </TouchableOpacity>

                <TextInput placeholder="Search" style={styles.InputField}/>
               </View>
               <Text style={styles.ClubsHeading}>Clubs</Text>
               <View style={styles.AllClubs}>
                <FlatList
                scrollEnabled={false}
                numColumns={2}
                data={clubs}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.goToClubDetails()} style={styles.ClubStyle}>
                        <Image style={{width:105, height:85}} source={item.clubImage}/>
                        <Text style={styles.ClubName}>{item.clubName}</Text>
                    </TouchableOpacity>
                )}/>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default Clubs