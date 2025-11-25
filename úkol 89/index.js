// index.js

// Sekvence: definujeme pole známek
const grades = [1, 2, 1, 3, 2, 1, 1, 2];

// Vlastní funkce: výpočet průměru
function calculateAverage(arr) {
    let sum = 0;

    // Cyklus: projdeme pole
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;

    // Podmínka: vyhodnocení výsledku
    if (average <= 1.5) {
        console.log("Výborný průměr:", average.toFixed(2));
    } else {
        console.log("Průměr je:", average.toFixed(2));
    }
}

// Spuštění funkce
calculateAverage(grades);
