import { useParams } from "react-router-dom";
import StudentChart from "../charts/StudentChart";

export default function Student() {
  let params = useParams();
  return (
    <main>
      <h1 className="main-titles">{params.StudentId}</h1>
      <StudentChart student={params.StudentId} />
    </main>
  );
}
