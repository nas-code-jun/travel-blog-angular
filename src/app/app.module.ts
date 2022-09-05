import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { AlbumsContentComponent } from './components/albums-content/albums-content.component';
import { RoutesContentComponent } from './components/routes-content/routes-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AboutContentComponent,
    AlbumsContentComponent,
    RoutesContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: MainContentComponent },
      { path: 'albums', component: AlbumsContentComponent },
      { path: 'routes', component: RoutesContentComponent },
      { path: 'about', component: AboutContentComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
