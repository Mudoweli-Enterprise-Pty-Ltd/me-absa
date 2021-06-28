using ABSA.PhoneBook.Model;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace ABSA.PhoneBook.Core.PhoneBookManagement.Message
{
    public class GetPhoneBooksQuery: IRequest<List<Model.PhoneBook>>
    {
    }
}
