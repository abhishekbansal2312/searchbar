import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      subjects: ["Math", "Science", "History"],
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 19,
      grade: "B",
      subjects: ["English", "Math", "Art"],
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 21,
      grade: "C",
      subjects: ["Physics", "Chemistry", "Biology"],
    },
    {
      id: 4,
      name: "Diana Prince",
      age: 22,
      grade: "A",
      subjects: ["Computer Science", "Math", "English"],
    },
    {
      id: 5,
      name: "Evan Peters",
      age: 20,
      grade: "B",
      subjects: ["History", "Political Science", "Economics"],
    },
    {
      id: 6,
      name: "Fiona Carter",
      age: 18,
      grade: "A",
      subjects: ["Math", "Physics", "Astronomy"],
    },
  ];
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    setFilteredStudents(students);
  }, []);
  console.log(filteredStudents);

  const handleSearch = (e) => {
    let item = e.target.value;
    const searchedStudents = students.filter((student, index) => {
      return student.name.toLowerCase().includes(item.toLowerCase());
    });
    setFilteredStudents(searchedStudents);
  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleSearch} name="search" id="search" />
      </div>
      {filteredStudents && (
        <h1>
          {filteredStudents.map((stud, idx) => {
            return <div key={idx}>{stud.name}</div>;
          })}
        </h1>
      )}
    </div>
  );
}

export default App;
