document.write("5. Write a program to sort list of strings <br> <br> ");

// JavaScript code to sort the strings

// Function to perform sort
function string_sort(str) {
  var i = 0,
    j;
  while (i < str.length) {
    j = i + 1;
    while (j < str.length) {
      if (str[j] < str[i]) {
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
      j++;
    }
    i++;
  }
}

// Driver code

// Original string
var string = ["Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"];

// Print original string array
document.write("Original String:</br>");
document.write(string);

document.write("</br>");

// Call string_sort method
string_sort(string);

document.write("</br>After sorting:</br>");

// Print sorted string array
document.write(string);
