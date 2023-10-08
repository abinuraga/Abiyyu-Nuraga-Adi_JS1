function daftarMerekMobil() {
    let merekMobil = [
        "Toyota",
        "Honda",
        "Nissan",
        "Ford",
        "Chevrolet",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Hyundai",
        "Volkswagen"
    ];
    return merekMobil;
}

let merekMobil = daftarMerekMobil();
console.log("Berikut adalah 10 merek mobil:");
for (let i = 0; i < merekMobil.length; i++) {
    console.log((i + 1) + ". " + merekMobil[i]);
}