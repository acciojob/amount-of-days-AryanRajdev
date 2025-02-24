//your JS code here. If required.

function daysOfAYear(year) {
	if(year%4 == 0){
		if(year%100 == 0){
			if(year%400 == 0){
				console.log(366);
			}
			else{
				console.log(365);
			}
		}
		else{
			console.log(366);
		}
	}
	else{
		console.log(365);
	}
}

let year = parseInt(prompt("Enter a year:"));
daysOfAYear(year);