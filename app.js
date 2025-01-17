// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]  
};
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];


  {
    // the ID of the learner for which this data has been collected
    // "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    // "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    // <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}
//////////////////////////////////////////////////////////////////////
//// the ID of the learner for which this data has been collected////
////////////////////////////////////////////////////////////////////

const learner1 = LearnerSubmissions.find((submission) => submission.learner_id == 125);
const learner2 = LearnerSubmissions.find((submission) => submission.learner_id == 132);


console.log("id:", learner1?.learner_id);
console.log("id:", learner2?.learner_id);


//////////////////////////////////////////////////////////////////////
////  the learner's total, weighted average, in which Assignment ////
////////////////////////////////////////////////////////////////////

// Learner's total id 125 //---------------------------------------------------------------------------

const learner1 = LearnerSubmissions.find(submission => submission.learner_id === 125);

// Assuming assignment_id 0 corresponds to the first submission
// Assuming assignment_id 1 corresponds to the second submission

if (learner1) {
    const score1 = learner1.submission.score; 
    const score2 = LearnerSubmissions.find(submission => submission.learner_id === 125 && submission.assignment_id === 2)?.submission.score || 0; 
    
    const totalScore = score1 + score2;
    console.log("Total Score id_125:", totalScore);
} else {
    console.log("Learner with ID 125 not found.");
}


// Learner's total id 132 //------------------------------------------------------------------------

const learner2 = LearnerSubmissions.find(submission => submission.learner_id === 132);
const totalPointsPossible = LearnerSubmissions.find(submission => submission.assignment_id === 2)?.submission.score || 0; 

// assignment_id 2 corresponds to the assignment with possible points 150
// assignment_id 0 corresponds to the first submission

if (learner2) {
    const score1 = learner2.submission.score; 
    const score2 = LearnerSubmissions.find(submission => submission.learner_id === 132 && submission.assignment_id === 2)?.submission.score || 0; 

// assignment_id 2 corresponds to the second submission
    
    const totalScore = score1 + score2;
    
    // Calculate late penalties (10% reduction)
    const latePenalties = totalPointsPossible * 0.1;
    const scoreAfterPenalties = totalScore - latePenalties;
    
    console.log("Total Score id_132:", totalScore);
    console.log("Late penalties id_132:", latePenalties);
    console.log("Score after penalties id_132:", scoreAfterPenalties);
} else {
    console.log("Learner with ID 132 not found.");
}

// weighted average --------------------------------------------------------------------


let score1 = 47;
let score2 = 150;
let totalScore = score1 + score2;
let totalPointsPossible = 200;

let weightedAverage = (score1 + score2 ) / (totalPointsPossible);

console.log("Weighted Average id_125:", weightedAverage);

let score1 = 39;
let score2 = 125;
let totalScore = score1 + score2;
let totalPointsPossible = 200;

let weightedAverage = (score1 + score2 ) / (totalPointsPossible);

console.log("Weighted Average id_132:", weightedAverage);

////////////////////////////////////////////////////////////////////////////
////e.g. a learner with 50/100 on one assignment and 190/200 on another////
////           Return result in percentage 80%                        ////
//////////////////////////////////////////////////////////////////////////


let score1 = 50;
let score2 = 190;
let totalScore = score1 + score2;
let totalPointsPossible = 300;

let weightedAverage = (score1 + score2 ) / (totalPointsPossible) * 100;

console.log("Weighted Average:", weightedAverage + "%");




// if/else statements---------with test data----------------------------------------------

let score1 = 85;
let score2 = 190;
let totaScore = score1 +  score2;
let totalPointsPossible = 300;

let weightedAverage = (score1 + score2) / totalPointsPossible * 100;
let weightedAverageString = weightedAverage.toFixed() + "%"
console.log(weightedAverageString);
if (weightedAverage === 80) {
    console.log("your calculation is correct.");
}else if(weightedAverage < 80){
     console.log("The weighted average is less than 80%.Try Again.");  
}else{
  console.log("The weighted average is greater than 80%.Try Again.")
}

// use try/catch statements to handle potential errors---------------------------------------------

try {
  let score1 = rt;
  let score2 = 190;
  let totalPointsPossible = 300;
  
  let weightedAverage = (score1 + score2) / totalPointsPossible * 100;
  let weightedAverageString = weightedAverage.toFixed() + "%"
  console.log(weightedAverageString);

  if (weightedAverage === 80) {
      console.log("your calculation is correct.");
  }else if(weightedAverage < 80){
       console.log("The weighted average is less than 80%.Try Again.");  
  }else{
    console.log("The weighted average is greater than 80%.Try Again.");
  }
} catch (error) {
    console.error("There is an error:", error)
}
Output:
$ node app.js 
There is an error: ReferenceError: rt is not defined    
    at Object.<anonymous> (C:\Users\siyap\Dev\perscholas


// using FOR LOOP -------to run once EITHER condition is meet or not-------------------------

let score1 = 50;
let score2 = 190;
let totalPointsPossible = 300;
let targetWeightedAverage = 80;
let maxIteractions = 1


for (let i= 0; i < maxIteractions; i++) {
    let weightedAverage = (score1 + score2) / totalPointsPossible * 100;
    let weightedAverageString = weightedAverage.toFixed() + "%";
    console.log(weightedAverageString);


    if (weightedAverage === targetWeightedAverage && weightedAverage <= targetWeightedAverage ) {
        
        console.log("Your calculation is correct " +  targetWeightedAverage + "%.");
        
    } else {
        console.log("Your calculation is incorrect " + targetWeightedAverage + "%. Try Again.");
        
    }
}

//LOOP control Keyword such as BREAK ----------Exit the Loop if Target is achieved--------------------

let score1 = 85;
let score2 = 190;
let totalPointsPossible = 300;
let targetWeightedAverage  = 80;
while (true){
    let weightedAverage = (score1 + score2) / totalPointsPossible * 100;
    let weightedAverageString = weightedAverage.toFixed() + "%";
    console.log(weightedAverageString);


    if (weightedAverage === targetWeightedAverage) {
        console.log("your calculation is correct.");
        break;
    } else if (weightedAverage < targetWeightedAverage) {
        console.log("The weighted average is less than " +  targetWeightedAverage + "%. Try Again.");
        break;
    } else {
        console.log("The weighted average is greater than " + targetWeightedAverage + "%. Try Again.");
        break;
    }
}

//Create and/or manipulate ARRAYS and Object--------------------------------------------------------

let scores = [50,190];
let totaScore = scores.reduce((acc, score)  => acc +  score, 0);
let totalPointsPossible = 300;

let weightedAverage = (totaScore) / totalPointsPossible * 100;
let weightedAverageString = weightedAverage.toFixed() + "%";
console.log("weightedAverage", weightedAverageString);
if (weightedAverage === 80) {
    console.log("your calculation is correct.");
}else if(weightedAverage < 80){
     console.log("The weighted average is less than 80%.Try Again.");  
}else{
  console.log("The weighted average is greater than 80%.Try Again.");
}


//Demonstrate the retrieval, manipulation, and removal of items 
//in an array or properties in an object.--------------------------------------------------------------------

let student = {
  name: "Henri",
  age: 35,
  city: "Pittsburgh"

};
console.log("Retrieval - Age:", student.age);

student.city = " New York City";
console.log("Manipulation - Updated Object:", student);

let removeAge = delete student.age;
console.log("Removal - removed Age:", removeAge);
console.log("Updated Objet after Removal:", student);


//Funtions to handle repeated tasks-----------------------------------------------------------------------------

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  let learnerData = [];

  
  LearnerSubmissions.forEach(submission => {
      
      let assignmentDetails = AssignmentGroup.assignments.find(assignment => assignment.id === submission.assignment_id);
      if (assignmentDetails) { 
          let formattedSubmission = {
              learner_id: submission.learner_id,
              assignment_id: submission.assignment_id,
              assignment_name: assignmentDetails.name,
              assignment_due_date: assignmentDetails.due_at,
              score: submission.submission.score,
              total_points_possible: assignmentDetails.points_possible
          };
         
          learnerData.push(formattedSubmission);
      }
  });

  return learnerData;
}

const learnerData = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)
console.log(learnerData);



//program outputs processed data as describe above-----------------------------------------------------------------

// $ node app.js 
[
  {
    learner_id: 125,
    assignment_id: 1,
    assignment_name: 'Declare a Variable',
    assignment_due_date: '2023-01-25',
    score: 47,
    total_points_possible: 50
  },
  {
    learner_id: 125,
    assignment_id: 2,
    assignment_name: 'Write a Function',
    assignment_due_date: '2023-02-27',
    score: 150,
    total_points_possible: 150
  },
  {
    learner_id: 125,
    assignment_id: 3,
    assignment_name: 'Code the World',
    assignment_due_date: '3156-11-15',
    score: 400,
    total_points_possible: 500
  },
  {
    learner_id: 132,
    assignment_id: 1,
    assignment_name: 'Declare a Variable',
    assignment_due_date: '2023-01-25',
    score: 39,
    total_points_possible: 50
  },
  {
    learner_id: 132,
    assignment_id: 2,
    assignment_name: 'Write a Function',
    assignment_due_date: '2023-02-27',
    score: 140,
    total_points_possible: 150
  }
]




//Ensure that the program runs without errors (comment out things that do not work, and explain your blockers).

















   
      








//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
    
//     return result;

//   }
  




//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
 

