export function Post() {
    const Apispread = process.env.apispread ===undefined ? "":process.env.apispread
    fetch(Apispread, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "data": {
                "Nomor": "",
                "Nama": "",
                "TanggalLahir": "",
                "Umur": "",
                "JenisKelamin": "",
                "NomorBPJS": "",
                "Nama2": "",
                "TanggalLahir2": "",
                "Umur2": "",
                "JenisKelamin2": "",
                "NomorBPJS2": ""
            }
        }),
    }).then(res => {
        if (res.status === 201) {
            // SUCCESS
        }
        else {
            // ERROR
        }
    })
}

export function ApiCount() {
    const Apispread = process.env.apispread===undefined?"":process.env.apispread
    fetch(`${Apispread}?count`).then(res => {
        if (res.status === 200) {
            // SUCCESS
            res.json().then(data => {
                const yourData = data
            }).catch(err => console.log(err))
        }
        else {
            // ERROR
        }
    })
}
