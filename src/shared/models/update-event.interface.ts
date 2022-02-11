import {BudgetItemModel} from "./budget-item.model";

export interface updateEvent {
  old: BudgetItemModel;
  new: BudgetItemModel
}
