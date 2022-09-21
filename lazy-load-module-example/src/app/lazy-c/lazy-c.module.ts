import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyCComponent } from './lazy-c.component';

const routes: Routes = [
    {
        path: '',
        component: LazyCComponent,
    },
];

@NgModule({
    declarations: [LazyCComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyCModule {}
