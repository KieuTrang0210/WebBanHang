//khoi tao localStorage
if(!window.localStorage.products){
    window.localStorage.setItem('products', JSON.stringify([]));
}
let products = JSON.parse(window.localStorage.products);

//lấy src ảnh
let productImg = document.getElementById("image");
let imgSrc
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imgSrc = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
productImg.onchange = function (event) {
    readURL(this)
    const { files } = event.target;
    // fileName.innerText = files[0].name
}

function saveProduct(){
   
    //lay thong tin tu form them don hang
    let productId = document.getElementById('product-id').value ;
    let productName = document.getElementById('product-name').value ;
    let price = document.getElementById('price').value ;
    let quantity = document.getElementById('quantity').value ;
    let date = document.getElementById('date').value ;
   
    let category = document.getElementById('listCategories');
    let categoryStr = category.options[category.selectedIndex].text;
    
    

    if (productId && productName && price && quantity && date &&  categoryStr){
        products.push({
            productId: productId,
            productName: productName,
            price: price,
            quantity: quantity,
            date: date,
            categoryStr: categoryStr,
            imgSrc: imgSrc,
        });

        window.localStorage.setItem('products', JSON.stringify(products));
        products = JSON.parse(window.localStorage.products);
        this.renderListProduct();
    }
}
function renderListProduct(){
    let tableContent = ``;

    for (let product of products){
        i = `<tr>
                <td>${product.productId}</td>
                <td>${product.productName}</td>
                <td><img style="height: 50px; width: 50px" src="${product.imgSrc}" alt="Product"></td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.categoryStr}</td>
                <td>
                    <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i> </button>
                    <button class="btn btn-primary btn-sm edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
        tableContent += i;
    }

    document.getElementById('grid-products').innerHTML = tableContent;
}

function removeProduct() {
    let removeBtns = document.querySelectorAll(".trash");
    let listProducts = document.getElementById('grid-products')

    for (let i in removeBtns) {
        removeBtns[i].onclick = function() {
            let removeConfirm
            if (confirm('Bạn có chắc muốn xóa sản phẩm này?') == true){
                removeConfirm = true
            } else{
                removeConfirm = false
            }

            if (removeConfirm) {
                // Xóa trên giao diện
                listProducts.children[i].remove();

                // Xóa trong localStorage
                products.splice(i, 1)
                window.localStorage.setItem('products', JSON.stringify(products));
                productsInfo = JSON.parse(window.localStorage.getItem('products'))

                removeProduct()
            }
        }
    }
}


function load() {
    renderListProduct();
    removeProduct();
}

