function hitungPengenceran() {
    const C1 = parseFloat(document.getElementById('concentration1').value);
    const V1 = parseFloat(document.getElementById('volume1').value);
    const C2 = parseFloat(document.getElementById('concentration2').value);
    const V2 = parseFloat(document.getElementById('volume2').value);

    if (!C1 || !V1 || !C2 || !V2) {
        document.getElementById('hasil').innerText = 'Mohon masukkan semua nilai.';
        return;
    }

    const hasil = (C1 * V1) === (C2 * V2);
    const volumeDiperlukan = (C1 * V1) / C2;

    if (hasil) {
        document.getElementById('hasil').innerText = `Larutan sudah benar. Volume yang diperlukan adalah ${volumeDiperlukan} mL.`;
    } else {
        document.getElementById('hasil').innerText = `Pengenceran diperlukan. Volume yang diperlukan adalah ${volumeDiperlukan} mL.`;
    }
}
