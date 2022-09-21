import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'A',
        loadChildren: () =>
            import('./lazy-a/lazy-a.module').then((m) => m.LazyAModule),
    },
    {
        path: 'B',
        loadChildren: () =>
            import('./lazy-b/lazy-b.module').then((m) => m.LazyBModule),
    },
    {
        path: 'C',
        loadChildren: () =>
            import('./lazy-c/lazy-c.module').then((m) => m.LazyCModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent],
})
export class AppModule {}
