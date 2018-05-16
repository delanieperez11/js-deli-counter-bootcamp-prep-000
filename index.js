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

function currentLine(line) {
  if(katzDeli.length === 0) {
  return "The line is currently empty.";
  } else {
    var currentline = "The line is currently:";
    var i = 0;
    var position = i + 1;
    var names = katzDeli.length[i];
    return currentline.push(`${currentline} + ${position}. ${names},`);
  }  
}