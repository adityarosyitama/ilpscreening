import React from 'react'
import "./style.css"

export default function Buttonsubmit() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Kode untuk mengirimkan data ke server
    };

    return (
        <form  onSubmit={handleSubmit}>
            <button className='button' type="submit">Submit</button>
        </form>
    );
}
