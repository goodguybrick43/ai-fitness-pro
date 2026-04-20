import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Push Day Home</Text>
          <Text style={styles.cardSub}>Thursday, April 16 • 8:41 PM</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statText}>⏱ 36m</Text>
            <Text style={styles.statText}>🏋️‍♂️ 8630 lb</Text>
            <Text style={styles.statText}>🏆 0 PRs</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 60 },
  header: { color: '#fff', fontSize: 34, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#1C1C1E', padding: 15, borderRadius: 12, marginBottom: 15 },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#8E8E93', fontSize: 14, marginVertical: 5 },
  statsRow: { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, gap: 15 },
  statText: { color: '#fff', fontSize: 13, backgroundColor: '#2C2C2E', padding: 5, borderRadius: 5 }
});
