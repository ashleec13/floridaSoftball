const players = [
    {
        firstName: "Ava",
        lastName: "Brown",
        number: "00",
        position: "RHP/1B",
        class: "Junior",
        hometown: "Montgomery, Texas",
        major: "Psychology",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FAva_Brown_Headshot_Cropped_1NCbP.png&width=180&height=270&type=webp",
        bio: "Two-way junior for Florida Gators softball and former All-SEC Second Team selection who contributes as both a power hitter and key pitcher for the Gators."
    },

    {
        firstName: "Caroline",
        lastName: "Stanton",
        number: "1",
        position: "UTL",
        class: "Freshman",
        hometown: "Buford, Ga.",
        major: "Undecided",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2026%2F2%2F20%2FCaroline_Stanton.png&width=180&height=270&type=webp",
        bio: "Elite freshman pitcher and former No. 1 overall recruit in the 2025 class who earned national recognition throughout her decorated high school career."
    },

    {
        firstName: "Giulia",
        lastName: "Desiderio",
        number: "2",
        position: "UTL",
        class: "Graduate Student",
        hometown: "Hudson, Fla.",
        major: "Sport Management",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FGiulia_Desiderio_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Sport management graduate student and former South Carolina Gamecocks softball catcher who earned multiple SEC academic honors while building a strong defensive career highlighted by elite fielding and runner control behind the plate."
    },

    {
        firstName: "Kalie",
        lastName: "Matsuno",
        number: "4",
        position: "INF",
        class: "Freshman",
        hometown: "Cerritos, Cali.",
        major: "Undecided",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FKalie_Matsuno_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Highly regarded freshman infielder known for her standout defensive play and impressive prep softball achievements in California."
    },


    {
        firstName: "Keagan",
        lastName: "Rothrock",
        number: "7",
        position: "RHP",
        class: "Junior",
        hometown: "Whiteland, Ind.",
        major: "Health Education & Behavior",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FKeagan_Rothrock_Headshot_Cropped_nVufQ.png&width=180&height=270&type=webp",
        bio: "All-American pitcher, SEC Freshman of the Year, and All-SEC Second Team selection who has become one of the nation’s top strikeout aces."
    },


    {
        firstName: "Jocelyn",
        lastName: "Erickson",
        number: "8",
        position: "C",
        class: "Senior",
        hometown: "Phoenix, Ariz.",
        major: "Sport Management",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FJocelyn_Erickson_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "All-American catcher, SEC Player of the Year, NFCA Catcher of the Year, Gold Glove winner, and All-SEC First Team selection known for her elite power and leadership."
    },

    {
        firstName: "Gabi",
        lastName: "Comia",
        number: "10",
        position: "INF",
        class: "Sophomore",
        hometown: "St. John, Ind.",
        major: "Education Sciences",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FGabi_Comia_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Former Freshman All-SEC Team selection recognized for her consistent contact hitting, speed, and dependable infield defense."
    },

    {
        firstName: "Kendall",
        lastName: "Grover",
        number: "12",
        position: "INF",
        class: "Senior",
        hometown: "Mooresville, Ind.",
        major: "Education Sciences",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FKendall_Grover_Headshot_Cropped_iU1pq.png&width=180&height=270&type=webp",
        bio: "Veteran senior infielder and SEC Academic Honor Roll member who provides leadership and reliable defense for the Gators."
    },

    {
        firstName: "Olivia",
        lastName: "Miller",
        number: "13",
        position: "LHP",
        class: "Junior",
        hometown: "Orlando, Fla.",
        major: "Sport Management",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FOlivia_Miller_Headshot_Cropped_H1pUT.png&width=180&height=270&type=webp",
        bio: "Talented left-handed junior pitcher and SEC Academic Honor Roll selection who adds depth and versatility to Florida’s pitching staff."
    },

    {
        firstName: "Allison",
        lastName: "Sparkman",
        number: "16",
        position: "RHP",
        class: "Junior",
        hometown: "Canton, Georgia",
        major: "Health Education & Behavior",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FAllison_Sparkman_Headshot_Cropped_8T8EU.png&width=180&height=270&type=webp",
        bio: "Reliable junior pitcher and SEC Academic Honor Roll honoree who gives Florida valuable innings and matchup flexibility in the circle."
    },
    {
        firstName: "Taylor",
        lastName: "Shumaker",
        number: "21",
        position: "OF",
        class: "Sophomore",
        hometown: "Fullerton, California",
        major: "Telecommunications",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FTaylor_Shumaker_Headshot_Cropped_UP6vg.png&width=180&height=270&type=webp",
        bio: "Freshman All-American and Preseason All-SEC selection who quickly became one of Florida’s top offensive threats with her powerful bat."
    },
    {
        firstName: "Cassidy",
        lastName: "McLellan",
        number: "22",
        position: "OF",
        class: "Junior",
        hometown: "Lakewood Ranch, Florida",
        major: "Health Education & Behavior",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FCassidy_McLellan_Headshot_Cropped_myxaq.png&width=180&height=270&type=webp",
        bio: "Athletic junior outfielder and SEC Academic Honor Roll selection recognized for her speed, defensive range, and offensive versatility."
    },
    {
        firstName: "Madison",
        lastName: "Walker",
        number: "24",
        position: "UTL",
        class: "Junior",
        hometown: "Olathe, Kansas",
        major: "Sport Management",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FMadison_Walker_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Versatile junior utility player who contributes across multiple positions with dependable defense and timely hitting."
    },
    {
        firstName: "Kenleigh",
        lastName: "Cahalan",
        number: "31",
        position: "INF",
        class: "Senior",
        hometown: "Trussville, Alabama",
        major: "Education Sciences",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FKenleigh_Cahalan_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Experienced senior infielder and former All-Conference performer known for her leadership, strong defense, and clutch hitting ability."
    },
    {
        firstName: "Leah",
        lastName: "Stevens",
        number: "32",
        position: "RHP",
        class: "Freshman",
        hometown: "Palm Coast, Florida",
        major: "Aerospace Engineering",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FLeah_Stevens_Headshot_Cropped_EEz2Q.png&width=180&height=270&type=webp",
        bio: "Promising freshman pitcher with a decorated high school career and multiple prep softball honors entering Florida’s rotation."
    },
    {
        firstName: "Katelynn",
        lastName: "Oxley",
        number: "39",
        position: "RHP",
        class: "Sophomore",
        hometown: "Bartow, Florida",
        major: "Applied Physiology & Kinesiology",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FKatelynn_Oxley_Headshot_Cropped_3YwNE.png&width=180&height=270&type=webp",
        bio: "Developing sophomore pitcher and former standout Florida high school athlete who continues to grow into an important depth option."
    },
    {
        firstName: "Townsen",
        lastName: "Thomas",
        number: "44",
        position: "OF",
        class: "Redshirt Freshman",
        hometown: "Humble, Texas",
        major: "Applied Physiology & Kinesiology",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FTowsen_Thomas_Headshot_Cropped_T7j2s.png&width=180&height=270&type=webp",
        bio: "Athletic redshirt freshman outfielder who brings speed, versatility, and strong defensive energy to Florida’s lineup."
    },
    {
        firstName: "Ella",
        lastName: "Wesolowski",
        number: "74",
        position: "C",
        class: "Junior",
        hometown: "Williamsville, New York",
        major: "Education Sciences",
        photo: "https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fgatorzone.com%2Fimages%2F2025%2F9%2F3%2FElla_Wesolowski_Headshot_Cropped.png&width=180&height=270&type=webp",
        bio: "Skilled junior catcher and SEC Academic Honor Roll member who provides strong defensive play and valuable depth behind the plate."
    }]
