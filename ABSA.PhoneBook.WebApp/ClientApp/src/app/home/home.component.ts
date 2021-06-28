import { Component, Inject } from '@angular/core';
import { Service, EntryType, PhoneBook } from '../_core/api.client.generated';
import { HomeViewModel } from '../_models/homeViewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public model: HomeViewModel = new HomeViewModel();

  constructor(
    private service: Service) {
  }

  ngOnInit() {

    this.service.getPhoneBooks().subscribe((result: PhoneBook[]) => {
      this.model.phoneBooks = result;

      //console.log(result);
    }, error => {
      //console.error(error);
    });

  }
}
