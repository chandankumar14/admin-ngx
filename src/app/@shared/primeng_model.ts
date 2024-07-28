import { NgModule } from "@angular/core";
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@NgModule({
    exports: [
        CardModule,
        ChartModule
    ]
})

export class PrimeNgModule {

}