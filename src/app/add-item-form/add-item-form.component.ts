import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BudgetItemModel} from "../../shared/models/budget-item.model";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item!: BudgetItemModel;
  @Output() formSubmit = new EventEmitter<BudgetItemModel>();

  isNewItem!: boolean;

  constructor() { }

  ngOnInit(): void {
    // if item has a value
    if(this.item) {
      //existing item was passed. Not new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItemModel('', null)
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset()
  }
}

