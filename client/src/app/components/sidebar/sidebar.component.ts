import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from "../../app.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [RouterLink, AppComponent]
})
export class SidebarComponent {

}
