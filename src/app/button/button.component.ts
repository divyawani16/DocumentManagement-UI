import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClicked(){
    this.buttonClicked.emit('how');
  }

  @Output() isSearchBoxClicked = new EventEmitter<string>();

  onSearchBoxClick() {
    this.isSearchBoxClicked.emit;
  }
}
