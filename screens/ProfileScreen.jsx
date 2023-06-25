import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, width: '100%', height: '100%', }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Mon profil</Text>
            </View>


            <View style={styles.body}>
                <View style={styles.icons}>
                    <View style={styles.icon1}>
                        <FontAwesome name='gear' size={40} color='white' />
                    </View>
                    <View style={styles.icon2}>
                        <FontAwesome name='qrcode' size={40} color='#18A28E' />
                    </View>
                </View>

                <View style={styles.introProfile}>
                    <View style={styles.pic}>
                        <Text>Pic</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Text style={styles.name}>Dupont Christophe</Text>
                        <Text style={styles.points}>Points</Text>
                        <Text style={styles.nbPoints}>49 370</Text>
                        <Text style={styles.subText}>Inscrit il y a 2 ans</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18A28E',
        width: '100%',
        height: '60%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '300%',
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
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

    introProfile:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#E7F7EE',
        borderWidth: '3px',
    },
    pic: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '40%',
        borderRadius: 60,
        borderColor: 'orange',
        borderWidth: '6px',
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#361939',
    },
    nbPoints: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#361939',
    },
    subText: {
        fontSize: 17,
        color: '#AA9EAD',
    }
    
});