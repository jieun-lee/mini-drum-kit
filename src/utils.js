export function makeEmptySequenceSet(numDrums, numBeats, numSubBeats) {
  var sequences = [];
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