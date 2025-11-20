import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { AppLogicService } from './app-logic.service';
import { ConfigurableHighlightDirective } from './configurable-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,                  
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    ProductsTableComponent,
    ConfigurableHighlightDirective,
    UserProfileComponent
  ],
  template: `
    <h2>Data from AppLogicService:</h2>
    <ul>
      <li *ngFor="let item of data" configurableHighlight [highlightColor]="'lightblue'">
        {{ item.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];

  constructor(private appLogic: AppLogicService) {
    this.data = this.appLogic.getDataAndLog();
  }
}
