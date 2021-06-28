import { Component, OnInit } from '@angular/core';
import { PhoneBook, Service, EntryType, Lookup, Entry } from '../_core/api.client.generated';
import { AddPhoneBookViewModel } from '../_models/addPhoneBookViewModel';
import { AlertService } from '../_core/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-phone-book',
  templateUrl: './add-phone-book.component.html',
  styleUrls: ['./add-phone-book.component.css']
})
export class AddPhoneBookComponent implements OnInit {

  model: AddPhoneBookViewModel = new AddPhoneBookViewModel();

  constructor(
    private service: Service,
    private alertService: AlertService,
    private router: Router) {

  }

  ngOnInit() {

    this.addEntry();

    this.service.getEntryTypes().subscribe((result: Lookup[]) => {
      this.model.entryTypes = result;

      //console.log(result);
    }, error => {
      //console.log(error);
    });
  }

  addEntry() {

    if (!this.model.phoneBook.entries)
      this.model.phoneBook.entries = [];

    let defaultEntry: Entry = new Entry();
    defaultEntry.entryType = EntryType._1; // default to mobile;
    this.model.phoneBook.entries.push(defaultEntry);
  }


  save() {

    this.service.addPhoneBook(this.model.phoneBook).subscribe(addResult => {

      this.alertService.showSuccess('Phone Book Saved');
      this.router.navigate(['/home']);

    }, addError => {
      //console.error(addError);
      // handle Status406NotAcceptable
      if (addError.status == "406") {
        if (addError.response == "Name") {
          this.alertService.showError(this.model.phoneBook.name + " already exists.", "Phone Book Name");
        }
      }

    });
  }

}
