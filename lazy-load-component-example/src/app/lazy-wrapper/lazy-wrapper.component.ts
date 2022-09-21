import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import * as _ from 'lodash';
import { lazyLoadingComponentsMap } from '../lazy.model';

@Component({
    selector: 'app-lazy-wrapper',
    template: `
        <div
            class="wrapper-container"
            style="margin:20px;padding:20px;border:1px solid #888;"
        >
            <p>Render your component in the dashed area</p>
            <div
                class="child-container mt-3 mb-3"
                style="padding:20px;border:2px dashed #888;border-radius:8px;"
            >
                <ng-container #lazyContent></ng-container>
            </div>
        </div>
    `,
})
export class LazyWrapperComponent implements OnChanges {
    @ViewChild('lazyContent', { read: ViewContainerRef, static: true })
    lazyContentContainer: ViewContainerRef | undefined;

    @Input() componentType: string | undefined;

    async ngOnChanges(changes: SimpleChanges): Promise<void> {
        if (
            !this.componentType ||
            !lazyLoadingComponentsMap.has(this.componentType)
        ) {
            return;
        }

        const lazyComponent = await import(
            `../${this.componentType}/${this.componentType}.component`
        );
        const componentClassName: string =
            _.upperFirst(_.camelCase(this.componentType)) + 'Component';
        const componentObject = lazyComponent[componentClassName];

        this.lazyContentContainer?.clear();
        this.lazyContentContainer?.createComponent(componentObject);
    }
}
