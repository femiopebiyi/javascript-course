// const nums = [10,20,30];

// nums[2]= 99;
// console.log(nums);

// function getLastValue(numbers){
//     const lastNumber = numbers.length  - 1;
//     console.log(numbers[lastNumber]);
// }

// getLastValue([2,3,4,4,5,5,664345,678])

// function arraySwap (array){
//     let lastIndex = array.length-1;
//     let firstNum = array[0]
//     let lastNum = array[lastIndex]

//     array[0] = lastNum
//     array[lastIndex] = firstNum
    
    

//     console.log(array)
// }

// let num = 10
// for(let i = 0; i<=num ; i+=2){
//     console.log(i)
// }

// for(let i = 5;  i>=0; i--){
//     console.log(i)
// }

// let num = 0;

// while(num <= 10){
//     console.log(num);
//     num+=2
// }

// let i = 5
// while(i>=0){
//     console.log(i)
//     i--
// }

// loop = [1,2,3,4];

// for(let i = 0; i<loop.length; i++){
//     loop[i]*=2
    
// }
// console.log(loop)


// function addOne (array){
//     for (let i = 0; i<array.length; i++){
//         array[i] +=1
//     }

//     console.log(array)
// }

// function addNum (array, num){
//     for(let i = 0; i<array.length; i++){
//         array[i]+=num
//     }
//     console.log(array)
// }

// function addArray (array1, array2){
//     for(let i = 0; i<array1.length && i<array2.length; i++){
//         array1[i] += array2[i]
//     }

//     console.log(array1)
// }

// function countPositive(nums){
//     let count = 0
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i]<0){
//             count+=1
//         }

//     }
//     console.log(count)
// }



      // function minMax(nums) {
        // We'll set the starting values of min and max
        // as the first value in the array. (This is
        // just one way to set the starting values. You
      //   // can use another way if you like.)
      //   const result = {
      //     min: nums[0],
      //     max: nums[0]
      //   };

      //   for (let i = 0; i < nums.length; i++) {
      //     const value = nums[i];

      //     // If the value is less than the min,
      //     // update the min.
      //     if (value < result.min) {
      //       result.min = value;
      //     }

      //     // If the value is greater than the max,
      //     // update the max.
      // //     if (value > result.max) {
      // //       result.max = value;
      // //     }

      //     if(value === result.min && value === result.max){
      //       result.max = value;
      //       result.min = value
      //     }

      //     if(nums === undefined){
      //       result.min = null
      //       result.max = null
      //     }
      //   }

      //   return result;
      // }

      // console.log(minMax([1, -3, 5]));
      // console.log(minMax([-2, 3, -5, 7, 10]));



function  countWords (words){
  let count = {};
  for (let i = 0 ;i<words.length; i++){
    let repeated = words[0]
    if(words[i] === repeated){
      repeated = words[i]
      count.words[i] = 1
    }
  }
  return count
}