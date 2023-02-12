import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// this is the import for Stack Navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'
import AppContacts from './src/pages/AppContacts';
//this import is for drawer navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

//this is the code for use of stack navigator (navigation between screens)
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="AppContacts" component={AppContacts}/>
      <Tab.Screen name="Contacts" component={Contacts}/>
    </Tab.Navigator>
  )
}


//this is the code for use of drawer navigator
//const Stack = createDrawerNavigator();

///////to use Stack Navigator, just change each Drawer for Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="AppContacts" component={Tabs}/>
        <Stack.Screen name="Information" component={Information}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
