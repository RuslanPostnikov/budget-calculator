import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItemModel} from "../../shared/models/budget-item.model";


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItemModel[];
  @Output() delete = new EventEmitter<BudgetItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItemModel) {
    this.delete.emit(item);
  }

}
