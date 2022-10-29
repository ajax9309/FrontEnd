import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoappComponent } from './components/logoapp/logoapp.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducComponent } from './components/educ/educ.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardysoftComponent } from './components/hardysoft/hardysoft.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { InterceptSvc } from './services/intercept-svc';
import { NewxpComponent } from './components/skills/newxp.component';
import { EditxpComponent } from './components/skills/editxp.component';
import { NeweducComponent } from './components/educ/neweduc.component';
import { EditeducComponent } from './components/educ/editeduc.component';
import { EditskillComponent } from './components/hardysoft/editskill.component';
import { NewskillComponent } from './components/hardysoft/newskill.component';
import { EditaboutComponent } from './components/about/editabout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoappComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    EducComponent,
    HardysoftComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewxpComponent,
    EditxpComponent,
    NeweducComponent,
    EditeducComponent,
    EditskillComponent,
    NewskillComponent,
    EditaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
    
  ],
  providers: [InterceptSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
