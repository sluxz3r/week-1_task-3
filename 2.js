
function member(arr) {
    let jumlah = arr.reduce((member, current) => member + current); // untuk menjumlahkan sesuai dengan isi di dalam array

    jumlah = jumlah.toString().split(''); // merubah isi array menjadi string dan pisahkan
    for (let i = 0; i < jumlah.length; i++) {
        jumlah[i]=Number(jumlah[i]);
        }
        if (jumlah.length > 1) {
           member(jumlah);
        } else {
            console.log(jumlah);
            
        }
        
}

member([123, 9, 27]);
