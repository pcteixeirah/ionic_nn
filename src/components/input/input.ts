import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: 'input.html',
  //styleUrls: ['./input.scss'],
})
export class InputComponent {
  @Input() type: string;
  @Input() placeholder: string;

  constructor() {}
}