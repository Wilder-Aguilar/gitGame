// models/videoModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import connectionDb from '../database/conectionDb';
import UserModel from '../models/userModel';

interface VideoAttributes {
    id: number;
    user_id: number;
    title: string;
    video_url: string;
    published_at?: Date;
    updated_at?: Date;
    thumbnail?: string | null;
}

interface VideoCreationAttributes extends Optional<VideoAttributes, 'id' | 'published_at' | 'updated_at' | 'thumbnail'> {}

class Video extends Model<VideoAttributes, VideoCreationAttributes> implements VideoAttributes {
    public id!: number;
    public user_id!: number;
    public title!: string;
    public video_url!: string;
    public published_at!: Date;
    public updated_at!: Date;
    public thumbnail!: string | null;
}

Video.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        published_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'videos',
        sequelize: connectionDb,
        timestamps: false,
        hooks: {
            beforeUpdate: (video: Video) => {
                video.updated_at = new Date();
            }
        }
    }
);

export default Video;
