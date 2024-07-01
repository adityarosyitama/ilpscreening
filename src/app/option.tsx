"use client"
import React, { useEffect, useState } from 'react'
import Datepicker from '../../package/datepicker';
import Jeniskelamin from '../../package/jeniskelamin';
import Namalengkap from '../../package/namalengkap';
import Nobpjs from '../../package/nobpjs';
import Buttonsubmit from '../../package/buttonsubmit';
import moment from 'moment';
import Opsi from '../../package/opsi';
import Umurbb from '../../package/umurbb';

export default function Option() {
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState(new Date().valueOf());
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const [nobpjs, setNobpjs] = useState('');
    const [umurbb, setUmurbb] = useState('');
    const [opsi, setOpsi] = useState("");

    
    const [name2, setName2] = useState('')
    const [startDate2, setStartDate2] = useState(new Date());
    const [age2, setAge2] = useState(0)
    const [gender2, setGender2] = useState('')
    const [nobpjs2, setNobpjs2] = useState('');
    const [umurbb2, setUmurbb2] = useState('');
    const [opsi2, setOpsi2] = useState("");

    useEffect(() => {
        const age_ = Age(moment(new Date().valueOf() - startDate.valueOf()))
        if (age_ < 0) { return }
        setAge(age_)
    }, [startDate]);

    useEffect(() => {
        const age_ = Age(moment(new Date().valueOf() - startDate2.valueOf()))
        if (age_ < 0) { return }
        setAge2(age_)
    }, [startDate2]);

    useEffect(() => {
        if (opsi === "") { setGender2("") }
        if (age <= 5) { setGender2("Perempuan"); setOpsi2("Busui"); }
        if (age > 5) { setGender2(""); setOpsi2(""); }
    }, [age,opsi])
    useEffect(() => {
        if (gender === "Laki-Laki") { setOpsi('') }
    }, [gender])

    const opsi4 = () => {
        if (opsi === "Busui") { return false }
        if (age > 5) { return true }
        if (Tgl(startDate) === Tgl(new Date())) { return true }
        else { return false }
    }

    const opsi3 = () => {
        if (age <= 5) { return "Busui" }
        if (opsi === "Busui") { return "Balita" }
    }

    const data = {
        nama: name,
        tanggallahir: startDate,
        umur: age,
        jeniskelamin: gender,
        nomorbpjs: nobpjs,
        umurbb: umurbb,
        opsi:opsi,
        nama2: name2,
        tanggallahir2: startDate2,
        umur2: age2,
        jeniskelamin2: gender2,
        nomorbpjs2: nobpjs2,
        umurbb2:umurbb2,
        opsi2:opsi2
    }

    // console.log(data)

    return (
        <div className='flex flex-col md:gap-10 gap-3'>
            <p className='flex font-bold text-center md:text-5xl text-2xl text-cyan-400'>Opsi Pilihan</p>
            <div className='flex sm:flex-row flex-col justify-between md:gap-20 gap-10 '>
                <div className='flex flex-col gap-1'>
                    <div>
                        <p>Nama Lengkap</p>
                        <Namalengkap name={name} setName={setName} />
                    </div>
                    <div>
                        <p>Tanggal Lahir</p>
                        <Datepicker setStartDate={setStartDate} startDate={startDate} />
                    </div>
                    <div className='flex flex-row justify-between gap-3'>
                        <div>
                            <p>Jenis Kelamin</p>
                            <div className='flex flex-row justify-between gap-3'>
                                <Jeniskelamin gender={gender} setGender={setGender} />
                                <div>
                                    {
                                        gender === "Perempuan" && age >= 5 ?
                                            <Opsi opsi={opsi} setOpsi={setOpsi} />
                                            : ""
                                    }
                                    {
                                        opsi === "Bumil" && age >= 5 ?
                                            <div>
                                                <p>Umur Bumil</p>
                                                <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} opsi={opsi}/>
                                            </div>
                                            :
                                            opsi === "Busui" && age >= 5 ?
                                                <div>
                                                    <p>Umur Busui</p>
                                                    <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} opsi={opsi}/>
                                                </div>
                                                : ""
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p>Nomor BPJS</p>
                        <Nobpjs nobpjs={nobpjs} setNobpjs={setNobpjs} />
                    </div>
                </div>
                {
                    opsi4() ? ""
                        :
                        <div className='flex flex-col gap-1'>
                            <div>
                                <p>Nama Lengkap {opsi3()}</p>
                                <Namalengkap name={name2} setName={setName2} />
                            </div>
                            <div>
                                <p>Tanggal Lahir</p>
                                <Datepicker setStartDate={setStartDate2} startDate={startDate2} />
                            </div>
                            <div>
                                <p>Jenis Kelamin</p>
                                <Jeniskelamin gender={gender2} setGender={setGender2} />
                                <div>
                                    {
                                        age >= 5 ? '' :
                                            <div>
                                                <p>Umur Busui</p>
                                                <Umurbb umurbb={umurbb2} setUmurbb={setUmurbb2} opsi={opsi2}/>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div>
                                <p>Nomor BPJS</p>
                                <Nobpjs nobpjs={nobpjs2} setNobpjs={setNobpjs2} />
                            </div>
                        </div>
                }
            </div>
            <div className='flex flex-col gap-5'>
                <Buttonsubmit data={data} />
            </div>
        </div>
    )
}

const Age = (i: any) => {
    const ageInYears = (i / (1000 * 60 * 60 * 24 * 365));
    return Math.round(ageInYears)
}

const Tgl = (i: any) => {
    return moment(i).format("DD/MM/YYYY")
}