var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  if(katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli, name) {
  if(katzDeli.length === 0) {
  return "The line is currently empty.";
  } else {
    var i = 0;
    for (i = 0; i < katzDeli.length; i++){
      var position = i + 1;
      return `The line is currently: + ${position}. + ${name},`;
    }
  }  
  return currentLine;
}