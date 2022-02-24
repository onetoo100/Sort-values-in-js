function selectionSort(array) {
  let arr;
  arr = [].concat(array);

  // It loops through the two arrays and sorts them
  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
  return arr;
}

const inputValues = document.querySelector("#inputValues"),
  textAreaBefore = document.querySelector("#textAreaBefore"),
  textAreaAfter = document.querySelector("#textAreaAfter");

inputValues.addEventListener("input", () => {
  let arr = inputValues.value.split(",");
  let arrNumber = [],
    arrString = [];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i])) {
      arrNumber.push(arr[i]);
    } else {
      arrString.push(arr[i].trim());
    }
  }

  textAreaBefore.value = arrString.sort();
  textAreaAfter.value = selectionSort(arrNumber); // or just use sort function, as I used above
});
