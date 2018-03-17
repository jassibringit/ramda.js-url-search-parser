	const string = "?lang=en&userSearch=Bill-to-high&Id=84--CHVB04RsHf9acvHQf4Q";
	// const string = window.location.search;
	

	const set = R.curry((string,start) => R.slice(start+1,Infinity,string) ) ;
	const logToConsole = (result) => {console.log(result) };

	
	const createKeyVal  = (el) => ({ [el[0]] :decodeURIComponent(el[1]) });
	const splitAtEqual	= R.compose(createKeyVal, R.split("=") );
	const splitAtAnd	= R.compose(R.map(splitAtEqual) ,R.split("&") );
	const slicefromQues = R.compose(splitAtAnd, set(string), R.indexOf("?") );
	const parse 		= R.compose(logToConsole, R.mergeAll , slicefromQues);

	parse(string)
