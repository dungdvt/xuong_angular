import { Component } from '@angular/core';
import { MainComponent } from "../../components/main/main.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [MainComponent]
})
export class HomepageComponent {

}
