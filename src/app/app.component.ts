import { Component } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Empresa';
  public formgroup: FormGroup;
}
