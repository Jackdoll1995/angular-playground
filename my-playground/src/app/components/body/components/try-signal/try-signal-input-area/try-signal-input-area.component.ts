import { Component, OnInit, signal, output } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'try-signal-input-area',
    templateUrl: './try-signal-input-area.component.html'
})

export class TrySignalInputAreaComponent implements OnInit {
    
    text = output<string>();

    inputText = signal('');

    constructor() { }

    ngOnInit() { }

    submit() {
        this.text.emit(this.inputText());
        console.log('submitted:', this.inputText());
    }

}
