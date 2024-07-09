"use client"
import React, { use, useEffect, useState } from 'react'
import Datepicker, { calculateWeek } from '../../package/datepicker';
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
        if (age.Year >= 5) { setStatus(''); setStatus2(''); setGender(''); setGender2(''); setStartDate2(''), setAge2({ Year: 0, Month: 0, Day: 0 }) }
    }, [age])

    useEffect(() => {
        if (status === '' || status === 'Bayi' || status === 'Bumil') { return setUmurbb(0) }
        if (status === 'Busui') { return setUmurbb(calculateWeek(startDate2).Week) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [age2, status])

    useEffect(() => {
        if (status2 === '' || status2 === 'Bayi' || status2 === 'Bumil') { return setUmurbb2(0) }
        if (status2 === 'Busui') { return setUmurbb2(calculateWeek(startDate).Week) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [age, status2])

    useEffect(() => {
        if (status === 'Busui') { return setStatus2('Bayi') }
    }, [status])

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
    return (
        <div className='flex flex-col md:gap-10 gap-3'>
            <p className='flex font-bold text-center md:text-5xl text-2xl text-cyan-400'>status Pilihan</p>
            <div className='flex sm:flex-row flex-col justify-between md:gap-20 gap-10 '>
                <div className='flex flex-col gap-1'>
                    <div>
                        <p>Nama Lengkap</p>
                        <Namalengkap name={name} setName={setName} />
                    </div>
                    <div>
                        <p>Tanggal Lahir {'(tgl/bln/thn)'}</p>
                        <Datepicker setStartDate={setStartDate} startDate={startDate} age={age} setAge={setAge} minDate={undefined} />
                    </div>
                    <div className='flex flex-row justify-between gap-3'>
                        <div>
                            <p>Jenis Kelamin</p>
                            <div className='flex flex-row justify-between gap-3'>
                                <Jeniskelamin gender={gender} setGender={setGender} />
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
                                <p>Nama Lengkap {status2}</p>
                                <Namalengkap name={name2} setName={setName2} />
                            </div>
                            <div>
                                <p>Tanggal Lahir {'(tgl/bln/thn)'}</p>
                                <Datepicker setStartDate={setStartDate2} startDate={startDate2} age={age2} setAge={setAge2} minDate={minDate_()} />
                            </div>
                            <div>
                                <p>Jenis Kelamin</p>
                                <Jeniskelamin gender={gender2} setGender={setGender2} />
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
                <Buttonsubmit data={data} reset={handleReset} />
                <div>
                    <form >
                    {/* onSubmit={handleReset} */}
                        <button className='button' type='submit'>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
