module.exports = {

	attributes: {

		

		name: {
			type: 'string',
			defaultsTo: ''
		},




		//player: { model: 'Player' },
		abilities: { collection: 'Ability' },
		race: { collection: 'Race' },
		classes: { collection: 'Class' },
		skills: { collection: 'Skill' },
		feats: { collection: 'Feat' }

	}
}