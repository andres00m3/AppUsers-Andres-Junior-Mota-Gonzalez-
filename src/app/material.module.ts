import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import{MatNativeDateModule} from '@angular/material/core';



@NgModule({
imports:[MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,



  ],

exports:[MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,

 ]
})

export class MaterialModule{};
