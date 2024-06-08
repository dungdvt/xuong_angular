import { RegisterForm } from './../types/User';
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './pages/products/detail/detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductAddComponent } from './pages/admin/products/add/add.component';
import { ProductEditComponent } from './pages/admin/products/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListUserComponent } from './pages/admin/users/list-user/list-user.component';


export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products/list',
        component: ProductListComponent,
      },
      {
        path: 'products/add',
        component: ProductAddComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent,
      },
      {
        path: 'users/list-user',
        component: ListUserComponent,
      },
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
