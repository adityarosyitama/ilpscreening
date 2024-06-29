import React, { useState } from 'react'
import "./style.css"
import { Newwindows } from './newwindow';

export default function Buttonsubmit() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setOpsi4(!opsi4)
        // Kode untuk mengirimkan data ke server
    };
    const [opsi4, setOpsi4] = useState(false)
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
