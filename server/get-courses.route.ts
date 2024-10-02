

import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import { request } from 'http';



export function getAllCourses(req: Request, res: Response) {

    
    const error = (Math.random() >= 0.5);

    if (error) {
        console.log("ERROR loading courses!");
        res.status(500).json({message: 'random error occurred.'});
    }
    else {
    

    setTimeout(() => {

        res.status(200).json({payload:Object.values(COURSES)});
        //res.status(500).json({message: 'random error occurred.'});
        
    }, 200);

   }
}


export function getCourseById(req: Request, res: Response) {

    const courseId = req.params["id"];
    console.log(req);

    const courses:any = Object.values(COURSES);
    console.log(courseId);
    const course = courses.find(course => course.id == courseId);
    console.log(course);
    console.log(JSON.stringify(course));

    res.status(200).json(course);
}