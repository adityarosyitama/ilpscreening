import React from 'react'
import './style.css'

export default function OpsiBB({opsibb, setOpsibb}:{opsibb:any, setOpsibb:any}) {
    // const [opsi, setOpsibb] = useState(''); // Inisialisasi state untuk jenis kelamin yang dipilih

    const handleopsiChange = (event:any) => {
        setOpsibb(event.target.value); // Update state dengan nilai yang dipilih
    };

    return (
        <div>
            <select className='DP OB' value={opsibb} onChange={handleopsiChange}>
                <option className='DP' value="">Pilih</option>
                <option className='DP' value="Bumil">Bumil</option>
                <option className='DP' value="Busui">Busui</option>
            </select>
        </div>
    );
}
