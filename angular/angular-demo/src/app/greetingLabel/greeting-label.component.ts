import { Component, Input } from "../../../node_modules/@angular/core";

@Component({
    selector: 'greeting-label',
    templateUrl: './greeting-label.component.html'
})
export class GreetingLabel {
    @Input() greetingName: string;
}