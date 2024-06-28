"use client"
import React, { useEffect, useState } from 'react'
import Datepicker from '../../package/datepicker';
import Jeniskelamin from '../../package/jeniskelamin';
import Namalengkap from '../../package/namalengkap';
import Nobpjs from '../../package/nobpjs';
import Buttonsubmit from '../../package/buttonsubmit';
import moment from 'moment';
import Opsi from '../../package/opsi';

export default function Option() {
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [birthday, setBirthday] = useState(0)
    const [gender, setGender] = useState('')
    const [nobpjs, setNobpjs] = useState('');

    const [opsi, setOpsi] = useState("");

    useEffect(() => {
        setAge(Age(moment(new Date() - startDate)))
        setBirthday(moment(startDate).format("DD/MM/YYYY"))
    }, [startDate]);
    // console.log('', new Date(), startDate, Age(moment(new Date() - startDate)),moment(startDate).format("DD/MM/YYYY"))
    console.log(name, birthday, age, gender, nobpjs)



    return (
        <div className='flex flex-col md:gap-3 gap-1'>
            <p className='flex font-bold text-center md:text-5xl text-2xl text-cyan-400'>Opsi Pilihan</p>
            <div className='flex md:flex-row flex-col justify-between'>
                <div>
                    <div>
                        <p>Nama Lengkap</p>
                        <Namalengkap name={name} setName={setName} />
                    </div>
                    <div>
                        <p>Nomor BPJS</p>
                        <Nobpjs nobpjs={nobpjs} setNobpjs={setNobpjs} />
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
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                opsi === "Bumil" && age >= 5 ?
                                    <div>
                                        <p>Umur Bumil</p>
                                    </div>
                                    :
                                    opsi === "Busui" && age >= 5 ?
                                        <div>
                                            <p>Umur Busui</p>
                                        </div>
                                        : ""
                            }
                        </div>
                    </div>
                    <div>
                        <p>Tanggal Lahir</p>
                        <Datepicker setStartDate={setStartDate} startDate={startDate} />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Nama Lengkap Balita/Busui/Bumil</p>
                    </div>
                </div>
            </div>
            <div>
                <Buttonsubmit />
            </div>
        </div>
    )
}

const Age = (i: any) => {
    const ageInYears = Math.abs(i / (1000 * 60 * 60 * 24 * 365));
    return Math.round(ageInYears)
}
