import times from "@/data/times.json";

export function makeEmptySequenceSet(numDrums, timeIndex) {
  var sequences = [];
  var numBeats = times.timeSignatures[timeIndex]["numBeats"];
  var numSubBeats = times.timeSignatures[timeIndex]["numSubBeats"];
  for (var drumIndex = 0; drumIndex < numDrums; drumIndex++) {
    var sequence = [];
    for (var beatIndex = 0; beatIndex < numBeats; beatIndex++) {
      var beat = new Array(numSubBeats);
      beat.fill(false);
      sequence.push(beat);
    }
    sequences.push(sequence);
  }
  return sequences;
}