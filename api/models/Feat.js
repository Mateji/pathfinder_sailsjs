module.exports = {

	attributes: {

		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		type: {
			collection: 'FeatType'
		},
		prerequisites: { type: 'string' }, // caster level?
		benefits: {
			type: 'string'
		}

	},

	seedData: [
		{
			name: 'Acrobatic',
			description: 'You are skilled at leaping, jumping, and flying.',
			type: 2,
			prerequisites: '',
			benefits: 'You get a +2 bonus on all Acrobatics and Fly skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.'
		},
		{
			name: 'Combat Expertise',
			description: 'You can increase your defense at the expense of your accuracy.',
			type: [1, 2],
			prerequisites: '{Ability:name:Intelligence} 13',
			benefits: 'You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.'
		},
		{
			name: 'Test Feat',
			description: 'this is a test',
			type: 1,
			prerequisites: '{Ability:name:Intelligence} 13, {Ability:name:Wisdom} 15',
			benefits: 'this is really just a test for the parsing'
		}
	]
}