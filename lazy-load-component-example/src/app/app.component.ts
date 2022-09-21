import { Component, OnInit } from '@angular/core';
import { lazyLoadingComponentsMap } from './lazy.model';

@Component({
    selector: 'app-root',
    template: `
        <div class="m-3">
            <button
                type="button"
                class="btn btn-primary m-2"
                (click)="setLoadingComponent(component.key)"
                *ngFor="let component of components | keyvalue"
            >
                {{ component.value }}
            </button>
        </div>

        <app-lazy-wrapper [componentType]="componentToLoad"></app-lazy-wrapper>
    `,
})
export class AppComponent {
    components: Map<string, string> = lazyLoadingComponentsMap;
    componentToLoad: string | undefined;

    setLoadingComponent(componentToLoad: string) {
        if (lazyLoadingComponentsMap.has(componentToLoad)) {
            this.componentToLoad = componentToLoad;
            return;
        }

        this.componentToLoad = undefined;
    }
}
