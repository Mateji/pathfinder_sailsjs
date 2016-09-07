module.exports = {

	attributes: {

		name: {
			type: 'string',
			enum: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
		},
		description: {
			type: 'string'
		}
	},
	seedData: [
		{
			id: 1,
			name: 'Strength'
		},
		{
			id: 2,
			name: 'Dexterity'
		},
		{
			id: 3,
			name: 'Constitution'
		},
		{
			id: 4,
			name: 'Intelligence'
		},
		{
			id: 5,
			name: 'Wisdom'
		},
		{
			id: 6,
			name: 'Charisma'
		}
	]
}