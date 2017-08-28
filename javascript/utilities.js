//Creator: Justin Yau

function getRandomNumber(low, high)
{
	
	if(low > high) 
	{
		templow = low;
		low = high;
		high = templow;
	}
	
	options = high - low + 1;
	
	return parseInt(Math.random() * options) + low;
}

function rollDice()
{
/*
	die1 = getRandomNumber(1 , 6);
	die2 = getRandomNumber(1 , 6);
	
	return die1 + die2;
*/
	return getRandomNumber(1 , 6) + getRandomNumber(1 , 6);
}

function ordinalNumberSuffix(number)
{
	modremainder = number % 10;
	exceptionremainder = number % 100;
	if(modremainder == 1 && exceptionremainder != 11)
	{
		return "st";
	}
	if(modremainder == 2 && exceptionremainder != 12)
	{
		return "nd";
	}
	if(modremainder == 3 && exceptionremainder != 13)
	{
		return "rd";
	}
	return "th";
}