using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Ssmti.real_estate;

[Dependency(ReplaceServices = true)]
public class real_estateBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "real_estate";
}
