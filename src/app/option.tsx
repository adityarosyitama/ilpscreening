"use client"
import React, { useState } from 'react'
import Datepicker from '../../package/datepicker';
import Jeniskelamin from '../../package/jeniskelamin';

export default function Option() {
    const [startDate, setStartDate] = useState(new Date());
    const [gender, setGender] = useState('')
    // console.log('',gender,startDate)
    return (
        <div className='flex flex-col md:gap-3 gap-1'>
            <p className='flex font-bold text-center md:text-5xl text-2xl text-cyan-400'>Opsi Pilihan</p>
            <div>
                <p>Jenis Kelamin</p>
                <Jeniskelamin gender={gender} setGender={setGender}/>
            </div>
            <div>
                <p>Tanggal Lahir</p>
                <Datepicker setStartDate={setStartDate} startDate={startDate} />
            </div>
        </div>
    )
}
