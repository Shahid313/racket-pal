import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import styles from './styles'

class Splash extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
         this.props.navigation.navigate('GetStarted')
      
        },1000)
          
      }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.Racketpal}>Racketpal</Text>
            </SafeAreaView>
        )
    }
}

export default Splash