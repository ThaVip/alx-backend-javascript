// task_4/js/subjects/Cpp.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingC?: number;
  }
}

export namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
