// ===== Ganti tema =====
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.body;

btnTema.addEventListener('click', function () {
bodyHalaman.classList.toggle('dark-mode');
btnTema.textContent = bodyHalaman.classList.contains('dark-mode')
? '☀ Mode Terang'
: '🌙 Mode Gelap';
});

// ===== Modal kontak =====
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
event.preventDefault(); // cegah link mailto: terbuka
elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
elemenModal.classList.remove('show');
});

// ===== Salin email =====
const btnSalinEmail = document.querySelector('#btnSalinEmail');
const emailKontak = 'kursiibra08@gmail.com';

btnSalinEmail.addEventListener('click', async function () {
try {
await navigator.clipboard.writeText(emailKontak);
} catch (err) {
// cadangan jika Clipboard API tidak tersedia
const temp = document.createElement('textarea');
temp.value = emailKontak;
document.body.appendChild(temp);
temp.select();
document.execCommand('copy');
temp.remove();
}
btnSalinEmail.textContent = 'Tersalin!';
setTimeout(function () {
btnSalinEmail.textContent = 'Salin Email';
}, 1500);
});