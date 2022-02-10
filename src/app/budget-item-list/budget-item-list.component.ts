import {Component, Input, OnInit} from '@angular/core';
import {BudgetItemModel} from "../../shared/models/budget-item.model";

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItemModel[];

  constructor() { }

  ngOnInit(): void {
  }

}