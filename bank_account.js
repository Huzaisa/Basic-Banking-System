// Deklarasi saldo dengan nilai awal 0
let saldo = 0; //global scope

// Implementasikan fungsi "tambahSaldo()" untuk menampilkan windows prompt
function tambahSaldo(tambahan) {
    //local scope
    do {
        tambahan = prompt("Masukkan jumlah saldo yang ingin ditambahkan:");

        // Mengecek apakah pengguna membatalkan operasi
        if (tambahan == null) {
            return null; // Keluar dari fungsi jika mengklik cancel pada prompt
        }

        tambahan = +tambahan; // Menggunakan operator unary untuk mengubah tambahan yang bernilai string menjadi bilangan

        if (isNaN(tambahan) || tambahan <= 0) { // jika tambahan bukan angka atau kurang dari samadengan 0
            alert('Jumlah yang dimasukkan harus berupa angka positif dan lebih besar dari nol')

        }
    } while (isNaN(tambahan) || tambahan <= 0); // Mengulang jika memasukkan saldonya tidak sesuai

    // Setiap kali saldo diubah, tampilkan pesan kepada pengguna
    saldo += tambahan;
    alert(`Saldo berhasil ditambahkan. Saldo sekarang: ${saldo}`);
    console.log(`Saldo berhasil ditambahkan${saldo}. Saldo sekarang: ${saldo}`);
    return saldo; // mengembalikan/mengeluarkan nilai saldo yang sudah berubah
}

// Implementasikan fungsi "kurangiSaldo()"
function kurangiSaldo(pengurangan) {
    do {
        pengurangan = prompt("Masukkan jumlah saldo yang ingin dikurangi:");

        // Mengecek apakah pengguna membatalkan operasi
        if (pengurangan == null) {
            return alert("Operasi dibatalkan."); // Keluar dari fungsi jika dibatalkan
        }

        pengurangan = +pengurangan; // Menggunakan operator unary untuk mengubah pengurangan yang bernilai string menjadi bilangan

        // jikaa bukan berupa angka atau kurang dari sama dengan 0 atau lebih besar dari saldo 
        if (isNaN(pengurangan) || pengurangan <= 0 || pengurangan > saldo) {
            alert("Jumlah yang dimasukkan harus berupa angka positif dan tidak lebih besar dari saldo).");
        }
    } while (isNaN(pengurangan) || pengurangan <= 0 || pengurangan > saldo); // Mengulang jika memasukkan saldonya tidak sesuai

    // Setiap kali saldo diubah, tampilkan pesan kepada pengguna
    saldo -= pengurangan;
    alert(`Saldo berhasil dikurangi. Saldo sekarang: ${saldo}`);
    console.log(`Saldo berhasil dikurangi ${pengurangan}. Saldo sekarang: ${saldo}`);

}

// Pemanggilan/penggunaan fungsi 
if (tambahSaldo() == null) {
    alert("Operasi dibatalkan.");
} else {
    kurangiSaldo();
}