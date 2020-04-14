import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  public librosmes(){
    return this.http.get("http://tsiete.com.mx/librosRincon/librosmes.php");
  }
}
