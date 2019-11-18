import { NgModule } from '@Angular/core'

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
    MatStepperModule, 
} from '@Angular/material'

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
        MatStepperModule,
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
        MatStepperModule,
    ]
})
export class MaterialModule { }