import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function
  if (
  modules.some(module =>
    moduleName === module.name
    )
  ){
      const possibleMentors = mentors.filter(mentor => mentor.canTeach.includes(moduleName));

      const availableMentors = possibleMentors.filter(mentor => !mentor.hasOwnProperty('nowTeaching'));

      const possibleMentorsArr = possibleMentors.map(mentor => mentor.name);

      const availableMentorsArr = availableMentors.map(mentor => mentor.name);

      if (possibleMentorsArr.length === 0) {
        return `\nNo possible mentors for ${moduleName}`
      } else if (availableMentorsArr === 0){
        return `\nNo available mentors for ${moduleName}`
      } else {
        return availableMentorsArr;
      }
  }
  else return '\nInvalid module name';
};

// console.log(possibleMentorsForModule('using-apis'));
// console.log(possibleMentorsForModule('javascript'));
// console.log(possibleMentorsForModule('incorrect module name'));

const findMentorForModule = (moduleName) => {
  console.log(`\nAll available mentors for ${moduleName}:`, possibleMentorsForModule(moduleName));
  const availableMentors = possibleMentorsForModule(moduleName);

  if (Array.isArray(availableMentors) &&
  availableMentors.length > 0){
    let randomIndex = Math.floor(Math.random() * availableMentors.length);

    return `Random mentor for ${moduleName}: ${availableMentors[randomIndex]}`;
  } else return `Currently there are no available mentors for ${moduleName}. Not possible to generate random choice.`
};

console.log(findMentorForModule('javascript'));
console.log(findMentorForModule('react'));
