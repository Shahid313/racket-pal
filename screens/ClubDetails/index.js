import React from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, ImageBackground, Dimensions} from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

class ClubDetails extends React.Component {
    GoBack(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.CoverImage}>
                    <Image style={styles.ClubImage} source={require('../../assets/clubs/mingoraClub.jpg')}/>
                    <TouchableOpacity onPress={() => this.GoBack()} style={styles.backArrowMmargins}>
                    <Image style={styles.backArrow} source={require('../../assets/backArrow.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={styles.ClubNameAndHeart}>
                    <Text style={styles.ClubName}>Mingora Club</Text>
                    <TouchableOpacity>
                    <Image style={styles.LikeHeart} source={require('../../assets/heart.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ClubDetails}>
                    <Text style={styles.ClubDetailsText}>Club Details</Text>
                    <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                </View>
                <View style={styles.ReviewBox}>
                    <Text style={styles.ReviewText}>Review</Text>
                    <View style={styles.Rating}>
                    <TouchableOpacity>
                    <FAIcon name="star" size={23} color="#F3603F" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <FAIcon name="star" size={23} color="#F3603F" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <FAIcon name="star" size={23} color="#F3603F" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <FAIcon name="star" size={23} color="#F3603F" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <FAIcon name="star" size={23} color="#F3603F" />
                    </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ClubDetails