
exports.min = function min (array) {

  if(typeof(array)===null || typeof(array)==='undefined' || array.length === 0) return 0;

  let min_val;
  for(let i = 0; i<array.length; i++){
    if(i == 0) min_val = array[i];
    if(min_val > array[i]) min_val = array[i];
  }

  return min_val;
 
}

exports.max = function max (array) {
  if(typeof(array)===null || typeof(array)==='undefined' || array.length === 0) return 0;

  let max_val;
  for(let i = 0; i<array.length; i++){
    if(i == 0) max_val = array[i];
    if(max_val < array[i]) max_val = array[i];
  }
  return max_val;
}

exports.avg = function avg (array) {
  if(typeof(array)===null || typeof(array)==='undefined' || array.length === 0) return 0;

  let avg_val;
  let summ = 0;
  for(let i = 0; i<array.length; i++){
    summ = summ + array[i];
  }
  avg_val = summ/array.length;
  return avg_val;

}
