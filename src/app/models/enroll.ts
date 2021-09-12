import { Course } from "./course";
import { Student } from "./student";

export class Enroll {
    constructor(public id?:Number,public student?:Student,public course?:Course)
    {}
}
