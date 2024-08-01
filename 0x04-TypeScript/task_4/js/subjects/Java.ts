// task_4/js/subjects/Java.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

export namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
