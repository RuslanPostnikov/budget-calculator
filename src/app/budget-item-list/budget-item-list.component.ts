import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItemModel} from "../../shared/models/budget-item.model";
import {MatDialog} from "@angular/material/dialog";
import {EditItemModelComponent} from "../edit-item-model/edit-item-model.component";
import {updateEvent} from "../../shared/models/update-event.interface";


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItemModel[];
  @Output() delete = new EventEmitter<BudgetItemModel>();
  @Output() update = new EventEmitter<updateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItemModel) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItemModel) {
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result=> {
      if(result) {
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }


}
