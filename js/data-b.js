/* Kursdaten Teil B: Einheiten 5-8 (A1+ bis A2) */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u5",
  level: "A1",
  title: "In der Stadt",
  desc: "Orte, nach dem Weg fragen, unterwegs sein",
  lessons: [
    {
      id: "u5l1",
      title: "Orte in der Stadt",
      desc: "Die wichtigsten Orte benennen",
      items: [
        { ru: "улица", tr: "úlitsa", de: "die Straße" },
        { ru: "дом", tr: "dom", de: "das Haus" },
        { ru: "магазин", tr: "magasín", de: "das Geschäft, der Laden" },
        { ru: "аптека", tr: "aptjéka", de: "die Apotheke" },
        { ru: "банк", tr: "bank", de: "die Bank (Geldinstitut)" },
        { ru: "вокзал", tr: "waksál", de: "der Bahnhof" },
        { ru: "парк", tr: "park", de: "der Park" },
        { ru: "музей", tr: "musjéj", de: "das Museum" },
        { ru: "ресторан", tr: "ristarán", de: "das Restaurant" },
        { ru: "школа", tr: "schkóla", de: "die Schule" },
        { ru: "работа", tr: "rabóta", de: "die Arbeit" },
        { ru: "Где?", tr: "gdje", de: "Wo?" }
      ],
      tips: [
        { title: "Wo? – Где?", body: "Mit **Где...?** fragst du nach dem Ort:\nГде банк? – Wo ist die Bank?\nГде аптека? – Wo ist die Apotheke?\nKein „ist“ nötig – Frage fertig!" }
      ],
      dialogue: {
        title: "Neu in der Stadt",
        context: "Anna sucht eine Bank.",
        lines: [
          { who: "Анна", ru: "Извините, где здесь банк?", de: "Entschuldigung, wo ist hier eine Bank?", gap: "банк", opts: ["парк", "дом"] },
          { who: "Прохожий", ru: "Банк? Вот он, там.", de: "Eine Bank? Da ist sie, dort." },
          { who: "Анна", ru: "А где аптека?", de: "Und wo ist eine Apotheke?", gap: "аптека", opts: ["школа", "улица"] },
          { who: "Прохожий", ru: "Аптека — на вокзале.", de: "Die Apotheke ist am Bahnhof.", gap: "вокзале", opts: ["музее", "парке"] },
          { who: "Анна", ru: "Спасибо большое!", de: "Vielen Dank!" }
        ]
      }
    },
    {
      id: "u5l2",
      title: "Wo ist das?",
      desc: "Ortsangaben: hier, dort, links, rechts",
      items: [
        { ru: "здесь", tr: "sdjes", de: "hier" },
        { ru: "там", tr: "tam", de: "dort" },
        { ru: "дома", tr: "dóma", de: "zu Hause" },
        { ru: "далеко", tr: "dalikó", de: "weit (weg)" },
        { ru: "близко", tr: "blíska", de: "nah" },
        { ru: "рядом", tr: "rjádam", de: "in der Nähe, nebenan" },
        { ru: "справа", tr: "spráwa", de: "rechts" },
        { ru: "слева", tr: "sljéwa", de: "links" },
        { ru: "прямо", tr: "prjáma", de: "geradeaus" },
        { ru: "в городе", tr: "w góradje", de: "in der Stadt" },
        { ru: "на улице", tr: "na úlitse", de: "auf der Straße, draußen" },
        { ru: "в центре", tr: "f tséntrje", de: "im Zentrum" }
      ],
      tips: [
        { title: "Der Ortsfall (Präpositiv)", body: "Bei „in/an/auf + Ort“ bekommt das Wort die Endung **-е**:\nпарк → в парк**е** (im Park)\nработа → на работ**е** (auf der Arbeit)\nМосква → в Москв**е** (in Moskau)\n**в** = in (drinnen), **на** = auf/an (Fläche, Veranstaltung)." }
      ],
      dialogue: {
        title: "Das Telefonat",
        context: "Max ruft Lena an.",
        lines: [
          { who: "Макс", ru: "Привет! Ты где?", de: "Hallo! Wo bist du?", gap: "где", opts: ["кто", "как"] },
          { who: "Лена", ru: "Я в центре, в кафе. А ты?", de: "Ich bin im Zentrum, in einem Café. Und du?" },
          { who: "Макс", ru: "Я дома. Кафе далеко?", de: "Ich bin zu Hause. Ist das Café weit weg?", gap: "дома", opts: ["там", "близко"] },
          { who: "Лена", ru: "Нет, близко. Это рядом, на улице Мира.", de: "Nein, nah. Es ist gleich nebenan, in der Mira-Straße.", gap: "близко", opts: ["далеко", "справа"] },
          { who: "Макс", ru: "Хорошо, я иду!", de: "Gut, ich komme!" }
        ]
      }
    },
    {
      id: "u5l3",
      title: "Mit Bus und Metro",
      desc: "Verkehrsmittel und Fahrkarten",
      items: [
        { ru: "метро", tr: "mitró", de: "die Metro, U-Bahn" },
        { ru: "автобус", tr: "aftóbus", de: "der Bus" },
        { ru: "трамвай", tr: "tramwáj", de: "die Straßenbahn" },
        { ru: "такси", tr: "taksí", de: "das Taxi" },
        { ru: "поезд", tr: "pójist", de: "der Zug" },
        { ru: "билет", tr: "biljét", de: "die Fahrkarte, das Ticket" },
        { ru: "остановка", tr: "astanófka", de: "die Haltestelle" },
        { ru: "станция", tr: "stántsyja", de: "die Station" },
        { ru: "ехать", tr: "jéchat", de: "fahren" },
        { ru: "идти", tr: "ittí", de: "gehen (zu Fuß)" },
        { ru: "пешком", tr: "pischkóm", de: "zu Fuß" },
        { ru: "Как доехать до...?", tr: "kak dajéchat do", de: "Wie komme ich nach/zu …?" }
      ],
      tips: [
        { title: "fahren und gehen", body: "**ехать** = fahren: я éду, ты éдешь, он éдет\n**идти** = zu Fuß gehen: я иду, ты идёшь, он идёт\nMit Verkehrsmittel: éхать **на** метро / на автобусе / на такси." }
      ],
      dialogue: {
        title: "Zum Bahnhof",
        context: "Anna fragt nach dem Weg zum Bahnhof.",
        lines: [
          { who: "Анна", ru: "Извините, как доехать до вокзала?", de: "Entschuldigung, wie komme ich zum Bahnhof?", gap: "доехать", opts: ["идти", "ехать"] },
          { who: "Прохожий", ru: "На метро или на автобусе.", de: "Mit der Metro oder mit dem Bus.", gap: "метро", opts: ["такси", "поезде"] },
          { who: "Анна", ru: "А пешком?", de: "Und zu Fuß?", gap: "пешком", opts: ["билет", "прямо"] },
          { who: "Прохожий", ru: "Пешком далеко. Вот остановка, автобус номер пять.", de: "Zu Fuß ist es weit. Hier ist die Haltestelle, Bus Nummer fünf.", gap: "остановка", opts: ["станция", "улица"] },
          { who: "Анна", ru: "А где можно купить билет?", de: "Und wo kann man eine Fahrkarte kaufen?", gap: "билет", opts: ["метро", "поезд"] },
          { who: "Прохожий", ru: "В автобусе.", de: "Im Bus." }
        ]
      }
    }
  ]
},
{
  id: "u6",
  level: "A1",
  title: "Einkaufen",
  desc: "Preise, Kleidung, Farben, an der Kasse",
  lessons: [
    {
      id: "u6l1",
      title: "Was kostet das?",
      desc: "Geld und Preise",
      items: [
        { ru: "купить", tr: "kupít", de: "kaufen" },
        { ru: "деньги", tr: "djéngi", de: "das Geld" },
        { ru: "рубль", tr: "rubl", de: "der Rubel" },
        { ru: "евро", tr: "jéwra", de: "der Euro" },
        { ru: "цена", tr: "tsyná", de: "der Preis" },
        { ru: "Сколько стоит?", tr: "skólka stóit", de: "Was kostet das?" },
        { ru: "дорого", tr: "dóraga", de: "teuer" },
        { ru: "дёшево", tr: "djóschywa", de: "billig" },
        { ru: "касса", tr: "kássa", de: "die Kasse" },
        { ru: "подарок", tr: "padárak", de: "das Geschenk" },
        { ru: "продукты", tr: "pradúkty", de: "die Lebensmittel" },
        { ru: "рынок", tr: "rýnak", de: "der Markt" }
      ],
      tips: [
        { title: "kostet oder kosten?", body: "Einzahl: Сколько **стоит** билет? – Was kostet die Fahrkarte?\nMehrzahl: Сколько **стоят** яблоки? – Was kosten die Äpfel?\nAuch Rubel hat Formen: 1 рубль, 2–4 рубля, 5+ рублей." }
      ],
      dialogue: {
        title: "Auf dem Markt",
        context: "Anna kauft Äpfel auf dem Markt.",
        lines: [
          { who: "Анна", ru: "Сколько стоят яблоки?", de: "Was kosten die Äpfel?", gap: "стоят", opts: ["стоит", "хотят"] },
          { who: "Продавец", ru: "Сто рублей.", de: "Hundert Rubel.", gap: "рублей", opts: ["евро", "лет"] },
          { who: "Анна", ru: "Это дорого!", de: "Das ist teuer!", gap: "дорого", opts: ["дёшево", "близко"] },
          { who: "Продавец", ru: "Хорошо, восемьдесят.", de: "Na gut, achtzig." },
          { who: "Анна", ru: "Спасибо! А где касса?", de: "Danke! Und wo ist die Kasse?", gap: "касса", opts: ["цена", "рынок"] },
          { who: "Продавец", ru: "Касса — там, справа.", de: "Die Kasse ist dort, rechts." }
        ]
      }
    },
    {
      id: "u6l2",
      title: "Kleidung und Farben",
      desc: "Kleidungsstücke und ihre Farben",
      items: [
        { ru: "одежда", tr: "adjéschda", de: "die Kleidung" },
        { ru: "куртка", tr: "kúrtka", de: "die Jacke" },
        { ru: "футболка", tr: "futbólka", de: "das T-Shirt" },
        { ru: "брюки", tr: "brjúki", de: "die Hose" },
        { ru: "платье", tr: "plátje", de: "das Kleid" },
        { ru: "обувь", tr: "óbuf", de: "die Schuhe (Schuhwerk)" },
        { ru: "красный", tr: "krásnyj", de: "rot" },
        { ru: "синий", tr: "sínij", de: "blau" },
        { ru: "зелёный", tr: "siljónyj", de: "grün" },
        { ru: "чёрный", tr: "tschórnyj", de: "schwarz" },
        { ru: "белый", tr: "bjélyj", de: "weiß" },
        { ru: "жёлтый", tr: "schóltyj", de: "gelb" }
      ],
      tips: [
        { title: "Farben passen sich an", body: "Farben sind Adjektive und richten sich nach dem Wort:\nкрасн**ый** дом – красн**ая** куртка – красн**ое** платье\nсин**ий** ist ein „weiches“ Adjektiv: синяя куртка, синее платье." }
      ],
      dialogue: {
        title: "Im Laden",
        context: "Lena und Vera stöbern in einem Kleidungsgeschäft.",
        lines: [
          { who: "Лена", ru: "Смотри, какая красивая куртка!", de: "Schau, was für eine schöne Jacke!", gap: "куртка", opts: ["обувь", "одежда"] },
          { who: "Вера", ru: "Красная?", de: "Die rote?", gap: "Красная", opts: ["Белая", "Чёрная"] },
          { who: "Лена", ru: "Нет, синяя. Красная — это дорого.", de: "Nein, die blaue. Die rote ist teuer.", gap: "синяя", opts: ["зелёная", "жёлтая"] },
          { who: "Вера", ru: "А вот жёлтая футболка. Дёшево!", de: "Und hier ist ein gelbes T-Shirt. Billig!", gap: "футболка", opts: ["куртка", "платье"] },
          { who: "Лена", ru: "Жёлтая?! Нет, спасибо.", de: "Gelb?! Nein, danke." }
        ]
      }
    },
    {
      id: "u6l3",
      title: "Darf ich?",
      desc: "Erlaubnis, Verbot und Hilfe beim Einkaufen",
      items: [
        { ru: "можно", tr: "móschna", de: "man darf / man kann" },
        { ru: "нельзя", tr: "nilsjá", de: "man darf nicht" },
        { ru: "надо", tr: "náda", de: "man muss, es ist nötig" },
        { ru: "Помогите, пожалуйста!", tr: "pamagítje paschálusta", de: "Helfen Sie mir bitte!" },
        { ru: "Я ищу...", tr: "ja ischtschú", de: "Ich suche …" },
        { ru: "размер", tr: "rasmjér", de: "die Größe" },
        { ru: "примерить", tr: "primjérit", de: "anprobieren" },
        { ru: "взять", tr: "wsjat", de: "nehmen" },
        { ru: "платить", tr: "platít", de: "bezahlen" },
        { ru: "картой", tr: "kártaj", de: "mit Karte" },
        { ru: "наличными", tr: "nalítschnymi", de: "bar (in bar)" },
        { ru: "продавец", tr: "pradawjéts", de: "der Verkäufer" }
      ],
      tips: [
        { title: "можно – нельзя – надо", body: "Drei kleine Wörter, riesige Wirkung – ganz ohne Konjugation:\n**Можно** примерить? – Darf ich anprobieren?\nЗдесь **нельзя** платить картой. – Hier kann man nicht mit Karte zahlen.\n**Надо** платить наличными. – Man muss bar zahlen." }
      ],
      dialogue: {
        title: "An der Kasse",
        context: "Anna hat ein Kleid gefunden.",
        lines: [
          { who: "Анна", ru: "Можно примерить это платье?", de: "Darf ich dieses Kleid anprobieren?", gap: "примерить", opts: ["платить", "взять"] },
          { who: "Продавец", ru: "Конечно! Какой у вас размер?", de: "Natürlich! Welche Größe haben Sie?", gap: "размер", opts: ["цена", "подарок"] },
          { who: "Анна", ru: "Сорок два.", de: "Zweiundvierzig." },
          { who: "Анна", ru: "Я возьму его. Можно платить картой?", de: "Ich nehme es. Kann ich mit Karte zahlen?", gap: "картой", opts: ["наличными", "деньгами"] },
          { who: "Продавец", ru: "Конечно, можно.", de: "Natürlich, das geht.", gap: "можно", opts: ["нельзя", "надо"] }
        ]
      }
    }
  ]
},
{
  id: "u7",
  level: "A2",
  title: "Freizeit und Alltag",
  desc: "Hobbys, Verben im Alltag, Pläne machen",
  lessons: [
    {
      id: "u7l1",
      title: "Hobbys",
      desc: "Sagen, was man gern macht",
      items: [
        { ru: "спорт", tr: "sport", de: "der Sport" },
        { ru: "футбол", tr: "futból", de: "der Fußball" },
        { ru: "музыка", tr: "músyka", de: "die Musik" },
        { ru: "книга", tr: "kníga", de: "das Buch" },
        { ru: "фильм", tr: "film", de: "der Film" },
        { ru: "читать", tr: "tschitát", de: "lesen" },
        { ru: "играть", tr: "igrát", de: "spielen" },
        { ru: "слушать", tr: "slúschat", de: "hören, zuhören" },
        { ru: "смотреть", tr: "smatrjét", de: "schauen, ansehen" },
        { ru: "гулять", tr: "gulját", de: "spazieren gehen" },
        { ru: "плавать", tr: "pláwat", de: "schwimmen" },
        { ru: "танцевать", tr: "tantsywát", de: "tanzen" }
      ],
      tips: [
        { title: "играть в oder на?", body: "**играть в** + Spiel/Sport: играть в футбол, в теннис, в шахматы\n**играть на** + Instrument: играть на гитаре, на пианино" }
      ],
      dialogue: {
        title: "Was machst du gern?",
        context: "Max und Lena sprechen über Hobbys.",
        lines: [
          { who: "Макс", ru: "Что ты любишь делать?", de: "Was machst du gern?" },
          { who: "Лена", ru: "Я люблю читать и слушать музыку. А ты?", de: "Ich lese gern und höre gern Musik. Und du?", gap: "читать", opts: ["играть", "плавать"] },
          { who: "Макс", ru: "Я люблю спорт: футбол и плавать.", de: "Ich mag Sport: Fußball, und ich schwimme gern.", gap: "спорт", opts: ["фильм", "книга"] },
          { who: "Лена", ru: "А ты любишь танцевать?", de: "Und tanzt du gern?", gap: "танцевать", opts: ["смотреть", "гулять"] },
          { who: "Макс", ru: "Нет! Я танцую очень плохо.", de: "Nein! Ich tanze sehr schlecht." }
        ]
      }
    },
    {
      id: "u7l2",
      title: "Mein Alltag",
      desc: "Verben konjugieren, sagen wie oft man etwas tut",
      items: [
        { ru: "делать", tr: "djélat", de: "machen, tun" },
        { ru: "работать", tr: "rabótat", de: "arbeiten" },
        { ru: "отдыхать", tr: "atdychát", de: "sich erholen, ausruhen" },
        { ru: "изучать", tr: "isutschát", de: "lernen, studieren (etwas)" },
        { ru: "Я изучаю русский язык.", tr: "ja isutscháju rússkij jasýk", de: "Ich lerne Russisch." },
        { ru: "язык", tr: "jasýk", de: "die Sprache" },
        { ru: "часто", tr: "tschásta", de: "oft" },
        { ru: "иногда", tr: "inagdá", de: "manchmal" },
        { ru: "редко", tr: "rjétka", de: "selten" },
        { ru: "каждый день", tr: "káschdyj djen", de: "jeden Tag" },
        { ru: "обычно", tr: "abýtschna", de: "normalerweise" },
        { ru: "долго", tr: "dólga", de: "lange (zeitlich)" }
      ],
      tips: [
        { title: "Das Konjugations-Muster", body: "Fast alle Verben auf **-ать** gehen so (делать):\nя дела**ю**, ты дела**ешь**, он дела**ет**,\nмы дела**ем**, вы дела**ете**, они дела**ют**\nGenauso: работать, отдыхать, изучать, читать, играть, слушать …" }
      ],
      dialogue: {
        title: "Der Alltag",
        context: "Vera erzählt Anton von ihrem Abend.",
        lines: [
          { who: "Вера", ru: "Что ты обычно делаешь вечером?", de: "Was machst du normalerweise abends?", gap: "обычно", opts: ["редко", "иногда"] },
          { who: "Антон", ru: "Обычно я отдыхаю: читаю или смотрю фильм.", de: "Normalerweise erhole ich mich: Ich lese oder schaue einen Film.", gap: "отдыхаю", opts: ["работаю", "изучаю"] },
          { who: "Вера", ru: "А я каждый день изучаю русский язык!", de: "Und ich lerne jeden Tag Russisch!", gap: "каждый", opts: ["часто", "иногда"] },
          { who: "Антон", ru: "Правда? Молодец!", de: "Wirklich? Super!" },
          { who: "Вера", ru: "Да, я хочу хорошо говорить по-русски.", de: "Ja, ich will gut Russisch sprechen.", gap: "говорить", opts: ["делать", "работать"] }
        ]
      }
    },
    {
      id: "u7l3",
      title: "Pläne fürs Wochenende",
      desc: "Verabredungen und Vorschläge machen",
      items: [
        { ru: "выходные", tr: "wychadnýje", de: "das Wochenende" },
        { ru: "планы", tr: "plány", de: "die Pläne" },
        { ru: "кино", tr: "kinó", de: "das Kino" },
        { ru: "театр", tr: "tiátr", de: "das Theater" },
        { ru: "концерт", tr: "kantsért", de: "das Konzert" },
        { ru: "встреча", tr: "fstrjétscha", de: "das Treffen" },
        { ru: "друзья", tr: "drusjá", de: "die Freunde" },
        { ru: "вместе", tr: "wmjéstje", de: "zusammen" },
        { ru: "Пойдём!", tr: "pajdjóm", de: "Gehen wir! / Lass uns gehen!" },
        { ru: "давай", tr: "dawáj", de: "los, lass uns (einverstanden!)" },
        { ru: "когда", tr: "kagdá", de: "wann" },
        { ru: "ничего", tr: "nitschiwó", de: "nichts", note: "Das г wird hier wie w gesprochen." }
      ],
      tips: [
        { title: "Vorschläge machen", body: "**Пойдём в кино!** – Lass uns ins Kino gehen!\n**Пойдём на концерт!** – Lass uns aufs Konzert gehen!\nZustimmen: **Давай!** – Au ja, machen wir!\nMit в/на + Ziel benutzt man hier den Akkusativ." }
      ],
      dialogue: {
        title: "Kino am Samstag",
        context: "Max hat eine Idee fürs Wochenende.",
        lines: [
          { who: "Макс", ru: "Что ты делаешь в субботу?", de: "Was machst du am Samstag?", gap: "субботу", opts: ["выходные", "встречу"] },
          { who: "Лена", ru: "Ничего. А что?", de: "Nichts. Wieso?", gap: "Ничего", opts: ["Вместе", "Когда"] },
          { who: "Макс", ru: "Пойдём в кино! Или на концерт?", de: "Lass uns ins Kino gehen! Oder auf ein Konzert?", gap: "кино", opts: ["театр", "работу"] },
          { who: "Лена", ru: "Давай в кино! А когда?", de: "Lass uns ins Kino gehen! Und wann?", gap: "когда", opts: ["где", "кто"] },
          { who: "Макс", ru: "Вечером, в семь часов.", de: "Abends, um sieben Uhr." },
          { who: "Лена", ru: "Хорошо, давай! До субботы!", de: "Gut, abgemacht! Bis Samstag!", gap: "давай", opts: ["пойдём", "ничего"] }
        ]
      }
    }
  ]
},
{
  id: "u8",
  level: "A2",
  title: "Reisen",
  desc: "Am Flughafen, im Hotel, um Hilfe bitten",
  lessons: [
    {
      id: "u8l1",
      title: "Die Reise beginnt",
      desc: "Reisen und Fliegen",
      items: [
        { ru: "путешествие", tr: "putischéstwije", de: "die Reise" },
        { ru: "отпуск", tr: "ótpusk", de: "der Urlaub" },
        { ru: "самолёт", tr: "samaljót", de: "das Flugzeug" },
        { ru: "аэропорт", tr: "aerapórt", de: "der Flughafen" },
        { ru: "паспорт", tr: "páspart", de: "der (Reise-)Pass" },
        { ru: "виза", tr: "wísa", de: "das Visum" },
        { ru: "чемодан", tr: "tschimadán", de: "der Koffer" },
        { ru: "багаж", tr: "bagásch", de: "das Gepäck" },
        { ru: "лететь", tr: "litjét", de: "fliegen" },
        { ru: "туда и обратно", tr: "tudá i abrátna", de: "hin und zurück" },
        { ru: "море", tr: "mórje", de: "das Meer" },
        { ru: "Куда?", tr: "kudá", de: "Wohin?" }
      ],
      tips: [
        { title: "Wo? oder Wohin?", body: "**Где?** fragt nach dem Ort: Где ты? – Я в Москве.\n**Куда?** fragt nach dem Ziel: Куда ты летишь? – Я лечу в Москву.\nBeim Ziel (Richtung) steht der Akkusativ: в Москв**у**, в Берлин." }
      ],
      dialogue: {
        title: "Am Flughafen",
        context: "Anna checkt für ihren Flug nach Moskau ein.",
        lines: [
          { who: "Сотрудник", ru: "Ваш паспорт, пожалуйста.", de: "Ihren Pass, bitte.", gap: "паспорт", opts: ["багаж", "билет"] },
          { who: "Анна", ru: "Вот, пожалуйста.", de: "Hier, bitte." },
          { who: "Сотрудник", ru: "Куда вы летите?", de: "Wohin fliegen Sie?", gap: "Куда", opts: ["Где", "Когда"] },
          { who: "Анна", ru: "В Москву. Это мой отпуск!", de: "Nach Moskau. Das ist mein Urlaub!", gap: "отпуск", opts: ["чемодан", "самолёт"] },
          { who: "Сотрудник", ru: "Это ваш чемодан?", de: "Ist das Ihr Koffer?", gap: "чемодан", opts: ["паспорт", "виза"] },
          { who: "Анна", ru: "Да, мой.", de: "Ja, meiner." },
          { who: "Сотрудник", ru: "Хорошо. Приятного полёта!", de: "Gut. Guten Flug!" }
        ]
      }
    },
    {
      id: "u8l2",
      title: "Im Hotel",
      desc: "Einchecken und nach allem Wichtigen fragen",
      items: [
        { ru: "гостиница", tr: "gastínitsa", de: "das Hotel" },
        { ru: "номер", tr: "nómir", de: "das Zimmer / die Nummer" },
        { ru: "ключ", tr: "kljutsch", de: "der Schlüssel" },
        { ru: "бронировать", tr: "branírawat", de: "reservieren, buchen" },
        { ru: "Я забронировала номер.", tr: "ja sabranírawala nómir", de: "Ich habe ein Zimmer reserviert. (Frau)" },
        { ru: "Завтрак включён?", tr: "sáftrak fkljutschón", de: "Ist Frühstück inbegriffen?" },
        { ru: "этаж", tr: "etásch", de: "die Etage, der Stock" },
        { ru: "лифт", tr: "lift", de: "der Aufzug" },
        { ru: "душ", tr: "dusch", de: "die Dusche" },
        { ru: "вай-фай", tr: "waj-fáj", de: "das WLAN" },
        { ru: "Какой пароль?", tr: "kakój paról", de: "Wie lautet das Passwort?" },
        { ru: "администратор", tr: "administrátar", de: "die Rezeption(istin)" }
      ],
      tips: [
        { title: "Vergangenheit ist leicht!", body: "Vergangenheit: Verbstamm + **-л** (m) / **-ла** (f) / **-ли** (Mehrzahl):\nОн забронирова**л**. – Er hat reserviert.\nОна забронирова**ла**. – Sie hat reserviert.\nМы забронирова**ли**. – Wir haben reserviert.\nKein Hilfsverb, keine Ausnahmen-Flut – nur Geschlecht und Zahl!" }
      ],
      dialogue: {
        title: "Der Check-in",
        context: "Anna kommt in ihrem Hotel in Moskau an.",
        lines: [
          { who: "Анна", ru: "Здравствуйте! Я забронировала номер.", de: "Guten Tag! Ich habe ein Zimmer reserviert.", gap: "номер", opts: ["ключ", "душ"] },
          { who: "Администратор", ru: "Как вас зовут?", de: "Wie heißen Sie?" },
          { who: "Анна", ru: "Анна Шмидт.", de: "Anna Schmidt." },
          { who: "Администратор", ru: "Да, вот ваш ключ. Номер двадцать пять, третий этаж.", de: "Ja, hier ist Ihr Schlüssel. Zimmer 25, dritte Etage.", gap: "ключ", opts: ["лифт", "багаж"] },
          { who: "Анна", ru: "Спасибо! А завтрак включён?", de: "Danke! Und ist Frühstück inbegriffen?", gap: "завтрак", opts: ["ужин", "обед"] },
          { who: "Администратор", ru: "Да, завтрак с семи до десяти.", de: "Ja, Frühstück gibt es von sieben bis zehn." },
          { who: "Анна", ru: "А какой пароль от вай-фая?", de: "Und wie lautet das WLAN-Passwort?", gap: "пароль", opts: ["номер", "этаж"] }
        ]
      }
    },
    {
      id: "u8l3",
      title: "Hilfe und Small Talk",
      desc: "Die Rettungssätze für jede Situation",
      items: [
        { ru: "Извините!", tr: "iswinítje", de: "Entschuldigung!" },
        { ru: "Помогите мне, пожалуйста.", tr: "pamagítje mnje paschálusta", de: "Helfen Sie mir bitte." },
        { ru: "Говорите медленнее, пожалуйста.", tr: "gawarítje mjédlinneje paschálusta", de: "Sprechen Sie bitte langsamer." },
        { ru: "Повторите, пожалуйста.", tr: "paftarítje paschálusta", de: "Wiederholen Sie bitte." },
        { ru: "Как сказать по-русски...?", tr: "kak skasát pa-rússki", de: "Wie sagt man auf Russisch …?" },
        { ru: "Что это значит?", tr: "schto éta snátschit", de: "Was bedeutet das?" },
        { ru: "Конечно!", tr: "kanjéschna", de: "Natürlich!", note: "чн wird hier wie schn gesprochen." },
        { ru: "Может быть.", tr: "móschyt byt", de: "Vielleicht." },
        { ru: "Всё хорошо.", tr: "wsjo charaschó", de: "Alles gut." },
        { ru: "только", tr: "tólka", de: "nur" },
        { ru: "Удачи!", tr: "udátschi", de: "Viel Glück!" },
        { ru: "Всего доброго!", tr: "wsiwó dóbrawa", de: "Alles Gute!" }
      ],
      tips: [
        { title: "Deine Notfall-Sätze", body: "Diese vier Sätze retten dich in jedem Gespräch:\n**Говорите медленнее, пожалуйста.** – Bitte langsamer.\n**Повторите, пожалуйста.** – Bitte nochmal.\n**Что это значит?** – Was heißt das?\n**Как сказать по-русски …?** – Wie sagt man …?\nRussen freuen sich riesig, wenn jemand ihre Sprache lernt – trau dich!" }
      ],
      dialogue: {
        title: "Auf der Straße in Moskau",
        context: "Anna übt ihr Russisch mit einem Passanten.",
        lines: [
          { who: "Анна", ru: "Извините, вы говорите по-немецки?", de: "Entschuldigung, sprechen Sie Deutsch?", gap: "Извините", opts: ["Конечно", "Удачи"] },
          { who: "Прохожий", ru: "Нет... Я говорю только по-русски.", de: "Nein … Ich spreche nur Russisch.", gap: "только", opts: ["тоже", "очень"] },
          { who: "Анна", ru: "Говорите медленнее, пожалуйста. Я изучаю русский.", de: "Sprechen Sie bitte langsamer. Ich lerne Russisch.", gap: "медленнее", opts: ["хорошо", "быстро"] },
          { who: "Прохожий", ru: "Конечно! Что вы ищете?", de: "Natürlich! Was suchen Sie?", gap: "Конечно", opts: ["Может быть", "Ничего"] },
          { who: "Анна", ru: "Как сказать по-русски «Bahnhof»? А, да — вокзал! Где вокзал?", de: "Wie sagt man auf Russisch „Bahnhof“? Ach ja – вокзал! Wo ist der Bahnhof?", gap: "сказать", opts: ["говорить", "значит"] },
          { who: "Прохожий", ru: "Вот он! Удачи!", de: "Da ist er! Viel Glück!", gap: "Удачи", opts: ["Спасибо", "Пока"] }
        ]
      }
    }
  ]
}
);
