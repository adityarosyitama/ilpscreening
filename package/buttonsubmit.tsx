import React, { use, useEffect, useState } from 'react'
import "./style.css"
import { Newwindows } from './newwindow';
// import { toast } from 'react-toastify';
import { Daftarstatus, Daftarstatusbm, Statusbmconvert, Statusilpconvert } from './statusilpconvert';
import toast from 'react-hot-toast';

export default function Buttonsubmit({ data, reset }: { data: any, reset: any }) {
    const [opsishow, setOpsishow] = useState(false)

    const handleSubmit = (event: any) => {
        // event.preventDefault();
        // if (data.nama === '') { return toast('Nama tidak boleh kosong') }
        setOpsishow(true)
    };

    const A = Statusilpconvert({ umur: data.umur })
    const Abm = Statusbmconvert({ status: data.status, umurbb: data.umurbb })
    const B = Statusilpconvert({ umur: data.umur2 })

    console.log('data', data, A, Daftarstatus({ status: A }), Daftarstatusbm({ status: Abm }), B, Daftarstatus({ status: B }))
    console.log(data.tanggallahir)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='button' type="submit">Submit</button>
            </form>
            {
                opsishow ? <Newwindows
                    reset={reset}
                    nama={data.nama}
                    jeniskelamin={data.jeniskelamin}
                    umur={data.umur}
                    status={data.status}
                    umurbb={data.umurbb}
                    daftar={Daftarstatus({ status: A })} 
                    nama2={data.nama2}
                    jeniskelamin2={data.jeniskelamin2}
                    umur2={data.umur2}
                    status2={data.status2}
                    umurbb2={data.umurbb2}
                    daftar2={Daftarstatus({ status: B })} 
                    /> : ''
            }
        </div>
    );
}
