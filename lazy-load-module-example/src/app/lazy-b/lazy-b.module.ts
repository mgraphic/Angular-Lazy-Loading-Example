import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyBComponent } from './lazy-b.component';

const routes: Routes = [
    {
        path: '',
        component: LazyBComponent,
    },
];

@NgModule({
    declarations: [LazyBComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyBModule {}
