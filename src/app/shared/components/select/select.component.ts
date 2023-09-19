import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input('title') title: string = '';
  @Input('data') data: string[] = [];
  @Input('optionSelected') optionSelected:string ='';
  
  @Output('itemSelected') itemSelected = new EventEmitter();

  onChangeHandle(event: any): void {
    this.itemSelected.emit(event);
  }
}
