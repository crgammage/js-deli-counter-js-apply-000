var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(${name});
  return (`Welcome ${name} you are number ${katzDeli.length} in line`)
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return `There is nobody waiting to be served.`
  }
}

function currentLine(katzDeli) {
  var output = [];
  if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length; i++) {
      output += (i + 1) + "." + katzDeli[i] + ","
    }
    output = output.slice(0, output.length - 2)
    return "The line is currently:" + output;
  } else {
    return "The line is currently empty."
  }
}
