module.exports = {
	attributes: {
		object_type: {
			type: 'string',
			enum: ['Feat','Ability']
		},
		object_id: {
			type: 'integer'
		},
		prefix: {
			type: 'string'
		},
		suffix: {
			type: 'string'
		}
	},

	seedData: [
		{
			id: 1,
			object_type: 'Ability',
			object_id: 4,
			suffix: ' 13'
		},
		{
			id: 2,
			object_type: 'Ability',
			object_id: 5,
			suffix: ' 15'
		}
	]
}