const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {

	const Blog = sequelize.define('Blog', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			unique: true
		},
		author: {
			type: DataTypes.STRING,
			// allowNull: false,
			defaultValue: '',
			unique: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		brief: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: ''
		},
		visits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: ''
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		createdAt: {
			type: 'timestamp',
			defaultValue: sequelize.literal('NOW()'),
			field: 'created_at',
		},
		updatedAt: {
			type: 'timestamp',
			defaultValue: sequelize.literal('NOW()'),
			field: 'updated_at',
		},
		deleteAt: {
			type: 'timestamp',
			field: 'deleted_at'
		}
	}, {
		timestamps: false,
		underscored: true,
		// paranoid: true,
		freezeTableName: true,
		tableName: 'user',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	// User.associate = function (models) {
	//     User.hasOne(models['project'],{foreignKey: 'uId',sourceKey: 'id'});
	// }

	return Blog;
};