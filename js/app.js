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

const ticketSeat = document.querySelectorAll('.ticket');
for (const ticket of ticketSeat) {
    // console.log(ticket)
    ticket.addEventListener('click', function () {

        if (ticketSeat.length === 4) {
           
        }
      

        const ticketText = ticket.innerText;
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

        const buttons = document.getElementById('ticket');

    
        setInnerText('seat-40', totalAvailableSeat);
        setInnerText('seat-count', seatCountValue);
        
        const classBg = ticket.classList.add('bg-[#1DD100]','text-white')
        const classRemove = ticket.classList.remove('bg-gray-200');
        const classDisable = ticket.setAttribute('disabled','');


    });
}


// set button background 



// setup inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}