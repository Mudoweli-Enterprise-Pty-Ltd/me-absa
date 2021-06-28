using AutoMapper;
using Enums = ABSA.PhoneBook.Model.Enums;

namespace ABSA.PhoneBook.Core.Infrastructure
{
    public class AutoMapperConfig : Profile
    {

        public AutoMapperConfig()
        {

            CreateMap<Model.PhoneBook, Entities.PhoneBook>();
            CreateMap<Entities.PhoneBook, Model.PhoneBook>()
                .ForMember(dest => dest.Entries, opt => opt.MapFrom(src => src.Entry));

            CreateMap<Model.Entry, Entities.Entry>();
            CreateMap<Entities.Entry, Model.Entry>()
                .ForMember(dest => dest.EntryType, opt => opt.MapFrom(src => src.EntryType));

            CreateMap<Enums.EntryType, Entities.EntryType>()
                .ForMember(dest => dest.EntryTypeId, opt => opt.MapFrom(src => (int)src));
            CreateMap<Entities.EntryType, Enums.EntryType>()
                .ConstructUsing(src => (Enums.EntryType)src.EntryTypeId);

            CreateMap<Model.Lookup, Entities.EntryType>()
                .ForMember(dest => dest.EntryTypeId, opt => opt.MapFrom(src => src.Id));
            CreateMap<Entities.EntryType, Model.Lookup>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.EntryTypeId));

        }
    }
}
