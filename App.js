import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import ChallengeScreen from './screens/ChallengeScreen';
import PrintScreen from './screens/PrintScreen';
import ProfileScreen from './screens/ProfileScreen';
import RankingScreen from './screens/RankingScreen';
import TagScreen from './screens/TagScreen';
import TicketScreen from './screens/TicketScreen';



import FontAwesome from 'react-native-vector-icons/FontAwesome';







const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if(route.name === 'Imprimable') {
            iconName = 'cloud';
          } else if(route.name === 'Ticket') {
            iconName = 'file';
          } else if(route.name === 'Offre') {
            iconName = 'tag';
          } else if(route.name === 'Profil') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#18A28E',
        tabBarInactiveTintColor: '#361939',
        headerShown: false,
      })}>
        <Tab.Screen name="Imprimable" component={PrintScreen} />
        <Tab.Screen name="Ticket" component={TicketScreen} />
        <Tab.Screen name="Offre" component={TagScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
