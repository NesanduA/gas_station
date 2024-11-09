import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerformComponent } from './pages/customerform/customerform.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { GasProductComponent } from './pages/gas-product/gas-product.component';
import { OrderComponent } from './pages/order/order.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gas_station';
}
