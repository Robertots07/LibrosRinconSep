
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modalficha',
  templateUrl: './modalficha.component.html',
  styleUrls: ['./modalficha.component.css']
})
export class ModalfichaComponent implements OnInit {

  @Input() fromParent;
 
  constructor(
    public activeModal: NgbActiveModal
  ) { }
 
  ngOnInit() {
    console.log(this.fromParent);
  }
 
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
