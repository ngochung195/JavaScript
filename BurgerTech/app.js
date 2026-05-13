const orderForm = document.getElementById('orderForm');
const cartList = document.getElementById('cartList');
const totalPriceElement = document.getElementById('totalPrice');

let total = 0;

orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#foodName').value.trim();
    const price = parseInt(document.querySelector('#foodPrice').value);

    if (name !== "" && !isNaN(price)) {

        const li = document.createElement('li');
        li.innerHTML = `${name} - ${price} VNĐ <button type="button" class="btn-xoa">Xóa</button>`;

        li.addEventListener('mouseover', () => li.style.backgroundColor = '#eeeeee');
        li.addEventListener('mouseout', () => li.style.backgroundColor = 'transparent');

        li.querySelector('.btn-xoa').addEventListener('click', function () {
            total -= price;
            totalPriceElement.innerText = total;
            li.remove();
        });

        cartList.appendChild(li);

        total += price;
        totalPriceElement.innerText = total;

        orderForm.reset();
    } else {
        alert("Vui lòng nhập đầy đủ tên món và giá tiền hợp lệ!");
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        alert("Xác nhận thanh toán tổng: " + total + " VNĐ");
    }

    if (event.key === 'Escape') {
        cartList.innerHTML = '';
        total = 0;
        totalPriceElement.innerText = '0';
        console.log("Đã xóa sạch giỏ hàng");
    }
});