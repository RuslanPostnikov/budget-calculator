import {Component, Inject, Input, OnInit} from '@angular/core';
import {BudgetItemModel} from "../../shared/models/budget-item.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItemModel
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItemModel) {
    this.dialogRef.close(updatedItem);
  }

}
