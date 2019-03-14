/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = 
function getLoveTrianglesCount(preferences = []) {
  let triangles = [];
  const reducer = (acc, cur, idx, src) => {
    let first = idx + 1;
    let third = src[cur - 1];
    let thirdLoves = src[third - 1];
    if (first !== third && first === thirdLoves && !triangles.includes(first)) {
      triangles.push(first, cur, third);   
      acc += 1;     
    } 
    return acc;
  };

  return preferences.reduce(reducer, 0);

};

