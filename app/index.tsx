import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

type StageCard = {
  id: number;
  title: string;
  detail: string;
};

const STAGES: StageCard[] = [
  { id: 1, title: "Menstrual", detail: "Rest, replenish iron, and track flow and pain." },
  { id: 2, title: "Follicular", detail: "Energy builds. Prioritize protein, sleep, and movement." },
  { id: 3, title: "Ovulatory", detail: "Peak energy. Stay hydrated and avoid burnout." },
  { id: 4, title: "Luteal (Early)", detail: "Stabilize sleep and reduce processed sugar." },
  { id: 5, title: "Luteal (Late/PMS)", detail: "Support mood, lower stress, and pre-plan self-care." }
];

const getHealthNudge = (sleep: number, water: number, mood: number) => {
  if (sleep < 7) return "Try a consistent sleep window this week (target 7–8 hours).";
  if (water < 2) return "Hydration is low today. Aim for at least 2.0L with reminder alarms.";
  if (mood <= 2) return "Low mood detected. Try a short walk + breathing break and journal symptoms.";
  return "Great consistency. Keep logging daily for stronger cycle insights.";
};

export default function HomeScreen() {
  const [periodStart, setPeriodStart] = useState("");
  const [periodLength, setPeriodLength] = useState("28");
  const [sleepHours, setSleepHours] = useState("7");
  const [waterLiters, setWaterLiters] = useState("2");
  const [moodScore, setMoodScore] = useState("3");

  const nudge = useMemo(
    () =>
      getHealthNudge(Number(sleepHours) || 0, Number(waterLiters) || 0, Number(moodScore) || 0),
    [sleepHours, waterLiters, moodScore]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Pulse Care</Text>
        <Text style={styles.subtitle}>Expo Go MVP • Cycle + Lifestyle Tracking</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Logging</Text>
          <Field label="Period start date (YYYY-MM-DD)" value={periodStart} onChangeText={setPeriodStart} />
          <Field label="Cycle length (days)" value={periodLength} onChangeText={setPeriodLength} keyboardType="numeric" />
          <Field label="Sleep (hours)" value={sleepHours} onChangeText={setSleepHours} keyboardType="numeric" />
          <Field label="Water intake (liters)" value={waterLiters} onChangeText={setWaterLiters} keyboardType="numeric" />
          <Field label="Mood (1-5)" value={moodScore} onChangeText={setMoodScore} keyboardType="numeric" />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Save Today’s Log</Text>
          </Pressable>
          <Text style={styles.helperText}>Note: MVP currently stores values in-memory only.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Insight</Text>
          <Text style={styles.insight}>{nudge}</Text>
          <Text style={styles.helperText}>This is educational guidance, not a medical diagnosis.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cycle Stages (1 to 5)</Text>
          {STAGES.map((stage) => (
            <View key={stage.id} style={styles.stageRow}>
              <Text style={styles.stageTitle}>Stage {stage.id}: {stage.title}</Text>
              <Text style={styles.stageDetail}>{stage.detail}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mother-Daughter Profile Model</Text>
          <Text style={styles.stageDetail}>• Mother can add daughter as a linked minor profile.</Text>
          <Text style={styles.stageDetail}>• Sensitive notes remain private by default.</Text>
          <Text style={styles.stageDetail}>• At adulthood, daughter can convert to independent account with data preserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({
  label,
  value,
  onChangeText,
  keyboardType = "default"
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric";
}) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={label}
        placeholderTextColor="#8f95a3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f6f7fb" },
  container: { padding: 16, gap: 12, paddingBottom: 28 },
  title: { fontSize: 30, fontWeight: "700", color: "#30273f" },
  subtitle: { fontSize: 14, color: "#5f6472", marginBottom: 4 },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eceef4",
    gap: 8
  },
  cardTitle: { fontSize: 17, fontWeight: "600", color: "#30273f" },
  fieldWrap: { gap: 5 },
  label: { fontSize: 13, color: "#4f5563" },
  input: {
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#222"
  },
  button: {
    marginTop: 8,
    backgroundColor: "#7b4fff",
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  helperText: { fontSize: 12, color: "#6f7483" },
  insight: { fontSize: 14, color: "#2f3240", lineHeight: 20 },
  stageRow: { paddingTop: 6, borderTopWidth: 1, borderTopColor: "#f0f1f6" },
  stageTitle: { fontSize: 14, fontWeight: "600", color: "#2d3140" },
  stageDetail: { fontSize: 13, color: "#565c6a", marginTop: 2 }
});
