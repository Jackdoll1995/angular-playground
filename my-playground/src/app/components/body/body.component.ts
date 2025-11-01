import { Component, OnInit } from '@angular/core';
import { TrySignalComponent } from "./components/try-signal/try-signal.component";

@Component({
    standalone: true,
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    imports: [TrySignalComponent]
})

export class BodyComponent implements OnInit {
    constructor() { }
    
    ngOnInit() { }
}
