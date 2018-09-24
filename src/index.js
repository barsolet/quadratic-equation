module.exports = function solveEquation(equation) {
  var arr = equation.split(' '),
      a = arr[0],
      b = arr[3] + arr[4],
      c = arr[7] + arr[8];

    var d = b * b - 4 * a * c;

    var x1 = Math.round(( -b + Math.sqrt(d))/(2 * a));

    var x2 = Math.round(( -b - Math.sqrt(d))/(2 * a));


    var results = [x1, x2];

    function compareNumeric(x1, x2) {
        if (x1 > x2) return 1;
        if (x1 < x2) return -1;
    }

    results.sort(compareNumeric);

    return results;
}
