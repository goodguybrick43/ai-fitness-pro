import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Sparkles, Dumbbell, Target } from 'lucide-react-native';

/**
 * CoachScreen: Interface for AI workout generation and equipment selection.
 * Mimics the Strong app's clean card layout.
 */
export default function CoachScreen() {
  const [equipment, setEquipment] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI Coach</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Dumbbell color="#3498db" size={20} />
            <Text style={styles.cardTitle}>Available Equipment</Text>
          </View>
          <TextInput 
            style={styles.input}
            placeholder="e.g. Dumbbells, Barbell, Bench"
            placeholderTextColor="#8E8E93"
            value={equipment}
            onChangeText={setEquipment}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Target color="#3498db" size={20} />
            <Text style={styles.cardTitle}>Your Goal</Text>
          </View>
          <TextInput 
            style={styles.input}
            placeholder="e.g. Strength, Muscle Growth"
            placeholderTextColor="#8E8E93"
            value={goal}
            onChangeText={setGoal}
          />
        </View>

        <TouchableOpacity style={styles.aiButton}>
          <Sparkles color="#fff" size={20} />
          <Text style={styles.buttonText}>GENERATE OPTIMIZED PLAN</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 60 },
  header: { color: '#fff', fontSize: 34, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#1C1C1E', padding: 15, borderRadius: 12, marginBottom: 15 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: '600' },
  input: { color: '#fff', fontSize: 16, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#2C2C2E' },
  aiButton: { 
    backgroundColor: '#3498db', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    padding: 18, 
    borderRadius: 8, 
    marginTop: 10 
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
