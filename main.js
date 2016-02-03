var n = prompt("Please enter number");

function secret(){
  // console.log(n)
  var num = parseInt(n);
  return num;

}

function findPrimeNumbers(num) {
  //gets all primes of number
  var D = [];
  var primes = [];
  var num = secret();

  console.log(num);

  for (var q = 2; q < num; q++) 
    {
        if (D[q]) 
        {
                for (var i=0 ; i< D[q].length; i++) 
                {
                   var p = D[q][i];
                   if (D[p+q]) D[p+q].push(p);
                   else D[p+q] = [p];
                }
                delete D[q];
        } else {
                primes.push(q);
                if (q*q < num) D[q*q] = [q];
        }
    }
    return primes;
}

function checkIfAdditive(){

  var test1 = [secret(x) + secret(y)];
  var test2 = [secret(x + y)];
  var primes = findPrimeNumbers();
  console.log(primes);

//iterate over array for x & y
  for (var x=0; x<primes.length; x++) {
   for (var y=0; y<primes.length; y++) {

      // console.log(primes[x]);
      // console.log(primes[y]);

      if (test1 === test2)
      {
        return("Secret Is additive")
      }else{
        return("Secret Is Not additive")
      }
   }
 
 }
}
checkIfAdditive();



