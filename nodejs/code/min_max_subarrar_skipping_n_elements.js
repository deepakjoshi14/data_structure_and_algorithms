/**
 * Given an array of ints or decimal. 
 * Skiping 1, 2, ..., n elements, what is the lowest and heighest total we can get.
 * List can consist of negative or decimal values. 
 * */

let getMinMaxSubArrayObject = (mainArray, skipIndex) => {
	let possibleCombinations = [];
	
	pushToSubArrayAndLoopNext( possibleCombinations, mainArray, 0, [], 0, skipIndex);
    
	if ( possibleCombinations.length == 1 ) {
	    return { 'min' : possibleCombinations[0], 'max' : possibleCombinations[0] } ;
	} else {
    	possibleCombinations.sort( (a, b) => { return a.total - b.total; });
	    return { 'min' : possibleCombinations.shift(), 'max' : possibleCombinations.pop() } ;	    
	}

}

let pushToSubArrayAndLoopNext = ( possibleCombinations, mainArray, index, subarray, sumTotal, skipIndex) => {
	if(index == mainArray.length){
		possibleCombinations.push({ 'total' : sumTotal, 'nums' : subarray })
	
	} else if (index < mainArray.length) {
	    
		subarray.push( mainArray[index] );
		for(let i=1; i<=skipIndex; i++){
    		pushToSubArrayAndLoopNext( possibleCombinations, mainArray, index+i, [...subarray], sumTotal+mainArray[index], skipIndex );
		}
	}
}

module.exports.getMinMaxSubArrayObject = getMinMaxSubArrayObject;
