import React from 'react'

export function Statusilpconvert({ umur }: { umur: any }) {
    if (umur.Year >= 60) { return '>60Y' }
    if (umur.Year >= 50) { return '>50Y' }
    if (umur.Year >= 45) { return '>45Y' }
    if (umur.Year >= 40) { return '>40Y' }
    if (umur.Year >= 30) { return '>30Y' }
    if (umur.Year >= 19) { return '>19Y' }
    if (umur.Year >= 18) { return '>18Y' }

    if (umur.Year >= 15) { return '>15Y' }
    if (umur.Year >= 12) { return '>12Y' }
    if (umur.Year >= 10) { return '>10Y' }
    if (umur.Year >= 7) { return '>7Y' }

    if (umur.Year >= 6) { return '>6Y' }
    if (umur.Year >= 5) { return '>5Y' }
    if (umur.Year >= 4) { return '>4Y' }
    if (umur.Year >= 3) { return '>3Y' }
    if (umur.Year >= 2) { return '>2Y' }
    if (umur.Month >= 18) { return '>18M' }
    if (umur.Month >= 16) { return '>16M' }
    if (umur.Year >= 9) { return '>9M' }
    if (umur.Year >= 6) { return '>6M' }
    if (umur.Year >= 2) { return '>2M' }
    if (umur.Year >= 1) { return '>1M' }
    if (umur.Day >= 1) { return '>1D' }
}

export function Statusbmconvert({ status, umurbb }: { status: any, umurbb: any }) {
    if (umurbb >= 24) { return '>24BM' }
    if (umurbb >= 12) { return '>12BM' }
    if (umurbb >= 0 && status === 'Bumil') { return '>0BM' }
}

export function Daftarstat({ status,status2 }: { status: any,status2:any }) {
    if (status === undefined) { return undefined }
    const fd1 = daftar.filter(item => item.Opsi.includes(status) ); //&& !item.Opsi2.includes('Dilakukan di sekolah')
    const fd2 = daftarBM.filter(item => item.Opsi.includes(status2) );
    const fd = fd2===undefined?fd1:fd1.concat(fd2)
    return fd
}
// export function Daftarstatus({ status }: { status: any }) {
//     if (status === undefined) { return undefined }
//     const filteredDaftar = daftar.filter(item => item.Opsi.includes(status) && !item.Opsi2.includes('Dilakukan di sekolah'));
//     return filteredDaftar
// }
// export function Daftarstatusbm({ status }: { status: any }) {
//     if (status === undefined) { return }
//     const filteredDaftar = daftarBM.filter(item => item.Opsi.includes(status) );
//     return filteredDaftar
// }


const daftar = [
    { Judul: "Hipotiroid Kongenital", Desc: '1x Usia 48 - 72 Jam', Desc2: '', Gender: '', Opsi: '>1D', Opsi2: '' },
    { Judul: "Penyakit Jantung Bawaan", Desc: '1x Usia 24-48 Jam atau sebelum pulang dari faskes', Desc2: '', Gender: '', Opsi: '>1D', Opsi2: '' },
    { Judul: "Timbang Berat Badan, Ukur Tinggi badan dan Pantau Tumbuh Kembang", Desc: '1x / Bulan', Desc2: '', Gender: '', Opsi: '>1D, >1M, >2M, >6M, >9M, >16M, >18M, >2Y, >3Y, >4Y, >5Y, >6Y', Opsi2: '' },
    { Judul: "Gigi dan Mulut", Desc: '1x / Bulan', Desc2: '', Gender: '', Opsi: '>1M, >2M, >6M, >9M, >16M, >18M, >2Y, >3Y, >4Y, >5Y, >6Y', Opsi2: '' },
    // { Judul: "Indera Pendengaran", Desc: '1x / Tahun', Desc2: '',Gender:'', Opsi: '>6M, >9M, >16M, >18M, >2Y, >3Y, >4Y, >5Y, >6Y' , Opsi2:''},
    { Judul: "Ganguan Spektrum Autism", Desc: '1x / rentang 16 bulan 2,5 Tahun', Desc2: '', Gender: '', Opsi: '>16M, >18M, >2Y, >3Y, >4Y, >5Y, >6Y', Opsi2: '' },
    { Judul: "Penyimpangan Perilaku dan emosi", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>3Y, >4Y, >5Y, >6Y', Opsi2: '' },
    // { Judul: "Penyimpangan Perilaku dan emosi", Desc: '1x / Tahun', Desc2: '',Gender:'', Opsi: '>3Y, >4Y, >5Y, >6Y' , Opsi2:''},
    { Judul: "Ganguan Pemusatan Perhatian dan Hiperaktivitas (GPPH)", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>3Y, >4Y, >5Y, >6Y', Opsi2: '' },
    { Judul: "Diabetes Melitus", Desc: '1x / Tahun', Desc2: 'Dengan Indikasi (Obesitas / Hipertensi', Gender: '', Opsi: '>6Y', Opsi2: '' },

    { Judul: "Gigi dan Mulut", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Indera Pendengaran", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>6M, >9M, >16M, >18M, >2Y, >3Y, >4Y, >5Y, >6Y, >7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Indera Pengelihatan", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Indera Pengelihatan", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Obesitas", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Hipertensi", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: '' },
    { Judul: "Kesehatan Jiwa", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah', },
    { Judul: "Kebugaran", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Faktor Risiko Merokok", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },
    { Judul: "Anemia", Desc: '1x / tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y', Opsi2: 'Dilakukan di sekolah' },

    { Judul: "Talasemia", Desc: '1x / seumur hidup (untuk yang belum skrining)', Desc2: '', Gender: '', Opsi: '>2Y, >3Y, >4Y, >5Y, >6Y, >7Y, >10Y, >12Y, >15Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Indera Penglihatan", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>3Y, >4Y, >5Y, >6Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Obesitas", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>6Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Hipertensi", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>6Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Diabetes Melitus", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>7Y, >10Y, >12Y, >15Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Kesehatan Jiwa", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Kebugaran", Desc: '2x / Tahun', Desc2: '', Gender: '', Opsi: '>18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Kanker Payudara", Desc: '1x / Tahun', Desc2: '', Gender: 'Perempuan', Opsi: '>15Y, >18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Faktor Risiko Merokok", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>18Y, >19Y, >30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Layak Hamil", Desc: '1x / Tahun Bagi Pasangan Usia Subur', Desc2: 'Bagi Pasangan Usia Subur', Gender: 'Perempuan', Opsi: '>18Y, >19Y, >30Y, >40Y, >45', Opsi2: '' },
    { Judul: "Pemeriksaan Kesehatan Bagi Calon Pengantin", Desc: '1x / Tahun', Desc2: '3 Bulan Sebelum Pernikahan', Gender: '', Opsi: '>18Y, >19Y, >30Y, >40Y, >45', Opsi2: '' },
    { Judul: "Kanker Leher Rahim", Desc: '1x / 10 Tahun', Desc2: '', Gender: 'Perempuan', Opsi: '>30Y, >40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Faktor Risiko Stroke", Desc: '1x / Tahun', Desc2: 'Dengan Indikasi (Hipertensi dan atau Diabetes Melitus', Gender: '', Opsi: '>40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Faktor Risiko Penyakit Jantung", Desc: '1x / Tahun', Desc2: 'Dengan Indikasi (Hipertensi dan atau Diabetes Melitus', Gender: '', Opsi: '>40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Penyakit Paru Obstruktif Kronik (PPOK)", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>40Y, >45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Kanker Paru", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>45Y, >50Y, >60Y', Opsi2: '' },
    { Judul: "Kanker Usus", Desc: '1x / Tahun', Desc2: '', Gender: '', Opsi: '>50Y, >60Y', Opsi2: '' },
    { Judul: "Geriatri", Desc: 'min 1x / Tahun', Desc2: '', Gender: '', Opsi: '>60Y', Opsi2: '' },
]

const daftarBM = [
    { Judul: "Pemeriksaan Kehamilan 6x", Desc: 'Minimal 2x pemeriksaan oleh dokter (trimester 1 dan 3)', Desc2: '', Gender: '', Opsi: '>0BM, >12BM, >24BM', Opsi2: '' },
    { Judul: "Pre eklampsia (hipertensi dalam kehamilan)", Desc: 'Setiap Kali Kunjungan', Desc2: '', Gender: '', Opsi: '>0BM, >12BM, >24BM', Opsi2: '' },
    { Judul: "TBC", Desc: 'Setiap Kali Kunjungan', Desc2: '', Gender: '', Opsi: '>0BM, >12BM, >24BM', Opsi2: '' },
    { Judul: "USG", Desc: '2x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM, >24BM', Opsi2: '' },
    { Judul: "Kesehatan Jiwa", Desc: '2x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM, >24BM', Opsi2: '' },
    { Judul: "Anemia", Desc: '2x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM, >24BM', Opsi2: '' },
    { Judul: "Malaria", Desc: '1x / Kehamilan', Desc2: 'Daerah Endemis', Gender: '', Opsi: '>0BM', Opsi2: '' },
    { Judul: "HIV", Desc: '1x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM', Opsi2: '' },
    { Judul: "Hepatitis B", Desc: '1x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM', Opsi2: '' },
    { Judul: "Sifilis", Desc: '1x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM', Opsi2: '' },
    { Judul: "Gigi dan Mulut", Desc: '1x / Kehamilan', Desc2: '', Gender: '', Opsi: '>0BM', Opsi2: '' },
]

export function convertskring(i:any){
    if (daftarB.includes(i)) {
        return `Skrining Kesehatan Bayi, Balita dan Anak Pra Sekolah (Kelompok ${convertAge(i)})`;
    } 
    if (daftarR.includes(i)) {
        return `Skrining Kesehatan Anak Usia Sekolah dan Remaja (Kelompok ${convertAge(i)})`;
    } 
    if (daftarD.includes(i)) {
        return `Skrining Kesehatan Usia Dewasa dan Lanjut Usia (Kelompok ${convertAge(i)})`;
    } 
}

function convertAge(age:any) {
    if(age==='>1D'){return 'Bayi Baru Lahir'}
    return `${age.slice(1, age.length - 1)} ${lastchr(age)}`
}

function lastchr (str:any) {
    if(str[str.length - 1]==='Y'){return 'Tahun'}
    if(str[str.length - 1]==='M'){return 'Bulan'}
}

const daftarD = [
    '>60Y',
    '>50Y',
    '>45Y',
    '>40Y',
    '>30Y',
    '>19Y',
    '>18Y',
];
const daftarR = [
    '>15Y',
    '>12Y',
    '>10Y',
    '>7Y',
];
const daftarB = [
    '>6Y',
    '>5Y',
    '>4Y',
    '>3Y',
    '>2Y',
    '>18M',
    '>16M',
    '>9M',
    '>6M',
    '>2M',
    '>1M',
    '>1D'
];

export function convertskringbs(i:any){
    if (daftarBs.includes(i)) {
        return `Skrining Kesehatan Ibu Hamil (Kelompok ${convertBs(i)})`;
    } 
}

function convertBs(age:any) {
    if(parseInt(age.slice(1, age.length - 2))===0){return '0 - 12 Minggu'}
    if(parseInt(age.slice(1, age.length - 2))===12){return '12 - 24 Minggu'}
    if(parseInt(age.slice(1, age.length - 2))===24){return '24 - 40 Minggu'}
}

const daftarBs = [
    '>24BM',
    '>12BM',
    '>0BM',
];