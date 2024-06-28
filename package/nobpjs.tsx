import React from 'react'
import "./style.css"

export default function Nobpjs({nobpjs, setNobpjs}:{nobpjs:any, setNobpjs:any}) {
   // const [nobpjs, setNobpjs] = useState('');

   const handlenobpjsChange = (event:any) => {
    setNobpjs(event.target.value.replace(/[^0-9]/g, '').slice(0, 13));
};

return (
  <div>
    <input className='DP' type="text" value={nobpjs} onChange={handlenobpjsChange} placeholder="nobpjs Lengkap" />
  </div>
);
}
