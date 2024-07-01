import React, { use, useEffect, useState } from 'react'
import "./style.css"
import { Newwindows } from './newwindow';

export default function Buttonsubmit({data}:{data:any}) {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setOpsi4(!opsi4)
        // Kode untuk mengirimkan data ke server
    };
    const [opsi4, setOpsi4] = useState(false)
    const [status,setStatus]=useState('')
    const [status2,setStatus2]=useState('')
    const [data2,setData2]=useState({})
    useEffect(()=>{
        //status
        if(data.opsi==='Bumil'){ return setStatus('Bumil')}
        if(data.opsi==='Busui'){ return setStatus('Busui') }
        if(data.umur<=5){setStatus('Balita')}//balita
        if(data.umur>=5&&data.umur<=10){setStatus('Sekolah')}//sekolah
        if(data.umur>=10&&data.umur<=17){setStatus('Remaja')}//remaja
        if(data.umur>=18&&data.umur<=59){setStatus('Dewasa')}//dewasa
        if(data.umur>=60){setStatus('Lansia')}//lansia
    },[data])
    useEffect(()=>{
        //status
        if(data.opsi==='Bumil'){ return setStatus2('')}
        if(data.opsi2==='Bumil'){ return setStatus2('Bumil')}
        if(data.opsi2==='Busui'){ return setStatus2('Busui') }
        if(data.umur2<=5){setStatus2('Balita')}//balita
        if(data.umur2>=5&&data.umur2<=10){setStatus2('Sekolah')}//sekolah
        if(data.umur2>=10&&data.umur2<=17){setStatus2('Remaja')}//remaja
        if(data.umur2>=18&&data.umur2<=59){setStatus2('Dewasa')}//dewasa
        if(data.umur2>=60){setStatus2('Lansia')}//lansia
    },[data])
    useEffect(()=>{
        setData2({...data,status,status2})
    },[data,status,status2])
    // console.log(status,status2)
    console.log("data2",data2)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='button' type="submit">Submit</button>
            </form>
            {
                opsi4 ? <Newwindows /> : ''
            }
        </div>
    );
}
