
const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return getMean([sorted[mid - 1], sorted[mid]]);
  } else {
    return sorted[mid];
  }
}

function getMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
}
