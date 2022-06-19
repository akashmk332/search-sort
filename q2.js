document.write("2. Implement Merge Sort <br> <br> ");
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(array, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = array[l + i];
  for (var j = 0; j < n2; j++) R[j] = array[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(array, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(array, l, m);
  mergeSort(array, m + 1, r);
  merge(array, l, m, r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray(A, size) {
  for (var i = 0; i < size; i++) document.write(A[i] + " ");
}

var array = [12, 11, 13, 5, 6, 7];
var array_size = arr.length;

document.write("Given array is <br>");
printArray(array, array_size);

mergeSort(array, 0, array_size - 1);

document.write("<br><br> Sorted array is <br>");
printArray(array, array_size);
