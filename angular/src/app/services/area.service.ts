import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Area} from '../../app/Models/Area';
@Injectable({
  providedIn: 'root'
})
export class AreaService {
  URL_API = 'http://localhost:3000/api/areas';
  selectedArea: Area = new Area("","","","");
  areas : Area[] = [];
  isEditMode: boolean = false;
  isDeleteMode : boolean = false;
  isMode: boolean = false;
  constructor(private http: HttpClient) {}

  getAreas() {
    return this.http.get<Area[]>(this.URL_API);
  }  
  createArea(area: Area){
    return this.http.post(this.URL_API, area)
  }
  deleteArea(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  updateArea(area: Area){
    return this.http.put(`${this.URL_API}/${area._id}`,area)
  }
}
