var newNum = 1;
function takeANumber(todayLine){
  newNum += 1
    var welcomeNewName = ("You have number " + (todayLine[todayLine.length - 1]));
    return welcomeNewName;
}


[]
[1]
[1,2]
if(todayLine[0]!==undefined){
  newNum = todayLine[todayLine.length - 1] + 1
  todayLine.push(newNum)
  } else {
    todayLine[0] = newNum
  };

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