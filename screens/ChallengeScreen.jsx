import { StyleSheet, Text, View } from 'react-native';

export default function ChallengeScreen() {
  return (
    <View style={styles.container}>
        <Text>PrintScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop:130,
    },
    
});