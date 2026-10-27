// 1. Ambil elemen HTML yang dibutuhkan dan simpan di Variabel
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');
// 2. Beri perintah saat tombol diklik (Event Listener)
btnTema.addEventListener('click', function() {
 // toggle akan menambah class 'light-mode' jika belum ada,
 // dan menghapusnya jika sudah ada.
 bodyHalaman.classList.toggle('light-mode');

 // Opsi tambahan: Ubah teks ikon di dalam tombol
 if (bodyHalaman.classList.contains('light-mode')) {
 btnTema.textContent = '🌙 Mode Gelap';
 } else {
 btnTema.textContent = '☀️ Mode Terang';
 }
});// 1. Ambil tombol 'Kirim Pesan' yang baru saja kamu beri id="btnKontak"
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');
// 2. Event saat tombol Kirim Pesan ditekan
btnBukaModal.addEventListener('click', function(event) {
 event.preventDefault(); // Mencegah link pindah halaman / buka email
 elemenModal.classList.add('show'); // Tampilkan modal
});
// 3. Event saat tombol Tutup ditekan
btnTutupModal.addEventListener('click', function() {
 elemenModal.classList.remove('show'); // Sembunyikan modal
});