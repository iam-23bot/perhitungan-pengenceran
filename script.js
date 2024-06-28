function hitungPengenceran() {
    const C1 = parseFloat(document.getElementById('concentration1').value);
    const V1 = parseFloat(document.getElementById('volume1').value);
    const C2 = parseFloat(document.getElementById('concentration2').value);
    const V2 = parseFloat(document.getElementById('volume2').value);

    let hasil = '';

    if (C1 && V1 && C2) {
        const volume2Diperlukan = (C1 * V1) / C2;
        hasil = `Volume Akhir (V2) yang diperlukan adalah ${volume2Diperlukan.toFixed(2)} mL.`;
    } else if (C1 && V1 && V2) {
        const konsentrasi2Diperlukan = (C1 * V1) / V2;
        hasil = `Konsentrasi Akhir (C2) yang diperlukan adalah ${konsentrasi2Diperlukan.toFixed(2)} mol/L atau g/L.`;
    } else if (C1 && C2 && V2) {
        const volume1Diperlukan = (C2 * V2) / C1;
        hasil = `Volume Awal (V1) yang diperlukan adalah ${volume1Diperlukan.toFixed(2)} mL.`;
    } else if (V1 && C2 && V2) {
        const konsentrasi1Diperlukan = (C2 * V2) / V1;
        hasil = `Konsentrasi Awal (C1) yang diperlukan adalah ${konsentrasi1Diperlukan.toFixed(2)} mol/L atau g/L.`;
    } else {
        hasil = 'Mohon masukkan minimal tiga nilai untuk menghitung.';
    }

    document.getElementById('hasil').innerText = hasil;
}
