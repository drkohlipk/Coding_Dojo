var arr = [6,5,2,4,7,1];

//Bubble sort

function bubbleSort1(arr){
  for (var i=0; i<arr.length; i++) { //Keeps track of current index
    for (var j=0; j<arr.length; j++){ //runner through arr
      if (arr[j] > arr[j+1]) { //Compare current value with next value
        var temp = arr[j]; //switch two values if condition is met
        arr[j] = arr[j+1];
        arr[j+1] = temp;  
      }
    }
  }
}
bubbleSort1(arr);

//Bubble sort ver 2
function bubbleSort2(arr) {
  var sorted = false; //Initial assignment for variable
  while (!sorted) { //Only enter if sorted = false;
    sorted = true; //Reassign sorted. Will exit while loop if variable does not get reassinged with false. 
    for (var i=0; i<arr.length-1;i++) { //For loop to check each value and compare it to next one on the array. 
      if (arr[i]>arr[i+1]) { //if this condition is true, array is not sorted
        sorted = false; //Will keep while loop running
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
}
bubbleSort2(arr);

// Selection sort
function selectSort(arr){
  var min; //Declare an empty variable
  for (var i=0; i<arr.length; i++){ //for loop to track each index
    min = i; //min is assinged to index number of the array
    for (var j=i+1; j<arr.length; j++) { //for loop to find index number of minimum value/where it is located within arr
      if (arr[j]<arr[min]){ //if the value at arr[j] is smaller, 
        min = j; // reassign min to the index number of the smaller value(j)
      }
    }
    var temp = arr[i]; //Switch the location of two values
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

selectSort(arr); 

//Insertion sort
function insert(arr) {
  var temp = []; //Create an empty temp array
  temp.push(arr[0]); //Push first value from arr into temp
  for (var i=1; i<arr.length; i++) { //for loop to iterate through each value in arr. i=0 skipped, since the value is already pushed into temp array. 
    for (var j=0; j<temp.length; j++) { //for loop to iterate through each value in temp.
      if (temp[j] > arr[i]) { //If this condition is true (smaller number found in arr)
        let hold = temp[j]; //store the value in temp (larger value) array in hold
        temp[j] = arr[i]; //assign new smaller value into temp at where larger value was removed. 
        for (var k=j+1; k<temp.length; k++){ //for loop to iterate through temp array - to place 'hold' back into temp array
          let secHold = temp[k]; //store next value in array into secHold
          temp[k]=hold; //replace the value with hold
          hold=secHold; //change the value of hold with secHold
        }
        temp.push(hold); //largest value (temp[k]) is now at the end of the temp array
        break;
      }
      else if (j == temp.length-1) { //if unable to find a smaller value
        temp.push(arr[i]); //arr[i] is now the largest value in temp array
        break;
      }
    }
  }
  return temp;
}

insert(arr);
