namespace ABSA.PhoneBook.Model
{
    public class Entry
    {
        public int EntryId { get; set; }
        public Enums.EntryType EntryType { get; set; }
        public string PhoneNumber { get; set; }
    }
}
