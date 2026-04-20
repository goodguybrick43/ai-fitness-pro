import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionLabel}>Quick start</Text>
        <TouchableOpacity 
          style={styles.blueButton}
          onPress={() => navigation.navigate('ActiveWorkout')}
        >
          <Text style={styles.buttonText}>START AN EMPTY WORKOUT</Text>
        </TouchableOpacity>

        <Text style={styles.sectionLabel}>Templates</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Full Body AI Plan</Text>
          <Text style={styles.cardSub}>Squat, Bench Press, Pullups...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingHorizontal: 20, paddingTop: 60 },
  header: { color: '#fff', fontSize: 34, fontWeight: 'bold' },
  sectionLabel: { color: '#fff', fontSize: 20, fontWeight: '600', marginTop: 30, marginBottom: 15 },
  blueButton: { backgroundColor: '#3498db', padding: 18, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  card: { backgroundColor: '#1C1C1E', padding: 15, borderRadius: 12, marginTop: 10 },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#8E8E93', fontSize: 14, marginTop: 5 }
});
