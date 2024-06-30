import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BestsellersComponent } from "./component/bestsellers/bestsellers.component";
import { BannerComponent } from "./component/banner/banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, BestsellersComponent, BannerComponent]
})
export class AppComponent {
  title = 'ApniBhagbani';
}
