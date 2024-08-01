// task_4/js/main.ts

/// <reference path="./subjects/crud.d.ts" />
import { Subjects } from './subjects/Teacher';
import { cpp } from './subjects/Cpp';
import { java } from './subjects/Java';
import { react } from './subjects/React';
import { cTeacher } from './subjects/teacher';

// For Cpp subject
console.log('Cpp');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements()); // Outputs: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Outputs: Available Teacher: John

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements()); // Outputs: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Outputs: No available teacher

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements()); // Outputs: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Outputs: No available teacher

