	const promise = new Promise(function(resolve,reject){
		resolve(fetch("https://jsonplaceholder.typicode.com/users").then(response=> response.json()))
		reject("no data found")
	})
	promise.then(json => json.map((json)=>{
		document.querySelector('#tableBody').innerHTML+=`
			<tr>
				<td>${json.id}</td>
				<td>${json.name}</td>
				<td>${json.email}</td>
				<td>${json.address.street},${json.address.city},${json.address.zipcode}</td>
			</tr>
			`;
	}))
	.catch(function(error){
	alert("Data not found")
	})