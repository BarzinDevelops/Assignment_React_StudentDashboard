
import studentData from "../../assets/student.json";

export const filterByAssignmentName = (nameAssignment) => {
            const opdracht = studentData.filter(
            (data) =>
            data["Welke opdracht of welk project lever je nu in?"] ===
                nameAssignment
            );
            return opdracht;
        };



// Get assignment names (full and short version) -------------

export const fullAssignmentNames = studentData.map(
    (student) => student["Welke opdracht of welk project lever je nu in?"]
    );

export const shortAssignmentNames = fullAssignmentNames.map((item) => {
    if (item.includes(" -")) {
        return item.substring(0, 3);
    }
    return item;
    });

//   -----------------------------------------------------

// Remove dublicates from array  -------------

export const removeDuplicatesFromArray = (arr) => {
    let unique = arr.reduce(function (acc, curr) {
      if (!acc.includes(curr)) acc.push(curr);
      return acc;
    }, []);
    return unique;
  };



//   -----------------------------------------------------