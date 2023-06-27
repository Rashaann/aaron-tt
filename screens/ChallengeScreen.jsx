import { StyleSheet, Text, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChallengeScreen() {
  const nbTickets = ['24', '40', '50'];
  const points = ['5', '10', '15'];

  const positions = nbTickets.map((el,i) => {
    return (
      <View key={i} style={styles.challengeContainer}>
        <View style={styles.challengeSubContainer}>
          <View style={styles.rewardNumberContainer}>
            <Text style={styles.rewardNumber}>{points[i]}K</Text>
            <Ionicons name='leaf' size={20} color='#18A28E' />
          </View>
          <View>
            <Text style={styles.title}>Défi hebdomadaire de novembre</Text>
            <Text style={styles.subTitle}>Recevez {el} tickets ce mois</Text>
          </View>
          <Feather name='chevron-right' size={20} />
        </View>
      </View>
    )
  })

  return (
    <View style={styles.container}>


      <View style={styles.badgeContainer}>
        <View style={styles.badgeSubContainer}>
          <View style={styles.rewardContainer}>
            <Text style={styles.rewardText}>10K</Text>
            <Ionicons name='leaf' size={25} color='#18A28E' />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Rejoins 1299 utilisateurs</Text>
          </View>
        </View>
      </View>


      <View style={styles.btnContainer}>
        <View style={styles.addChallengeBtn}>
          <Text style={styles.textBtn}>Créer un défi</Text>
        </View>
      </View>

      <View style={styles.headerListingContainer}>
        <View style={styles.headerListing}>
          <Text style={styles.listingLeftText}>Participer à un défi</Text>
          <Text style={styles.listingRightText}>Voir tout</Text>
        </View>
      </View>


      <View style={styles.challengesListContainer}>
        {positions}
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 900,
      alignItems: 'center',
      paddingBottom: 15,
    },


    
    badgeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40%',
    },
    badgeSubContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      height: '90%',
      backgroundColor: '#E7F7EE',
      borderRadius: 15,
    },
    rewardContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      height: '45%',
      borderRadius: 70,
      backgroundColor: 'white',
    },
    rewardText: {
      fontSize: 60,
      color: '#18A28E',
      fontWeight: '700',
    },

    textContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      height: 100,
    },
    text: {
      fontSize: 15,
      color: '#AA9EAD',
      fontWeight: 'bold',
    },


    btnContainer: {
      width: '100%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    addChallengeBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F96532',
      width: '90%',
      height: 50,
      borderRadius: 30,
    },
    textBtn: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },



    headerListingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 80,
    },
    headerListing: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 40,
      backgroundColor: '#E7F7EE',
      paddingLeft: 15,
      paddingRight: 15,
    },
    listingLeftText: {
      color: '#18A28E',
      fontSize: 15,
      fontWeight: '800',
    },
    listingRightText: {
      color: '#B4CBC9',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },




    challengesListContainer: {
      height: 100,
    },
    challengeContainer: {
      width: '100%',
      height: 140,
    },
    challengeSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '90%',
      height: 90,
      borderRadius: 10,
      backgroundColor:'white',
      paddingLeft: 20,
    },

    rewardNumberContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',
      width: 65,
      height: 65,
      borderRadius: 40,
    },
    rewardNumber: {
      fontSize: 30,
      fontWeight: '700',
      color: '#18A28E',
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#361939',
    },
    subTitle: {
      color: '#AA9EAD',
    },
    
});