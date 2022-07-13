using Ssmti.real_estate.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Ssmti.real_estate.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class real_estateController : AbpControllerBase
{
    protected real_estateController()
    {
        LocalizationResource = typeof(real_estateResource);
    }
}
