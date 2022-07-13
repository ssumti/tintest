using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Ssmti.real_estate.Data;

/* This is used if database provider does't define
 * Ireal_estateDbSchemaMigrator implementation.
 */
public class Nullreal_estateDbSchemaMigrator : Ireal_estateDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
