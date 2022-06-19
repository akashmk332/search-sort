document.write("3. Implement Quick Sort <br> <br> ");

// Javascript implementation of QuickSort

// A utility function to swap two elements
function swap(arr1, i, j) {
  let temp = arr1[i];
  arr1[i] = arr1[j];
  arr1[j] = temp;
}

function partition(arr1, low, high) {
  // pivot
  let pivot = arr1[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than the pivot
    if (arr1[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      swap(arr1, i, j);
    }
  }
  swap(arr1, i + 1, high);
  return i + 1;
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
function quickSort(arr1, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr1, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr1, low, pi - 1);
    quickSort(arr1, pi + 1, high);
  }
}

// Function to print an array
function printArray(arr1, size) {
  for (let i = 0; i < size; i++) document.write(arr1[i] + " ");

  document.write("<br>");
}

// Driver Code

let arr1 = [10, 7, 8, 9, 1, 5];
let n = arr1.length;
document.write("Given array elements:" + "\n" + arr1 + "<br> <br>");

quickSort(arr1, 0, n - 1);
document.write("Sorted array:" + "\n");
printArray(arr1, n);
