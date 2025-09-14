import { Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';

export const routes: Routes = [
	{ path: 'usuarios', component: UserListComponent },
	{ path: 'registrar', component: UserFormComponent },
	{ path: '', redirectTo: 'usuarios', pathMatch: 'full' }
];
