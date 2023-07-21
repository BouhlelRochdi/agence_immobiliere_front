import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', loadComponent: () => import('./pages/containers/home/home.component').then((m) => m.HomeComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
      { path: 'landing-page', loadComponent: () => import('./pages/componenets/home-page/home-page.component').then((m) => m.HomePageComponent) },
      { path: 'proprety', loadComponent: () => import('./pages/componenets/proprety/proprety.component').then((m) => m.PropretyComponent), },
      { path: 'contact', loadComponent: () => import('./pages/componenets/contact/contact.component').then((m) => m.ContactComponent), },
      // change password
      { path: 'change-password', loadComponent: () => import('./pages/componenets/change-password/change-password.component').then((m) => m.ChangePasswordComponent), },
      // user profile
      { path: 'user-profile', loadComponent: () => import('./pages/componenets/user-profile/user-profile.component').then((m) => m.UserProfileComponent), },
      // list properties
      { path: 'list-properties', loadComponent: () => import('./pages/componenets/list-properties/list-properties.component').then((m) => m.ListPropertiesComponent), },
      // submit property
      { path: 'submit-property', loadComponent: () => import('./pages/componenets/submit-property/submit-property.component').then((m) => m.SubmitPropertyComponent), },
      // faq
      { path: 'faq', loadComponent: () => import('./pages/componenets/faq/faq.component').then((m) => m.FaqComponent), },
    ]
  },
  // 404 notfound 
  { path: '**', loadComponent: () => import('./pages/componenets/not-found/not-found.component').then((m) => m.NotFoundComponent) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
