import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logistics',
    loadChildren: () => import('./logistics/logistics.module').then( m => m.LogisticsPageModule)
  },
  {
    path: 'errand',
    loadChildren: () => import('./errand/errand.module').then( m => m.ErrandPageModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then( m => m.EcommercePageModule)
  },
  {
    path: 'ecommerce-login',
    loadChildren: () => import('./ecommerce-login/ecommerce-login.module').then( m => m.EcommerceLoginPageModule)
  },
  {
    path: 'errand-login',
    loadChildren: () => import('./errand-login/errand-login.module').then( m => m.ErrandLoginPageModule)
  },
  {
    path: 'logistics-login',
    loadChildren: () => import('./logistics-login/logistics-login.module').then( m => m.LogisticsLoginPageModule)
  },
  {
    path: 'logistics-signup',
    loadChildren: () => import('./logistics-signup/logistics-signup.module').then( m => m.LogisticsSignupPageModule)
  },
  {
    path: 'errand-signup',
    loadChildren: () => import('./errand-signup/errand-signup.module').then( m => m.ErrandSignupPageModule)
  },
  {
    path: 'ecommerce-signup',
    loadChildren: () => import('./ecommerce-signup/ecommerce-signup.module').then( m => m.EcommerceSignupPageModule)
  },
  {
    path: 'user-signup',
    loadChildren: () => import('./user-signup/user-signup.module').then( m => m.UserSignupPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
