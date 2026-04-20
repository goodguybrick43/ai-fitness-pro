import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, History, PlusSquare, Dumbbell, Sparkles } from 'lucide-react-native';

import HistoryScreen from './src/screens/HistoryScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import CoachScreen from './src/screens/CoachScreen';
import ActiveWorkoutScreen from './src/screens/ActiveWorkoutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/**
 * WorkoutStack: Allows navigating from the Workout menu to the Active Workout session.
 */
function WorkoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkoutMain" component={WorkoutScreen} />
      <Stack.Screen 
        name="ActiveWorkout" 
        component={ActiveWorkoutScreen} 
        options={{ presentation: 'modal' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Workout"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 60, paddingBottom: 8 },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#8E8E93',
        }}
      >
        <Tab.Screen name="Profile" component={WorkoutScreen} options={{ tabBarIcon: ({color}) => <User color={color} /> }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarIcon: ({color}) => <History color={color} /> }} />
        <Tab.Screen name="Workout" component={WorkoutStack} options={{ tabBarIcon: ({color}) => <PlusSquare color={color} size={30} /> }} />
        <Tab.Screen name="Exercises" component={WorkoutScreen} options={{ tabBarIcon: ({color}) => <Dumbbell color={color} /> }} />
        <Tab.Screen name="AI Coach" component={CoachScreen} options={{ tabBarIcon: ({color}) => <Sparkles color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
