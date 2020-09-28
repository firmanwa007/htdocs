/*var nama = prompt("Nama: ","Masukkan Nama");
var umur = prompt("Umur: ","Masukkan Umur");
var status = prompt("Status: ","Masukkan Status");
var tinggi = prompt("Tinggi Badan: ","Masukkan Tinggi Badan");
document.write("Nama : " + nama +"<br>");
document.write("Umur : " + umur +"<br>");
document.write("Status : " + status +"<br>");
document.write("Tinggi Badan : " + tinggi + " cm" +"<br>");*/

/*var jawaban = confirm("apakah sudah yakin dengan jawaban ini?");
document.write("jawaban anda : "+jawaban);*/

/*"use strict"
v = 100
document.write(v)*/

// function Penjumlahan(){
//     var bil1 = parseFloat(document.pejulamahan.bilangan1.value);
//     if (isNaN (bil1))
//         bil1 = 0.0;
//     var bil2 = parseFloat(document.pejulamahan.bilangan2.value);
//     if (isNaN (bil2))
//         bil2 = 0.0;
//     var hasil = bil1 + bil2;
//     alert("hasil penjumlahan = "+hasil);
// }

// function formtext() {
// 	// body...
// 	var nama = (document.forms.nama.value);
// 	var alamat = (document.forms.alamat.value);
// 	var nohp =  (document.forms.nohp.value);

// 	document.forms.namaout.value = nama;
// 	document.forms.alamatout.value = alamat;
// 	document.forms.hpout.value = nohp;
// }




/*var bil,jenis
bil = prompt ("Masukkan Bilangan")

// if (bil % 2 == 0) {
//     alert(Bilangan Genap)
// }else{
//     alert("Bilangan Ganjil")
// }
 
 if (bil > 0) {
    jenis = ("Bilangan Positif")
 }else if (bil < 0) {
    jenis = ("Bilangan Negatif")
 }else if (bil == "") {
    jenis = ("Anda Belum Memasukkan Bilangan")
 }else if (bil == 0) {
    jenis = ("Bilangan Nol")
 } else if (bil) {
    jenis = ("Bukan Angka")
 } 

 alert(jenis)
*/

/*var nilai = prompt("Masukkan Nilai")

if (nilai >= 90 && nilai <= 100) {
    alert("Nilai A")
} else if (nilai >= 80 && nilai <= 90) {
    alert("Nilai B")
} else if (nilai >= 60 && nilai <=80) {
    alert("Nilai C")
} else if (nilai >= 50 && nilai <=60) {
    alert("Nilai D")
} else if (nilai >= 0 && nilai <=50) {
    alert("Nilai E")
}
*/

/*function tampilkan(){
    var bil,ket
    bil = parseFloat(document.fform.mie.value)
    if (isNaN(bil)) {
        bil = eval(bil);
    }
    switch(bil){
        case 1:
            ket = "Harga Indomie ayam 5000 rupiah"
        break
        case 2:
            ket = "Harga Indomie rendang 2300 rupiah"
        break
        case 3:
            ket = "Harga Indomie kare ayam 4500 rupiah"
        break
        case 4:
            ket = "Harga Indomie gulai 9000 rupiah"
        break
        case 5:
            ket = "Harga Indomie rica rica 9900 rupiah"
        break
        case 6:
            ket = "Harga Indomie seafood 5900 rupiah"
        break
        default:
            ket = "Salah Menginput"
    }  
    alert(ket)
}*/
/*for (var i = 0; i < 7; i++) {
    document.write(i);
}*/
function Perulangan(){
    n = parseFloat(document.loop.for.value);
    nama = document.loop.nama.value;
    if (isNaN(n)) {
        n = eval(n) 
    }
    for (var i = 1; i<=n; i++) {
        document.write(i+" "+nama+"<br>")
    }
}