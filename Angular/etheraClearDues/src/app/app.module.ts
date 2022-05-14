import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProductComponent } from './product/product.component';
import { QueriesComponent } from './queries/queries.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    HomeComponent,
    CollectionsComponent,
    RecoveryComponent,
    CampaignComponent,
    ProductComponent,
    QueriesComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
