
address = [
    {
        province:'Hà Nội',
        district: [
            {
                name:'Thị xã Sơn Tây',
                ward:['Phường Lê Lợi','Phường Phú Thịnh','Phường Ngô Quyền','Phường Quang Trung']
            },
            {
                name:'Quận Ba Đình',
                ward:['Phường Phúc Xá','Phường Trúc Bạch','Phường Vĩnh Phúc','Phường Cống Vị']
            },
            {
                name:'Quận Cầu Giấy',
                ward:['Phường Nghĩa Đô','Phường Mai Dịch','Phường Dịch Vọng','Phường Nghĩa Tân']
            },
            {
                name:'Quận Đống Đa',
                ward:['Phường Cát Linh','Phường Văn Miếu','Phường Quốc Tử Giám','Phường Láng Thượng']
            },
        ]
    },
    {
        province:'TP Hồ Chí Minh',
        district: [
            {
                name:'Quận 1',
                ward:['Phường Tân Định','Phường Đa Kao','Phường Bến Thành','Phường Nguyễn Thái Bình']
            },
            {
                name:'Quận 2',
                ward:['Phường Thảo Điền','Phường An Phú','Phường Bình An','Phường Bình Trưng Tây']
            },
            {
                name:'Quận 3',
                ward:['Phường 8','Phường 7','Phường 14','Phường 12']
            },
            {
                name:'Quận 4',
                ward:['Phường 13','Phường 9','Phường 6','Phường 3']
            },
        ]
    },
    {
        province:'Đà Nẵng',
        district: [
            {
                name:'Quận Hải Châu',
                ward:['Phường Thanh Bình','Phường Thuận Phước','Phường Thạch Thang','Phường Nam Dương']
            },
            {
                name:'Quận Thanh Khê',
                ward:['Phường Tam Thuận','Phường Thanh Khê Tây','Phường Xuân Hà','Phường Tân Chính']
            },
            {
                name:'Quận Sơn Trà',
                ward:['Phường Thọ Quang','Phường Mân Thái','Phường An Hải Bắc','Phường Phương Mỹ']
            },
            {
                name:'Quận Ngũ Hành Sơn',
                ward:['Phường Mỹ An','Phường Khuê Mỹ','Phường Hòa Quý','Phường Hòa Hải']
            },
        ]
    },
]


var sltProvince = document.getElementById('sltProvince');
var sltDistrict = document.getElementById('sltDistrict');
var sltWard = document.getElementById('sltWard');

str_district = '';
str_ward = ''; 

sltProvince.onchange = () => {
    str_district = '';
    sltDistrict.innerHTML='';
    address.forEach(element => {
        if(sltProvince.value == element.province){
            element.district.forEach(item => {
                console.log(item)
                str_district += '<option>' + item.name + '</option>';
            });
        }
    })
    sltDistrict.innerHTML += '<option>---</option>' + str_district;
}

sltDistrict.onchange = () => {
    str_ward = '';
    sltWard.innerHTML='';
    address.forEach(element => {
        element.district.forEach(item => {
            if(sltDistrict.value == item.name){
                item.ward.forEach(subitem => {
                    str_ward +=  '<option>' + subitem + '</option>';
                })
            }
        })
       
    })
    sltWard.innerHTML += '<option>---</option>' + str_ward;
}