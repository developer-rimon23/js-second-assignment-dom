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
const ticketSeat = document.querySelectorAll('.ticket');
for (const ticket of ticketSeat) {
    // console.log(ticket)
    ticket.addEventListener('click', function () {
        const ticketText = ticket.innerText;
        seatCountValue += 1;

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





        setInnerText('seat-count', seatCountValue)

    });
}


// setup inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}