import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView} from 'react-native'
import styles from './styles'

const coaches = [
    {
        coachName:'Mingora Club',
        coachImage:require('../../assets/clubs/mingoraClub.jpg')
    },

    {
        coachName:'Manglawar Club',
        coachImage:require('../../assets/clubs/manglawarClub.jpg')
    },

    {
        coachName:'Charbagh Club',
        coachImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        coachName:'Sangota Club',
        coachImage:require('../../assets/clubs/SangotaClub.jpg')
    },

    {
        coachName:'Charbagh Club',
        coachImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        coachName:'Sangota Club',
        coachImage:require('../../assets/clubs/SangotaClub.jpg')
    }

]

class Coaches extends React.Component {
    coachDetails(){
        this.props.navigation.navigate('CoachDetails')
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
               <Text style={styles.CoachHeading}>Coaches</Text>
               <View style={styles.AllCoahes}>
                <FlatList
                scrollEnabled={false}
                numColumns={2}
                data={coaches}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.coachDetails()} style={styles.CoachStyle}>
                        <Image style={{width:105, height:85}} source={item.coachImage}/>
                        <Text style={styles.CoachName}>{item.coachName}</Text>
                    </TouchableOpacity>
                )}/>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default Coaches