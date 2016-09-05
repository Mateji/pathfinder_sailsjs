module.exports = {

	attributes: {

		

		name: {
			type: 'string',
			defaultsTo: ''
		},




		owner: { model: 'User' },
		abilities: { collection: 'Ability' },
		race: { collection: 'Race' },
		classes: { collection: 'Class' },
		skills: { collection: 'Skill' },
		feats: { collection: 'Feat' }

	}
}