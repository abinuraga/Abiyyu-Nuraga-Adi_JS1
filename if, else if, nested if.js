let tinggiBadan = 110;
let izinOrangTua = true;

if (tinggiBadan >= 150) {
    console.log("Anda dapat menaiki wahana di kolam renang.");
} else {
    if (izinOrangTua) {
        if (tinggiBadan >= 120) {
            console.log("Anda dapat menaiki wahana ini.");
        } else {
            console.log("Maaf, Anda terlalu pendek untuk menaiki wahana ini.");
        }
    } else {
        console.log("Maaf, Anda harus memiliki tinggi badan minimal 150 cm atau memiliki izin orang tua untuk menaiki wahana di kolam renang.");
    }
}