import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChildComponent } from './child/child.component';

/** @title Basic virtual scroll */
@Component({
  selector: 'cdk-virtual-scroll-overview-example',
  styleUrl: 'cdk-virtual-scroll-overview-example.css',
  templateUrl: 'cdk-virtual-scroll-overview-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ScrollingModule, ChildComponent],
})
export class CdkVirtualScrollOverviewExample {
  items = Array.from({ length: 100000 }).map((_, i) => ({
    text: `Item #${i}`,
    selected: false,
  }));
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
