import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  public noticias(){
    return this.http.get("http://tsiete.com.mx/librosRincon/noticias.php");
  }
}
