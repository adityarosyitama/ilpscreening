"use client"
import React, { useEffect, useState } from 'react'
import Datepicker, { calculateWeek, calculateWeek2 } from '../../package/datepicker';
import Jeniskelamin from '../../package/jeniskelamin';
import Namalengkap from '../../package/namalengkap';
import Nobpjs from '../../package/nobpjs';
import Buttonsubmit from '../../package/buttonsubmit';
import Umurbb from '../../package/umurbb';
import OpsiBB from '../../package/opsibb';

export default function Option() {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('');
    const [age, setAge] = useState({ Year: 0, Month: 0, Day: 0 })
    const [gender, setGender] = useState('')
    const [nobpjs, setNobpjs] = useState('');
    const [umurbb, setUmurbb] = useState(0);
    const [status, setStatus] = useState("");

    const [name2, setName2] = useState('')
    const [startDate2, setStartDate2] = useState('');
    const [age2, setAge2] = useState({ Year: 0, Month: 0, Day: 0 })
    const [gender2, setGender2] = useState('')
    const [nobpjs2, setNobpjs2] = useState('');
    const [umurbb2, setUmurbb2] = useState(0);
    const [status2, setStatus2] = useState("");

    useEffect(() => {
        if (age.Year === 0 && age.Month === 0 && age.Day === 0) { return (setStatus(''), setStatus2('')), setStartDate2('') }
        if (age.Year >= 0 && age.Year <= 5) { setStatus('Bayi'); setStatus2('Busui'); setGender(''); setGender2('Perempuan'); setStartDate2(''), setAge2({ Year: 0, Month: 0, Day: 0 }) }
        if (age.Year >= 5) { setStatus(''); setStatus2(''); setGender(''); setGender2(''); setStartDate2(''); setAge2({ Year: 0, Month: 0, Day: 0 }) }
    }, [age])

    useEffect(() => {
        if (status === '' || status === 'Bayi' || status === 'Bumil') { return setUmurbb(0) }
        if (status === 'Busui') { return setUmurbb(calculateWeek2(startDate2)) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [age2, status])

    useEffect(() => {
        if (status2 === '' || status2 === 'Bayi' || status2 === 'Bumil') { return setUmurbb2(0) }
        if (status2 === 'Busui') { return setUmurbb2(calculateWeek2(startDate)) }
    }, [age, startDate, status2])

    useEffect(() => {
        if (status === 'Bumil') { return setName2(''), setGender2(''), setStartDate2(''), setAge2({ Year: 0, Month: 0, Day: 0 }), setStatus2('') }
        if (status === 'Busui') { return setStatus2('Bayi') }
    }, [status])

    useEffect(() => {
        // if(gender==='Laki-Laki') { setStatus(''); setStatus2('') }
    }, [gender])

    const data = {
        nama: name,
        tanggallahir: startDate,
        umur: age,
        jeniskelamin: gender,
        nomorbpjs: nobpjs,
        umurbb: umurbb,
        status: status,
        nama2: name2,
        tanggallahir2: startDate2,
        umur2: age2,
        jeniskelamin2: gender2,
        nomorbpjs2: nobpjs2,
        umurbb2: umurbb2,
        status2: status2
    }
    const handleReset = (event: any) => {
        // event.preventDefault();
        setName('');
        setStartDate('');
        setAge({ Year: 0, Month: 0, Day: 0 });
        setGender('');
        setNobpjs('');
        setUmurbb(0);
        setStatus('');
        setName2('');
        setStartDate2('');
        setAge2({ Year: 0, Month: 0, Day: 0 });
        setGender2('');
        setNobpjs2('');
        setUmurbb2(0);
        setStatus2('');
    }
    const minDate_ = () => {
        if (data.status2 === 'Busui') { return data.tanggallahir }
    }

    const [opsishow, setOpsishow] = useState(false)

    const handleSubmit = (event: any) => {
        if(event===null){return}
        event.preventDefault();
        if (
            data.nama === ''
            || data.jeniskelamin === ''
            || data.tanggallahir === ''
        ) { return }
        if (
            data.umur.Year === 0 &&
            data.umur.Month === 0 &&
            data.umur.Day === 0
        ) { return }
        if (data.status2 === 'Busui' || data.status2 === 'Bayi') {
            if (
                data.nama2 === ''
                || data.jeniskelamin2 === ''
                || data.tanggallahir2 === ''
            ) { return }
            if (
                data.umur2.Year === 0 &&
                data.umur2.Month === 0 &&
                data.umur2.Day === 0
            ) { return }
        }
        setOpsishow(!opsishow)
    };

    // const A = Statusilpconvert({ umur: data.umur })
    // const Abm = Statusbmconvert({ status: data.status, umurbb: data.umurbb })
    // const B = Statusilpconvert({ umur: data.umur2 })

    // console.log('data', data, A, Daftarstatus({ status: A }), Daftarstatusbm({ status: Abm }), B, Daftarstatus({ status: B }))

    return (
        <div className='flex flex-col md:gap-10 gap-3'>
            <p className='flex font-bold text-center md:text-5xl text-2xl text-cyan-400'>status Pilihan</p>
            <div className='flex sm:flex-row flex-col justify-between md:gap-20 gap-10 '>
                <div className='flex flex-col gap-1'>
                    <div>
                        <Namalengkap name={name} setName={setName} status2={undefined} />
                    </div>
                    <div>
                        <Datepicker setStartDate={setStartDate} startDate={startDate} age={age} setAge={setAge} minDate={undefined} />
                    </div>
                    <div className='flex flex-row justify-between gap-3'>
                        <Jeniskelamin gender={gender} setGender={setGender} status={undefined} />
                        <div>
                            {
                                gender === "Perempuan" && age.Year >= 5 ?
                                    <OpsiBB opsibb={status} setOpsibb={setStatus} />
                                    : ""
                            }
                            {
                                status === "Bumil" && age.Year >= 5 ?
                                    <div>
                                        <p>Umur Bumil</p>
                                        <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} status={status} />
                                    </div>
                                    :
                                    status === "Busui" && age.Year >= 5 ?
                                        <div>
                                            <p>Umur Busui</p>
                                            <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} status={status} />
                                        </div>
                                        : ""
                            }
                        </div>
                    </div>
                    {/* <div>
                        <p>Nomor BPJS</p>
                        <Nobpjs nobpjs={nobpjs} setNobpjs={setNobpjs} />
                    </div> */}
                </div>
                {
                    status2 === '' ? ""
                        :
                        <div className='flex flex-col gap-1'>
                            <div>
                                <Namalengkap name={name2} setName={setName2} status2={status2} />
                            </div>
                            <div>
                                <Datepicker setStartDate={setStartDate2} startDate={startDate2} age={age2} setAge={setAge2} minDate={minDate_()} />
                            </div>
                            <div>
                                <Jeniskelamin gender={gender2} setGender={setGender2} status={status2} />
                                <div>
                                    {
                                        age.Year >= 5 ? '' :
                                            <div>
                                                <p>Umur Busui</p>
                                                <Umurbb umurbb={umurbb2} setUmurbb={setUmurbb2} status={status2} />
                                            </div>
                                    }
                                </div>
                            </div>
                            {/* <div>
                                <p>Nomor BPJS</p>
                                <Nobpjs nobpjs={nobpjs2} setNobpjs={setNobpjs2} />
                            </div> */}
                        </div>
                }
            </div>
            <div className='flex flex-row gap-5'>
                <Buttonsubmit data={data} reset={handleReset} handleSubmit={handleSubmit} opsishow={opsishow} setOpsishow={setOpsishow} />
                <div>
                    <form onSubmit={handleReset}>
                        {/* onSubmit={handleReset} */}
                        <button className='button' type='submit'>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
