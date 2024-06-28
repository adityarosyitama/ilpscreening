import React from 'react'
import './style.css'

export default function Jeniskelamin({gender, setGender}:{gender:any, setGender:any}) {
    // const [gender, setGender] = useState(''); // Inisialisasi state untuk jenis kelamin yang dipilih

    const handleGenderChange = (event:any) => {
        setGender(event.target.value); // Update state dengan nilai yang dipilih
    };

    return (
        <div>
            <select className='DP' value={gender} onChange={handleGenderChange}>
                <option className='DP' value="">Pilih Jenis Kelamin</option>
                <option className='DP' value="Laki-Laki">Laki-Laki</option>
                <option className='DP' value="Perempuan">Perempuan</option>
            </select>
        </div>
    );
}

