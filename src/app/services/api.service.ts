import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }

  insertdata(data:any){
   return this.http.post("https://reqres.in/api/users",data);
  }

  displaydata(){
    return this.http.get("https://reqres.in/api/users");
  }
  updateData(data:any){
    return this.http.put("https://reqres.in/api/users/"+data.id,data);
  }
  deleteData(data:any){
    return this.http.delete("https://reqres.in/api/users/"+data.id);
  }
}
