import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, History, PlusSquare, Dumbbell, Sparkles } from 'lucide-react-native';


import HistoryScreen from './src/screens/HistoryScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import CoachScreen from './src/screens/CoachScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 60 },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#8E8E93',
        })}
      >
        <Tab.Screen name="Profile" component={WorkoutScreen} options={{ tabBarIcon: ({color}) => <User color={color} /> }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarIcon: ({color}) => <History color={color} /> }} />
        <Tab.Screen name="Workout" component={WorkoutScreen} options={{ tabBarIcon: ({color}) => <PlusSquare color={color} size={30} /> }} />
        <Tab.Screen name="Exercises" component={WorkoutScreen} options={{ tabBarIcon: ({color}) => <Dumbbell color={color} /> }} />
        <Tab.Screen name="AI Coach" component={CoachScreen} options={{ tabBarIcon: ({color}) => <Sparkles color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
