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

// const learner1 = LearnerSubmissions.find((submission) => submission.learner_id == 125);
// const learner2 = LearnerSubmissions.find((submission) => submission.learner_id == 132);

// // Log the learner_id 
// console.log("id:", learner1?.learner_id);
// console.log("id:", learner2?.learner_id);


//////////////////////////////////////////////////////////////////////
////  the learner's total, weighted average, in which Assignment ////
////////////////////////////////////////////////////////////////////

// Learner's total id 125

// const learner1 = LearnerSubmissions.find(submission => submission.learner_id === 125);
// // Assuming assignment_id 0 corresponds to the first submission
// // Assuming assignment_id 1 corresponds to the second submission
// if (learner1) {
//     const score1 = learner1.submission.score; 
//     const score2 = LearnerSubmissions.find(submission => submission.learner_id === 125 && submission.assignment_id === 2)?.submission.score || 0; 
    
//     const totalScore = score1 + score2;
//     console.log("Total Score id_125:", totalScore);
// } else {
//     console.log("Learner with ID 125 not found.");
// }


// Learner's total id 132

const learner2 = LearnerSubmissions.find(submission => submission.learner_id === 132);
const totalPointsPossible = LearnerSubmissions.find(submission => submission.assignment_id === 2)?.submission.score || 0; // Assuming assignment_id 2 corresponds to the assignment with possible points 150
// Assuming assignment_id 0 corresponds to the first submission

if (learner2) {
    const score1 = learner2.submission.score; 
    const score2 = LearnerSubmissions.find(submission => submission.learner_id === 132 && submission.assignment_id === 2)?.submission.score || 0; // Assuming assignment_id 2 corresponds to the second submission
    
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
 

