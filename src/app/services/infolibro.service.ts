import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfolibroService {

  constructor(private http: HttpClient) { }
  public infolibro(id: any){
    return this.http.get('http://tsiete.com.mx/librosRincon/infolibro.php?id='+ id);
  }
}



