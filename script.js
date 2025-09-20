// Dil Switch Fonksiyonu
function switchLang(lang) {
    // Elementleri al
    const sloganEN = document.getElementById('slogan-en');
    const sloganTR = document.getElementById('slogan-tr');
    const donateEN = document.getElementById('donate-en');
    const donateTR = document.getElementById('donate-tr');
    const poster = document.getElementById('poster');
    const meow = document.getElementById('meow');
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Aktif butonu güncelle
    langBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (lang === 'tr') {
        // EN → TR Animasyonu
        sloganEN.classList.add('fade-out');
        setTimeout(() => {
            sloganEN.style.display = 'none';
            sloganTR.style.display = 'block';
            sloganTR.classList.add('slide-in');
            donateEN.style.display = 'none';
            donateTR.style.display = 'inline-block';
            poster.style.transform = 'scale(1.05)';
            meow.classList.add('show');
            setTimeout(() => meow.classList.remove('show'), 2000);
            
            // Sayfa başlığını değiştir
            document.title = 'Sana İhtiyacımız Var - Sokak Hayvanları';
        }, 300);
    } else {
        // TR → EN Animasyonu
        sloganTR.classList.remove('slide-in');
        sloganTR.classList.add('fade-out');
        setTimeout(() => {
            sloganTR.style.display = 'none';
            sloganEN.style.display = 'block';
            sloganEN.classList.remove('fade-out');
            donateTR.style.display = 'none';
            donateEN.style.display = 'inline-block';
            poster.style.transform = 'scale(1)';
            meow.classList.remove('show');
            
            // Sayfa başlığını değiştir
            document.title = 'We Want You Pets - Street Animals';
        }, 300);
    }
}

// Bağış Fonksiyonu
function donateNow(lang) {
    if (lang === 'en') {
        // Stripe/PayPal linki (gerçek entegrasyon için değiştir)
        window.open('https://www.paypal.com/donate?hosted_button_id=XXXXXXXX', '_blank');
    } else {
        // iyzico linki (gerçek entegrasyon için değiştir)
        window.open('https://www.paytr.com/odeme/link/XXXXXXX', '_blank');
    }
    
    // Teşekkür animasyonu
    const meow = document.getElementById('meow');
    meow.textContent = '🐶🐱 Teşekkürler! Can kurtardın!';
    meow.classList.add('show');
    setTimeout(() => meow.classList.remove('show'), 3000);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    console.log('We Want You Pets hazır! 🐱');
    
    // Mobil dokunma optimizasyonu
    if ('ontouchstart' in window) {
        document.body.classList.add('mobile');
    }
});
