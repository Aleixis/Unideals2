import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LeaderComponent } from './pages/leader/leader.component';
import { ItemComponent } from './pages/item/item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HelpComponent } from './pages/help/help.component';
import { BodyComponent } from './pages/body/body.component';


const routes: Routes = [
  {
  path:'home',
  component:HomeComponent

},

{
  path:'cart',
  component:CartComponent

},


{
  path:'dashboard',
  component:DashboardComponent

},

{
  path:'introduction',
  component:IntroductionComponent

},


{
  path:'checkout',
  component:CheckoutComponent

},

{
  path:'leader',
  component:LeaderComponent

},

{
  path:'item',
  component:ItemComponent

},
{
  path:'login',
  component:LoginComponent

},


{
  path:'account',
  component:AccountComponent

},

{
  path:'orders',
  component:OrdersComponent

},
{
  path:'promotions',
  component:PromotionsComponent

},
{
  path:'settings',
  component:SettingsComponent

},
{
  path:'help',
  component:HelpComponent

},

{
  path:'',redirectTo:'login', pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
