import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

export default function ActiveWorkoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.timeText}>00:00</Text>
        <TouchableOpacity style={styles.finishBtn}>
          <Text style={styles.finishText}>FINISH</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.exerciseHeader}>
          <Text style={styles.exerciseName}>Bench Press (Barbell)</Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.colHeader, { width: '15%' }]}>SET</Text>
          <Text style={[styles.colHeader, { width: '35%' }]}>LBS</Text>
          <Text style={[styles.colHeader, { width: '35%' }]}>REPS</Text>
          <View style={{ width: '15%' }} />
        </View>

        <View style={styles.setRow}>
          <Text style={styles.setText}>1</Text>
          <Text style={styles.inputBox}>135</Text>
          <Text style={styles.inputBox}>10</Text>
          <CheckCircle2 color="#2ecc71" size={24} />
        </View>

        <TouchableOpacity style={styles.addSetBtn}>
          <Text style={styles.addSetText}>+ ADD SET</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingHorizontal: 15, paddingTop: 50 },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  timeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  finishBtn: { backgroundColor: '#2ecc71', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 5 },
  finishText: { color: '#fff', fontWeight: 'bold' },
  exerciseName: { color: '#3498db', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  tableHeader: { flexDirection: 'row', marginBottom: 10 },
  colHeader: { color: '#8E8E93', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  setRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingVertical: 5 },
  setText: { color: '#fff', width: '15%', textAlign: 'center', fontWeight: 'bold' },
  inputBox: { color: '#fff', width: '35%', textAlign: 'center', backgroundColor: '#1C1C1E', padding: 8, borderRadius: 5, marginHorizontal: 2 },
  addSetBtn: { backgroundColor: '#2C2C2E', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  addSetText: { color: '#fff', fontWeight: 'bold', fontSize: 12 }
});
