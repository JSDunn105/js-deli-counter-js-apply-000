var newNum = 0;
function takeANumber(todayLine){
  if(todayLine[0]!==undefined){
  newNum = todayLine[todayLine.length - 1] + 1
    todayLine.push(newNum);
    var welcomeNewName = ("You have number " + (todayLine[todayLine.length - 1]));
    return welcomeNewName;
}


[5,6,7]
[6, 7]
[7, 8]
[]

function nowServing(katzDeliLine){
  var nextInLine = "There is nobody waiting to be served!";
  if (katzDeliLine[0]!==undefined){
      //var beingServed = katzDeliLine.shift();
      nextInLine = ("Currently serving "+katzDeliLine.shift()+".");
    }
  return nextInLine;
}


function currentLine(arrLine){
  var theLine = "The line is currently empty.";
  if (arrLine[0]!==undefined){
      var numL = arrLine.length;
      var arrLineTwo = [];
      for (var i=0;i<numL;i++){ 
          var strNum = (i+1);
          arrLineTwo[i]= (" "+strNum.toString() +". "+arrLine[i]); 
        }
        theLine = ("The line is currently:" + arrLineTwo.toString());
      } 
  return theLine;
}