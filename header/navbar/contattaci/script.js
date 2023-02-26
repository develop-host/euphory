fetch("https://api.apispreadsheets.com/data/cmS2l3YMgRgya3qy/", {
	method: "POST",
	body: JSON.stringify({"data": {"email":"Ahahshuagwqhiqi","message":"Oyess zezzo dur","full_name":"Gswhqi"}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})