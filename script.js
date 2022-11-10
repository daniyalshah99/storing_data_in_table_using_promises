const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users")
fetchPromise.then(function(response){
	if (response.status == 200){
		console.log("fetch successful")
		 return response.json();
	}else{
		console.log("fetch unsuccessful");

	}

})
.then(function(products){
	let placeholder = document.querySelector('#tableBody');
	let out="";
	for(let i=0;i<products.length;i++){
		out+=`
		<tr>
			<td>${products[i].id}</td>
			<td>${products[i].name}</td>
			<td>${products[i].email}</td>
			<td>${products[i].address.street},${products[i].address.city},${products[i].address.zipcode}</td>
		</tr>
		`;
	}
	placeholder.innerHTML=out;
})
.catch(function(error){
	alert("data not found")
})