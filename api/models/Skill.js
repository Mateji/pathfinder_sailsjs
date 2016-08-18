module.exports = {

	attributes: {

		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		untrained: {
			type: 'boolean'
		},
		associatedAbility: {
			type: 'string',
			enum: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
		},
		armorCheckPenalty: {
			type: 'boolean'
		}


	}
}