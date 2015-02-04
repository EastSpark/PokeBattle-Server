// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "PBV 1500",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'PBV 1500 Clause'],
		banlist: []
	},
	{
		name: "PBV 1000",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'PBV 1000 Clause'],
		banlist: []
	},
	{
		name: "PBV 750",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'PBV 750 Clause'],
		banlist: []
	},
	{
		name: "PBV 500",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'PBV 500 Clause'],
	},
	{
		name: "PBV 250",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview', 'PBV 250 Clause'],
	},
	
	//ORAS SINGLES
	////////////////////////////////
	
	
	{
		name: "PBV 1500 ORAS",
		section: "ORAS Singles",

		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'PBV 1500 Clause'],
		banlist: ['Illegal', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	{
		name: "PBV 1000 ORAS",
		section: "ORAS Singles",

		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'PBV 1000 Clause'],
		banlist: ['Illegal', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	{
		name: "PBV 750 ORAS",
		section: "ORAS Singles",

		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'PBV 750 Clause'],
		banlist: ['Illegal', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	{
		name: "PBV 500 ORAS",
		section: "ORAS Singles",

		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'PBV 500 Clause'],
		banlist: ['Illegal', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	{
		name: "PBV 250 ORAS",
		section: "ORAS Singles",

		mod: 'oras',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview', 'PBV 250 Clause'],
		banlist: ['Illegal', 'Floette-Eternal-Flower', 'Hoopa', 'Volcanion', 'Soul Dew',
			'Bug Gem', 'Custap Berry', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fighting Gem', 'Fire Gem', 'Flying Gem', 'Ghost Gem',
			'Grass Gem', 'Ground Gem', 'Ice Gem', 'Mail', 'Poison Gem', 'Psychic Gem', 'Rock Gem', 'Steel Gem', 'Water Gem'
		]
	},
	
	// XY Doubles
	///////////////////////////////////////////////////////////////////
	
	{
		name: "PBV 1500 Doubles",
		section: "XY Doubles",
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview', 'PBV 1500 Clause'],
		banlist: ['Soul Dew', 'Dark Void',
		'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
		'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "PBV 1000 Doubles",
		section: "XY Doubles",
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview', 'PBV 1000 Clause'],
		banlist: ['Soul Dew', 'Dark Void',
		'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
		'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "PBV 750 Doubles",
		section: "XY Doubles",
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview', 'PBV 750 Clause'],
		banlist: ['Soul Dew', 'Dark Void',
		'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
		'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "PBV 500 Doubles",
		section: "XY Doubles",
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview', 'PBV 500 Clause'],
		banlist: ['Soul Dew', 'Dark Void',
		'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
		'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "PBV 250 Doubles",
		section: "XY Doubles",
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview', 'PBV 250 Clause'],
		banlist: ['Soul Dew', 'Dark Void',
		'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
		'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	
	//XY MONOTYPE
	////////////////////////////
	{
		name: "PBV 1500 Monotype",
		section: "XY Monotype",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', '1500 PBV Clause', 'Same Type Clause']
	},
	{
		name: "PBV 1000 Monotype",
		section: "XY Monotype",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', '1000 PBV Clause', 'Same Type Clause']
	},
	{
		name: "PBV 750 Monotype",
		section: "XY Monotype",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', '1500 PBV Clause', 'Same Type Clause']
	},
	{
		name: "PBV 500 Monotype",
		section: "XY Monotype",
		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', '1500 PBV Clause', 'Same Type Clause']
	}
];
