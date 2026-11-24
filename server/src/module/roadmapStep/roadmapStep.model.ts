import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { RoadmapModel } from "../roadmap/roadmap.model";

export const RoadmapStepModel = sequelize.define(
  "roadmapStep",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    roadmapId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoadmapModel,
        key: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topics: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    project: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "roadmapStep",
    timestamps: false,
  },
);
