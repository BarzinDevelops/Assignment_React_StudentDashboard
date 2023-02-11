import { useParams } from "react-router-dom";
import AssignmentChart from "../charts/AssignmentChart";

export default function Assignment() {
  let params = useParams();
  return (
    <main>
      <h1 className="main-titles">{params.AssignmentId}</h1>
      <AssignmentChart assignment={params.AssignmentId} />
    </main>
  );
}
