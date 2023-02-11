import { Link, Outlet } from "react-router-dom";
import data from "../data/data.json";

export default function Students() {
  let studentData = [];
  data.map((item) => {
    return studentData.push({ name: item.name });
  });

  let uniq = {};
  const singleStudent = studentData.filter(
    (student) => !uniq[student.name] && (uniq[student.name] = true)
  );

  return (
    <div className="Student-div">
      <nav className="Student-nav">
        {singleStudent.map((student, i) => (
          <span>
            <Link
              key={student.name}
              className={`studentLink ${i === 0 ? "selected" : ""}`}
              to={`/Students/${student.name}`}
            >
              {student.name}
            </Link>{" "}
            <span className="link-seperator">| </span>
          </span>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
