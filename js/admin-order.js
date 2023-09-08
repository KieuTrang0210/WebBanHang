//khoi tao localStorage
if(!window.localStorage.orders){
    window.localStorage.setItem('orders', JSON.stringify([]));
}
let orders = JSON.parse(window.localStorage.orders);

function saveOrder(){
    //lay thong tin tu form them don hang
    let orderId = document.getElementById('order-id').value ;
    let productId = document.getElementById('product-id').value ;
    let productName = document.getElementById('product-name').value ;
    let customerName = document.getElementById('customer-name').value ;
    let customerPhone = document.getElementById('customer-phone').value ;
    let address = document.getElementById('address').value ;
    let staffId = document.getElementById('staff-id').value ;
    let staffName = document.getElementById('staff-name').value ;
    let quantity = document.getElementById('quantity').value ;
    let price = document.getElementById('price').value ;
    let date = document.getElementById('date').value ;
    //tinh trang don hang
    let statusOrder = document.getElementById('order-status');
    let statusStr = statusOrder.options[statusOrder.selectedIndex].text;
    let note = document.getElementById('note').value;

    if (orderId && productId && productName && customerName && customerPhone && address && staffId && staffName && quantity && price && date && statusStr){
        orders.push({
            orderId: orderId,
            productId: productId,
            productName: productName,
            customerName: customerName,
            customerPhone: customerPhone,
            address: address,
            staffId: staffId,
            staffName: staffName,
            quantity: quantity,
            price: price,
            date: date,
            statusStr: statusStr,
            note: note, 
        });

        window.localStorage.setItem('orders', JSON.stringify(orders));
        orders = JSON.parse(window.localStorage.orders);
        this.renderListOrder();
    }
}
function renderListOrder(){
    let tableContent = ``;

    for (let order of orders){
        i = `<tr>
                <td>${order.orderId}</td>
                <td>${order.customerName}</td>
                <td>${order.productName}</td>
                <td>${order.quantity}</td>
                
                <td>${order.price}</td>
                <td>${order.statusStr}</td>
                <td>
                    <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i> </button>
                    <button class="btn btn-primary btn-sm edit order__edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
        tableContent += i;
    }

    document.getElementById('grid-orders').innerHTML = tableContent;
}

function removeOrder() {
    let removeBtns = document.querySelectorAll(".trash");
    let listOrders = document.getElementById('grid-orders')

    for (let i in removeBtns) {
        removeBtns[i].onclick = function() {
            let removeConfirm
            if (confirm('Bạn có chắc muốn xóa đơn hàng này?') == true){
                removeConfirm = true
            } else{
                removeConfirm = false
            }

            if (removeConfirm) {
                // Xóa trên giao diện
                listOrders.children[i].remove();

                // Xóa trong localStorage
                orders.splice(i, 1)
                window.localStorage.setItem('orders', JSON.stringify(orders));
                ordersInfo = JSON.parse(window.localStorage.getItem('orders'))

                removeOrder()
            }
        }
    }
}

function edit() {
    orders = JSON.parse(window.localStorage.orders);

    let editBtn = document.querySelectorAll('.order__edit');

    for (let i in editBtn) {
        editBtn[i].onclick = function () {
            localStorage.setItem('index', JSON.stringify(i));
            location.href = 'admin-form-edit-order.html';
        }
    }
}

let index = JSON.parse(window.localStorage.getItem('index'))

function fillForm(i) {
    let orderId = document.getElementById('order-id') ;
    let productId = document.getElementById('product-id') ;
    let productName = document.getElementById('product-name');
    let customerName = document.getElementById('customer-name');
    let customerPhone = document.getElementById('customer-phone') ;
    let address = document.getElementById('address') ;
    let staffId = document.getElementById('staff-id');
    let staffName = document.getElementById('staff-name') ;
    let quantity = document.getElementById('quantity');
    let price = document.getElementById('price');
    let date = document.getElementById('date');
    let statusOrder = document.getElementById("order-status");
    let statusStr = statusOrder.options[statusOrder.selectedIndex].text;
    let note = document.getElementById('note');

    orderId.value = orders[i].orderId;
    productId.value = orders[i].productId;
    productName.value = orders[i].productName;
    customerName.value = orders[i].customerName;
    customerPhone.value = orders[i].customerPhone;
    address.value = orders[i].address;
    staffId.value = orders[i].staffId;
    staffName.value = orders[i].staffName;
    quantity.value = orders[i].quantity;
    price.value = orders[i].price;
    date.value = orders[i].date;
    statusStr.value = orders[i].statusStr;
    note.value = orders[i].note;
}

function update(i) {
    let orderId = document.getElementById('order-id').value ;
    let productId = document.getElementById('product-id').value ;
    let productName = document.getElementById('product-name').value ;
    let customerName = document.getElementById('customer-name').value ;
    let customerPhone = document.getElementById('customer-phone').value ;
    let address = document.getElementById('address').value ;
    let staffId = document.getElementById('staff-id').value ;
    let staffName = document.getElementById('staff-name').value ;
    let quantity = document.getElementById('quantity').value ;
    let price = document.getElementById('price').value ;
    let date = document.getElementById('date').value ;
    let statusOrder = document.getElementById("order-status");
    let statusStr = statusOrder.options[statusOrder.selectedIndex].text;
    let note = document.getElementById('note').value;


    if (orderId && productId && productName && customerName && customerPhone && address && staffId && staffName && quantity && price && date && statusStr){
        orders.splice(i, 1,{
            orderId: orderId,
            productId: productId,
            productName: productName,
            customerName: customerName,
            customerPhone: customerPhone,
            address: address,
            staffId: staffId,
            staffName: staffName,
            quantity: quantity,
            price: price,
            date: date,
            statusStr: statusStr,
            note: note, 
        });

        window.localStorage.setItem('orders', JSON.stringify(orders));
        orders = JSON.parse(window.localStorage.orders);
        this.renderListOrder();
    }

    
}

function load() {
    renderListOrder();
    removeOrder();
    edit();
}

