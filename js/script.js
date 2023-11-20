const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector('#menu-btn');
const closeBtn= document.querySelector('#close-btn');
const themeToggler= document.querySelector('.theme-toggler');

//SHOW SIDEBAR
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display="block";
})

//CLOSE SIDEBAR
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display="none";
})

//CHANGE THEME
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//FILL ORDERS IN TABLE
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = '
                        <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.productStatus}</td>
                            <td class="${order.shipping===Z;;;;;;;;;;;;;;;;;;?}">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        ';
    
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

