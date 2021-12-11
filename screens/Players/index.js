import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView} from 'react-native'
import styles from './styles'

const players = [
    {
        playerName:'Mingora Club',
        playerImage:require('../../assets/clubs/mingoraClub.jpg')
    },

    {
        playerName:'Manglawar Club',
        playerImage:require('../../assets/clubs/manglawarClub.jpg')
    },

    {
        playerName:'Charbagh Club',
        playerImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        playerName:'Sangota Club',
        playerImage:require('../../assets/clubs/SangotaClub.jpg')
    },

    {
        playerName:'Charbagh Club',
        playerImage:require('../../assets/clubs/charBaghClub.jpg')
    },

    {
        playerName:'Sangota Club',
        playerImage:require('../../assets/clubs/SangotaClub.jpg')
    }

]

class Players extends React.Component {
    getDetails(){
        this.props.navigation.navigate('PlayerDetails')
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
               <Text style={styles.PlayerHeading}>Players</Text>
               <View style={styles.AllPplayers}>
                <FlatList
                scrollEnabled={false}
                numColumns={2}
                data={players}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.getDetails()} style={styles.PlayerStyle}>
                        <Image style={{width:105, height:85}} source={item.playerImage}/>
                        <Text style={styles.PlayerName}>{item.playerName}</Text>
                    </TouchableOpacity>
                )}/>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default Players