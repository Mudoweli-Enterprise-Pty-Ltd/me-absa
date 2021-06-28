using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABSA.PhoneBook.WebApp.Infrastructure
{
    public class AutoMapperConfig : Profile
    {

        public AutoMapperConfig()
        {

            CreateMap<ViewModels.PhoneBookViewModel, Model.PhoneBook>();
        }
    }
}
