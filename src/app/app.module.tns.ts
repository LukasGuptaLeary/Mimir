import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { IngredientsComponent } from '@src/app/ingredients/ingredients.component';
import { BubbleContainerComponent } from '@src/app/bubble-container/bubble-container.component';
import { EmbedPageComponent } from '@src/app/embed-page/embed-page.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsComponent,
    BubbleContainerComponent,
    EmbedPageComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
