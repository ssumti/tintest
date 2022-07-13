using System.Threading.Tasks;

namespace Ssmti.real_estate.Data;

public interface Ireal_estateDbSchemaMigrator
{
    Task MigrateAsync();
}
