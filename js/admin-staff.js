// Khởi tạo localStorage
if (!window.localStorage.employees) {
    window.localStorage.setItem('employees', JSON.stringify([]));
}
let employees = JSON.parse(window.localStorage.employees);


function saveEmployee() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    let position = document.getElementById('position').value;
    let address = document.getElementById('address').value;

    if (id && name && gender && phone && position && address) {
        employees.push({
            id: id,
            name: name,
            gender: gender,
            phone: phone,
            position: position,
            address: address,
        });

        localStorage.setItem('employees', JSON.stringify(employees));
        employees = JSON.parse(window.localStorage.employees);
        this.renderListEmployee();
    }
}

function renderListEmployee() {

    let tableConent = ``;

    for (let employee of employees) {
        emp = `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>${employee.phone}</td>
                <td>${employee.position}</td>
                <td>${employee.address}</td>
                <td>
                    <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i> </button>
                    <button class="btn btn-primary btn-sm edit employee__edit" type="button" title="Sửa"><i class="fa fa-edit"></i></button>
                    <button class="btn btn-primary btn-sm " type="button" title="Chi tiết"><i class="fa-solid fa-info"></i></button>
                </td>
            </tr>`
        tableConent += emp;
    }

    document.getElementById('grid-employees').innerHTML = tableConent;
}

function removeEmployee() {
    let removeBtns = document.querySelectorAll(".trash");
    let listEmployees = document.getElementById('grid-employees')

    for (let i in removeBtns) {
        removeBtns[i].onclick = function () {
            let removeConfirm
            if (confirm('Delete employee?') == true) {
                removeConfirm = true
            } else {
                removeConfirm = false
            }

            if (removeConfirm) {
                // Xóa trên giao diện
                listEmployees.children[i].remove();

                // Xóa trong localStorage
                employees.splice(i, 1)
                window.localStorage.setItem('employees', JSON.stringify(employees));
                productsInfo = JSON.parse(window.localStorage.getItem('employees'))

                removeEmployee()
            }
        }
    }
}

function edit() {
    employees = JSON.parse(window.localStorage.employees);

    let editBtn = document.querySelectorAll('.employee__edit');

    for (let i in editBtn) {
        editBtn[i].onclick = function () {
            localStorage.setItem('index', JSON.stringify(i));
            location.href = 'admin-form-edit-staff.html';
        }
    }
}

let index = JSON.parse(window.localStorage.getItem('index'))

function fillForm(i) {
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let gender = document.getElementById('gender');
    let phone = document.getElementById('phone');
    let position = document.getElementById('position');
    let address = document.getElementById('address');

    id.value = employees[i].id;
    name.value = employees[i].name;
    gender.value = employees[i].gender;
    phone.value = employees[i].phone;
    position.value = employees[i].position;
    address.value = employees[i].address;
}

function update(i) {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    let position = document.getElementById('position').value;
    let address = document.getElementById('address').value;

    if (id && name && gender && phone && position && address) {
            employees.splice(i, 1, {
            id: id,
            name: name,
            gender: gender,
            phone: phone,
            position: position,
            address: address,
        })
        localStorage.setItem('employees', JSON.stringify(employees));
        employees = JSON.parse(window.localStorage.employees);
        this.renderListEmployee();
    }
}
function load() {
    renderListEmployee();
    removeEmployee();
    edit();
}

