function tentukanHari(angka) {
    switch (angka) {
        case 1:
            return "Senin";
        case 2:
            return "Selasa";
        case 3:
            return "Rabu";
        case 4:
            return "Kamis";
        case 5:
            return "Jumat";
        case 6:
            return "Sabtu";
        case 7:
            return "Minggu";
        default:
            return "Tidak valid";
    }
}

let angkaHari = 4;
let hari = tentukanHari(angkaHari);
console.log("Hari ini adalah " + hari);