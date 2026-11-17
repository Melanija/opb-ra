relations = [
    {
        name: 'privacy', header: ['PID', 'Privacy'], types: ['number', 'string'], shortName: 'p',
        data: [
            [10, "Unclassified"],
            [20, "Confidential"],
            [30, "Secret"]
        ]
    },
    {
        name: 'embassy', header: ['EID', 'Embassy'], types: ['number', 'string'], shortName: 'e',
        data: [
            [10, "Buenos Aires"],
            [20, "Teheran"],
            [30, "Ljubljana"]
        ]
    },
    {
        name: 'reference', header: ['CID', 'RID'], types: ['number', 'number'], shortName: 'r',
        data: [
            [10, 20],
            [20, 40],
            [30, 50],
            [30, 40],
            [80, 90],
            [100, 90],
            [40, 90],
            [60, 90]
        ]
    },
    {
        name: 'cable', header: ['CID', 'Date', 'Content', 'PID', 'EID'], types: ['number', 'date', 'string', 'number', 'number'], shortName: 'c',
        data: [
            [10, "1956-12-28", "...Extended national jurisdictions over...", 10, 10],
            [20, "1962-02-25", "...General Azimi, minister of war, asks...", 10, 20],
            [30, "1962-03-09", "...Trials/executions of anti-government...", 20, 30],
            [40, "1991-01-02", "...he also made important contributions...", 30, 10],
            [50, "1990-02-02", "...and originality have made Einstein s...", 20, 20],
            [60, "1990-02-12", "...that if the special theory is correc...", 30, 30],
            [70, "1990-01-01", "...For much of the last phase of his ac...", 10, 10],
            [80, "1989-03-01", "...he enrolled in the mathematics and p...", 20, 20],
            [90, "1991-05-22", "...Horrified by the Nazi war of extermi...", 30, 30],
            [100, "1996-01-02", "...Einstein supported the Allies but ge...", 10, 20]
        ]
    }
]

//identifikatorjem sem dodala ničle
//letnice sem zmanjšala za 10 let, meseci in datumi ostajajo isti