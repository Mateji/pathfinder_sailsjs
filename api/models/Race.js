module.exports = {

	attributes: {

		name: { type: 'string'},
		size: { model: 'size' },
		abilityModifiers: { collection: 'abilityModifier' },
		feats: { collection: 'feat' }

	}
}