import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerformComponent } from './pages/customerform/customerform.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { GasProductComponent } from './pages/gas-product/gas-product.component';
import { OrderComponent } from './pages/order/order.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

export const routes: Routes = [
    {path:'admin', component:AdminComponent},
    {path:'customerForm',component:CustomerformComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'gas_product',component:GasProductComponent},
    {path:'order', component:OrderComponent},
    {path:'supplier',component:SupplierComponent}
];
