// Khởi tạo localStorage
if (!window.localStorage.categories) {
    window.localStorage.setItem('categories', JSON.stringify([]));
}
let categories = JSON.parse(window.localStorage.categories);

function saveCategory(){
    let id = document.getElementById('category-id').value ;
    let name = document.getElementById('category-name').value ;
    let quantity = document.getElementById('quantity').value ;
    

    if (id && name && quantity){
        categories.push({
            id: id,
            name: name,
            quantity: quantity,
        });

        localStorage.setItem('categories', JSON.stringify(categories));
        categories = JSON.parse(window.localStorage.categories);
        this.renderListCategory();
    }
}

function renderListCategory(){   
    
    let tableConent = ``;

    for (let category of categories){
        emp = `<tr>
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>${category.quantity}</td>
               
                <td>
                    <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i> </button>
                    <button class="btn btn-primary btn-sm edit employee__edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
        tableConent += emp;
    }
    
    document.getElementById('grid-categories').innerHTML = tableConent;
}

function removeCategory() {
    let removeBtns = document.querySelectorAll(".trash");
    let listCategories = document.getElementById('grid-categories')

    for (let i in removeBtns) {
        removeBtns[i].onclick = function() {
            let removeConfirm
            if (confirm('Bạn có chắc muốn xóa danh mục này?') == true){
                removeConfirm = true
            } else{
                removeConfirm = false
            }

            if (removeConfirm) {
                // Xóa trên giao diện
                listCategories.children[i].remove();

                // Xóa trong localStorage
                categories.splice(i, 1)
                window.localStorage.setItem('categories', JSON.stringify(categories));
                categoriesInfo = JSON.parse(window.localStorage.getItem('categories'))

                removeCategory()
            }
        }
    }
}


function load() {
    renderListCategory();
    removeCategory();
}

