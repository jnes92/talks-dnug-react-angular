import { Component } from '@angular/core';

@Component({
    selector: 'say-hello',
    templateUrl: './say-hello.component.html'
})
export class SayHello {
    myName = '';
    nameLabelIsVisible = false;

    sayHello() {
        if (this.myName.length > 0) {
        this.nameLabelIsVisible = true;
        }
    }
} 