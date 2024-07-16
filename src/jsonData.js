
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

const Findindex = (index_array) =>{
	 index_array = index_array.sort((a,b)=> a-b);
	 let dublicate_array =[];
	 for(index in index_array){
		if(index_array[index]=== index_array[index -1]){
			dublicate_array.push(index_array[index]);
		}
	 }
	 return[...new Set(dublicate_array)];
	}
let array =[1,1,2,2,3,4,5,5,6,6,7,7,8,8,9,3,4,65,];
console.log(Findindex(array));
 
