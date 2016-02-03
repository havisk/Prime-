function secret(num){
  var primes = [];
  var D = [];
  function sieve(num) {
    //gets all primes of number
    for (var q = 2; q < num; q++) 
      {
          if (D[q]) 
          {
                  for (var i =0 ; i < D[q].length; i++) 
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
  
    function checkPrime(primes) {

      var test1 = secret(x) + secret(y);
      var test2 = secret(x + y);

      for (var x = 0; x < primes.length; x++) {
        for (var y = 0; y < primes.length; y++) {
          if (test1 === test2)
          {
            print("Is additive")
          }else{
            print("Not additive")
          }
       }
      }
    }
 return primes;
  }
 return num;
}


