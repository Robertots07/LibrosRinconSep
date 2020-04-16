
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InfolibroService} from '../../services/infolibro.service'
@Component({
  selector: 'app-modalficha',
  templateUrl: './modalficha.component.html',
  styleUrls: ['./modalficha.component.css']
})
export class ModalfichaComponent implements OnInit {

  @Input() fromParent: { id: any; };
  por: any[];

 
 
  constructor(
    public activeModal: NgbActiveModal,
    private infolib : InfolibroService
  ) { }
 
  ngOnInit() {
    console.log(this.fromParent);
    this.infolib.infolibro(this.fromParent.id).subscribe((data: any[])=>{
      console.log(data);
      this.por = data;
    }) 
  }
 
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
