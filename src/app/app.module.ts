import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list';
import {  MatMenuModule} from '@angular/material/menu';
import {  MatButtonModule} from '@angular/material/button';
import {  MatCardModule} from '@angular/material/card';
import {  MatIconModule} from '@angular/material/icon';
import {  MatExpansionModule} from '@angular/material/expansion';
import { MatListModule} from '@angular/material/list';
import {  MatToolbarModule} from '@angular/material/toolbar';
import {  MatTableModule} from '@angular/material/table';
import {  MatBadgeModule} from '@angular/material/badge';
import {  MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LeaderComponent } from './pages/leader/leader.component';
<<<<<<< HEAD
import { LeaderapplyComponent } from './pages/leader/leaderapply/leaderapply.component';
import { LeaderconfirmComponent } from './pages/leader/leaderconfirm/leaderconfirm.component';
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
=======
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';  
import { AccountComponent } from './pages/account/account.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BodyComponent } from './pages/body/body.component';
import { HelpComponent } from './pages/help/help.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SettingsComponent } from './pages/settings/settings.component';
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
    IntroductionComponent,
    LeaderComponent,
<<<<<<< HEAD
    LeaderapplyComponent,
    LeaderconfirmComponent,
    ItemComponent,
    LoginComponent
=======
    ItemComponent,
    LoginComponent,
    AccountComponent,
    SidenavComponent,
    DashboardComponent,
    BodyComponent,
    HelpComponent,
    OrdersComponent,
    PromotionsComponent,
    SettingsComponent
    
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
=======
    //NoopAnimationsModule,
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTooltipModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MatDialogModule
  
=======
    NoopAnimationsModule
    
    

>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6

  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
