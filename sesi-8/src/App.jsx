import StudentItem from "./StudentItem";

export default function App (){
    const course = ["React", "Vue", "Angular"];
    const students = [
        {id: 1, name: "Andi"},
        {id: 2, name: "Budi"},
        {id: 3, name: "Citra"},
    ];

    return(
        // <div>
        //     <ul className="p-2 bg-blue-300">
        //         {course.map((course) => (
        //             <li>{course}</li>
        //         ))}
        //     </ul>

        //     <ul className="p-2 bg-red-300">
        //         {students.map((student) => (
        //             <li key={student.id}>{student.name}</li>
        //         ))}
        //     </ul>
        // </div>

        <div>
            <ul className="p-2">
                <p className="text-red-700 font-bold">Daftar Mahasiswa</p>
                <StudentItem students={students}/>
            </ul>
        </div>
    )
}