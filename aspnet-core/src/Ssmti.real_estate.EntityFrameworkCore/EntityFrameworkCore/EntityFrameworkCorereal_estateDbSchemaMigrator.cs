using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Ssmti.real_estate.Data;
using Volo.Abp.DependencyInjection;

namespace Ssmti.real_estate.EntityFrameworkCore;

public class EntityFrameworkCorereal_estateDbSchemaMigrator
    : Ireal_estateDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCorereal_estateDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the real_estateDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<real_estateDbContext>()
            .Database
            .MigrateAsync();
    }
}
