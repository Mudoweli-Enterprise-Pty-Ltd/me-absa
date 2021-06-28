using ABSA.PhoneBook.Model;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace ABSA.PhoneBook.Core.PhoneBookManagement.Message
{
    public class GetPhoneBookQuery: IRequest<Model.PhoneBook>
    {
        public int PhoneBookId { get; set; }
    }
}
