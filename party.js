relations = [
    {
        name: 'zabava',
        header: ['ZID', 'Naziv', 'Datum', 'Kraj'],
        types: ['number', 'string', 'date', 'string'],
        shortName: 'z',
        data: [
            [10, "Summer Party", "2026-07-10", "Ljubljana"],
            [20, "Techno Night", "2026-07-15", "Maribor"],
            [30, "Beach Party", "2026-07-20", "Koper"],
            [40, "Student Party", "2026-07-25", "Ljubljana"],
            [50, "House Evening", "2026-08-01", "Ljubljana"],
            [60, "Summer Closing", "2026-08-10", "Portorož"],
            [70, "Trance Party", "2026-08-20", "Celje"] //dodano
        ]
    },
    {
        name: 'dj',
        header: ['DJID', 'Ime', 'Zvrst'],
        types: ['number', 'string', 'string'],
        shortName: 'd',
        data: [
            [10, "Ana", "techno"],
            [20, "Marko", "house"],
            [30, "Tina", "techno"],
            [40, "Luka", "house"],
            [50, "Nika", "trance"],
            [60, "Miha", "techno"],
            [70, "Eva", "house"],
            [80, "Nik", "pop"] //Dodano
        ]
    },
    {
        name: 'nastop',
        header: ['ZID', 'DJID', 'Ura'],
        types: ['number', 'number', 'string'],
        shortName: 'n',
        data: [
            [10, 10, "20:00"],
            [10, 20, "22:00"],
            [20, 10, "21:00"],
            [20, 30, "23:00"],
            [30, 20, "20:00"],
            [30, 50, "22:00"],
            [40, 30, "21:00"],
            [40, 40, "23:00"],
            [50, 10, "20:00"],
            [50, 30, "22:00"],
            [60, 20, "21:00"],
            [60, 60, "23:00"],
            // DODANO: dodatni skupni nastopi
            [10, 30, "23:00"],
            [10, 40, "23:30"],
            [20, 20, "22:00"],
            [20, 40, "23:30"],
            [30, 10, "21:00"],
            [30, 30, "23:00"],
            [40, 10, "20:00"],
            [40, 20, "22:00"],
            [50, 20, "21:00"],
            [50, 40, "23:00"],
            [60, 10, "20:00"],
            [60, 30, "22:00"],
            [70, 50, "22:00"] //dodano 
        ]
    },
    {
        name: 'organizator',
        header: ['OID', 'Ime'],
        types: ['number', 'string'],
        shortName: 'o',
        data: [
            [10, "Nina"],
            [20, "Peter"],
            [30, "Maja"],
            [40, "Jan"],
            //Dodano
            [50, "Tim"], 
            [60, "Nejc"] 
        ]
    },
    {
        name: 'prireja',
        header: ['OID', 'ZID'],
        types: ['number', 'number'],
        shortName: 'p',
        data: [
            [10, 10],
            [10, 20],
            [20, 30],
            [30, 40],
            [20, 50],
            [30, 60],
             // DODANO: dodatne organizatorske povezave
            [10, 40],
            [10, 50],
            [20, 20],
            [20, 60],
            [30, 10],
            [40, 30],
            [40, 50],
            [60, 70] //dodano
        ]
    }
];
//vsi identifikatorji imajo dodano eno nulo