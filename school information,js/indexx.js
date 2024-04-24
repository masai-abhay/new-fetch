const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};



//  problem :- 10   done


function countCalculation(school){

  let output={
      mathTeachersCount: school.departments.math.teachers ,
      historyTeachersCount:school.departments.history.teachers  ,
        mathStudentsCount:school.departments.math.students ,
        historyStudentsCount: school.departments.history.students
  }
  return output;
}

console.log(countCalculation(school))




//   problem 11:-   done 


function findTopStudent(school,sub ){
 

let max=0;
let name="";
school.students.forEach((ele)=>{
  if(ele.scores[sub] >max){
      max= ele.scores[sub];
    
      name=ele;
  }
})
return name;
}

console.log( findTopStudent(school ,"math"))


// problem 12 :- done 


function addNewDept(school ,newDepartment){





school.departments.arts =  newDepartment;
return school
}
let newDepartment= {teacher:2, students:50} ;
console.log(addNewDept(school,newDepartment))


// problem 13: -  done

function highestStudentCountDepartment(school){
let max=0;
let name="";
 for(let key in school.departments){
 

  if(max<school.departments[key].students){
    
    max= school.departments[key].students;
    name= key;
  }
 }
return name;
}

console.log(highestStudentCountDepartment(school));