import { StyleSheet, Text, ScrollView, View, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RankingScreen from './RankingScreen';
import ChallengeScreen from './ChallengeScreen';


export default function ProfileScreen() {
    const [section, setSection] = useState('ranking');
    
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Mon profil</Text>
            </View>


            
            <View style={styles.icons}>
                <View style={[styles.icon1, styles.shadow]}>
                    <FontAwesome name='gear' size={40} color='white' />
                </View>
                <View style={[styles.icon2, styles.shadow]}>
                    <FontAwesome name='qrcode' size={40} color='#18A28E' />
                </View>
            </View>



            <View style={styles.body}>
                <View style={styles.introProfile}>
                    <View style={styles.pic}>
                        <Image source={require('../assets/profile_pic.jpg')} style={styles.profilePic} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Text style={styles.name}>Dupont Christophe</Text>
                        <Text style={styles.points}>Points</Text>
                        <Text style={styles.nbPoints}>49 370</Text>
                        <Text style={styles.subText}>Inscrit il y a 2 ans</Text>
                    </View>
                </View>

                <View style={styles.subSections}>
                    <TouchableOpacity style={styles.sectionBtn} onPress={() => setSection('challenge')}>              
                        <Text style={section === 'challenge'?styles.selectedSection:styles.unselectedSection}>Défis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionBtn} onPress={() => setSection('ranking')}>
                        <Text style={section === 'ranking'?styles.selectedSection:styles.unselectedSection}>Classement</Text>
                    </TouchableOpacity>
                    <Text style={styles.unselectedSection}>Performances</Text>
                </View>

            </View>
                {section === 'ranking'?
                <RankingScreen />:
                <ChallengeScreen />}
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      //alignItems: 'center',
      paddingTop: StatusBar.currentHeight,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18A28E',
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 3000,
        borderBottomRightRadius: 3000,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    //scrollView: {
      //  backgroundColor: 'blue',
    //},
    icons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -30,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: -4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    icon1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 55,
        backgroundColor: '#18A28E',
        borderRadius: 10,
    },
    icon2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 55,
        backgroundColor: 'white',
        borderRadius: 10,
    },




    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: 450,
        paddingTop: 100,
    },
    introProfile:{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#E7F7EE',
        borderWidth: '5px',
    },
    pic: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '32%',
        height: '40%',
        borderRadius: 60,
        borderColor: 'orange',
        borderWidth: '4px',
        marginTop: -70,
    },
    profilePic: {
        width: 95,
        height: 95,
        borderRadius: 90,
    },

    profileContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '60%',  
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#18A28E',
    },
    points: {
        fontSize: 20,
        fontWeight: '800',
        color: '#361939',
    },
    nbPoints: {
        fontSize: 33,
        fontWeight: '900',
        color: '#361939',
    },
    subText: {
        fontSize: 17,
        color: '#AA9EAD',
        fontWeight: 'bold',
    },
    

    subSections: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '90%',
        height: 60,
        borderRadius: 30,
        paddingLeft: 40,
        paddingRight: 20,
    },
    selectedSection: {
        fontSize: 22,
        color: '#18A28E',
        fontWeight: 'bold',
    },
    unselectedSection: {
        fontSize: 12,
        color: '#D7D7D7',
        fontWeight: 'bold',
    },
    sectionBtn: {
        alignItems: 'center',
        justifyContent:'center',
        height: 30,
    },
});