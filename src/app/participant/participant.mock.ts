export const PARTICIPANT_LIST =
  [
    {
      id: 1, first: 'First01', last: 'Last01', years: 10, sex: 'M',
      models: [{id: 3, name: 'Georgia DanceSport ProAm', abbr: 'TS'}],
      typeA: {id: 1, name: 'Amateur', abbr: 'A'},
      typeB: {id: 3, name: 'Student', abbr: 'S'},

      proficiencies: [
        {genre:  {id: 1, name: 'Standard', abbr: 'Std'},
          proficiency:  {id: 1, name: 'Bronze', abbr: 'B'},
          years: 10},
        {genre: {id: 2, name: 'Latin', abbr: 'Ltn'},
          proficiency: {id: 2, name: 'Silver', abbr: 'S'},
          years: 10},
        {genre: {id: 3, name: 'Smooth', abbr: 'Sm'},
          proficiency: {id: 3, name: 'Gold', abbr: 'G'},
          years: 10}
      ]
    },
    {
      id: 2, first: 'First02', last: 'Last02', years: 14, sex: 'f',
      models: [{id: 3, name: 'Georgia DanceSport ProAm', abbr: 'TS'}],
      typeA: {id: 1, name: 'Amateur', abbr: 'A'},
      typeB: {id: 3, name: 'Student', abbr: 'S'},
      proficiencies:
        [
          {genre: {id: 1, name: 'Standard', abbr: 'Std'},
            proficiency: {id: 2, name: 'Silver', abbr: 'S'},
            years: 12},
          {genre: {id: 2, name: 'Latin', abbr: 'Ltn'},
            proficiency: {id: 2, name: 'Silver', abbr: 'S'},
            years: 12},
          {genre: {id: 3, name: 'Smooth', abbr: 'Sm'},
            proficiency: 3,
            years: 12}
        ]
    },
    {
      id: 3, first: 'First03', last: 'Last03', years: 18, sex: 'm',
      models: [{id: 3, name: 'Georgia DanceSport ProAm', abbr: 'TS'}],
      typeA: {id: 2, name: 'Professional', abbr: 'P'},
      typeB: {id: 4, name: 'Teacher', abbr: 'T'},
      proficiencies:
        [
          {genre: {id: 1, name: 'Standard', abbr: 'Std'},
            proficiency: {idStyle: 2, idProficiency: 2, years: 10},
            years: 20},
          {genre: {id: 1, name: 'Standard', abbr: 'Std'},
            proficiency: {id: 2, name: 'Silver', abbr: 'S'},
            years: 20}
        ]
    }
  ]
