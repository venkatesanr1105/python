localStorage.clear();
function computeTotal(){

    var parent = document.getElementById('cart');
    var element = parent.firstElementChild;
    let sum = 0;
    while(element && element.firstElementChild)
    {
        var price = element.firstElementChild.nextElementSibling.nextElementSibling;
        price = price.textContent.replace('Rs. ','');
        price = parseInt(price);
        sum+=price
        element = element.nextElementSibling;
    }
    total.textContent = `Total : Rs. ${sum}`;
}

function addToCart(current)
{
    var parrent = current.parentElement;
    var image = parrent.firstElementChild;
    var imageClone = image.cloneNode();
    var product = image.nextElementSibling;
    var productClone = product.cloneNode(true);
    var price = product.nextElementSibling;
    var priceClone = price.cloneNode(true);
    var closeButton = document.createElement('input');
    closeButton.setAttribute('id','closebutton');
    closeButton.setAttribute('type','button');
    closeButton.setAttribute('value','Remove');
    var cart = document.createElement('div');
    document.getElementById('cart').appendChild(cart);
    cart.appendChild(imageClone);
    cart.appendChild(productClone);
    cart.appendChild(priceClone);
    cart.appendChild(closeButton);
    computeTotal(cart);
    closeButton.onclick = (event) => {
        event.target.parentElement.remove();
        var count = localStorage.getItem('count');
        count = parseInt(count)-1;
        localStorage.setItem('count',count);
        display();
        computeTotal(cart);
    }
    if(localStorage.getItem('count'))
    {
        var count = localStorage.getItem('count');
        count = parseInt(count)+1;
        localStorage.setItem('count',count);
    }
    else
        localStorage.setItem('count',1);
    display();
}

function display()
{
    if(localStorage.getItem('count'))
        document.getElementById('count').textContent = localStorage.getItem('count');
}
hp.onclick = (event) => {
    addToCart(event.target);
}

lenovo.onclick = (event) => {
    addToCart(event.target);
} 

dell.onclick = (event) => {
    addToCart(event.target);
}

apple.onclick = (event) => {
    addToCart(event.target);
}

cartimg.onclick = (event) => {
    var cart = event.target.parentElement.nextElementSibling;
    cart.style.display = (cart.style.display == 'none')?'block':'none';
}