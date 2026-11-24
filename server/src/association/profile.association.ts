import { UserModel } from "../module/user/user.model";
import { UserProfileModel } from "../module/panel/panel.model";

UserModel.hasOne(UserProfileModel, {
  foreignKey: "userId",
  as: "profile",
});

UserProfileModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "profile",
});
