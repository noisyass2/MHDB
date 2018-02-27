import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeaponsComponent } from './weapons.component';
import { WBTComponent } from './weaponsbytype/wbt.component';
import { WeaponComponent } from './weapon/weapon.component';
// import { WeaponsByTypeComponent } from './weaponsbytype/weaponsbytype.component';

const routes: Routes = [
    { path: '', component: WeaponsComponent },
    { path: 'wtype/:id', component: WBTComponent},
    { path: 'weapon/:id',component: WeaponComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeaponsRoutingModule {}
