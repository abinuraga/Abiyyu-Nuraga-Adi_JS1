let bulan = 1;

do {
    let namaBulan;
    
    switch (bulan) {
        case 1:
            namaBulan = "Januari";
            break;
        case 2:
            namaBulan = "Februari";
            break;
        case 3:
            namaBulan = "Maret";
            break;
        case 4:
            namaBulan = "April";
            break;
        case 5:
            namaBulan = "Mei";
            break;
        case 6:
            namaBulan = "Juni";
            break;
        case 7:
            namaBulan = "Juli";
            break;
        case 8:
            namaBulan = "Agustus";
            break;
        case 9:
            namaBulan = "September";
            break;
        case 10:
            namaBulan = "Oktober";
            break;
        case 11:
            namaBulan = "November";
            break;
        case 12:
            namaBulan = "Desember";
            break;
        default:
            namaBulan = "Bulan tidak valid";
    }
    
    console.log("Bulan ke-" + bulan + " adalah " + namaBulan);
    
    bulan++;
} while (bulan <= 12);