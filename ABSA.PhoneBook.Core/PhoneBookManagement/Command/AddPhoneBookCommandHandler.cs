using ABSA.PhoneBook.Core.Entities;
using ABSA.PhoneBook.Core.PhoneBookManagement.Message;
using ABSA.PhoneBook.Model;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ABSA.PhoneBook.Core.PhoneBookManagement.Command
{
    public class AddPhoneBookCommandHandler : IRequestHandler<AddPhoneBookCommand, Dictionary<string, string>>
    {
        private readonly ABSASQLContext _dbContext;
        private readonly IMapper _mapper;

        public AddPhoneBookCommandHandler(ABSASQLContext dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        public async Task<Dictionary<string, string>> Handle(AddPhoneBookCommand request, CancellationToken cancellationToken)
        {
            Dictionary<string, string> validation = new Dictionary<string, string>();

            if (await _dbContext.PhoneBook.AnyAsync(p => p.Name == request.PhoneBook.Name &&
                    p.PhoneBookId != request.PhoneBook.PhoneBookId, cancellationToken))
            {
                validation.Add(nameof(request.PhoneBook.Name), "Phone Book Name already exists");
                return validation;
            }

            var phoneBookEntity = new Entities.PhoneBook
            {
                Name = request.PhoneBook.Name
            };

            await _dbContext.PhoneBook.AddAsync(phoneBookEntity, cancellationToken);

            foreach (var entry in request.PhoneBook.Entries)
            {
                var entryEntity = new Entities.Entry
                {
                    PhoneBookId = phoneBookEntity.PhoneBookId,
                    EntryTypeId = (int)entry.EntryType,
                    PhoneNumber = entry.PhoneNumber
                };
                await _dbContext.Entry.AddAsync(entryEntity, cancellationToken);
            };

            await _dbContext.SaveChangesAsync(cancellationToken);

            return validation;
        }
    }
}
