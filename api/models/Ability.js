module.exports = {

	attributes: {

		abilityName: {
			type: 'string',
			enum: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
		},

		abilityScore: {
			type: 'integer',
			defaultsTo: 10
		},

		abilityItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},

		abilityTempScore: {
			type: 'integer',
			defaultsTo: 10
		},

		getAbilityModifier: function() {
			return ((this.abilityScore + abilityItemBonus) - 10) / 2;
		},

		getAbilityTempModifier: function() {
			return (this.abilityTempScore - 10) / 2
		}

		/*strengthScore: {
			type: 'integer',
			defaultsTo: 10
		},
		dexterityScore: {
			type: 'integer',
			defaultsTo: 10
		},
		constitutionScore: {
			type: 'integer',
			defaultsTo: 10
		},
		intelligenceScore: {
			type: 'integer',
			defaultsTo: 10
		},
		wisdomScore: {
			type: 'integer',
			defaultsTo: 10
		},
		charismaScore: {
			type: 'integer',
			defaultsTo: 10
		},



		strengthItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},
		dexterityItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},
		constitutionItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},
		intelligenceItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},
		wisdomItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},
		charismaItemBonus: {
			type: 'integer',
			defaultsTo: 0
		},


		getStrengthAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},
		getDexterityAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},
		getConstitutionAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},
		getIntelligenceAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},
		getWisdomAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},
		getCharismaAbilityModifier: function() {
			return ((this.strengthScore + strengthItemBonus) - 10) / 2;
		},*/
	}
}