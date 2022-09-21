import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyAComponent } from './lazy-a.component';

const routes: Routes = [
    {
        path: '',
        component: LazyAComponent,
    },
];

@NgModule({
    declarations: [LazyAComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyAModule {}
