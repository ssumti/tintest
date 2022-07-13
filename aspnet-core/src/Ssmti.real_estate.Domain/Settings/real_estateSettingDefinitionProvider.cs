using Volo.Abp.Settings;

namespace Ssmti.real_estate.Settings;

public class real_estateSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(real_estateSettings.MySetting1));
    }
}
