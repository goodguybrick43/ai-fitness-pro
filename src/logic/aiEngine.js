/**
 * aiEngine.js: Core logic for calculating progressive overload and rotation.
 */

export const calculateNextWeight = (lastWeight, lastReps, targetReps) => {
  // If user hits or exceeds target reps, increase weight by 2.5% - 5%
  if (lastReps >= targetReps) {
    const increment = lastWeight * 0.025;
    return Math.ceil((lastWeight + increment) / 2.5) * 2.5; // Rounds to nearest 2.5lb/kg
  }
  return lastWeight;
};

export const checkStagnation = (history) => {
  // Logic to identify if strength hasn't increased in 3 consecutive sessions
  if (history.length < 3) return false;
  const recent = history.slice(0, 3);
  const weights = recent.map(session => session.weight);
  return new Set(weights).size === 1; // True if all 3 sessions used same weight
};

export const generateSystemPrompt = (equipment, goal) => {
  return `You are an elite strength coach. The user has access to: ${equipment}. 
  Their goal is: ${goal}. Create a 4-day split emphasizing progressive overload. 
  Output format: JSON.`;
};
