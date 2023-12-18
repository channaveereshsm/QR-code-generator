let btn = document.querySelector('#generate');
let qrcode = document.querySelector('.qrcode');

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    let text = document.querySelector('#text').value.trim();

    if (text === '') {
        alert('Please enter some text.');
    } else {
      
            let qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;
            
            qrcode.src = qr;
            qrcode.classList.add('active');

           
    }
});