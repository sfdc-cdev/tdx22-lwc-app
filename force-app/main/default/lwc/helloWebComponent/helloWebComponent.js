import { LightningElement } from 'lwc';
export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblazer';
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}