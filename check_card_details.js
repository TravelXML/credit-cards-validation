/*Check card details*/ 

function checkCard(card){                 
		var c = card;
		var cl = parseInt(c.substr(c.length - 1));
		var c = c.slice(0,-1)
		var c = c.split("").reverse().join("");
		var c = c.split("");
		var a = 2;
		var cm = [];
		for (var i = 0; i < c.length; i++){
			if (a%2 == 0){var t = c[i]*2;
			if (t > 9){var t = (t -9);}
			cm.push(t);
			}else{cm.push(parseInt(c[i]));}
			a++;
		}
		var f = 0;
		for (var i = 0; i < cm.length; i++) {f += cm[i];}
		f = f + cl;
		if (f%10 == 0){         
                    return true;
                }
                else{   
                     return false;                      
                }
	}