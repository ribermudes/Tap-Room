import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onkegSelect'],
  directives: [KegComponent],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{ currentKeg.description }}
  </h3>
  <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg" >
  </keg-display>
`
})

export class KegListComponent {
  public kegList: Keg [];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    // this.onKegSelect.emit(clickedKeg);
    console.log(this)
  }
}
