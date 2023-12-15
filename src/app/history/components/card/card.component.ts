import { Component, Input } from '@angular/core';
import { ComercialRequest } from 'src/app/reactive/interfaces/comercial-req.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input()
  public comercial!: ComercialRequest;

  public cardExpanded: boolean = true;

  constructor () { }

  toggleData():void {
    this.cardExpanded = !this.cardExpanded;
  }

}
