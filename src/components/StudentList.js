import { useState } from "react"
import "./StudentList.css"
import Item from "./Item"
export default function StudentList(props) {

    const {students,delstudent}=props
    const [show, setShow] = useState(true)
    return (
        <>
            <ul>
                <div className="header">
                    <h1> number of students {students.length}</h1>
                    <button onClick={() => setShow(!show)}>switch</button>
                </div>
                {show && students.map((data) => {
                    return <Item data={data} key={data.id} delstudent={delstudent}/>
                })}
            </ul>
        </>
    )
}