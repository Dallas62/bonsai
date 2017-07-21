import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BonsaiResolver } from './resolvers/bonsai-resolver';
import { MyBonsaiResolver } from './resolvers/my-bonsai-resolver';

import { BonsaiService } from './bonsai.service';
import { BonsaiStorageService } from './bonsai-storage.service';

import { AppComponent } from './app.component';
import { BonsaiListComponent } from './bonsai-list/bonsai-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BonsaiDetailComponent } from './bonsai-detail/bonsai-detail.component';
import { BonsaiCardListComponent } from './bonsai-card-list/bonsai-card-list.component';
import { BonsaiCardListItemComponent } from './bonsai-card-list-item/bonsai-card-list-item.component';
import { BonsaiListItemComponent } from './bonsai-list-item/bonsai-list-item.component';
import { MyBonsaiFormComponent } from './my-bonsai-form/my-bonsai-form.component';
import { MyListComponent } from './my-list/my-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bonsais/:id',
    component: BonsaiDetailComponent,
    resolve: {
      bonsai: BonsaiResolver
    }
  },
  {
    path: 'bonsais',
    component: BonsaiListComponent
  },
  {
    path: 'my/:id',
    component: BonsaiDetailComponent,
    resolve: {
      myBonsai: MyBonsaiResolver
    }
  },
  {
    path: 'my',
    component: MyListComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BonsaiListComponent,
    BonsaiDetailComponent,
    BonsaiCardListComponent,
    BonsaiCardListItemComponent,
    BonsaiListItemComponent,
    MyBonsaiFormComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [BonsaiService, BonsaiStorageService, BonsaiResolver, MyBonsaiResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
