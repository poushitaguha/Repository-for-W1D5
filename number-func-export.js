var numList = [];

// function addNumList(number) {
//     numList.push(number);
//     return numList;
// }

// addNumList(20);
// addNumList(40);
// addNumList(30);


function sortNumList() {
  numList.sort(function(a, b) {
    return a - b;
  });
  return numList;
}


module.exports = {
  addNumList: function(number) {
    numList.push(number);
    return number + " has been added to list";
  },
  numListSort: function() {
    return sortNumList();
  }
};
