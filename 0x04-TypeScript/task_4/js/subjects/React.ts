// task_4/js/subjects/React.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

declare module './Teacher' {
  interface Teacher {
    experienceTeachingReact?: number;
  }
}

export namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

