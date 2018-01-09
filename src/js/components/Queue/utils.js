const logFactor = 45.166626117938186;
const minSize = 115;

export default function calculateHeight(time) {
  return Math.max(minSize, (Math.log2(time) * logFactor));
}