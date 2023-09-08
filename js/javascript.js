const card = [
    {
        id:'0',
        title:'top',
        sticker:'New_Arrival',
        img:'../images/top2.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/8.png?v=1651211561000',
        item:'TEES & POLO SHIRTS',
        name:'Z-BOT REDER T-SHIRT',
        price:'349.000'
    },

    {
        id:'1',
        title:'accessory',
        sticker:'New_Arrival',
        img:'../images/accessory1.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/3-3.png?v=1654332297573',
        item:'CAPS',
        name:'CLOWNZ C LETTER CAP',
        price:'299.000'
    },

    {
        id:'2',
        title:'top',
        sticker:'New_Arrival',
        img:'../images/top6.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/cz-0002-jpeg.jpg?v=1653383111000',
        item:'SƠ MI & FLANNEL SHIRTS',
        name:'CLOWNZ LEOPARD SHIRT',
        price:'399.000'
    },

    {
        id:'3',
        title:'top',
        sticker:'New_Arrival',
        img:'../images/top3.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/6.png?v=1651209410000',
        item:'TEES & POLO SHIRTS',
        name:'Z-BOT APOCALYPSE T-SHIRT',
        price:'349.000'
    },

    {
        id:'4',
        title:'accessory',
        sticker:'New_Arrival',
        img:'../images/accessory3.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/7-2.png?v=1653621537000',
        item:'TÚI CHÉO',
        name:'CLOWNZ UTILITY CROSSBAG',
        price:'449.000'
    },

    {
        id:'5',
        title:'bottom',
        sticker:'New_Arrival',
        img:'../images/bottom4.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/pk-0007.png?v=1653383103000',
        item:'SHORTS & TRUNKS',
        name:'CLOWNZ LEOPARD PANTS',
        price:'349.000'
    },

    {
        id:'6',
        title:'bottom',
        sticker:'Best Seller',
        img:'../images/bottom2.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/1-04-e0274b24-7dce-498a-ac70-bb5e84465784.jpg?v=1651134389000',
        item:'PANTS & JEANS',
        name:'FINISH LINE TRACK PANTS',
        price:'349.000'
    },

    {
        id:'7',
        title:'accessory',
        sticker:'Hot',
        img:'../images/accessory2.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownz-0102-copy.jpg?v=1634365962000',
        item:'BACKPACK',
        name:'CLOWNZ X SGS BACKPACK',
        price:'650.000'
    },

    {
        id:'8',
        title:'top',
        sticker:'New_Arrival',
        img:'../images/top7.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/3.png?v=1652157120000',
        item:'HOODIE',
        name:'CLOWNZ BASIC HOODIE V3',
        price:'499.000'
    },

    {
        id:'9',
        title:'bottom',
        sticker:'Best Seller',
        img:'../images/bottom1.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/1-02-38b84ddc-7983-49fa-9599-5781536479aa.jpg?v=1648091850000',
        item:'PANTS & JEANS',
        name:'CLOWNZ STRAIGHT PANTS',
        price:'499.000'
    },

    {
        id:'10',
        title:'bottom',
        sticker:'New Arrival',
        img:'../images/bottom3.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/cz-0012-large-jpeg.jpg?v=1646736708000',
        item:'SHORTS & TRUNKS',
        name:'CLOWNZ BASKETBALL SHORT',
        price:'399.000'
    },

    {
        id:'11',
        title:'bottom',
        sticker:'Best Seller',
        img:'../images/bottom5.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-08-2231155b-18e7-46f6-9471-6a3d9da6c779.jpg?v=1648091416640',
        item:'PANTS & JEANS',
        name:'CLOWNZ GRAFFITI TAG PANTS',
        price:'549.000'
    },

    {
        id:'12',
        title:'accessory',
        sticker:'New_Arrival',
        img:'../images/accessory4.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/cz-0440-large.png?v=1653619691000',
        item:'BACKPACK',
        name:'CLOWNZ SPORTY CAP',
        price:'299.000'
    },

    {
        id:'13',
        title:'accessory',
        sticker:'New_Arrival',
        img:'../images/accessory5.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/cz-0049-2-large-jpeg.jpg?v=1647070361350',
        item:'BACKPACK',
        name:'CLOWNZ SPORTY CAP',
        price:'299.000'
    },

    {
        id:'14',
        title:'top',
        sticker:'New_Arrival',
        img:'../images/top5.webp',
        img_change:'https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2a.png?v=1651214396000',
        item:'TEES & POLO SHIRTS',
        name:'Z-BOT ICON T-SHIRT',
        price:'349.000'
    },
];

//home
var count_new = 0;
new_arrival_home = '';

var count_top = 0;
top_home = '';

var count_bottom = 0;
bottom_home = '';

var count_accessory = 0;
accessory_home = '';


//all new-arrival
all_new_arrival = '';

card.forEach(element => {
    if(element.sticker=='New_Arrival'){
        all_new_arrival += '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">'+
                                '<div class="object position-relative">'+
                                    '<a class="card card-active text-decoration-none border-0 mx-2" href="#">'+ 
                                        '<div class="newarrival">'+
                                            '<img class="card-img-top" src="'+ element.img +'" alt="">'+
                                            '<img src="'+ element.img_change +'" alt="" class="card-img-top img-change">'+
                                            '<div class="nhandan text-center">'+ element.sticker + '</div>'+
                                        '</div>'+
                                        '<div class="card-body text-dark text-center">'+
                                            '<p class="card-text mb-0"><small class="text-black-50">'+ element.item +'</small></p>'+
                                            '<h6 class="card-title-1 fw-bold">' + element.name + '</h6>'+
                                            '<p class="card-text-price mb-0">' + element.price + '<sup><u>đ</u></sup></p>'+
                                        '</div>'+
                                        '<div class="product-card__action text-center">'+
                                            '<a href="product-details.html" class="add_to_cart" item="Tùy chọn">Chi tiết</a>'+
                                        '</div>'+
                                    '</a>'+
                                '</div>'+
                            '</div>';
    }

    if(element.sticker=='New_Arrival' && count_new < 5){
        new_arrival_home += '<div class="col-md-3">'+
                            '<div class="object position-relative">'+
                                '<a class="card card-active text-decoration-none border-0" href="#">'+ 
                                    '<div class="newarrival">'+
                                        '<img class="card-img-top" src="'+ element.img +'" alt="">'+
                                        '<img src="'+ element.img_change +'" alt="" class="card-img-top img-change">'+
                                        '<div class="nhandan text-center">'+ element.sticker + '</div>'+
                                    '</div>'+
                                    '<div class="card-body text-dark text-center">'+
                                        '<p class="card-text mb-0"><small class="text-black-50">'+ element.item +'</small></p>'+
                                        '<h6 class="card-title-1 fw-bold">' + element.name + '</h6>'+
                                        '<p class="card-text-price mb-0">' + element.price + '<sup><u>đ</u></sup></p>'+
                                    '</div>'+
                                    '<div class="product-card__action text-center">'+
                                        '<a href="product-details.html" class="add_to_cart" item="Tùy chọn">Chi tiết</a>'+
                                    '</div>'+
                                '</a>'+
                            '</div>'+
                        '</div>'; 
        count_new++;
    }

    if(element.title=='top' &&  count_top < 5){
        top_home +=  '<div class="col-md-3">'+
                    '<div class="object position-relative">'+
                        '<a class="card card-active text-decoration-none border-0" href="#">'+ 
                            '<div class="newarrival">'+
                                '<img class="card-img-top" src="'+ element.img +'" alt="">'+
                                '<img src="'+ element.img_change +'" alt="" class="card-img-top img-change">'+
                                '<div class="nhandan text-center">'+ element.sticker + '</div>'+
                            '</div>'+
                            '<div class="card-body text-dark text-center">'+
                                '<p class="card-text mb-0"><small class="text-black-50">'+ element.item +'</small></p>'+
                                '<h6 class="card-title-1 fw-bold">' + element.name + '</h6>'+
                                '<p class="card-text-price mb-0">' + element.price + '<sup><u>đ</u></sup></p>'+
                            '</div>'+
                            '<div class="product-card__action text-center">'+
                                '<a href="product-details.html" class="add_to_cart" item="Tùy chọn">Chi tiết</a>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                '</div>'; 
        count_top++;
    }

    else if(element.title=='bottom' && count_bottom < 5){
        bottom_home +=  '<div class="col-md-3">'+
                    '<div class="object position-relative">'+
                        '<a class="card card-active text-decoration-none border-0" href="#">'+ 
                            '<div class="newarrival">'+
                                '<img class="card-img-top" src="'+ element.img +'" alt="">'+
                                '<img src="'+ element.img_change +'" alt="" class="card-img-top img-change">'+
                                '<div class="nhandan text-center">'+ element.sticker + '</div>'+
                            '</div>'+
                            '<div class="card-body text-dark text-center">'+
                                '<p class="card-text mb-0"><small class="text-black-50">'+ element.item +'</small></p>'+
                                '<h6 class="card-title-1 fw-bold">' + element.name + '</h6>'+
                                '<p class="card-text-price mb-0">' + element.price + '<sup><u>đ</u></sup></p>'+
                            '</div>'+
                            '<div class="product-card__action text-center">'+
                                '<a href="product-details.html" class="add_to_cart" item="Tùy chọn">Chi tiết</a>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                '</div>';
        count_bottom++; 
    }
    else if(element.title=='accessory' && count_accessory < 5) {
        accessory_home +=  '<div class="col-md-3">'+
                    '<div class="object position-relative">'+
                        '<a class="card card-active text-decoration-none border-0" href="#">'+ 
                            '<div class="newarrival">'+
                                '<img class="card-img-top" src="'+ element.img +'" alt="">'+
                                '<img src="'+ element.img_change +'" alt="" class="card-img-top img-change">'+
                                '<div class="nhandan text-center">'+ element.sticker + '</div>'+
                            '</div>'+
                            '<div class="card-body text-dark text-center">'+
                                '<p class="card-text mb-0"><small class="text-black-50">'+ element.item +'</small></p>'+
                                '<h6 class="card-title-1 fw-bold">' + element.name + '</h6>'+
                                '<p class="card-text-price mb-0">' + element.price + '<sup><u>đ</u></sup></p>'+
                            '</div>'+
                            '<div class="product-card__action text-center">'+
                                '<a href="product-details.html" class="add_to_cart" item="Tùy chọn">Chi tiết</a>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                '</div>'; 
        count_accessory++;
    }

});

document.getElementById('new_arrival').innerHTML = new_arrival_home;
document.getElementById('top').innerHTML = top_home;
document.getElementById('bottom').innerHTML = bottom_home;
document.getElementById('accessory').innerHTML = accessory_home;

document.getElementById('all_new_arrival').innerHTML = all_new_arrival;




var dropdownButton = document.getElementById('list')
console.log(dropdownButton)

dropdownButton.addEventListener('click', function(event){
    event.preventDefault();
    let state = this.getAttribute('open');
    if (state){
        this.removeAttribute('open');
    }
    else {
        this.setAttribute('open', true)
    }
})
