import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
    imports: [CommonModule],
    exports: [LoadingSpinnerComponent, CommonModule],
    declarations: [ LoadingSpinnerComponent,  ],
    providers: [  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {};