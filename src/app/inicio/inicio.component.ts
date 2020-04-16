import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalfichaComponent } from '../componentes/modalficha/modalficha.component';
import { LibrosService } from '../services/libros.service';
import {NoticiasService} from '../services/noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  portada: any[];
  noticia: any[];

  
  constructor(
    private modalService: NgbModal,
    private LibromService: LibrosService,
    private Noti: NoticiasService
    
  ) {
  }


  openModal(id: any) {
    const modalRef = this.modalService.open(ModalfichaComponent,
      {
        scrollable: true,
        size: 'lg',
        windowClass:'animated fadeInUp modal-holder',
        centered: true,  
      });
    let datas = { id: id }
    modalRef.componentInstance.fromParent = datas;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  ngOnInit() {
   //Servicio de libros del mes
    this.LibromService.librosmes().subscribe((data: any[])=>{
      console.log(data);
      this.portada = data;
    }) 
    //Servicio de Noticias
    this.Noti.noticias().subscribe((data: any[])=>{
      console.log(data);
      this.noticia = data;
    }) 

  }


}
