import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/features/Home';
import Trip from './src/features/Trip';
import Search from './src/features/Search';
import Guide from './src/features/Guide';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Guide') {
              iconName = 'trail-sign';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Trips') {
              iconName = 'ios-map-sharp';
            }

            return <Icon name={iconName} size={30} color="black" />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#FF4760',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height: 50,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            borderTopLeftRadius: 30,
          },
          tabBarItemStyle: {
            margin: 5,
            borderRadius: 30,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Guide" component={Guide} />
        <Tab.Screen name="Trips" component={Trip} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
