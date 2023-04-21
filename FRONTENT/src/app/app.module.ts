import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { TableRestapiComponent } from './components/table-restapi/table-restapi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/table-restapi/post/post.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TablefilterComponent } from './components/table-restapi/tablefilter/tablefilter.component';
import { DataTablesModule } from 'angular-datatables';
import { ConnectionServiceModule } from 'ng-connection-service';
import { AsumDayComponent } from './pages/dashboard/today/asum-day/asum-day.component';
import { AsumWeekComponent } from './pages/dashboard/week/asum-week/asum-week.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    TableRestapiComponent,
    PostComponent,
    TablefilterComponent,
    AsumDayComponent,
    AsumWeekComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DataTablesModule,
    ConnectionServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
