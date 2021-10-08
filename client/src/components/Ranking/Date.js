// import React, { useState } from 'react'

// export default function Date() {
//   const [monthNumber, setDate] = useState(0)
//   const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
  
//   const handleChange = (sign) => {
//     setDate(Math.abs(monthNumber + sign) % 12)
//   }
  
//   return (
//     <div style={{fontSize:"10rem"}}>
//       <button onClick={() => handleChange(-1)}>----</button>
//       {month[monthNumber]}
//       <button onClick={() => handleChange(1)}>----</button>
//     </div>
//   )
// }