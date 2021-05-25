import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>()
  term: string;
  
  constructor() { }
  search(){
    this.emitSearch.emit(this.term);
  }
ngOnInit():void {
  
}
}
