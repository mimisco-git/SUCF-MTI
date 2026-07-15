export const weeklyPrograms = [
  { day: "Sunday Fellowship", time: "4:00 PM" },
  { day: "Monday Prayer Night", time: "7:00 PM" },
  { day: "Tuesday Bible Study", time: "4:00 PM" },
  { day: "Thursday Bible Study", time: "4:00 PM" },
];

export const event = {
  fellowship: "Scripture Union Campus Fellowship",
  institute: "Metallurgical Training Institute, Onitsha",
  edition: "9th Reunion Congress",
  theme: "Rebuilding the Broken Walls",
  dates: "31st October – 2nd November 2025",
  venue: "School Auditorium",
  expositor: "Pst. Israel Okokoni",
  alumniChairman: "Bro Ofili Franklin",
  president: "Bro Oyibo Divine Uchenna",
};

export const scriptures = [
  {
    ref: "Nehemiah 2:17",
    text:
      "You see the distress that we are in, how Jerusalem lies waste, and its gates are burned with fire. Come, and let us build up the wall of Jerusalem, that we be no more a reproach.",
  },
  {
    ref: "Isaiah 58:12",
    text:
      "And they that shall be of thee shall build the old waste places: thou shalt raise up the foundations of many generations; and thou shalt be called, The repairer of the breach, The restorer of paths to dwell in.",
  },
];

export const chairmanLetter = {
  name: "Bro Ofili C. Franklin",
  title: "Chairman, Scripture Union Alumni Association",
  paragraphs: [
    "It gives me great joy and gratitude to the Almighty God to stand before you today and welcome every one of you, dear brothers and sisters, friends, and families, to this year's Scripture Union Alumni Reunion of the Metallurgical Training Institute, Onitsha.",
    "We gather here not merely as old students or friends reunited after years apart, but as fellow soldiers of Christ, members of the same household of faith, bound by one calling and one purpose: to uphold the banner of our Lord Jesus Christ in every sphere of life.",
    "This year's reunion carries a profound and timely theme, \u201cRebuilding the Broken Walls.\u201d Our theme draws inspiration from the book of Nehemiah, particularly Nehemiah 2:17. The broken walls of Jerusalem represented a loss of protection, identity, and purpose. In our generation, many walls have been broken, the walls of faith, moral values, godly leadership, unity in the body of Christ, and even personal spiritual commitment.",
    "As alumni of Scripture Union, a fellowship known for holiness, devotion, and integrity, we are called again, like Nehemiah, to rise and rebuild: to rebuild the walls of personal devotion, to rebuild the walls of family altars, to rebuild the walls of truth, love, and righteous witness in our communities.",
    "Let this reunion not just be a time to reconnect socially, but a sacred opportunity for spiritual renewal and collective recommitment to the God who first called us here at MTI.",
    "On behalf of the planning committee and the entire executive of the Alumni Association, I welcome you once again to this blessed gathering. May the Lord visit us mightily in these three days and set our hearts aflame for His purpose.",
    "Welcome home, brethren. Together, let us rebuild the broken walls!",
  ],
};

export const presidentLetter = {
  name: "Bro Onyibo Divine Uchenna",
  title: "Current President, Scripture Union Campus Fellowship, MTI",
  paragraphs: [
    "It gives me great joy and deep gratitude to welcome every one of you to this special Reunion of the Alumni of the Scripture Union Campus Fellowship.",
    "On behalf of the entire executive and current members, I want to say a heartfelt welcome to our esteemed alumni fathers, mothers, mentors, and trailblazers who have gone ahead of us. Your presence here today reminds us that the vision and labor of love you began years ago are still bearing fruit.",
    "This reunion is not just a gathering; it is a celebration of God's faithfulness through the years, His grace that has sustained this fellowship from one generation to another. It is also an opportunity for us to reconnect, to share testimonies, to strengthen the bond of unity, and to draw fresh inspiration for the journey ahead.",
    "To our current members, this is a moment to learn from those who have gone before us, men and women who once sat where we now sit, and who have carried the light of Christ into various fields and professions. And to our alumni, we are honored to have you back home.",
    "May this gathering renew our passion for Christ, deepen our fellowship, and inspire us to continue shining His light wherever we go.",
  ],
};

export type ScheduleItem = {
  time: string;
  activity: string;
  person?: string;
};

export const schedule: { day: string; moderator: string; items: ScheduleItem[] }[] = [
  {
    day: "Friday, 31 October",
    moderator: "Ebiem Ifeanyi",
    items: [
      { time: "4:00 – 5:00 PM", activity: "Arrival / Registration", person: "Secretary" },
      { time: "5:00 – 5:15 PM", activity: "Opening Prayer" },
      { time: "5:15 – 5:45 PM", activity: "Praise & Worship" },
      { time: "5:45 – 6:20 PM", activity: "Presidential Welcome & Recognition", person: "Bro Oyibo Divine" },
      { time: "6:20 – 7:00 PM", activity: "Opening Charge", person: "Evang. Emma Ogba" },
      { time: "7:00 – 9:00 PM", activity: "Family Meeting", person: "Alumni Chairman" },
    ],
  },
  {
    day: "Saturday, 1 November",
    moderator: "Fortunatus Okafor",
    items: [
      { time: "8:00 – 8:30 AM", activity: "Devotion" },
      { time: "8:30 – 8:45 AM", activity: "Choral Ministration" },
      { time: "9:00 – 11:00 AM", activity: "Exposition", person: "Pst. Israel Okokoni" },
      { time: "11:00 AM – 12:00 PM", activity: "Bible Study", person: "Bro Obinna Francis" },
      { time: "2:00 – 3:00 PM", activity: "Seminar: Business & Financial Growth", person: "Bro Oli Franklin" },
      { time: "3:00 – 5:00 PM", activity: "Marriage Seminar", person: "Pst. Israel Okokoni" },
      { time: "5:00 – 6:00 PM", activity: "Seminar: International Scholarship", person: "Bro Emma Ogba" },
      { time: "6:00 – 7:00 PM", activity: "Senior Friends' Address", person: "Bro Mark Osondu" },
      { time: "7:20 PM", activity: "Announcements / Closing" },
    ],
  },
];

export const bibleStudy = {
  topic: "Dealing With Detractors in Rebuilding",
  text: "Nehemiah 4:1–23",
  memoryVerse: {
    ref: "Nehemiah 4:14",
    text:
      "And looked, and arose and said to the nobles, to the leaders and to the rest of the people, do not be afraid of them. Remember the Lord, great and awesome, and fight for your brethren, your sons, your daughters, your wives and your houses.",
  },
  aims: [
    "To show that doing God's work always attracts opposition",
    "To arm us with the weapons to confront the detractors",
    "To enable us see the need to be always alert and vigilant as we do God's work",
  ],
  discussionPoints: [
    {
      q: "The enemy is rattled when a serious Christian sets out for God's project.",
      refs: "Neh. 2:10, 4:1-3 · Neh. 4:4-5 · Acts 13:8-12",
    },
    {
      q: "Consider the strategies the enemies of God's people adopt to frustrate our effort.",
      refs: "Neh. 2:19 · Neh. 4:1-3 · Neh. 4:7,8,12 · Neh. 4:10-11 · Neh. 5:1-5",
    },
    {
      q: "How can we deal with detractors, following the examples of Nehemiah?",
      refs: "Neh. 2:20 · Neh. 4:4 · Neh. 4:9 · Neh. 4:13-20 · Neh. 5:6-12",
    },
    {
      q: "How should we deal with detractors using the examples of David, Paul, and our Lord Jesus Christ?",
      refs: "1 Sam. 17:39-51 · 2 Cor. 10:3-6 · Luke 4:1-13",
    },
  ],
  conclusion:
    "The responsibility of rebuilding God's people is God's work. The enemies of God's work have no part in what we are doing. Nehemiah's strategy of stopping to pray while physically working against the enemy's plots is worthy of emulation, today, in our individual lives and in the Church.",
};

export const hymns = [
  {
    title: "Higher Ground",
    verses: [
      "I'm pressing on the upward way, new heights I'm gaining every day: still praying as I onward bound, Lord, plant my feet on higher ground.",
      "My heart has no desire to stay, where doubts arise and fears dismay, though some may dwell where these abound. My constant aim is higher ground.",
      "Beyond the mist I fain would rise, to rest beneath unclouded skies, above earth's turmoil peace is found by those who dwell on higher ground.",
    ],
    chorus:
      "Lord, lift me up and let me stand by faith on heaven's stable land, where love and joy, and light abound. Lord, plant my feet on higher ground.",
  },
  {
    title: "Near The Cross",
    verses: [
      "Jesus, keep me near the cross, there's a precious fountain, free to all a healing stream flows from Calvary's mountain.",
      "Never the cross, a trembling soul, love and mercy found me, there the Bright and Morning Star shed its beams around me.",
    ],
    chorus:
      "In the cross, in the cross be my glory ever, my raptured soul shall find rest, beyond the river.",
  },
  {
    title: "SU Chorus",
    verses: [
      "Let the beauty of Jesus be seen in me, all His wondrous, compassion and purity. Oh the spirit divine, all my nature refine, till the beauty of Jesus be seen in me.",
    ],
  },
  {
    title: "SUCF National Anthem",
    verses: [
      "SUCF the unique family. We are marching on by His grace. Follow Jesus the author of our faith and the owner of our soul. We shall follow till we all see Him.",
      "There's no time to sleep on the way. Jesus the answer, He is the way, Jesus the truth and the life. We shall follow righteousness, we shall follow holiness, without which no eye shall see Him.",
    ],
  },
];

export type AlumniEntry = { name: string; contact?: string; location?: string };
export type AlumniSet = { set: string; label: string; members: AlumniEntry[] };

export const alumniDirectory: AlumniSet[] = [
  {
    set: "1998/1999",
    label: "Pioneer Graduate",
    members: [
      { name: "Obinna Francis", contact: "08036688799", location: "Abuja" },
      { name: "Adiele Christian", contact: "08082215193", location: "Port Harcourt" },
      { name: "Emmanuel Idakwo", contact: "08053739717", location: "Kogi State" },
      { name: "Leonard Nwachukwu", contact: "08038923512", location: "Aba" },
    ],
  },
  {
    set: "1999/2000",
    label: "2nd Set",
    members: [
      { name: "Engr. Nwokeukwu Solomon", contact: "08037379948", location: "Kaduna State" },
    ],
  },
  {
    set: "2000/2001",
    label: "3rd Set",
    members: [{ name: "Engr. Chigbo Nwafor", contact: "08067242692", location: "Abuja" }],
  },
  {
    set: "2001/2002",
    label: "4th Set",
    members: [{ name: "Engr. Ezenwafor Christian C.", contact: "08064079383", location: "Awka" }],
  },
  {
    set: "2002/2004",
    label: "5th & 6th Set",
    members: [
      { name: "Attach Gideon", location: "Nsukka" },
      { name: "Wisdom Aniediitnen", contact: "07040242123", location: "Uyo" },
      { name: "Osage Peter", contact: "08056506291", location: "Benin" },
      { name: "Ajie Ikechukwu", location: "Port Harcourt" },
      { name: "Duru Solomon", contact: "08023648655", location: "Onitsha" },
    ],
  },
  {
    set: "2004/2005",
    label: "7th Set",
    members: [
      { name: "Evang. Ogba Emmanuel Obiako", contact: "08063843577", location: "Port Harcourt" },
      { name: "Ofili Franklin C.", contact: "08135055247", location: "Ogwashiukwu" },
      { name: "Adobe Innocent" },
      { name: "Nwaimo I. Simon", contact: "08038708494", location: "Owerri" },
      { name: "Ukeme Frank Ndom", location: "Akwa Ibom State" },
      { name: "Uzoma Oguji G.", location: "Abakaliki" },
      { name: "Victor Umoh", contact: "08025634593", location: "Akwa Ibom State" },
      { name: "Agba Emmanuel", contact: "08035647593" },
    ],
  },
  {
    set: "2005/2006",
    label: "8th Set",
    members: [
      { name: "Chukwu Samson O.", contact: "07032249153" },
      { name: "Ekanem Joseph", contact: "08034221444", location: "Akwa Ibom" },
    ],
  },
  {
    set: "2006/2007",
    label: "9th Set",
    members: [
      { name: "Dominic Godspower", contact: "07036360997", location: "Yenagoa" },
      { name: "Afolabi Rosemary Z.", contact: "08068455298", location: "Port Harcourt" },
      { name: "Ekoh Kingsley Chijioke", contact: "08069138761", location: "Enugu" },
      { name: "Nnadiora Onyekachi", location: "Imo State" },
    ],
  },
  {
    set: "2007/2008",
    label: "10th Set",
    members: [
      { name: "Igwemadu Gloria Chinenye", location: "Anambra State" },
      { name: "Anolefo Charles", location: "Onitsha" },
      { name: "Adanyi Gift M.", contact: "08079097227", location: "Kogi State" },
      { name: "Ojogbame Ayaegba Stephen", contact: "07033660462", location: "Kogi State" },
      { name: "Godwin Obiorah", contact: "07034497194", location: "Otuocha" },
      { name: "Joshua Igboukwu", contact: "07033211179", location: "Anambra State" },
      { name: "Ezra Amos", contact: "07061293353", location: "Kaduna State" },
      { name: "Anselem Onugbufor", contact: "08066770657", location: "Obosi" },
      { name: "Umolu Amara", contact: "07039397066", location: "Anambra State" },
    ],
  },
  {
    set: "2008/2009",
    label: "11th Set",
    members: [
      { name: "Okafor Fortunatus", contact: "07037232740", location: "Onitsha" },
      { name: "Enemuo Kingsley Nnamdi", contact: "08065346494", location: "Canada" },
      { name: "Ugochukwu Chukwuebuka", location: "Ogidi" },
      { name: "Cyriacus Diaku C.", contact: "07039868444", location: "Anambra State" },
      { name: "Maduka Chinomso", contact: "08033752710", location: "Port Harcourt" },
      { name: "Ndiama Innocent Uchenna", contact: "07031613634", location: "Obosi" },
      { name: "Charles Oseke", contact: "07030477837", location: "Imo State" },
    ],
  },
  {
    set: "2009/2010",
    label: "12th Set",
    members: [
      { name: "Uwakwe Godsown Ifeanyi", contact: "08030477837", location: "Abia State" },
      { name: "Onwo Onyeomere Obed", contact: "08037705542", location: "Abia State" },
      { name: "Kalu Ekperechi", contact: "08064539166", location: "Abia State" },
      { name: "Emencheta Adaobi", contact: "08066871313", location: "Anambra State" },
      { name: "Apeh Ferdinand", contact: "07036836863", location: "Port Harcourt" },
      { name: "Nwankwo Golden N.", contact: "08165364909", location: "Enugu State" },
      { name: "Amadi Chukwudi", contact: "07069484883", location: "Imo State" },
      { name: "Okala Chukwuemeka", contact: "07064677892", location: "Anambra State" },
    ],
  },
  {
    set: "2010/2011",
    label: "13th Set",
    members: [
      { name: "Mark Osondu", contact: "07030901229", location: "Aguleri" },
      { name: "Frank Ebiegberi", contact: "07033374006", location: "Yenagoa" },
      { name: "Esther Eleonu", contact: "08064828492", location: "Port Harcourt" },
      { name: "Joseph Nwasokwu", location: "Onitsha" },
      { name: "Francis Amaizu", contact: "08139249367", location: "Anambra State" },
      { name: "Okoh Godwin", contact: "08065466143", location: "Delta State" },
      { name: "Paul Chigbogu", contact: "07067140314", location: "Delta State" },
      { name: "Okwughem Linus", contact: "07033385009", location: "Benue State" },
    ],
  },
  {
    set: "2011/2012",
    label: "14th Set",
    members: [
      { name: "Eblem Ifeanyi John", contact: "08085065587", location: "Onitsha" },
      { name: "Atuh Stephen", contact: "07038580004", location: "Ebonyi State" },
      { name: "Ezeoke Favour", location: "Onitsha" },
      { name: "Igboanugo Chinenye", contact: "09132441827", location: "Anambra State" },
      { name: "Ikechukwu Kalu", contact: "08065185295", location: "Abia State" },
      { name: "Austin Duru", contact: "08034013986" },
      { name: "Nwaruaka Solomon" },
      { name: "Inyama John A.", contact: "07062824500" },
      { name: "Achigwe Cyril", contact: "07062138347" },
      { name: "Ejiofor Ebube B.", location: "Obosi" },
      { name: "Ebusco G." },
      { name: "Umoh Daniel", location: "Anambra State" },
    ],
  },
  {
    set: "2014/2015",
    label: "17th Set",
    members: [
      { name: "Agbonsalo Alfred Egharevba", contact: "08067568129", location: "Edo State" },
      { name: "Atueyi Chinemelum Greatness", contact: "08165196319", location: "Delta State" },
      { name: "Ogaga Oturu Oghene", location: "Italy" },
      { name: "Ethel Williams E.", contact: "08104940406", location: "Rivers State" },
      { name: "Miracle Ugokwe", contact: "08068808654", location: "Owerri" },
    ],
  },
  {
    set: "2015/2016",
    label: "18th Set",
    members: [
      { name: "Okeke Onyedika Michael", contact: "08138079931", location: "Anambra State" },
      { name: "Alabi Peter Oluwabori", contact: "07033082620", location: "Lagos State" },
      { name: "Okonkwo Christian", contact: "09034139088", location: "Anambra State" },
      { name: "Nnaemeka Onyeka", location: "Lagos" },
      { name: "Joshua Isimoya", location: "Benin, Edo State" },
      { name: "Etteh James", location: "Akwa Ibom State" },
      { name: "Ifeanyi Raphael", location: "UK" },
      { name: "William E. Williams", location: "Port Harcourt" },
      { name: "Mozie Udochukwu", location: "Anambra State" },
      { name: "Osuji Ifeanyi", contact: "08141530599", location: "Lagos State" },
    ],
  },
  {
    set: "2016/2017",
    label: "19th Set",
    members: [
      { name: "Obinna Ukwuoma", location: "Anambra" },
      { name: "Victor Njoku", contact: "08160197064" },
      { name: "Anointing Eze", location: "Lagos" },
      { name: "Joshua Edeh", location: "Anambra" },
      { name: "Nwandu Somto", location: "Anambra" },
      { name: "Kelechi Okorie" },
    ],
  },
  {
    set: "2017/2018",
    label: "20th Set",
    members: [
      { name: "Onyeka Toochukwu", location: "Anambra" },
      { name: "Chibuike Joshua", location: "Lagos" },
      { name: "Faith Odirah", location: "Anambra" },
      { name: "Obadiah Darlington", location: "Abia State" },
    ],
  },
  {
    set: "2018/2019",
    label: "21st Set",
    members: [
      { name: "Onyeka Oluebube", location: "Anambra" },
      { name: "Ajayi Adewale", location: "Ibadan" },
      { name: "Ojukwu Ugochukwu", location: "Abuja" },
      { name: "Samuel Echezona", location: "Anambra" },
      { name: "Adike Toochukwu", location: "Anambra" },
      { name: "Victoria Udoaka" },
      { name: "Ogochukwu Precious", location: "Cross River" },
    ],
  },
  {
    set: "2019/2020",
    label: "22nd Set",
    members: [
      { name: "Ifemeje Osinachukwu Goodness", contact: "08109897283", location: "Abuja" },
      { name: "Ahamefuna John", contact: "08105804108" },
    ],
  },
  {
    set: "2022/2023",
    label: "25th Set",
    members: [
      { name: "Odita Emmanuel" },
      { name: "Isaac Adamu", contact: "08134493628" },
      { name: "Akpan", contact: "09072264223" },
      { name: "Okoro Daniel", contact: "09020482263" },
      { name: "Caleb", contact: "08130772906" },
      { name: "David Tie", contact: "09037629221" },
      { name: "Emmanuel Chinonso", contact: "08131040601" },
      { name: "Ikeora Gideon", contact: "09115392639" },
    ],
  },
];
