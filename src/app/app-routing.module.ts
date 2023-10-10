import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'who-we-are',
    component: WhoWeAreComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'pessoas',
        exposedModule: './register',
      }).then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'pessoas',
        exposedModule: './login',
      }).then((c) => c.LoginComponent),
  },
  {
    path: 'game',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'game',
        exposedModule: './game',
      }).then((c) => c.GameComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
