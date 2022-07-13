using System;
using System.Collections.Generic;
using System.Text;
using Ssmti.real_estate.Localization;
using Volo.Abp.Application.Services;

namespace Ssmti.real_estate;

/* Inherit your application services from this class.
 */
public abstract class real_estateAppService : ApplicationService
{
    protected real_estateAppService()
    {
        LocalizationResource = typeof(real_estateResource);
    }
}
