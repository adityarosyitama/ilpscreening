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

    const [opsi, setOpsi] = useState("");
    const [umurbb, setUmurbb] = useState('');

    const [name2, setName2] = useState('')
    const [startDate2, setStartDate2] = useState(new Date());
    const [age2, setAge2] = useState(0)
    const [gender2, setGender2] = useState('')
    const [nobpjs2, setNobpjs2] = useState('');

    useEffect(() => {
        setAge(Age(moment(new Date().valueOf() - startDate.valueOf())))
    }, [startDate]);

    useEffect(() => {
        setAge2(Age(moment(new Date().valueOf() - startDate2.valueOf())))
    }, [startDate2]);

    const opsi2 = () => {
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
        nama2: name2,
        tanggallahir2: startDate2,
        umur2: age2,
        jeniskelamin2: gender2,
        nomorbpjs2: nobpjs2
    }



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
                                                <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} />
                                            </div>
                                            :
                                            opsi === "Busui" && age >= 5 ?
                                                <div>
                                                    <p>Umur Busui</p>
                                                    <Umurbb umurbb={umurbb} setUmurbb={setUmurbb} />
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
                    opsi2() ? ""
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
                            </div>
                            <div>
                                <p>Nomor BPJS</p>
                                <Nobpjs nobpjs={nobpjs2} setNobpjs={setNobpjs2} />
                            </div>
                        </div>
                }
            </div>
            <div className='flex flex-col gap-5'>
                <Buttonsubmit />
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