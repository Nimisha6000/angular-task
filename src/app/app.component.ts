import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demopractical';
ngOnInit(){
  //this.displaydemo();
}
  constructor(private apidemo:ApiService) {
    
  }

allData:any=[{}];
  adddemo(val:any){
    this.apidemo.insertdata(val).subscribe((res)=>{
      console.log(res);
     // this.displaydemo();
    })
    
  }

  //displaydemo(){
    //this.apidemo.displaydata().subscribe((res)=>{this.allData=res;
    //console.log(this.allData)});
  //}

}
