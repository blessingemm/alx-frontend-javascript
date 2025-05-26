/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add new property to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Class React extends Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}


