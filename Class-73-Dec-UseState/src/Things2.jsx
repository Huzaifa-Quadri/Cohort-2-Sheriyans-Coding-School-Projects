import React from 'react'
import { useState } from 'react'

const Things2 = () => {

    const [ar, setar] = useState([11,22,44,66,77]);

    function givegrace() {
        const newmarks = ar.map((m)=>{
            if(m <= 98){
                return m + 2;
            }
            else{
                return m;
            }
        })
        // console.log("Og : ",ar);
        // console.log(newmarks);

        setar(newmarks);
        
        console.log("Given Grace....");
        
    }

    return (
    <div className="usestate2">
        {ar.map((marks, key) => {
            return(
                <h1 key={key}>
                    Student {key+1} : {marks} ({marks >= 35 ? "Pass" : "Fail"})
                </h1>
            )
        })}
        <button onClick={givegrace}>Give Grace</button>
    </div>
    )
}

export default Things2