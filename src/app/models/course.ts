import { Category } from "./category";
import { Instructor } from "./instructor";

export class Course {
    constructor(public id?:Number,public name?:String,public description?:String,public imageUrl?:String,public category?:Category,public instructor?:Instructor)
    {}
}
