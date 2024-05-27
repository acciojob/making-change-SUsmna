const makeChange = (c) => {
  // your name here
	const quarters = Math.floor(c/25);
	const dimes = Math.floor((c%25)/10);
	const nickels = Math.floor(((c%25)%10)/5);
	const pennies = ((c%25)%10)%5;
	return {"q": quarters, "d": dimes, "n": nickels, "p":pennies};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
