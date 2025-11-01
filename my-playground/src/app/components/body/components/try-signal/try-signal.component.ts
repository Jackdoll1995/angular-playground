import { Component, OnInit, signal } from '@angular/core';
import { TrySignalInputAreaComponent } from "./try-signal-input-area/try-signal-input-area.component";

@Component({
    standalone: true,
    imports: [TrySignalInputAreaComponent],
    selector: 'app-try-signal',
    templateUrl: './try-signal.component.html'
})

export class TrySignalComponent implements OnInit {
    text = signal('');

    constructor() { }

    ngOnInit() { }

    handleText(text: string) {
        this.text.set(text);
    }
}