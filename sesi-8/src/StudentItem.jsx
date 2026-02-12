export default function StudentItem({students}){
    return(
        <div>
            <ul className="text-blue-700">
                {students.map((student, index) => (
                    <li>{index + 1}. {student.name}</li>
                ))}
            </ul>
        </div>
    )
}