document.addEventListener('DOMContentLoaded', () => {


    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishlistBtn = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');


    const db = fetch('db/db.json');
    db.then(response => response.json())
        .then(data => data.forEach(d => console.log(d.title)));


    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    <img class="card-img-top" src="${img}" alt="">
                    <button class="card-add-wishlist" data-goods-id="${id}"></button>
                </div>
                <div class="card-body justify-content-between">
                    <a href="#" class="card-title">${title}</a>
                    <div class="card-price">${price}</div>
                    <div>
                        <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
                    </div>
                </div>
            </div> `
        return card;

    }


    goodsWrapper.append(createCardGoods(1, 'Дартс', '200', 'img/temp/Archer.jpg'));
    goodsWrapper.append(createCardGoods(1, 'Дартс', '300', 'img/temp/Archer.jpg'));

    const closeCart = e => {
        const tar = e.target;
        if (tar === cart || tar.classList.contains('cart-close') || e.key === 'Escape') {
            cart.style.display = '';
            document.removeEventListener('keyup', closeCart);
        }
    }


    const openCart = e => {
        e.preventDefault();
        cart.style.display = 'flex';
        document.addEventListener('keyup', closeCart);
    };

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);


});