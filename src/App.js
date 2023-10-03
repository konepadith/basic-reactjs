import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react"
import "./App.css"
import AddForm from "./components/AddForm";
function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "kone" },
    { id: 2, name: "pelay" },
    { id: 3, name: "Meow" }
])
const delstudent = (id) => {
  setStudent(students.filter(item => item.id !== id))
}

  return (
    <div className="App">
      <Header  title="student Management"/>
      <main>
        <AddForm/>
      <StudentList students={students} delstudent={delstudent}/>
      </main>
    </div>
  );
}

export default App;
