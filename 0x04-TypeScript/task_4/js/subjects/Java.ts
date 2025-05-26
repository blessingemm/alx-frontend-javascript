/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add new property to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Class Java extends Subject
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}


