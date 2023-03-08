// 1. Buat method untuk menambahkan data ke dalam suatu array.
// 2. Buat method untuk mengambil data dari dalam array berdasarkan index
// 3. buat method untuk mengganti nilai dari sebuah index pada array

let bahanMasak = [];

const pushToArray = (arrayTarget, ...value) => {
  arrayTarget.push(...value);
};

const getArrayValue = (arrayTarget, index) => {
  return arrayTarget[index];
};

const setArrayValue = (arrayTarget, index, value) => {
  arrayTarget[index] = value;
};

console.log(`Nilai array bahanMasak saat awal deklarasi \n[${bahanMasak}] \n`);
pushToArray(bahanMasak, 'Garam', 'Tomat', 'Bawang Merah', 'Bawang Putih');
console.log(bahanMasak, '\n');
setArrayValue(bahanMasak, 2, 'Bawang Bombay');
console.log(getArrayValue(bahanMasak, 2));
console.log('\n');
console.log(bahanMasak);
