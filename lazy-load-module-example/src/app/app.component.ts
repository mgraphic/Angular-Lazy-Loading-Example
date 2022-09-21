import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="m-3">
            <button type="button" class="btn btn-secondary m-2" routerLink="">
                Clear
            </button>
            <button type="button" class="btn btn-primary m-2" routerLink="/A">
                Module A
            </button>
            <button type="button" class="btn btn-primary m-2" routerLink="/B">
                Module B
            </button>
            <button type="button" class="btn btn-primary m-2" routerLink="/C">
                Module C
            </button>
        </div>

        <div
            class="wrapper-container"
            style="margin:20px;padding:20px;border:1px solid #888;"
        >
            <p>Render your module and component in the dashed area</p>
            <div
                class="child-container mt-3 mb-3"
                style="padding:20px;border:2px dashed #888;border-radius:8px;"
            >
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class AppComponent {}
