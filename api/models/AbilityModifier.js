module.exports = {

	attributes: {
		modifyAbility: {
			type: 'string',
			enum: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
		}

		modifyValue: {
			type: 'integer'
		}
		
	}
}