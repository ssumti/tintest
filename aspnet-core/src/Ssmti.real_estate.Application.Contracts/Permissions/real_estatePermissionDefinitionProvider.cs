using Ssmti.real_estate.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Ssmti.real_estate.Permissions;

public class real_estatePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(real_estatePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(real_estatePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<real_estateResource>(name);
    }
}
