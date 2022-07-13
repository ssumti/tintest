using Ssmti.real_estate.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Ssmti.real_estate.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(real_estateEntityFrameworkCoreModule),
    typeof(real_estateApplicationContractsModule)
    )]
public class real_estateDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
