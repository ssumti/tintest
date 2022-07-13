using Ssmti.real_estate.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Ssmti.real_estate;

[DependsOn(
    typeof(real_estateEntityFrameworkCoreTestModule)
    )]
public class real_estateDomainTestModule : AbpModule
{

}
