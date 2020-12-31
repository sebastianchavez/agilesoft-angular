import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ******************* Pages *******************/
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { SuperherosListComponent } from './components/superheros-list/superheros-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperherosListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
