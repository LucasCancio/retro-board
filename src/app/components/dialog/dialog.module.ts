import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogComponent } from './dialog/dialog.component';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { BoardComponent } from '../../board/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoardItemComponent } from '../../board/board-item/board-item.component';
import { CommentItemComponent } from '../../board/comment-item/comment-item.component';

@NgModule({
  declarations: [
    DialogBodyComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    CommentItemComponent,
    BoardItemComponent,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    BoardComponent 

  ],
  exports:[
    DialogComponent
  ]
})
export class DialogModule { }
