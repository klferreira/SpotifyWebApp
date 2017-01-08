import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);