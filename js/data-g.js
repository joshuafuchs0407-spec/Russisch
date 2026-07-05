/* Kursdaten Teil G: Einheiten 25-28 (B1 → B2)
   Umwelt & Klima, Lebensabschnitte & Biografie, Länder der Welt, Zukunft & Träume. */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u25",
  level: "B2",
  title: "Umwelt und Klima",
  desc: "Natur schützen, Müll trennen, über das Klima sprechen",
  lessons: [
    {
      id: "u25l1",
      title: "Die Umwelt schützen",
      desc: "Umweltschutz und Verantwortung",
      items: [
        { ru: "окружающая среда", tr: "akruschájuschtschaja sridá", de: "die Umwelt" },
        { ru: "защищать", tr: "saschtschischtschát", de: "schützen" },
        { ru: "загрязнение", tr: "sagriznjénije", de: "die Verschmutzung" },
        { ru: "отходы", tr: "atchódy", de: "die Abfälle" },
        { ru: "перерабатывать", tr: "pirirabátywat", de: "recyceln" },
        { ru: "пластик", tr: "plástik", de: "das Plastik" },
        { ru: "энергия", tr: "enjérgija", de: "die Energie" },
        { ru: "экономить воду", tr: "ikanómit wódu", de: "Wasser sparen" },
        { ru: "чистый воздух", tr: "tschístyj wósduch", de: "saubere Luft" },
        { ru: "вредный", tr: "wrjédnyj", de: "schädlich" },
        { ru: "экология", tr: "ikalógija", de: "die Ökologie" },
        { ru: "планета", tr: "planjéta", de: "der Planet" }
      ],
      tips: [
        { title: "Verben mit пере- (nochmal/um)", body: "Das Präfix **пере-** bedeutet oft „um-, wieder-, durch-“:\n**пере**рабатывать = wieder-verarbeiten → recyceln.\nDu kennst schon: **пере**ехать (umziehen), **пере**путать (verwechseln), **пере**вести (übersetzen = „hinüber-führen“). Ein Muster, das immer wieder auftaucht." }
      ],
      dialogue: {
        title: "Müll trennen",
        context: "Vera erklärt Anton das Recycling.",
        lines: [
          { who: "Вера", ru: "Мы должны защищать окружающую среду.", de: "Wir müssen die Umwelt schützen.", gap: "защищать", opts: ["загрязнять", "экономить"] },
          { who: "Антон", ru: "Согласен. Но как?", de: "Einverstanden. Aber wie?" },
          { who: "Вера", ru: "Например, перерабатывать пластик.", de: "Zum Beispiel Plastik recyceln.", gap: "перерабатывать", opts: ["защищать", "тратить"] },
          { who: "Антон", ru: "И экономить воду и энергию.", de: "Und Wasser und Energie sparen.", gap: "энергию", opts: ["планету", "среду"] },
          { who: "Вера", ru: "Именно. Это важно для будущего планеты.", de: "Genau. Das ist wichtig für die Zukunft des Planeten.", gap: "будущего", opts: ["воздуха", "мусора"] }
        ]
      }
    },
    {
      id: "u25l2",
      title: "Das Klima ändert sich",
      desc: "Über Klima und Naturkatastrophen sprechen",
      items: [
        { ru: "климат", tr: "klímat", de: "das Klima" },
        { ru: "выброс", tr: "wýbras", de: "der Ausstoß, die Emission" },
        { ru: "потепление", tr: "patipljénije", de: "die Erwärmung" },
        { ru: "жара", tr: "schará", de: "die Hitze" },
        { ru: "наводнение", tr: "nawadnjénije", de: "die Überschwemmung" },
        { ru: "засуха", tr: "sássucha", de: "die Dürre" },
        { ru: "лёд", tr: "ljot", de: "das Eis" },
        { ru: "таять", tr: "tájat", de: "schmelzen" },
        { ru: "уровень моря", tr: "úrawin mórja", de: "der Meeresspiegel" },
        { ru: "опасный", tr: "apásnyj", de: "gefährlich" },
        { ru: "последствие", tr: "pasljédstwije", de: "die Folge, Konsequenz" },
        { ru: "причина", tr: "pritschína", de: "die Ursache, der Grund" }
      ],
      tips: [
        { title: "Ursache und Folge", body: "Für Zusammenhänge brauchst du zwei Wörter:\n**причина** (Ursache) – **по причине** + Genitiv (wegen).\n**последствие** (Folge) – oft im Plural: последствия изменения климата (die Folgen des Klimawandels).\nDamit kannst du über Zusammenhänge argumentieren wie im Deutschen." }
      ],
      dialogue: {
        title: "Ein heißer Sommer",
        context: "Max und Lena reden über das Wetter.",
        lines: [
          { who: "Макс", ru: "Этим летом такая высокая температура!", de: "Diesen Sommer ist es so heiß!", gap: "температура", opts: ["засуха", "причина"] },
          { who: "Лена", ru: "Да, это последствие потепления.", de: "Ja, das ist eine Folge der Erwärmung.", gap: "потепления", opts: ["наводнения", "изменения"] },
          { who: "Макс", ru: "А на севере лёд тает.", de: "Und im Norden schmilzt das Eis.", gap: "тает", opts: ["таять", "падает"] },
          { who: "Лена", ru: "Уровень моря растёт. Это опасно.", de: "Der Meeresspiegel steigt. Das ist gefährlich.", gap: "опасно", opts: ["выгодно", "вредно"] },
          { who: "Макс", ru: "Какая главная причина?", de: "Was ist die Hauptursache?", gap: "причина", opts: ["последствие", "изменение"] },
          { who: "Лена", ru: "Люди и загрязнение.", de: "Die Menschen und die Verschmutzung." }
        ]
      }
    },
    {
      id: "u25l3",
      title: "Müssen und sollen",
      desc: "Notwendigkeit und Verpflichtung ausdrücken",
      items: [
        { ru: "должен", tr: "dólschyn", de: "muss, soll (m)" },
        { ru: "должна", tr: "dalschná", de: "muss, soll (f)" },
        { ru: "обязательно", tr: "abisátilna", de: "unbedingt" },
        { ru: "необходимо", tr: "niabchadíma", de: "notwendig, erforderlich" },
        { ru: "запрещено", tr: "saprischtschinó", de: "verboten" },
        { ru: "разрешено", tr: "rasrischinó", de: "erlaubt" },
        { ru: "ответственность", tr: "atwjétstwinnast", de: "die Verantwortung" },
        { ru: "правильно", tr: "práwilna", de: "richtig, korrekt" },
        { ru: "заботиться", tr: "sabótitsa", de: "sich kümmern, sorgen" },
        { ru: "стараться", tr: "starátsa", de: "sich bemühen" },
        { ru: "каждый из нас", tr: "káschdyj is nas", de: "jeder von uns" },
        { ru: "поступок", tr: "pastúpak", de: "die Tat, Handlung" }
      ],
      tips: [
        { title: "должен – müssen mit Endung", body: "**должен** richtet sich nach der Person:\nЯ **должен** (m) / Я **должна** (f) идти. – Ich muss gehen.\nМы **должны** помочь. – Wir müssen helfen.\nUnterschied zu нужно: должен betont Pflicht/Verantwortung, нужно eher Bedürfnis." },
        { title: "заботиться о + Präpositiv", body: "Sich kümmern UM:\nНадо заботиться **о природе**. – Man muss sich um die Natur kümmern.\nОна заботится **о детях**. – Sie kümmert sich um die Kinder." }
      ],
      dialogue: {
        title: "Jeder kann etwas tun",
        context: "Anton und Vera ziehen ein Fazit.",
        lines: [
          { who: "Антон", ru: "Каждый из нас должен что-то делать.", de: "Jeder von uns muss etwas tun.", gap: "должен", opts: ["должна", "должны"] },
          { who: "Вера", ru: "Обязательно! Это наша ответственность.", de: "Unbedingt! Das ist unsere Verantwortung.", gap: "ответственность", opts: ["последствие", "причина"] },
          { who: "Антон", ru: "Необходимо заботиться о природе.", de: "Es ist notwendig, sich um die Natur zu kümmern.", gap: "заботиться", opts: ["стараться", "запрещать"] },
          { who: "Вера", ru: "Даже маленький поступок важен.", de: "Sogar eine kleine Tat ist wichtig.", gap: "поступок", opts: ["выбор", "спор"] },
          { who: "Антон", ru: "Ты права. Будем стараться!", de: "Du hast recht. Wir werden uns bemühen!", gap: "стараться", opts: ["заботиться", "тратить"] }
        ]
      }
    }
  ]
},
{
  id: "u26",
  level: "B1",
  title: "Ein Leben lang",
  desc: "Biografie erzählen, Lebensabschnitte, Erinnerungen",
  lessons: [
    {
      id: "u26l1",
      title: "Kindheit und Jugend",
      desc: "Über das eigene Leben früher sprechen",
      items: [
        { ru: "воспитание", tr: "waspitánije", de: "die Erziehung" },
        { ru: "молодость", tr: "móladast", de: "die Jugend" },
        { ru: "родиться", tr: "radítsa", de: "geboren werden" },
        { ru: "расти", tr: "rastí", de: "aufwachsen, wachsen" },
        { ru: "воспоминание", tr: "waspaminánije", de: "die Erinnerung" },
        { ru: "вспоминать", tr: "fspaminát", de: "sich erinnern (an), zurückdenken" },
        { ru: "школьник", tr: "schkólnik", de: "der Schüler" },
        { ru: "взрослый", tr: "wsróslyj", de: "erwachsen; der Erwachsene" },
        { ru: "поколение", tr: "pakaljénije", de: "die Generation" },
        { ru: "в те времена", tr: "w tje wriminá", de: "in jenen Zeiten" },
        { ru: "когда-то", tr: "kagdá-ta", de: "irgendwann einmal, einst" },
        { ru: "менялось", tr: "minjálas", de: "veränderte sich" }
      ],
      tips: [
        { title: "родиться – geboren werden", body: "Nur in der Vergangenheit gebräuchlich, mit Geschlecht:\nЯ **родился** (m) / Я **родилась** (f) в Москве. – Ich bin in Moskau geboren.\nОни **родились** в 1990 году. – Sie sind 1990 geboren.\n„im Jahr“: в … году (Präpositiv)." }
      ],
      dialogue: {
        title: "Als ich klein war",
        context: "Anna erzählt Pjotr von ihrer Kindheit.",
        lines: [
          { who: "Пётр", ru: "Где ты родилась?", de: "Wo bist du geboren?", gap: "родилась", opts: ["росла", "помнила"] },
          { who: "Анна", ru: "В Берлине. Там прошло моё детство.", de: "In Berlin. Dort verbrachte ich meine Kindheit.", gap: "детство", opts: ["молодость", "поколение"] },
          { who: "Пётр", ru: "Каким ты была в детстве?", de: "Wie warst du als Kind?" },
          { who: "Анна", ru: "Раньше я была очень тихой.", de: "Früher war ich sehr still.", gap: "Раньше", opts: ["Тогда", "Потом"] },
          { who: "Пётр", ru: "У тебя хорошие воспоминания?", de: "Hast du gute Erinnerungen?", gap: "воспоминания", opts: ["поколения", "школьники"] },
          { who: "Анна", ru: "Да, я хорошо помню то время.", de: "Ja, ich erinnere mich gut an diese Zeit.", gap: "помню", opts: ["расту", "меняюсь"] }
        ]
      }
    },
    {
      id: "u26l2",
      title: "Wichtige Ereignisse",
      desc: "Meilensteine im Leben",
      items: [
        { ru: "брак", tr: "brak", de: "die Ehe" },
        { ru: "рождение", tr: "raschdjénije", de: "die Geburt" },
        { ru: "выйти замуж", tr: "wýjti sámusch", de: "heiraten (Frau)" },
        { ru: "жениться", tr: "schynítsa", de: "heiraten (Mann)" },
        { ru: "переезд", tr: "pirijést", de: "der Umzug" },
        { ru: "выпускной", tr: "wypusknój", de: "der Abschluss (Schule/Uni)" },
        { ru: "развод", tr: "raswód", de: "die Scheidung" },
        { ru: "пенсия", tr: "pjénsija", de: "die Rente" },
        { ru: "успех", tr: "uspjéch", de: "der Erfolg" },
        { ru: "потеря", tr: "patjérja", de: "der Verlust" },
        { ru: "изменить", tr: "isminít", de: "verändern, ändern" },
        { ru: "судьба", tr: "sudbá", de: "das Schicksal" }
      ],
      tips: [
        { title: "Heiraten – Mann und Frau verschieden!", body: "Russisch unterscheidet:\n**жениться** (на + Präpositiv) – für den Mann: Он женился на Анне.\n**выйти замуж** (за + Akkusativ) – für die Frau: Она вышла замуж за Ивана.\nGemeinsam: Они **поженились**. – Sie haben geheiratet." }
      ],
      dialogue: {
        title: "Ein bewegtes Leben",
        context: "Wera erzählt von ihrer Familie.",
        lines: [
          { who: "Макс", ru: "Какое событие изменило твою жизнь?", de: "Welches Ereignis hat dein Leben verändert?", gap: "событие", opts: ["успех", "потеря"] },
          { who: "Вера", ru: "Переезд в другой город.", de: "Der Umzug in eine andere Stadt.", gap: "Переезд", opts: ["Пенсия", "Карьера"] },
          { who: "Макс", ru: "А потом?", de: "Und dann?" },
          { who: "Вера", ru: "Там я вышла замуж и сделала карьеру.", de: "Dort habe ich geheiratet und Karriere gemacht.", gap: "замуж", opts: ["пенсию", "успех"] },
          { who: "Макс", ru: "Настоящий успех!", de: "Ein echter Erfolg!", gap: "успех", opts: ["потеря", "судьба"] },
          { who: "Вера", ru: "Да, это была судьба.", de: "Ja, das war Schicksal.", gap: "судьба", opts: ["жизнь", "карьера"] }
        ]
      }
    },
    {
      id: "u26l3",
      title: "Früher war alles anders",
      desc: "Sich erinnern und über Veränderungen sprechen",
      items: [
        { ru: "прежний", tr: "prjéschnij", de: "früher, ehemalig" },
        { ru: "нынешний", tr: "nýnischnij", de: "heutig, jetzig" },
        { ru: "перемена", tr: "pirimjéna", de: "der Wandel, die Veränderung" },
        { ru: "постепенно", tr: "pastipjénna", de: "allmählich" },
        { ru: "постоянно", tr: "pastajánna", de: "ständig, dauernd" },
        { ru: "ностальгия", tr: "nastalgíja", de: "die Nostalgie" },
        { ru: "молодёжь", tr: "maladjósch", de: "die Jugend, junge Leute" },
        { ru: "пожилой", tr: "paschylój", de: "betagt, älter" },
        { ru: "мечтать", tr: "mitschtát", de: "träumen (von Wünschen)" },
        { ru: "скучать по", tr: "skutschát pa", de: "sich sehnen nach, vermissen" },
        { ru: "стать взрослым", tr: "stat wsróslym", de: "erwachsen werden" },
        { ru: "со временем", tr: "sa wrjéminim", de: "mit der Zeit" }
      ],
      tips: [
        { title: "Imperfektiv erzählt die Vergangenheit", body: "Für Gewohnheiten und wiederholte Handlungen früher: **Imperfektiv** in der Vergangenheit.\nРаньше я **играл** в футбол каждый день. – Früher spielte ich jeden Tag Fußball.\nДети **мечтали** стать космонавтами. – Die Kinder träumten davon, Kosmonauten zu werden.\nWörter wie обычно, всегда, часто signalisieren fast immer Imperfektiv." }
      ],
      dialogue: {
        title: "Vermisste Zeiten",
        context: "Anton denkt an seine Studienzeit zurück.",
        lines: [
          { who: "Антон", ru: "Я скучаю по прежним временам.", de: "Ich sehne mich nach früheren Zeiten.", gap: "скучаю", opts: ["мечтаю", "старею"] },
          { who: "Вера", ru: "Да, нынешняя молодёжь совсем другая.", de: "Ja, die heutige Jugend ist ganz anders.", gap: "молодёжь", opts: ["перемена", "ностальгия"] },
          { who: "Антон", ru: "Со временем всё меняется.", de: "Mit der Zeit verändert sich alles.", gap: "Со временем", opts: ["Постоянно", "Постепенно"] },
          { who: "Вера", ru: "Постепенно, но это большая перемена.", de: "Allmählich, aber es ist ein großer Wandel.", gap: "перемена", opts: ["молодёжь", "ностальгия"] },
          { who: "Антон", ru: "Иногда я чувствую ностальгию.", de: "Manchmal fühle ich Nostalgie.", gap: "ностальгию", opts: ["перемену", "молодёжь"] },
          { who: "Вера", ru: "Это нормально для нашего поколения.", de: "Das ist normal für unsere Generation." }
        ]
      }
    }
  ]
},
{
  id: "u27",
  level: "B1",
  title: "Länder der Welt",
  desc: "Länder, Nationalitäten und Sehenswürdigkeiten",
  lessons: [
    {
      id: "u27l1",
      title: "Kontinente und Länder",
      desc: "Die Welt auf Russisch",
      items: [
        { ru: "земля", tr: "simljá", de: "die Erde; das Land" },
        { ru: "континент", tr: "kantinjént", de: "der Kontinent" },
        { ru: "Европа", tr: "Iwrópa", de: "Europa" },
        { ru: "Азия", tr: "Ásija", de: "Asien" },
        { ru: "Америка", tr: "Amjérika", de: "Amerika" },
        { ru: "Африка", tr: "Áfrika", de: "Afrika" },
        { ru: "граница", tr: "granítsa", de: "die Grenze" },
        { ru: "столица", tr: "stalítsa", de: "die Hauptstadt" },
        { ru: "население", tr: "nasiljénije", de: "die Bevölkerung" },
        { ru: "государство", tr: "gassudárstwa", de: "der Staat" },
        { ru: "восток", tr: "wastók", de: "der Osten" },
        { ru: "запад", tr: "sápat", de: "der Westen" }
      ],
      tips: [
        { title: "in Länder – в oder на?", body: "Fast alle Länder: **в** + Präpositiv (в России, в Германии).\nAber einige nehmen **на**: **на** Украине/в Украине, **на** Кубе.\nRichtung mit Akkusativ: Я еду **в** Россию, **на** Кубу." }
      ],
      dialogue: {
        title: "Wo warst du schon?",
        context: "Max und Lena vergleichen ihre Reisen.",
        lines: [
          { who: "Макс", ru: "На каких континентах ты была?", de: "Auf welchen Kontinenten warst du?", gap: "континентах", opts: ["границах", "столицах"] },
          { who: "Лена", ru: "В Европе и Азии. А ты?", de: "In Europa und Asien. Und du?", gap: "Европе", opts: ["Африке", "Америке"] },
          { who: "Макс", ru: "Я был в Америке. Огромная страна!", de: "Ich war in Amerika. Ein riesiges Land!", gap: "Америке", opts: ["Азии", "Африке"] },
          { who: "Лена", ru: "А какая там столица?", de: "Und was ist dort die Hauptstadt?", gap: "столица", opts: ["граница", "население"] },
          { who: "Макс", ru: "Вашингтон. Но население огромное.", de: "Washington. Aber die Bevölkerung ist riesig.", gap: "население", opts: ["государство", "восток"] }
        ]
      }
    },
    {
      id: "u27l2",
      title: "Nationalitäten und Sprachen",
      desc: "Woher jemand kommt und was er spricht",
      items: [
        { ru: "национальность", tr: "natsyanálnast", de: "die Nationalität" },
        { ru: "иностранец", tr: "inastránits", de: "der Ausländer" },
        { ru: "русский", tr: "rússkij", de: "Russe / russisch" },
        { ru: "немец", tr: "njémits", de: "der Deutsche" },
        { ru: "француз", tr: "frantsús", de: "der Franzose" },
        { ru: "англичанин", tr: "anglitschánin", de: "der Engländer" },
        { ru: "китаец", tr: "kitájits", de: "der Chinese" },
        { ru: "родной язык", tr: "radnój jasýk", de: "die Muttersprache" },
        { ru: "иностранный", tr: "inastránnyj", de: "ausländisch, fremd(sprachig)" },
        { ru: "культура", tr: "kultúra", de: "die Kultur" },
        { ru: "обычай", tr: "abýtschaj", de: "der Brauch, die Sitte" },
        { ru: "по-разному", tr: "pa-rásnamu", de: "unterschiedlich, verschieden" }
      ],
      tips: [
        { title: "Land, Person, Sprache", body: "Drei zusammengehörige Formen:\nГермания (Land) – немец/немка (Person) – **по-немецки** (Sprache).\nРоссия – русский/русская – **по-русски**.\nФранция – француз/француженка – по-французски.\nDie Sprache steht immer als **по-…ски**." }
      ],
      dialogue: {
        title: "Ein internationales Team",
        context: "Anton stellt seine Kollegen vor.",
        lines: [
          { who: "Вера", ru: "У вас в офисе много иностранцев?", de: "Habt ihr viele Ausländer im Büro?", gap: "иностранцев", opts: ["обычаев", "культур"] },
          { who: "Антон", ru: "Да! Есть немец, француз и китаец.", de: "Ja! Es gibt einen Deutschen, einen Franzosen und einen Chinesen.", gap: "француз", opts: ["русский", "иностранец"] },
          { who: "Вера", ru: "На каком языке вы говорите?", de: "In welcher Sprache sprecht ihr?", gap: "языке", opts: ["обычае", "культуре"] },
          { who: "Антон", ru: "По-разному. Но родной язык у всех разный.", de: "Unterschiedlich. Aber die Muttersprache ist bei allen verschieden.", gap: "родной", opts: ["иностранный", "русский"] },
          { who: "Вера", ru: "Интересно узнавать разные культуры!", de: "Es ist interessant, verschiedene Kulturen kennenzulernen!", gap: "культуры", opts: ["границы", "столицы"] }
        ]
      }
    },
    {
      id: "u27l3",
      title: "Sehenswürdigkeiten",
      desc: "Berühmte Orte besichtigen",
      items: [
        { ru: "достопримечательность", tr: "dastaprimitschátilnast", de: "die Sehenswürdigkeit" },
        { ru: "памятник", tr: "pámitnik", de: "das Denkmal" },
        { ru: "крепость", tr: "krjépast", de: "die Festung" },
        { ru: "храм", tr: "chram", de: "der Tempel, die Kirche" },
        { ru: "площадь", tr: "plóschtschit", de: "der Platz" },
        { ru: "мост", tr: "most", de: "die Brücke" },
        { ru: "экскурсия", tr: "ikskúrsija", de: "die Führung, der Ausflug" },
        { ru: "турист", tr: "turíst", de: "der Tourist" },
        { ru: "фотографировать", tr: "fatagrafírawat", de: "fotografieren" },
        { ru: "впечатление", tr: "fpitschatljénije", de: "der Eindruck" },
        { ru: "знаменитый", tr: "snaminítyj", de: "berühmt" },
        { ru: "стоит посмотреть", tr: "stóit pasmatrjét", de: "einen Besuch wert" }
      ],
      tips: [
        { title: "стоит + Infinitiv", body: "**стоит** (unpersönlich) + Infinitiv = „es lohnt sich / man sollte“:\nЭто **стоит посмотреть**. – Das ist einen Blick wert.\n**Стоит попробовать** этот суп. – Man sollte diese Suppe probieren.\nNicht verwechseln mit стоит „es kostet“ – der Kontext klärt es." }
      ],
      dialogue: {
        title: "Auf dem Roten Platz",
        context: "Anna macht eine Stadtführung in Moskau.",
        lines: [
          { who: "Гид", ru: "Это самая знаменитая площадь России.", de: "Das ist der berühmteste Platz Russlands.", gap: "площадь", opts: ["крепость", "экскурсия"] },
          { who: "Анна", ru: "А что за красивое здание?", de: "Und was ist das für ein schönes Gebäude?" },
          { who: "Гид", ru: "Это храм. Обязательно стоит посмотреть.", de: "Das ist eine Kirche. Unbedingt einen Blick wert.", gap: "храм", opts: ["мост", "памятник"] },
          { who: "Анна", ru: "Можно фотографировать?", de: "Darf man fotografieren?", gap: "фотографировать", opts: ["посмотреть", "узнавать"] },
          { who: "Гид", ru: "Конечно! Туристы всегда это делают.", de: "Natürlich! Touristen tun das immer.", gap: "Туристы", opts: ["Памятники", "Впечатления"] },
          { who: "Анна", ru: "Какое сильное впечатление!", de: "Was für ein starker Eindruck!", gap: "впечатление", opts: ["достопримечательность", "экскурсия"] }
        ]
      }
    }
  ]
},
{
  id: "u28",
  level: "B2",
  title: "Zukunft und Träume",
  desc: "Pläne schmieden, Ziele setzen, über das Futur sprechen",
  lessons: [
    {
      id: "u28l1",
      title: "Pläne für morgen",
      desc: "Das Futur bilden und benutzen",
      items: [
        { ru: "намерение", tr: "namjérinije", de: "die Absicht" },
        { ru: "план", tr: "plan", de: "der Plan" },
        { ru: "собираться", tr: "sabirátsa", de: "vorhaben, sich anschicken" },
        { ru: "надеяться", tr: "nadjéjatsa", de: "hoffen" },
        { ru: "скоро", tr: "skóra", de: "bald" },
        { ru: "через год", tr: "tschéris got", de: "in einem Jahr" },
        { ru: "заранее", tr: "saránije", de: "im Voraus" },
        { ru: "возможность", tr: "wasmóschnast", de: "die Möglichkeit, Gelegenheit" },
        { ru: "приоритет", tr: "priaritjét", de: "die Priorität" },
        { ru: "достичь", tr: "dastítsch", de: "erreichen" },
        { ru: "уверен", tr: "uwjérin", de: "sicher, überzeugt (m)" },
        { ru: "непременно", tr: "niprimjénna", de: "ganz bestimmt" }
      ],
      tips: [
        { title: "Die zwei Zukünfte", body: "**Zusammengesetztes Futur** (Verlauf/Dauer): **буду/будешь…** + Imperfektiv-Infinitiv.\nЗавтра я **буду работать**. – Morgen werde ich arbeiten.\n**Einfaches Futur** (einmaliges Ergebnis): Perfektiv-Präsensform.\nЯ **сделаю** это завтра. – Ich mache das morgen (fertig).\nDaumenregel: буду + Verlauf, Perfektiv + Ergebnis." }
      ],
      dialogue: {
        title: "Große Pläne",
        context: "Vera erzählt Anton von ihren Zielen.",
        lines: [
          { who: "Антон", ru: "Что ты собираешься делать через год?", de: "Was hast du in einem Jahr vor?", gap: "собираешься", opts: ["надеешься", "уверен"] },
          { who: "Вера", ru: "Я буду учиться в университете.", de: "Ich werde an der Uni studieren.", gap: "буду", opts: ["сделаю", "достигну"] },
          { who: "Антон", ru: "Отличная цель!", de: "Ein tolles Ziel!", gap: "цель", opts: ["возможность", "план"] },
          { who: "Вера", ru: "Надеюсь, я её достигну.", de: "Ich hoffe, ich erreiche es.", gap: "достигну", opts: ["собираюсь", "надеюсь"] },
          { who: "Антон", ru: "Я уверен, что у тебя получится!", de: "Ich bin sicher, dass es dir gelingt!", gap: "уверен", opts: ["скоро", "заранее"] }
        ]
      }
    },
    {
      id: "u28l2",
      title: "Wünsche und Hoffnungen",
      desc: "Träume und Absichten formulieren",
      items: [
        { ru: "амбиция", tr: "ambítsyja", de: "die Ambition, der Ehrgeiz" },
        { ru: "желание", tr: "schylánije", de: "der Wunsch" },
        { ru: "надежда", tr: "nadjéschda", de: "die Hoffnung" },
        { ru: "стремиться", tr: "strimítsa", de: "streben nach" },
        { ru: "верить", tr: "wjérit", de: "glauben, vertrauen" },
        { ru: "получиться", tr: "palutschítsa", de: "gelingen, klappen" },
        { ru: "удаваться", tr: "udawátsa", de: "gelingen" },
        { ru: "рискнуть", tr: "risknút", de: "riskieren, wagen" },
        { ru: "менять жизнь", tr: "minját schysn", de: "das Leben ändern" },
        { ru: "смысл", tr: "smysl", de: "der Sinn" },
        { ru: "главное", tr: "glávnaje", de: "die Hauptsache" },
        { ru: "во что бы то ни стало", tr: "wa schto by ta ni stála", de: "um jeden Preis" }
      ],
      tips: [
        { title: "получиться – „es klappt“", body: "Sehr russisch und sehr nützlich, unpersönlich mit Dativ:\nУ меня **получилось**! – Ich hab's geschafft / Es hat geklappt!\nУ тебя **получится**. – Dir wird es gelingen.\nÄhnlich: удаваться/удаться – Мне **удалось** найти работу. – Es ist mir gelungen, Arbeit zu finden." }
      ],
      dialogue: {
        title: "Den Traum wagen",
        context: "Max überlegt, seinen Job zu wechseln.",
        lines: [
          { who: "Макс", ru: "У меня есть мечта — своя фирма.", de: "Ich habe einen Traum – eine eigene Firma.", gap: "мечта", opts: ["надежда", "желание"] },
          { who: "Лена", ru: "Так стремись к ней! Ты должен рискнуть.", de: "Dann strebe danach! Du musst es wagen.", gap: "рискнуть", opts: ["верить", "менять"] },
          { who: "Макс", ru: "А если не получится?", de: "Und wenn es nicht klappt?", gap: "получится", opts: ["удаётся", "верит"] },
          { who: "Лена", ru: "Главное — верить в себя.", de: "Die Hauptsache ist, an sich zu glauben.", gap: "верить", opts: ["стремиться", "рискнуть"] },
          { who: "Макс", ru: "Ты права. Я изменю свою жизнь!", de: "Du hast recht. Ich werde mein Leben ändern!", gap: "изменю", opts: ["верю", "надеюсь"] }
        ]
      }
    },
    {
      id: "u28l3",
      title: "Rückblick und Ausblick",
      desc: "Ein Fazit ziehen und weiterlernen",
      items: [
        { ru: "итог", tr: "itók", de: "das Fazit, Ergebnis" },
        { ru: "мудрость", tr: "múdrast", de: "die Weisheit" },
        { ru: "прогресс", tr: "pragrjéss", de: "der Fortschritt" },
        { ru: "двигаться вперёд", tr: "dwígatsa fpirjót", de: "vorankommen" },
        { ru: "развиваться", tr: "rasvivátsa", de: "sich entwickeln" },
        { ru: "достижение", tr: "dastischénije", de: "die Leistung, Errungenschaft" },
        { ru: "гордиться", tr: "gardítsa", de: "stolz sein" },
        { ru: "благодарить", tr: "blagadarít", de: "danken" },
        { ru: "уверенно", tr: "uwjérinna", de: "selbstsicher, souverän" },
        { ru: "свободно", tr: "swabódna", de: "fließend; frei" },
        { ru: "никогда не сдаваться", tr: "nikagdá ni sdawátsa", de: "niemals aufgeben" },
        { ru: "Всё получится!", tr: "fsjo palútschitsa", de: "Alles wird gut!" }
      ],
      tips: [
        { title: "гордиться + Instrumental", body: "Stolz SEIN AUF etwas – wieder der Instrumental:\nЯ горжусь **тобой**. – Ich bin stolz auf dich.\nОна гордится **своими достижениями**. – Sie ist stolz auf ihre Leistungen.\nUnd dein Ziel auf Russisch: говорить **свободно** – fließend sprechen. Du bist auf dem Weg!" }
      ],
      dialogue: {
        title: "Weiter geht's",
        context: "Anna zieht nach Monaten des Lernens Bilanz.",
        lines: [
          { who: "Пётр", ru: "Ты делаешь большой прогресс!", de: "Du machst große Fortschritte!", gap: "прогресс", opts: ["опыт", "итог"] },
          { who: "Анна", ru: "Спасибо! Теперь я говорю увереннее.", de: "Danke! Jetzt spreche ich selbstsicherer.", gap: "увереннее", opts: ["свободнее", "медленнее"] },
          { who: "Пётр", ru: "Скоро будешь говорить свободно.", de: "Bald wirst du fließend sprechen.", gap: "свободно", opts: ["уверенно", "правильно"] },
          { who: "Анна", ru: "Я горжусь своим опытом.", de: "Ich bin stolz auf meine Erfahrung.", gap: "горжусь", opts: ["благодарю", "продолжаю"] },
          { who: "Пётр", ru: "Главное — не сдаваться!", de: "Die Hauptsache – nicht aufgeben!", gap: "сдаваться", opts: ["развиваться", "гордиться"] },
          { who: "Анна", ru: "Никогда! Всё получится!", de: "Niemals! Alles wird gut!", gap: "получится", opts: ["продолжится", "удаётся"] }
        ]
      }
    }
  ]
}
);
