import { NgModule } from '@angular/core'

import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, 
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule, 
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule, 
    ]
})
export class MaterialModule { }