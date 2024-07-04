"use client"
import React, { use, useEffect, useState } from 'react'
import Datepicker from '../../package/datepicker';
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

    // useEffect(() => {
    //     const age_ = calculateAge(startDate)
    //     if (age_.Year < 0) { return }
    //     setAge(age_)
    // }, [startDate]);

    // useEffect(() => {
    //     const age_ = calculateAge(startDate2)
    //     if (age_.Year < 0) { return }
    //     setAge2(age_)
    // }, [startDate2]);

    // useEffect(() => {
    //     if (age.Year > 5) { setGender2(""); setStatus2(""); }
    //     if (age.Year <= 5) { setGender2("Perempuan"); setStatus2("Busui"); }
    //     if (age.Year <= 0 && age.Month <= 0 && age.Day <= 0) { setGender2(""); setStatus2(""); }
    // }, [age, status])

    // useEffect(() => {
    //     if (gender === "Laki-Laki") { setStatus('') }
    // }, [gender])

    // const opsi4 = () => {
    //     if (status === "Busui") { return false }
    //     if (age.Year > 5) { return true }
    //     if (age.Year <= 0 && age.Month <= 0 && age.Day <= 0) { return true }
    //     else { return false }
    // }

    // const opsi3 = () => {
    //     if (age.Year <= 5) { return "Busui" }
    //     if (status === "Busui") { return "Balita" }
    // }

    useEffect(() => {
        if (age.Year === 0 && age.Month === 0 && age.Day === 0) { return (setStatus(''), setStatus2('')) }
        if (age.Year >= 0 && age.Year <= 5) { setStatus('Bayi'); setStatus2('Bumil'); setGender2('Perempuan') }
        if (age.Year >= 5) { setStatus(''); setStatus2(''); setGender2(''); setStartDate2('') }
    }, [age])

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
    const handleReset = (event:any) => {
        event.preventDefault();
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
                        <Datepicker setStartDate={setStartDate} startDate={startDate} age={age} setAge={setAge} />
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
                                <Datepicker setStartDate={setStartDate2} startDate={startDate2} age={age2} setAge={setAge2} />
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
                <Buttonsubmit data={data} />
                <div>
                    <form onSubmit={handleReset}>
                        <button className='button' type='submit'>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// const Tgl = (i: any) => {
//     return moment(i).format("DD/MM/YYYY")
// }

// function calculateAge(birthDate: any) {
//     let date1 = new Date(birthDate);
//     let date2 = new Date();
//     let difference = Number(date2.getTime()) - Number(date1.getTime());
//     let days = Math.floor(difference / (1000 * 60 * 60 * 24))

//     let cek = Number(date2.getTime()) < Number(date1.getTime())
//     let years = Math.floor(days / 365);
//     let months = Math.floor((days % 365) / 30);
//     let rdays = days % 30;
//     let years_ = isNaN(years) || cek ? 0 : years;
//     let months_ = isNaN(months) || cek ? 0 : months;
//     let rdays_ = isNaN(rdays) || cek ? 0 : rdays;
//     return { Year: years_, Month: months_, Day: rdays_ };
// }