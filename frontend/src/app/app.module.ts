import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurStoryComponent } from './components/aboutUs/our-story/our-story.component';
import { OurTeamComponent } from './components/aboutUs/our-team/our-team.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArtworkComponent } from './components/ourWork/artwork/artwork.component';
import { ArtoverlayComponent } from './components/ourWork/artoverlay/artoverlay.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    OurWorkComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    OurStoryComponent,
    OurTeamComponent,
    ArtworkComponent,
    ArtoverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
