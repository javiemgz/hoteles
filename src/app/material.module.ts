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

} from '@Angular/material'
import { MatDialogModule } from '@angular/material/dialog'

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
    ]
})
export class MaterialModule { }