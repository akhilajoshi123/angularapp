import {Component} from '@angular/core';

@Component({
    selector: 'app-error-alert',
    template: `<div class="error"><h3>Error!</h3></div>`,
    styles: [`
        div.error{
            background-color: red;
            width: 100px;
            height: 100px;
        }
    `]
})

export class ErrorAlertComponent{
    
}