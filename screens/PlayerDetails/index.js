import React from "react";
import {Text, SafeAreaView, View, Image} from 'react-native'
import styles from './styles'

class PlayerDetails extends React.Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.Map}></View>
                <View style={styles.PlayerDetails}>
                    <View style={styles.PlayerNameAndImage}>
                        <Image style={styles.ProfileImage} source={require('../../assets/clubs/mingoraClub.jpg')}/>
                        <Text style={styles.PlayerName}>Shahid Khan</Text>
                    </View>
                    <View style={styles.Details}>
                    <View style={styles.SportsInterestBox}>
                    <Text style={styles.SportsInterest}>Sports Interest: Cricket</Text>
                    </View>
                    <View style={styles.AgeBox}>
                    <Text style={styles.Age}>Age: 20</Text>
                    </View>
                    <View style={styles.SkillBox}>
                    <Text style={styles.Skill}>Skill: All Rounder</Text>
                    </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default PlayerDetails