import React, { use, useEffect, useState } from 'react'
import "./style.css"
import { Newwindows } from './newwindow';
// import { toast } from 'react-toastify';
import { Daftarstat, Daftarstatus, Daftarstatusbm, Statusbmconvert, Statusilpconvert } from './statusilpconvert';
import toast from 'react-hot-toast';

export default function Buttonsubmit({ data, reset, opsishow, handleSubmit, setOpsishow }: { data: any, reset: any, opsishow: any, handleSubmit: any, setOpsishow: any }) {
    // const [opsishow, setOpsishow] = useState(false)

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     if (data.nama === ''
    //         || data.jeniskelamin === ''
    //         || data.tanggallahir === ''
    //     ) { return toast('Nama tidak boleh kosong') }
    //     setOpsishow(true)
    // };

    const A = Statusilpconvert({ umur: data.umur })
    const Abm = Statusbmconvert({ status: data.status, umurbb: data.umurbb })
    // const Abmn = Daftarstatus({ status: A }) === undefined ? undefined : Daftarstatusbm({ status: Abm }) === undefined ? Daftarstatus({ status: A }) : [...Daftarstatus({ status: A }), ...Daftarstatusbm({ status: Abm })]
    // const Abmn = undefined
    const B = Statusilpconvert({ umur: data.umur2 })
    const Bbm = Statusbmconvert({ status: data.status2, umurbb: data.umurbb2 })
    // const Bbmn = Daftarstatus({ status: B }) === undefined ? undefined : Daftarstatusbm({ status: Bbm }) === undefined ? Daftarstatus({ status: B }) : [...Daftarstatus({ status: B }), ...Daftarstatusbm({ status: Bbm })]
    // const Bbmn = undefined
    // console.log('data', Daftarstat({status:A,status2:Abm}))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='button' type="submit">Submit</button>
            </form>
            {
                opsishow ? <Newwindows
                    handleSubmit={handleSubmit}
                    setOpsishow={setOpsishow}
                    reset={reset}
                    nama={data.nama}
                    jeniskelamin={data.jeniskelamin}
                    umur={data.umur}
                    status={data.status}
                    umurbb={data.umurbb}
                    daftar={Daftarstat({status:A,status2:Abm})}
                    nama2={data.nama2}
                    jeniskelamin2={data.jeniskelamin2}
                    umur2={data.umur2}
                    status2={data.status2}
                    umurbb2={data.umurbb2}
                    daftar2={Daftarstat({status:B,status2:Bbm})}
                /> : ''
            }
        </div>
    );
}
