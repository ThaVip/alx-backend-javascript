// task_3/main.ts

/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and capture the generated ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

