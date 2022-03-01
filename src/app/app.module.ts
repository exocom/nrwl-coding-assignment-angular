import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromUser from './+state/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user/user.effects';
import * as fromTicket from './+state/ticket/ticket.reducer';
import { TicketEffects } from './+state/ticket/ticket.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: false,
    }),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromTicket.ticketFeatureKey, fromTicket.reducer),
    EffectsModule.forFeature([UserEffects, TicketEffects]),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
