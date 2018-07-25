import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SayHello } from './sayHello/say-hello.component';
import { GreetingLabel } from './greetingLabel/greeting-label.component';

@NgModule({
  declarations: [
    AppComponent,
    SayHello,
    GreetingLabel
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
