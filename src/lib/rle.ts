function Encode (blocks) {
  var segmentLength = blocks.length;
  var run = 0, current = '', last = '', encoded = '';

  current = last = blocks[0];
  for (var i = 1; i <= segmentLength; i++) {
    if (current !== last) {
      encoded += run + last;

      run = 0;
      last = current;
    }

    current = blocks[i];
    run++;
  }
  encoded += run + last;

  return encoded;
}

function Decode (input) {
  var decoded = [];
  var result = input.replace(/(\d+\D{1})/g, function (match) {
    var current = match.slice(-1)
    var run = match.slice(0, -1);
    decoded = decoded.concat(Array.apply(null, Array(parseInt(run))).map(String.prototype.valueOf, current));
  });

  return decoded;
}

export default {
  Encode, Decode
}