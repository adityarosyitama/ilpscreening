import React from 'react'
import  PrintComponent  from 'react-to-print';

export default function Print(data:any) {
    const MyPrintableComponent = () => {
        return (
          <div>
            <h1>Data yang akan di-print</h1>
            <p>Ini adalah contoh data yang akan di-print.</p>
          </div>
        );
      };
    return (
        <div>
          <PrintComponent
            component={MyPrintableComponent}
            trigger="button"
            filename="antrian"
          >
            <button>Print</button>
          </PrintComponent>
        </div>
      );
}
