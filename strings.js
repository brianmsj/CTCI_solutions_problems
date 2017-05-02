// cracking the coding interview 1.3
function addChars(str) {
	var outputArr = [ ];
	for (var i=0; i< str.length; i++) {
		if (str[i] === ' ') {
			outputArr.push('%'); //alternatively, you could push '%20' as one string
			outputArr.push('2');
			outputArr.push('0');
		}
		else outputArr.push(str[i]);
 	}
 	return outputArr.join('');
}
addChars("Mr. BrownStone is Here")

//cracking the coding interview 1.1
function unique(string) {
  var split = string.split('')
  for(var i = 0; i < split.length -1; i++) {
    if(split[i] === split[i+1]){
      return false
    }
  }
  return true
}

//find largest element in Array

function largest(array) {
  var result = array.sort(function(a,b){return b-a})
  return result[0]
}

//reverse string in place
function stringInPlace(string) {
  var split = string.split('')
  var firstIndex = 0
  var lastIndex = split.length -1
  for(let i=0; i<split.length;i++) {
    if(firstIndex < lastIndex) {
      let temp = split[firstIndex]
      split[firstIndex] = split[lastIndex]
      split[lastIndex] = temp
      firstIndex++
      lastIndex--
    }
  }
  return split.join('')
}

stringInPlace("Brian")

//given two strings, find if one is a permutation of another
// east teas find if they are permutations of one another??

//cracking the coding interview 1.2 // this solution is O(logn). we use quicksort which is Ologn

function permutations(string1,string2) {
  var split1 = string1.split('')
  var split2 = string2.split('')
  split1 = split1.sort().join('')
  split2 = split2.sort().join('')
  if(split1 === split2) {
    return true
  }
  return false
}

permutations('east','teat')
