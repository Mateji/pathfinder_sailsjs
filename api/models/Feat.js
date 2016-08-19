module.exports = {

	attributes: {

		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		type: {
			type: 'string',
			enum: ['Feats', 'Item Creation Feats', 'Metamagic Feats']
		},
		combatFeat: {
			type: 'boolean'
		},
		prerequisites: { collection: 'feat' }, // caster level?
		benefits: {
			type: 'string'
		}

	}
}