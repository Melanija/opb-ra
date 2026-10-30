relations = [
    {
        name: 'zabava',
        header: ['ZID', 'Naziv', 'Datum', 'Kraj'],
        types: ['number', 'string', 'date', 'string'],
        shortName: 'z',
        data: [
            [1, "Summer Party", "2026-07-10", "Ljubljana"],
            [2, "Techno Night", "2026-07-15", "Maribor"],
            [3, "Beach Party", "2026-07-20", "Koper"],
            [4, "Student Party", "2026-07-25", "Ljubljana"],
            [5, "House Evening", "2026-08-01", "Ljubljana"],
            [6, "Summer Closing", "2026-08-10", "Portorož"]
        ]
    },
    {
        name: 'dj',
        header: ['DJID', 'Ime', 'Zvrst'],
        types: ['number', 'string', 'string'],
        shortName: 'd',
        data: [
            [1, "Ana", "techno"],
            [2, "Marko", "house"],
            [3, "Tina", "techno"],
            [4, "Luka", "house"],
            [5, "Nika", "trance"],
            [6, "Miha", "techno"],
            [7, "Eva", "house"]
        ]
    },
    {
        name: 'nastop',
        header: ['ZID', 'DJID', 'Ura'],
        types: ['number', 'number', 'string'],
        shortName: 'n',
        data: [
            [1, 1, "20:00"],
            [1, 2, "22:00"],
            [2, 1, "21:00"],
            [2, 3, "23:00"],
            [3, 2, "20:00"],
            [3, 5, "22:00"],
            [4, 3, "21:00"],
            [4, 4, "23:00"],
            [5, 1, "20:00"],
            [5, 3, "22:00"],
            [6, 2, "21:00"],
            [6, 6, "23:00"]
        ]
    },
    {
        name: 'organizator',
        header: ['OID', 'Ime'],
        types: ['number', 'string'],
        shortName: 'o',
        data: [
            [1, "Nina"],
            [2, "Peter"],
            [3, "Maja"],
            [4, "Jan"]
        ]
    },
    {
        name: 'prireja',
        header: ['OID', 'ZID'],
        types: ['number', 'number'],
        shortName: 'p',
        data: [
            [1, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [2, 5],
            [3, 6]
        ]
    }
];
