const classResult = [
    {
      name: "Vinay",
      marks: [
        {
          subject: "Hindi",
          marks: 81,
        },
        {
          subject: "English",
          marks: 50,
        },
        {
          subject: "Gujarati",
          marks: 92,
        },
        {
          subject: "Maths",
          marks: 88,
        },
      ],
    },
    {
      name: "Sanjay",
      marks: [
        {
          subject: "Hindi",
          marks: 33,
        },
        {
          subject: "English",
          marks: 77,
        },
        {
          subject: "Gujarati",
          marks: 99,
        },
        {
          subject: "Maths",
          marks: 97,
        },
      ],
    },
    {
      name: "Tushar",
      marks: [
        {
          subject: "Hindi",
          marks: 91,
        },
        {
          subject: "English",
          marks: 88,
        },
        {
          subject: "Gujarati",
          marks: 97,
        },
        {
          subject: "Maths",
          marks: 99,
        },
      ],
    },
  ];

  const studentsWithPercentage = classResult.map(student => ({
    name: student.name,
    percentage: ((student.marks.reduce((total, subject) => total + subject.marks, 0) / (student.marks.length * 100)) * 100).toFixed(2) + "%",
  }));
  
  console.log(studentsWithPercentage);

  


  const studentsWithPercentage2 = classResult.map(student => ({
    name: student.name,
    percentage: ((student.marks.reduce((total, subject) => total + subject.marks, 0) / (student.marks.length * 100)) * 100).toFixed(2) + "%",
  }));
  
  // Sort students by percentage in descending order
  const sortedStudents = studentsWithPercentage2.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  
  console.log("Highest Percentage Holder:", sortedStudents[0].name);




  const highestPercentageSubjectWise = {};

classResult.forEach(student => {
  student.marks.forEach(subject => {
    const percentage = (subject.marks / 100) * 100;
    if (!highestPercentageSubjectWise[subject.subject] || highestPercentageSubjectWise[subject.subject].percentage < percentage) {
      highestPercentageSubjectWise[subject.subject] = { name: student.name, percentage: percentage.toFixed(2) + "%" };
    }
  });
});

console.log("Highest Percentage Holder Subject-wise:", highestPercentageSubjectWise);
  
  // find all students percentage
  // give hiegest percentage holder name
  // give who have heigest percentage subject vise