import { Component } from '@angular/core';
import {AreaService} from '../app/services/area.service'
import {NgForm} from '@angular/forms';
import {Area} from '../app/Models/Area';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(public areaService: AreaService){}

  ngOnInit(): void {
    this.getAreas();
  }
  resetForm(form: NgForm){
    form.reset();
  }

  async getAreas(){
     return await this.areaService.getAreas().subscribe(
      (res)=>{
        this.areaService.areas = res
      },
      (err) => console.log(err)
     );
  }

  async addArea(form: NgForm){
    if(this.areaService.isMode){
      if(this.areaService.isEditMode){
        await this.areaService.updateArea(form.value).subscribe(
          (res)=>{
            this.getAreas()
            this.resetForm(form)
            this.areaService.isDeleteMode = false
            this.areaService.isMode = false
            console.log(res)
          },
          (err)=>console.log(err)
          )
      }
      else if (this.areaService.isDeleteMode){
        await this.deleteArea(form.value._id)
        this.areaService.isDeleteMode = false;
        this.areaService.isMode = false
      }

    }else{
      console.log(form.value)
      await this.areaService.createArea(form.value).subscribe(
        (res)=>{
          this.getAreas()
          this.resetForm(form)
          console.log(res)
        },
        (err)=>console.log(err)
        )
      }
  }

  async deleteArea(_id:string){
    if (confirm('Are you sure you want to delete this area?')){
      await this.areaService.deleteArea(`${_id}`).subscribe(
        (res)=>{
          this.getAreas()
          console.log(res)
        },
        (err)=>{
          console.log(err)
        }
      )
    }else{
      console.log('Cancel')
    }
  }
  
  isDeleteMode(){
    this.areaService.isDeleteMode = true;
  }

  isEditMode(){
    this.areaService.isEditMode = true;
  }

  selectedArea(area:Area){
    this.areaService.selectedArea=area;
    this.areaService.isMode=true
  }
}
