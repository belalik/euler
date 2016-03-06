function problem1() {

	var sum=0;

	//var num = document.getElementById("problem_1_input").value;
	var num = document.problem_1_form.problem_1_input.value;
	
	for (var i = 0; i < num; i++) { 
    	if (i%3==0 || i%5==0 ) {
    		sum+=i;
    	}
    
	}

	document.getElementById("problem_1_answer").innerHTML = sum;

}


/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/
function problem2() { 


	var fibonacci = [1, 2];		//initialise array 
	var index=1;
	var sum=0;		//store sum of two previous terms
	var limit=document.problem_2_form.problem_2_input.value;

	/*
	Attention here:  Need to initialise result with 2, 
	otherwise first even number (=2) will be 'lost'.
	An alternative solution would initialise result at 0,
	would fill the whole fibonacci[] and would then 
	traverse it, but we would then have two loops. 
	*/
	var result = 2;		


									
	// Euler problem 2 limit is 4 million. 
	while (sum<limit ) {
		
	  sum = fibonacci[index-1]+fibonacci[index];
	  if (sum%2==0){
	  	result += sum;
	  }
	  
	  fibonacci.push(sum);
	  
	  index++;
	}


	document.getElementById("problem_2_answer").innerHTML = result;


}

function problem3() {

	var num = document.problem_3_form.problem_3_input.value;
	var lastFactor=0;
	var factor=0;

	if (num % 2 === 0) {
		num = num/2;
		lastFactor = 2;
		while (num % 2 === 0) {
			num = num/2;
		}
	}
	else {
		lastFactor = 1;
	}
	
	factor=3;

	while (num>1) {
		if (num % factor===0) {
			num = num/factor;
			lastFactor = factor;

			while (num % factor===0) {
				num = num/factor;
			}
		}
		factor = factor+2;
	}

	document.getElementById("problem_3_answer").innerHTML = lastFactor;

}

	/*
	** See comments below - my initial implementation was right, but very inefficient.. 
	**

	var result=0;
	var num = document.problem_3_form.problem_3_input.value;

	var primes = [];
	var i=1;

	while (i<num) {
	  
	    
	    if ( (num%i===0) && isPrime(i) ) {
	      primes.push(i);
	    }
	    i++;
	}


	result = primes[primes.length-1];
	if (primes.length===0) {
		document.getElementById("problem_3_answer").innerHTML = 
		document.problem_3_form.problem_3_input.value+" does not have any prime factors";
	}
	else {
		document.getElementById("problem_3_answer").innerHTML = "Largest prime factor: "+result;	
	}
	*/



/*
** Used this initially - but was very very inefficient ... Code worked on JFiddle so I got the correct 
** answer, then read Project Euler's pdf on problem 3 and used their algorithm ..  I want to move on 
** with web development, not math - although it is interesting, might come back to it at some later point.. 
*/
function isPrime (n) {

    if (n < 2) return false;

      //An integer is prime if it is not divisible by any prime less than or equal to its square root

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
	
