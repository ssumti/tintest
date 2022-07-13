using Volo.Abp.Modularity;

namespace Ssmti.real_estate;

[DependsOn(
    typeof(real_estateApplicationModule),
    typeof(real_estateDomainTestModule)
    )]
public class real_estateApplicationTestModule : AbpModule
{

}
