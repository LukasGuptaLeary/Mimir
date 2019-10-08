import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { IngredientsComponent } from '@src/app/ingredients/ingredients.component';
import { BubbleContainerComponent } from '@src/app/bubble-container/bubble-container.component';
import { EmbedPageComponent } from '@src/app/embed-page/embed-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsComponent,
    BubbleContainerComponent,
    EmbedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
