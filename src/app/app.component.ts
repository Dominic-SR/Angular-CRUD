import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/service/student.service';

export class StudentModel
{
  id?:any;
  project_name:any;
  project_description:any;
  project_image:any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

studentList:StudentModel[] = [];

constructor(private StudentService:StudentService){}
  

  title = 'my-dream-app';
  student:StudentModel = new StudentModel();
  
  onSubmit(form:NgForm):void
  {
    console.log(form.value);
    this.StudentService.Create(form.value)
    .subscribe(resp =>{
      console.log(resp);
      form.resetForm();
    })
  }

  getAll():void
  {
    this.StudentService.GetAll()
    .subscribe(resp =>{
      var e =JSON.stringify(resp);
      this.studentList = resp;
    })

  }

  ngOnInit(): void {
    this.getAll();
  }

}
