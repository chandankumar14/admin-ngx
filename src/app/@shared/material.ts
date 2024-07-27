import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule
    ]
})
export class MaterialModel { }