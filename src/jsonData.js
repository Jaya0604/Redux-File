
 const Emplyees=[
	//1
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	//2
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	//3
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];

//console.log(Emplyees[0].batters.batter[3].type);
//console.log(Emplyees[2].topping[2].type)

//  let change = (Emplyees) => {
// 	for(let i in Emplyees){
// 		if(Emplyees[i].batters){
// 			Emplyees.batters[0].id;
// 		}

// 	}
//  };
//  change(Emplyees);
//  console.log(Emplyees);
// console.log(Emplyees[0].id);

// const Findindex = (index_array) =>{
// 	 index_array = index_array.sort((a,b)=> a-b);
// 	 let dublicate_array =[];
// 	 for(index in index_array){
// 		if(index_array[index]=== index_array[index -1]){
// 			dublicate_array.push(index_array[index]);
// 		}
// 	 }
// 	 return[...new Set(dublicate_array)];
// 	}
// let array =[1,1,2,2,3,4,5,5,6,6,7,7,8,8,9,3,4,65,];
// console.log(Findindex(array));

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// process.stdin.on("data", function (input) {
    
//     for (i=1; i<=100; i++) {
//     if (i%15 === 0) {
//     console.log ("FizzBuzz");
// }       
//     else if (i%3 === 0) {
//     console.log ("Fizz"); 
// }
//     else if (i%5 === 0) {
//     console.log("Buzz");
// }
            
//     else {
//     console.log(i);
// }    
// }

// });

// function fizzBuzz(n) { 
//     // Declare an array to store the results 
//     let result = []; 
  
//     // Loop from 1 to n (inclusive) 
//     for (let i = 1; i <= n; ++i) { 
      
//         // Check if i is divisible by both 3 and 5 
//         if (i % 3 === 0 && i % 5 === 0) { 
          
//             // Add "FizzBuzz" to the result array 
//             result.push("FizzBuzz"); 
//         }  
          
//         // Check if i is divisible by 3 
//         else if (i % 3 === 0) { 
          
//             // Add "Fizz" to the result array 
//             result.push("Fizz"); 
//         }  
          
//         // Check if i is divisible by 5 
//         else if (i % 5 === 0) { 
          
//             // Add "Buzz" to the result array 
//             result.push("Buzz"); 
//         }  
//         else { 
          
//             // Add the current number as a string to the 
//             // result array 
//             result.push(i.toString()); 
//         } 
//     } 
  
//     // Return the result array 
//     return result; 
// } 
  
// // Driver code 
// let n = 20; 
  
// // Call the fizzBuzz function to get the result 
// let result = fizzBuzz(n); 
  
// // Print the result 
// console.log(result.join(' ')); 

function Fizzbuszz(m){
	let output = [];

	for(let i =1; i <= m; i++){
		if(i % 3 === 0 && i % 5 === 0){
			output.push("Fizzbuszz");
		}else if(i % 3 === 0 ){
			output.push("Fizz");
		}else if(i % 5 === 0){
			output.push("buszz");
		}else{
			output.push(i.toString());
		}
	}
	return output;
}
let m = 40;
let output = Fizzbuszz(m);
console.log(output.join(' '));





function Bassdata(j){
	let name=[];
	for(let i=1; i<=j; i++){
		if(i % 3 === 0 && i % 5 === 0){
			name.push("First");
		}else if(i % 3 === 0){
			name.push("Secound");
		}else if(i % 5 === 0){
			name.push("Thired");
		}else{
			name.push(i.toString());
		}
	}
	return name;
}
 let j = 30;
 let name=Bassdata(j);
 console.log(name.join(' '));
