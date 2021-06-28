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

namespace ABSA.PhoneBook.Core.PhoneBookManagement.Query
{
    public class GetPhoneBookQueryHandler : IRequestHandler<GetPhoneBookQuery, Model.PhoneBook>
    {
        private readonly ABSASQLContext _dbContext;
        private readonly IMapper _mapper;

        public GetPhoneBookQueryHandler(ABSASQLContext dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        public async Task<Model.PhoneBook> Handle(GetPhoneBookQuery request, CancellationToken cancellationToken)
        {
            var entity = await _dbContext.PhoneBook
                .Include(i => i.Entry)
                .ThenInclude(i => i.EntryType)
                .FirstOrDefaultAsync(p=>p.PhoneBookId==request.PhoneBookId, cancellationToken);

            var result = _mapper.Map<Model.PhoneBook>(entity);

            return result;
        }
    }
}
