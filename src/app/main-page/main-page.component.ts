import { Component, OnInit } from '@angular/core';
import {BudgetItemModel} from "../../shared/models/budget-item.model";
import {updateEvent} from "../../shared/models/update-event.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems = new Array<BudgetItemModel>();
  totalBudget = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItemModel) {
    this.budgetItems.push(newItem);
    if(typeof newItem.amount === "number")  this.totalBudget += newItem.amount;
  }

  deleteItem(deleteItem: BudgetItemModel) {
    let index = this.budgetItems.indexOf(deleteItem)
    this.budgetItems.splice(index, 1);
    if(deleteItem.amount) this.totalBudget -= deleteItem.amount;
  }

  updateItem(updateEvent: updateEvent) {
    // result is update bidget item
    // replace item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update total budget
    if(updateEvent.old.amount && updateEvent.new.amount) {
      this.totalBudget = updateEvent.old.amount;
      this.totalBudget += updateEvent.new.amount;
    }

  }

}
