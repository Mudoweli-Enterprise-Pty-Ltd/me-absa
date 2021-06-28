import { PhoneBook, Lookup } from "../_core/api.client.generated";

export class AddPhoneBookViewModel {
  phoneBook: PhoneBook = new PhoneBook();

  entryTypes: Lookup[];
}
