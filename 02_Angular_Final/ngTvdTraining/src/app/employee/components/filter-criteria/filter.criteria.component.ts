import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: 'filter-criteria.component.html'
})
export class FilterCriteriaComponent implements OnInit, OnChanges {
  private _hitCount: number;
  get hitCount(): number {
    return this._hitCount;
  }
  @Input()
  set hitCount(v: number) {
    this._hitCount = v;
    // Getter / Setter Way
    if (this._hitCount === 0) {
      this.hitCountMessage = 'no employees found.';
    } else {
      this.hitCountMessage = `${this._hitCount} hits`;
    }
  }

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  hitCountMessage: string;

  // Getter / Setter Way
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.valueChange.emit(this._listFilter);
  }

  constructor() {}

  ngOnInit() {}

  // ngOnChanges Way
  //   ngOnChanges(changes: SimpleChanges) {
  //     if (changes['hitCount']) {
  //       if (this._hitCount === 0) {
  //         this.hitCountMessage = 'no employees found.';
  //       } else {
  //         this.hitCountMessage = `${this._hitCount} hits`;
  //       }
  //     }
  //   }

  // two-way databinding, the long way
  onValueChange(value: string) {
    this.listFilter = value;
  }
}
