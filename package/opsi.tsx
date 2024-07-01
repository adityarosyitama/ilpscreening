import React from 'react'
import './style.css'

export default function Opsi({opsi, setOpsi}:{opsi:any, setOpsi:any}) {
    // const [opsi, setOpsi] = useState(''); // Inisialisasi state untuk jenis kelamin yang dipilih

    const handleopsiChange = (event:any) => {
        setOpsi(event.target.value); // Update state dengan nilai yang dipilih
    };

    return (
        <div>
            <select className='DP OB' value={opsi} onChange={handleopsiChange}>
                <option className='DP' value="">Pilih</option>
                <option className='DP' value="Bumil">Bumil</option>
                <option className='DP' value="Busui">Busui</option>
            </select>
        </div>
    );
}
