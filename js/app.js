// click buy ticket and to ticket window
const buyTicketBtnClick = document.getElementById('btn-buy-ticket');
buyTicketBtnClick.addEventListener('click', function () {
    let ticketWindow = document.getElementById('ticket-section');
    ticketWindow.scrollIntoView({ behavior: 'smooth', block: 'start' })
});


/* Click ticket button and get value */
let perTicketValue = 550;
let seatCountValue = 0;
let className = 'Economy';
let totalAvailableSeat = 40;

// const selectedSeat = [];
const ticketSeat = document.querySelectorAll('.ticket');

let seatCount = 0;
for (const ticket of ticketSeat ) {
    // console.log(ticket);
   ticket.addEventListener('click', function () {
       seatCount++;
       if (seatCount <= 4) {
           // const ticketText = ticket.innerText;
           seatCountValue += 1;
           totalAvailableSeat -= 1;

           // append ticket name
           const seatDiv = document.getElementById('seat');
           const ticketName = ticket.innerText;
           const p = document.createElement('p');
           p.innerText = ticketName;
           seatDiv.appendChild(p);

           // append ticket class name
           const classDiv = document.getElementById('class');
           const pClass = document.createElement('p');
           pClass.innerText = className;
           classDiv.appendChild(pClass);
           // append price
           const priceDiv = document.getElementById('price');
           const pPrice = document.createElement('p');
           pPrice.innerText = perTicketValue;
           priceDiv.appendChild(pPrice);

           // get and set total price
           const totalPrice = parseFloat(document.getElementById('total-price').innerText);

           let sumTotalPrice = (perTicketValue + totalPrice).toFixed(2);
           document.getElementById('total-price').innerText = sumTotalPrice;

           const grandTotal = document.getElementById('grand-total');
           grandTotal.innerText = sumTotalPrice;


           setInnerText('seat-40', totalAvailableSeat);
           setInnerText('seat-count', seatCountValue);

           const classBg = ticket.classList.add('bg-[#1DD100]', 'text-white')
           const classRemove = ticket.classList.remove('bg-gray-200');
           const classDisable = ticket.setAttribute('disabled', '');
       } else {
           alert('You are not allow to purchase more then 4 tickets.')
       }
       
     
    });
}


// coupon code

const applyCouponBtn = document.getElementById('apply-now');
applyCouponBtn.addEventListener('click', function (e) {
    const couponCode = document.getElementById('input-coupon').value;
    const couponCodeValid = couponCode.split(' ').join('').toLowerCase();

    const totalValue = parseInt(document.getElementById('total-price').innerText);
    console.log(e);
    if (totalValue === 2200 && couponCodeValid === 'new15') {
        
        const getDiscount15 = totalValue * 15 / 100;
        const restTotal = totalValue - getDiscount15;

        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = restTotal;

        // set discount title dynamically
        const discountTitle = document.getElementById('discount-title');
        const createDiscountTitle = document.createElement('p');
        createDiscountTitle.innerText = 'Discount Price';
        discountTitle.appendChild(createDiscountTitle);
        // set discount value
        const discountValue = document.getElementById('discount-value');
        const createDiscountValue = document.createElement('p');
        createDiscountValue.innerText = 'BDT' + ' ' + getDiscount15;
        discountValue.appendChild(createDiscountValue);
        // remove coupon box
        const inputButton = document.getElementById('input-btn-value');
        inputButton.remove();


    }

    else if (totalValue === 2200 && couponCodeValid === 'couple20') {
        const getDiscount20 = totalValue * 20 / 100;

        const restTotal = totalValue - getDiscount20;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = restTotal;


        // set discount title dynamically
        const discountTitle = document.getElementById('discount-title');
        const createDiscountTitle = document.createElement('p');
        createDiscountTitle.innerText = 'Discount Price';
        discountTitle.appendChild(createDiscountTitle);
        // set discount value
        const discountValue = document.getElementById('discount-value');
        const createDiscountValue = document.createElement('p');
        createDiscountValue.innerText = 'BDT' + ' ' + getDiscount20.toFixed(2);
        discountValue.appendChild(createDiscountValue);

        const inputButton = document.getElementById('input-btn-value');
        inputButton.remove();

    }

    else if (totalValue < 2200) {
        alert('Please select minimum 4 tickets')
    }

    else {
        alert('Invalid Coupon code. Please provide and valid coupon code.')
    }

    document.getElementById('input-coupon').value = '';
});



// setup inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}