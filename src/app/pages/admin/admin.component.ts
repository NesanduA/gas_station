import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private http:HttpClient){
    
  }
  public Admin={
"name":"",
"phoneNumber":"",
"address":"",
"email":"",
"password":""} 

saveAdmin(){
  this.http.post("http://localhost:8080/admin/save",this.Admin).subscribe(data=>{
    alert("Successful admin added");
  })
}
}

