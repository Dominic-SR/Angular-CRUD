import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/service/student.service';

export class StudentModel
{
  [x: string]: StudentModel;
  projects_id?:any;
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

studentList:any= [];
isEdit:boolean=false;

constructor(private StudentService:StudentService){}
  

  title = 'my-dream-app';
  student:StudentModel = new StudentModel();
  
  onSubmit(form:NgForm):void
  {
    if(!this.isEdit){
    console.log(form.value);
    this.StudentService.Create(form.value)
    .subscribe(resp =>{
      console.log(resp);
      form.resetForm();
      this.getAll();
    })
    }else{
    this.StudentService.Update(form.value,this.student.projects_id)
    .subscribe(resp =>{
      console.log(resp);
      form.resetForm();
      this.isEdit = false;
      this.getAll();
    })
    }
  }

  getAll():void
  {
    this.StudentService.GetAll()
    .subscribe(resp =>{
      this.studentList = resp;
      var r = this.studentList;
      this.studentList = r.data;
      console.log("std data--->",this.studentList)
    })

  }
  edit(datas:StudentModel):void{
    this.isEdit=true;
    this.StudentService.GetOne(datas.projects_id)
    .subscribe(resp =>{
      this.student = resp;
      var r = this.student;
      this.student = r.data[0];
      console.log(this.student)
    })
  }
  delete(data:StudentModel):void{
    const confirm = window.confirm("Are you sure want to delete?");
    if(confirm){
    this.StudentService.Delete(data.projects_id)
    .subscribe(resp =>{
      this.getAll();
    })
    }
  }

  ngOnInit(): void {
    this.getAll();
  }

}
