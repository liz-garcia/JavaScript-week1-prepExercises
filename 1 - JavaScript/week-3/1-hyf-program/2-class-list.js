import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const classData = classes.find(cls => {
    return className === cls.name;
  });

  if (!classData) {
    return "This class name does not exist."
  } else {
  const classStudents = students.filter(student =>
    student.class === classData.name);
  const classMentors = mentors.filter(mentor => {
    return mentor.nowTeaching === classData.currentModule;
  });

  const studentsArr = classStudents.map(student => ({ name: student.name, role: 'student' }));
  const mentorsArr = classMentors.map(mentor => ({ name: mentor.name, role: 'mentor' }));

  const peopleOfClass = studentsArr.concat(mentorsArr);
  return peopleOfClass;
  }
};

console.log(getPeopleOfClass('class34'));

// console.log('\n');

const getActiveClasses = () => {
  const activeClassesData = {};

  classes.forEach(cls => {
    if (cls.active === true) {
      const activeClassPeople = getPeopleOfClass(cls.name);

      activeClassesData[cls.name] = [...activeClassPeople];
    }
  });

  return activeClassesData;
};

console.log(getActiveClasses());
