
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
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }
 
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
