import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import moment, { min } from "moment";
import "./style.css"
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker({ startDate, setStartDate, age, setAge, minDate }: { startDate: any, setStartDate: any, age: any, setAge: any, minDate: any }) {
  //   const [startDate, setStartDate] = useState(new Date());
  const handlesave = (date: any) => {
    if (date === null) { return (setStartDate(''), setAge({ Year: 0, Month: 0, Day: 0 })) }
    setStartDate(date)
    setAge(calculateAge(date))
  }
  const Maxdate = () => {
    let today = new Date(minDate);
    let oneYearLater = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

    if (minDate === undefined) { return new Date() }
    else { return oneYearLater }
  }
  // let today = new Date(minDate);
  // let oneYearLater = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
  // console.log(oneYearLater);
  // console.log(minDate, Maxdate())
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        <p>Tgl Lahir {'(tgl/bln/thn)'}</p>
        {age.Year === 0 && age.Month === 0 && age.Day === 0 ? <p className='tw'>*wajib diisi</p> : ''}
      </div>
      <DatePicker className="DP" selected={startDate} onChange={handlesave} maxDate={Maxdate()} dateFormat={'dd/MM/yyyy'} />
      {age.Year <= 0 && age.Month <= 0 && age.Day <= 0 ? '' :
        <p>{age.Year} Tahun {age.Month} Bulan {age.Day} Hari</p>
      }
    </div>
  );
};

const Tgl = (i: any) => {
  return moment(i).format("DD/MM/YYYY")
}

function calculateAge(birthDate: any) {
  let date1 = new Date(birthDate);
  let date2 = new Date();
  let difference = Number(date2.getTime()) - Number(date1.getTime());
  let days = Math.floor(difference / (1000 * 60 * 60 * 24))

  let cek = Number(date2.getTime()) < Number(date1.getTime())
  let years = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);
  let rdays = days % 30;
  let years_ = isNaN(years) || cek ? 0 : years;
  let months_ = isNaN(months) || cek ? 0 : months;
  let rdays_ = isNaN(rdays) || cek ? 0 : rdays;
  return { Year: years_, Month: months_, Day: rdays_ };
}

export function calculateWeek(birthDate: any) {
  let date1 = new Date(birthDate);
  let date2 = new Date();
  let difference = Number(date2.getTime()) - Number(date1.getTime());
  let days = Math.floor(difference / (1000 * 60 * 60 * 24) / 7);
  // if (days > 40) { return }
  return { Week: days };
}
