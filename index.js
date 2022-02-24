function sortSelection(array) {
  let _arr;
  _arr = [].concat(array);

  // It loops through the two arrays and sorts them
  for (let i = 0; i < _arr.length - 1; i++) {
    let min_i = i;
    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[j] < _arr[min_i]) {
        min_i = j;
      }
    }
    [_arr[i], _arr[min_i]] = [_arr[min_i], _arr[i]];
  }
  return _arr;
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
  textAreaAfter.value = sortSelection(arrNumber); // or just use sort function, as I used above
});
