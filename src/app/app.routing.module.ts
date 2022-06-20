import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';



const routes: Routes = [
    { path: '', redirectTo: '/card', pathMatch: 'full' },
    { path: 'card', component: CardsComponent },
    { path: 'form', component: FormComponent },
    { path: 'table', component: TableComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }