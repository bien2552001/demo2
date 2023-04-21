using AutoMapper;
using BACKEND.Entities.DTO.DataDto.DTSU666;
using BACKEND.Entities.Model.Data_Mo.DTSU666;

namespace BACKEND.Extensions.Service.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            // _________________________________DTSU666__________________________________


            // Ánh xạ cho phương thức Post
            CreateMap<DTSU666_Post_Dto, DTSU666_Model>();

            CreateMap<DTSU666_Model, DTSU666_Get_Dto>();

            //Put
            CreateMap<DTSU666_Put_Dto, DTSU666_Model>();

            // Data Shapping DTSU666
            CreateMap<DTSU666_DataShapping_Dto, DTSU666_Model>();



        }
    }
}