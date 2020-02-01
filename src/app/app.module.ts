import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ListComponent } from './list/list.component';
import { HttpAndServicesComponent } from './http-and-services/http-and-services.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewComponent } from './view/view.component';

const appRoutes:Routes =[
  {path:'',component:HttpAndServicesComponent},
  {path:'home',component:HttpAndServicesComponent},
  {path:'dashboard',component:RegisterComponent},
  {path:'registeredList',component:ListComponent},
  {path:'view/:id', component:ViewComponent},
  {path:'notfound',component:ErrorPageComponent},
  {path:'**', redirectTo:'/notfound'},

]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent,
    HttpAndServicesComponent,
    ErrorPageComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SuiModule,  
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
