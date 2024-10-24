import React from 'react'

const Arrays = () => {
  const frnds = ['Sasidhar','Bhaskar','Satish','Thiru']
  const number = {Sasidhar:9492724945,Bhaskar:7569361656,Satish:9642776551,Thiru:9000210737}
  return (
    <div>
      <table className="nested-table">
      <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Number</th>
      </tr>
     </thead>
      <tbody>
        {frnds.map((friend,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{friend}</td>
            <td>{number[friend]}</td>
          </tr>
        ))}
      </tbody>
      </table>
     
    </div>
  )
}

export default Arrays
