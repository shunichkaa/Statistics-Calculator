function getMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function getMedian(array) {
  const sorted = array.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return getMean([sorted[mid - 1], sorted[mid]]);
  } else {
    return sorted[mid];
  }
}

function calculate() {
  const array = document.querySelector("#numbers").value
    .split(/,\s*/g)
    .map(Number)
    .filter(el => !isNaN(el));

  if (array.length === 0) return;

  const mean = getMean(array);
  const median = getMedian(array);

  document.querySelector("#mean").textContent = mean.toFixed(2);
  document.querySelector("#median").textContent = median;
}
