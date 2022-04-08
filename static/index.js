localStorage.clear();
hp.onclick = function addToCart(event){
	var price = event.target.previousElementSibling.textContent;
	localStorage.setItem('product','HP');	
	if(localStorage.getItem('productarray') && localStorage.getItem('product'))
		localStorage.setItem('productarray',localStorage.getItem('productarray')+','+localStorage.getItem('product'));
	else
		localStorage.setItem('productarray',localStorage.getItem('product'));
	if(localStorage.getItem('pricearray'))
		localStorage.setItem('pricearray',localStorage.getItem('pricearray')+','+price.replace('Rs. ',''));
	else
		localStorage.setItem('pricearray',price.replace('Rs. ',''));
		print();
}

lenovo.onclick = (event) => {
	var price = event.target.previousElementSibling.textContent;
	localStorage.setItem('product','Lenovo');	
	if(localStorage.getItem('productarray') && localStorage.getItem('product'))
		localStorage.setItem('productarray',localStorage.getItem('productarray')+','+localStorage.getItem('product'));
	else
		localStorage.setItem('productarray',localStorage.getItem('product'));
	if(localStorage.getItem('pricearray'))
		localStorage.setItem('pricearray',localStorage.getItem('pricearray')+','+price.replace('Rs. ',''));
	else
		localStorage.setItem('pricearray',price.replace('Rs. ',''));
	print();
}

dell.onclick = (event) => {
	var price = event.target.previousElementSibling.textContent;
	localStorage.setItem('product','Dell');	
	if(localStorage.getItem('productarray') && localStorage.getItem('product'))
		localStorage.setItem('productarray',localStorage.getItem('productarray')+','+localStorage.getItem('product'));
	else
		localStorage.setItem('productarray',localStorage.getItem('product'));
	if(localStorage.getItem('pricearray'))
		localStorage.setItem('pricearray',localStorage.getItem('pricearray')+','+price.replace('Rs. ',''));
	else
		localStorage.setItem('pricearray',price.replace('Rs. ',''));
	print();
}

apple.onclick = (event) => {
	var price = event.target.previousElementSibling.textContent;
	localStorage.setItem('product','Apple');	
	if(localStorage.getItem('productarray') && localStorage.getItem('product'))
		localStorage.setItem('productarray',localStorage.getItem('productarray')+','+localStorage.getItem('product'));
	else
		localStorage.setItem('productarray',localStorage.getItem('product'));
	if(localStorage.getItem('pricearray'))
		localStorage.setItem('pricearray',localStorage.getItem('pricearray')+','+price.replace('Rs. ',''));
	else
		localStorage.setItem('pricearray',price.replace('Rs. ',''));
	print();
}

function print()
{
	var productArray = localStorage.getItem('productarray').split(',');
	var priceArray = localStorage.getItem('pricearray').split(',');
	var tableArray = document.getElementsByTagName('td');
	var k=0;
	for(index = 0;index<tableArray.length;index+=2)
		tableArray[index].textContent = productArray[k++];
	var l =0;
	var sum = 0;
	for(index = 1;index<tableArray.length;index+=2)
		tableArray[index].textContent = priceArray[l++];
	for(index=0;index<priceArray.length;index++)
		sum+=parseInt(priceArray[index]);
	document.getElementById('total').textContent = `Total : Rs. ${sum}`;
}

function myFunc(event)
{
	alert('Hai');
	var current = event.target;
	var price = current.previousElementSibling;
	var amount = parseInt(price.textContent);
	price.textContent='';
	var product = price.previousElementSibling;
	product.textContent = "";
	var x = document.getElementById('total').textContent
	x.textContent = parseInt(x.textContent) - amount;
}
