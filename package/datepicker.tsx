import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./style.css"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datepicker  ({startDate, setStartDate}:{startDate:any, setStartDate:any}) {
//   const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="DP" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};