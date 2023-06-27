import { StyleSheet, Text, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

export default function RankingScreen() {

  const names = ['Vinal Paxton', 'Gwythyr Hope', 'Hikaru Horn', 'Enver Kaluža', 'Ivan Oorschot', 'Jehosheba Matić', 'Gloria Greenberg'];
  const points = ['129 389', '104 780', '101 409', '98 304', '72 039', '63 780', '56 320' ];

  const positions = names.map((el,i) => {
    return (
      <View key={i} style={styles.positionContainer}>
        <View style={styles.positionSubContainer}>
          <Text style={styles.rankingNumber}>{i+1}</Text>
          <Text style={styles.name}>{el}</Text>
          <Text style={styles.points}>{points[i]} points</Text>
          <Feather name='chevron-right' size={20} />
        </View>
      </View>
    )
  })

  return (
    <View style={styles.container}>
        {positions}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    positionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 120,
    },
    positionSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '90%',
      height: 90,
      borderRadius: 10,
      backgroundColor:'white',
      paddingLeft: 20,
    },

    rankingNumber: {
      fontSize: 30,
      fontWeight: '900',
      color: '#18A28E',
    },
    name: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#18A28E',
    },
    points: {
      color: '#3B3B3B',
      fontWeight: '800',
    },
    
});