import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        .header {
            background: #1976d2;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }
    `]
})
export class HeaderComponent {}