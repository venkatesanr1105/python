localStorage.clear();
function addToCart(button,productName)
{
	var price = button.previousElementSibling.textContent;
	localStorage.setItem('product',productName);	
	if(localStorage.getItem('productarray') && localStorage.getItem('product'))
		localStorage.setItem('productarray',localStorage.getItem('productarray')+','+localStorage.getItem('product'));
	else
		localStorage.setItem('productarray',localStorage.getItem('product'));
	if(localStorage.getItem('pricearray'))
		localStorage.setItem('pricearray',localStorage.getItem('pricearray')+','+price.replace('Rs. ',''));
	else
		localStorage.setItem('pricearray',price.replace('Rs. ',''));
	print();
	button.style.backgroundColor = 'Orange';
	button.value = 'Remove Item';
}

function removeItem(button, productName)
{
	var regExp =new RegExp(productName);
	console.log(regExp);
	console.log(localStorage.getItem('productarray'));
	console.log(regExp.test(localStorage.getItem('productarray')));
	// localStorage.setItem('productArray',);
}
hp.onclick = (event) => {
	if(event.target.value=='Add to Cart')
		addToCart(event.target,'HP');
	else
		removeItem(event.target,'HP');
		console.log('Hi');
}
lenovo.onclick = (event) => {
	if(event.target.value=='Add to Cart')
		addToCart(event.target,'Lenovo');
	else
	// removeElement(event.target);
	console.log('Hi');
}

dell.onclick = (event) => {
	if(event.target.value=='Add to Cart')
		addToCart(event.target,'Dell');
	else
	// removeElement(event.target);
	console.log('Hi');	
}

apple.onclick = (event) => {
	if(event.target.value=='Add to Cart')
		addToCart(event.target,'Apple');
	else
	// removeElement(event.target);
	console.log('Hi');
}

function print()
{
	var productArray = localStorage.getItem('productarray').split(',');
	var priceArray = localStorage.getItem('pricearray').split(',');
	var tableArray = document.getElementsByTagName('td');
	var k=0;
	for(index = 0;index<tableArray.length;index+=3)
		tableArray[index].textContent = productArray[k++];
	var l =0;
	var sum = 0;
	for(index = 1;index<tableArray.length;index+=3)
		tableArray[index].textContent = priceArray[l++];
	for(index=0;index<priceArray.length;index++)
		sum+=parseInt(priceArray[index]);
	document.getElementById('total').textContent = `Total : Rs. ${sum}`;
}

// function removeElement(event)
// {
// 	var current = event.target.parentElement;
// 	var price = current.previousElementSibling;
// 	var amount = parseInt(price.textContent);
// 	price.textContent='';
// 	var product = price.previousElementSibling;
// 	product.textContent = "";
// 	var x = document.getElementById('total').textContent.replace('Total : Rs. ','');
// 	var total = parseInt(x) - amount
// 	document.getElementById('total').textContent = `Total : Rs. ${total}`;
// }
