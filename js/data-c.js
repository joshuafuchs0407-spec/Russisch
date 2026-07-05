/* Kursdaten Teil C: Einheiten 9-12 (A2 -> B1)
   Ab hier beginnt echte B1-Grammatik: Instrumental, Verbaspekte, unpersönliche
   Konstruktionen, Reflexivverben. Gleiches Datenmodell wie data-a.js. */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u9",
  level: "A2",
  title: "Wetter und Jahreszeiten",
  desc: "Über das Wetter reden, Jahreszeiten, sich richtig anziehen",
  lessons: [
    {
      id: "u9l1",
      title: "Wie ist das Wetter?",
      desc: "Wetterphänomene benennen und beschreiben",
      items: [
        { ru: "погода", tr: "pagóda", de: "das Wetter" },
        { ru: "солнце", tr: "sóntse", de: "die Sonne", note: "Das л wird hier nicht gesprochen." },
        { ru: "дождь", tr: "dosch", de: "der Regen" },
        { ru: "снег", tr: "snjek", de: "der Schnee" },
        { ru: "ветер", tr: "wjétir", de: "der Wind" },
        { ru: "облако", tr: "óblaka", de: "die Wolke" },
        { ru: "холодно", tr: "chólodna", de: "es ist kalt" },
        { ru: "тепло", tr: "tipló", de: "es ist warm" },
        { ru: "жарко", tr: "schárka", de: "es ist heiß" },
        { ru: "Идёт дождь.", tr: "idjót dosch", de: "Es regnet." },
        { ru: "Идёт снег.", tr: "idjót snjek", de: "Es schneit." },
        { ru: "градус", tr: "grádus", de: "der Grad (Temperatur)" }
      ],
      tips: [
        { title: "Sätze ganz ohne Subjekt", body: "Wetter beschreibt man unpersönlich, ohne „es“:\n**Холодно.** – (Es ist) kalt.\n**Тепло.** – (Es ist) warm.\nMit Person im Dativ: **Мне холодно.** – Mir ist kalt." },
        { title: "идёт für Regen und Schnee", body: "Wörtlich „geht“: **Идёт дождь** – der Regen geht/fällt. Genauso **идёт снег**. Für die Vergangenheit: **Шёл дождь.** – Es regnete." }
      ],
      dialogue: {
        title: "Am Fenster",
        context: "Anna und Pjotr schauen aus dem Fenster.",
        lines: [
          { who: "Анна", ru: "Какая сегодня погода?", de: "Wie ist heute das Wetter?", gap: "погода", opts: ["природа", "температура"] },
          { who: "Пётр", ru: "Холодно и идёт дождь.", de: "Es ist kalt und es regnet.", gap: "Холодно", opts: ["Жарко", "Тепло"] },
          { who: "Анна", ru: "А вчера было тепло и солнце!", de: "Und gestern war es warm und sonnig!", gap: "солнце", opts: ["облако", "ветер"] },
          { who: "Пётр", ru: "Да, а сегодня ещё и ветер.", de: "Ja, und heute ist auch noch Wind.", gap: "ветер", opts: ["снег", "градус"] },
          { who: "Анна", ru: "Ужасная погода!", de: "Schreckliches Wetter!" }
        ]
      }
    },
    {
      id: "u9l2",
      title: "Jahreszeiten und Monate",
      desc: "Über das ganze Jahr sprechen",
      items: [
        { ru: "зима", tr: "simá", de: "der Winter" },
        { ru: "весна", tr: "wisná", de: "der Frühling" },
        { ru: "лето", tr: "ljéta", de: "der Sommer" },
        { ru: "осень", tr: "óssin", de: "der Herbst" },
        { ru: "месяц", tr: "mjéssits", de: "der Monat" },
        { ru: "январь", tr: "janwár", de: "der Januar" },
        { ru: "июль", tr: "ijúl", de: "der Juli" },
        { ru: "декабрь", tr: "dikábr", de: "der Dezember" },
        { ru: "время года", tr: "wrjémja góda", de: "die Jahreszeit" },
        { ru: "любимый", tr: "ljubímyj", de: "Lieblings-, liebster" },
        { ru: "тёплый", tr: "tjóplyj", de: "warm (Adjektiv)" },
        { ru: "холодный", tr: "chalódnyj", de: "kalt (Adjektiv)" }
      ],
      tips: [
        { title: "Adjektiv oder unpersönliches Wort?", body: "**тепло/холодно** beschreiben das Wetter allgemein (unveränderlich).\n**тёплый/холодный** sind normale Adjektive, die sich anpassen: тёпл**ая** погода, холодн**ый** день." },
        { title: "„Im Winter“ ganz ohne в", body: "Bei Jahreszeiten benutzt man eine eigene Form statt в + Präpositiv:\nзим**ой** – im Winter, весн**ой** – im Frühling, лет**ом** – im Sommer, óсен**ью** – im Herbst." }
      ],
      dialogue: {
        title: "Die Lieblingsjahreszeit",
        context: "Lena und Max sprechen über Jahreszeiten.",
        lines: [
          { who: "Лена", ru: "Какое твоё любимое время года?", de: "Was ist deine liebste Jahreszeit?", gap: "время", opts: ["месяц", "погода"] },
          { who: "Макс", ru: "Лето! Я люблю тёплую погоду.", de: "Sommer! Ich mag warmes Wetter.", gap: "тёплую", opts: ["холодную", "плохую"] },
          { who: "Лена", ru: "А я люблю зиму и снег.", de: "Und ich mag den Winter und Schnee.", gap: "зиму", opts: ["весну", "осень"] },
          { who: "Макс", ru: "Зимой очень холодно!", de: "Im Winter ist es sehr kalt!", gap: "Зимой", opts: ["Летом", "Весной"] },
          { who: "Лена", ru: "Да, но это красиво.", de: "Ja, aber das ist schön." }
        ]
      }
    },
    {
      id: "u9l3",
      title: "Das Wetter und die Kleidung",
      desc: "Sich passend zum Wetter anziehen",
      items: [
        { ru: "зонт", tr: "sont", de: "der Regenschirm" },
        { ru: "шапка", tr: "schápka", de: "die Mütze" },
        { ru: "шарф", tr: "scharf", de: "der Schal" },
        { ru: "перчатки", tr: "pirtschátki", de: "die Handschuhe" },
        { ru: "очки", tr: "atschkí", de: "die Brille" },
        { ru: "надевать", tr: "nadiwát", de: "anziehen (Vorgang)" },
        { ru: "носить", tr: "nassít", de: "tragen, anhaben (gewohnheitsmäßig)" },
        { ru: "прогноз погоды", tr: "pragnós pagódy", de: "die Wettervorhersage" },
        { ru: "скорее всего", tr: "skarjéje wsiwó", de: "höchstwahrscheinlich" },
        { ru: "наверное", tr: "nawjérnaje", de: "wahrscheinlich, vermutlich" },
        { ru: "лучше", tr: "lútsche", de: "besser" },
        { ru: "взять с собой", tr: "wsjat s sabój", de: "mitnehmen" }
      ],
      tips: [
        { title: "надевать oder носить?", body: "**надевать** beschreibt den Vorgang des Anziehens: Я надеваю шапку. – Ich ziehe die Mütze an.\n**носить** beschreibt das gewohnheitsmäßige Tragen: Зимой я ношу шапку. – Im Winter trage ich (immer) eine Mütze." }
      ],
      dialogue: {
        title: "Was zieht man heute an?",
        context: "Vera schaut auf die Wettervorhersage.",
        lines: [
          { who: "Вера", ru: "Какой сегодня прогноз погоды?", de: "Wie ist heute die Wettervorhersage?", gap: "прогноз", opts: ["время", "градус"] },
          { who: "Антон", ru: "Наверное, будет дождь.", de: "Wahrscheinlich gibt es Regen.", gap: "Наверное", opts: ["Лучше", "Скорее"] },
          { who: "Вера", ru: "Тогда лучше взять зонт.", de: "Dann nimmt man besser einen Regenschirm mit.", gap: "зонт", opts: ["шарф", "очки"] },
          { who: "Антон", ru: "И надень шапку, холодно!", de: "Und zieh eine Mütze an, es ist kalt!", gap: "шапку", opts: ["перчатки", "очки"] },
          { who: "Вера", ru: "Хорошо, возьму всё с собой.", de: "Gut, ich nehme alles mit.", gap: "собой", opts: ["всего", "погоды"] }
        ]
      }
    }
  ]
},
{
  id: "u10",
  level: "A2",
  title: "Körper und Gesundheit",
  desc: "Über Körperteile, Beschwerden und den Arztbesuch sprechen",
  lessons: [
    {
      id: "u10l1",
      title: "Der Körper",
      desc: "Körperteile benennen und sagen, was wehtut",
      items: [
        { ru: "голова", tr: "galawá", de: "der Kopf" },
        { ru: "рука", tr: "ruká", de: "die Hand, der Arm" },
        { ru: "нога", tr: "naga", de: "das Bein, der Fuß" },
        { ru: "спина", tr: "spiná", de: "der Rücken" },
        { ru: "живот", tr: "schywót", de: "der Bauch" },
        { ru: "глаза", tr: "glasá", de: "die Augen" },
        { ru: "уши", tr: "úschy", de: "die Ohren" },
        { ru: "сердце", tr: "sjértse", de: "das Herz", note: "Das д wird hier nicht gesprochen." },
        { ru: "зуб", tr: "sup", de: "der Zahn" },
        { ru: "болеть", tr: "baljét", de: "wehtun / krank sein" },
        { ru: "У меня болит голова.", tr: "u minjá balít galawá", de: "Mir tut der Kopf weh." },
        { ru: "здоровый", tr: "sdaróvyj", de: "gesund" }
      ],
      tips: [
        { title: "у меня болит + Körperteil", body: "Wörtlich: „Bei mir schmerzt der Kopf.“ Der Körperteil bleibt im **Nominativ**, die Person steht mit **у + Genitiv**:\nУ меня болит голова. – Mir tut der Kopf weh.\nУ тебя болит нога. – Dir tut das Bein weh." },
        { title: "болеть – zwei Bedeutungen", body: "**боли́т/боля́т** (er/sie/es tut weh) – für Körperteile.\n**боле́ю, боле́ешь** (ich bin krank) – für Personen: Я болею. – Ich bin krank." }
      ],
      dialogue: {
        title: "Was tut dir weh?",
        context: "Max fühlt sich nicht gut.",
        lines: [
          { who: "Лена", ru: "Что с тобой? Ты плохо выглядишь.", de: "Was ist mit dir? Du siehst schlecht aus." },
          { who: "Макс", ru: "У меня болит голова.", de: "Mir tut der Kopf weh.", gap: "голова", opts: ["нога", "спина"] },
          { who: "Лена", ru: "А живот тоже болит?", de: "Tut der Bauch auch weh?", gap: "живот", opts: ["зуб", "сердце"] },
          { who: "Макс", ru: "Нет, только голова и глаза.", de: "Nein, nur der Kopf und die Augen.", gap: "глаза", opts: ["уши", "руки"] },
          { who: "Лена", ru: "Тебе надо отдохнуть.", de: "Du musst dich ausruhen." }
        ]
      }
    },
    {
      id: "u10l2",
      title: "Beim Arzt",
      desc: "Einen Arzttermin machen und Beschwerden schildern",
      items: [
        { ru: "врач", tr: "wratsch", de: "der Arzt" },
        { ru: "больница", tr: "balnítsa", de: "das Krankenhaus" },
        { ru: "поликлиника", tr: "paliklínika", de: "die Poliklinik, Arztpraxis" },
        { ru: "лекарство", tr: "likárstva", de: "das Medikament" },
        { ru: "таблетка", tr: "tabljétka", de: "die Tablette" },
        { ru: "температура", tr: "timpiratúra", de: "das Fieber, die Temperatur" },
        { ru: "простуда", tr: "prastúda", de: "die Erkältung" },
        { ru: "грипп", tr: "grip", de: "die Grippe" },
        { ru: "рецепт", tr: "ritsépt", de: "das Rezept" },
        { ru: "записаться", tr: "sapisátsa", de: "sich anmelden (Termin)" },
        { ru: "приём", tr: "prijóm", de: "der Termin, die Sprechstunde" },
        { ru: "Что у вас болит?", tr: "schto u wass balít", de: "Was tut Ihnen weh?" }
      ],
      tips: [
        { title: "Die Endung -ся", body: "**записаться** trägt am Ende **-ся** (kurz für себя = sich) – das macht viele russische Verben reflexiv: записа́ться (sich anmelden), одева́ться (sich anziehen), сомнева́ться (zweifeln). Die Konjugation bleibt sonst normal." }
      ],
      dialogue: {
        title: "Der Arzttermin",
        context: "Anna ruft beim Arzt an.",
        lines: [
          { who: "Анна", ru: "Здравствуйте, я хочу записаться к врачу.", de: "Guten Tag, ich möchte einen Termin beim Arzt vereinbaren.", gap: "записаться", opts: ["выглядеть", "отдохнуть"] },
          { who: "Администратор", ru: "Что у вас болит?", de: "Was tut Ihnen weh?", gap: "болит", opts: ["стоит", "живёт"] },
          { who: "Анна", ru: "У меня температура и, кажется, грипп.", de: "Ich habe Fieber und, glaube ich, Grippe.", gap: "температура", opts: ["простуда", "таблетка"] },
          { who: "Администратор", ru: "Хорошо, приём завтра в десять.", de: "Gut, der Termin ist morgen um zehn.", gap: "приём", opts: ["рецепт", "врач"] },
          { who: "Врач", ru: "Вам нужно лекарство и отдых.", de: "Sie brauchen Medikamente und Ruhe.", gap: "лекарство", opts: ["больница", "поликлиника"] }
        ]
      }
    },
    {
      id: "u10l3",
      title: "Gesund leben",
      desc: "Über Schlaf, Erholung und gesunde Gewohnheiten sprechen",
      items: [
        { ru: "здоровье", tr: "sdaróvje", de: "die Gesundheit" },
        { ru: "спать", tr: "spat", de: "schlafen" },
        { ru: "сон", tr: "son", de: "der Schlaf" },
        { ru: "витамин", tr: "witamín", de: "das Vitamin" },
        { ru: "отдых", tr: "ótdych", de: "die Erholung, Ruhe" },
        { ru: "уставший", tr: "ustáfschij", de: "müde, erschöpft" },
        { ru: "сила", tr: "síla", de: "die Kraft" },
        { ru: "важно", tr: "wáschna", de: "wichtig" },
        { ru: "нужно", tr: "núschna", de: "nötig, man muss" },
        { ru: "полезно", tr: "paljézna", de: "gesund, nützlich (für etwas)" },
        { ru: "вредно", tr: "wrjédna", de: "schädlich" },
        { ru: "больше", tr: "bólsche", de: "mehr" }
      ],
      tips: [
        { title: "нужно + Dativ + Infinitiv", body: "Eine der nützlichsten Konstruktionen im Russischen:\n**Мне нужно спать.** – Ich muss schlafen. (wörtlich: Mir ist nötig zu schlafen)\n**Тебе нужно больше отдыхать.** – Du musst dich mehr erholen." },
        { title: "полезно und вредно", body: "Beide beziehen sich auf die Gesundheit:\nСпорт **полезен** для здоровья. – Sport ist gut für die Gesundheit.\nКурить **вредно**. – Rauchen ist schädlich." }
      ],
      dialogue: {
        title: "Zu wenig Schlaf",
        context: "Vera sieht müde aus.",
        lines: [
          { who: "Антон", ru: "Ты выглядишь уставшей. Что случилось?", de: "Du siehst müde aus. Was ist passiert?", gap: "уставшей", opts: ["здоровой", "холодной"] },
          { who: "Вера", ru: "Я мало сплю. Работы очень много.", de: "Ich schlafe wenig. Es gibt sehr viel Arbeit." },
          { who: "Антон", ru: "Это вредно для здоровья!", de: "Das ist schädlich für die Gesundheit!", gap: "вредно", opts: ["полезно", "важно"] },
          { who: "Вера", ru: "Я знаю. Мне нужно больше спать.", de: "Ich weiß. Ich muss mehr schlafen.", gap: "нужно", opts: ["можно", "нельзя"] },
          { who: "Антон", ru: "Да, сон и отдых очень важны.", de: "Ja, Schlaf und Erholung sind sehr wichtig.", gap: "важны", opts: ["вредны", "полезны"] }
        ]
      }
    }
  ]
},
{
  id: "u11",
  level: "A2",
  title: "Arbeit und Beruf",
  desc: "Berufe benennen, den Arbeitsalltag und Karrierepläne beschreiben",
  lessons: [
    {
      id: "u11l1",
      title: "Berufe",
      desc: "Berufe benennen und danach fragen",
      items: [
        { ru: "профессия", tr: "prafjéssija", de: "der Beruf" },
        { ru: "учитель", tr: "utschítjel", de: "der Lehrer" },
        { ru: "инженер", tr: "inschynjér", de: "der Ingenieur" },
        { ru: "программист", tr: "pragrammíst", de: "der Programmierer" },
        { ru: "юрист", tr: "jurist", de: "der Jurist, Anwalt" },
        { ru: "менеджер", tr: "mjénidschir", de: "der Manager" },
        { ru: "директор", tr: "diréktar", de: "der Direktor, Chef" },
        { ru: "студент", tr: "studjént", de: "der Student" },
        { ru: "пенсионер", tr: "pinsianjér", de: "der Rentner" },
        { ru: "безработный", tr: "bisrabótnyj", de: "arbeitslos" },
        { ru: "Кем ты работаешь?", tr: "kjem ty rabótajesch", de: "Als was arbeitest du?" },
        { ru: "Я работаю врачом.", tr: "ja rabótaju wratschóm", de: "Ich arbeite als Arzt." }
      ],
      tips: [
        { title: "Beruf im Instrumental", body: "Nach **работать** (arbeiten als) steht der Beruf im **Instrumental** – neuer Fall! Endungen: männlich +ом/ем, weiblich а→ой:\nработать врач**ом** (als Arzt), работать учитель**ницей** (als Lehrerin).\nDas fragende „als was“ heißt **кем**, ebenfalls Instrumental." }
      ],
      dialogue: {
        title: "Was machst du beruflich?",
        context: "Auf einer Party lernen sich zwei Gäste kennen.",
        lines: [
          { who: "Игорь", ru: "Кем ты работаешь?", de: "Als was arbeitest du?", gap: "Кем", opts: ["Кто", "Как"] },
          { who: "Оля", ru: "Я работаю инженером. А ты?", de: "Ich arbeite als Ingenieurin. Und du?", gap: "инженером", opts: ["юристом", "директором"] },
          { who: "Игорь", ru: "Я программист. А твой муж?", de: "Ich bin Programmierer. Und dein Mann?", gap: "программист", opts: ["учитель", "студент"] },
          { who: "Оля", ru: "Он учитель, а его брат — менеджер.", de: "Er ist Lehrer, und sein Bruder ist Manager.", gap: "менеджер", opts: ["пенсионер", "директор"] }
        ]
      }
    },
    {
      id: "u11l2",
      title: "Im Büro",
      desc: "Über den Arbeitsalltag sprechen",
      items: [
        { ru: "офис", tr: "ófis", de: "das Büro" },
        { ru: "совещание", tr: "sawischtschánije", de: "die Besprechung" },
        { ru: "задача", tr: "sadátscha", de: "die Aufgabe" },
        { ru: "проект", tr: "prajékt", de: "das Projekt" },
        { ru: "отчёт", tr: "attschót", de: "der Bericht" },
        { ru: "звонок", tr: "swanók", de: "der Anruf" },
        { ru: "электронная почта", tr: "elektrónnaja pótschta", de: "die E-Mail" },
        { ru: "начальник", tr: "natschálnik", de: "der Chef, Vorgesetzte" },
        { ru: "зарплата", tr: "sarpláta", de: "das Gehalt" },
        { ru: "командировка", tr: "kamandirófka", de: "die Dienstreise" },
        { ru: "опаздывать", tr: "apásdywat", de: "zu spät kommen (Verlauf)" },
        { ru: "опоздать", tr: "apasdát", de: "zu spät kommen (einmalig)" }
      ],
      tips: [
        { title: "Dein erstes Verbaspekt-Paar", body: "Russische Verben kommen fast immer als Paar: **Imperfektiv** (Verlauf/Gewohnheit) und **Perfektiv** (abgeschlossene, einmalige Handlung).\n**опаздывать** (imperf.) – (gewohnheitsmäßig) zu spät kommen: Он всегда опаздывает.\n**опоздать** (perf.) – heute einmal zu spät kommen: Я опоздал на работу." }
      ],
      dialogue: {
        title: "Ein stressiger Tag",
        context: "Vera erzählt von ihrem Arbeitstag.",
        lines: [
          { who: "Вера", ru: "Сегодня у меня было важное совещание.", de: "Heute hatte ich eine wichtige Besprechung.", gap: "совещание", opts: ["зарплата", "командировка"] },
          { who: "Антон", ru: "Ты опоздала?", de: "Bist du zu spät gekommen?", gap: "опоздала", opts: ["отдохнула", "заказала"] },
          { who: "Вера", ru: "Да, немного. Начальник был недоволен.", de: "Ja, ein bisschen. Der Chef war unzufrieden.", gap: "Начальник", opts: ["Директор", "Коллега"] },
          { who: "Антон", ru: "А какой у тебя проект сейчас?", de: "Und an welchem Projekt arbeitest du gerade?", gap: "проект", opts: ["отчёт", "звонок"] },
          { who: "Вера", ru: "Большой проект, нужно написать отчёт.", de: "Ein großes Projekt, ich muss einen Bericht schreiben.", gap: "отчёт", opts: ["задачу", "почту"] }
        ]
      }
    },
    {
      id: "u11l3",
      title: "Bewerbung und Zukunftspläne",
      desc: "Über Ausbildung, Bewerbungen und Karriereträume sprechen",
      items: [
        { ru: "резюме", tr: "risjumjé", de: "der Lebenslauf" },
        { ru: "собеседование", tr: "sabissjédawanije", de: "das Vorstellungsgespräch" },
        { ru: "опыт", tr: "ópyt", de: "die Erfahrung" },
        { ru: "образование", tr: "abrasawánije", de: "die Bildung, Ausbildung" },
        { ru: "университет", tr: "uniwirsitjét", de: "die Universität" },
        { ru: "закончить", tr: "sakóntschit", de: "beenden, abschließen (einmalig)" },
        { ru: "учиться", tr: "utschítsa", de: "lernen, studieren (Verlauf)" },
        { ru: "мечта", tr: "mitschtá", de: "der Traum" },
        { ru: "цель", tr: "tsel", de: "das Ziel" },
        { ru: "стать", tr: "stat", de: "werden (einmalig)" },
        { ru: "будущее", tr: "búduschtscheje", de: "die Zukunft" },
        { ru: "карьера", tr: "karjéra", de: "die Karriere" },
      ],
      tips: [
        { title: "стать + Instrumental", body: "„Werden“ (einen Beruf/Zustand erreichen) verlangt ebenfalls den Instrumental:\n**Я хочу стать врачом.** – Ich möchte Arzt werden.\n**Она стала директором.** – Sie ist Direktorin geworden." },
        { title: "учиться – ein Reflexivverb", body: "учиться (lernen/studieren) trägt -ся, weil man wörtlich „sich selbst lehrt“: Я учусь в университете. – Ich studiere an der Universität." }
      ],
      dialogue: {
        title: "Träume von der Zukunft",
        context: "Igor und Olja sprechen über ihre Pläne.",
        lines: [
          { who: "Игорь", ru: "Какая у тебя мечта?", de: "Was ist dein Traum?", gap: "мечта", opts: ["цель", "карьера"] },
          { who: "Оля", ru: "Я хочу стать директором.", de: "Ich möchte Direktorin werden.", gap: "стать", opts: ["закончить", "учиться"] },
          { who: "Игорь", ru: "У тебя уже есть опыт?", de: "Hast du schon Erfahrung?", gap: "опыт", opts: ["образование", "резюме"] },
          { who: "Оля", ru: "Да, но нужно закончить университет.", de: "Ja, aber ich muss die Uni abschließen.", gap: "закончить", opts: ["написать", "записаться"] },
          { who: "Игорь", ru: "Удачи с собеседованием!", de: "Viel Glück beim Vorstellungsgespräch!", gap: "собеседованием", opts: ["будущим", "образованием"] }
        ]
      }
    }
  ]
},
{
  id: "u12",
  level: "B1",
  title: "Vergangenheit erzählen",
  desc: "Geschichten erzählen: Verbaspekte, Zeitwörter, Erinnerungen",
  lessons: [
    {
      id: "u12l1",
      title: "Was gestern passiert ist",
      desc: "Das Grundprinzip der russischen Verbaspekte",
      items: [
        { ru: "случиться", tr: "slutschítsa", de: "passieren, geschehen" },
        { ru: "однажды", tr: "adnáschdy", de: "eines Tages, einmal" },
        { ru: "вдруг", tr: "wdruk", de: "plötzlich" },
        { ru: "сначала", tr: "snatschála", de: "zuerst" },
        { ru: "потом", tr: "patóm", de: "danach" },
        { ru: "наконец", tr: "nakanjéts", de: "schließlich, endlich" },
        { ru: "уже", tr: "usché", de: "schon" },
        { ru: "ещё", tr: "jischtschó", de: "noch" },
        { ru: "закончиться", tr: "sakóntschitsa", de: "enden, zu Ende gehen" },
        { ru: "начаться", tr: "natschátsa", de: "beginnen, anfangen" },
        { ru: "история", tr: "istórija", de: "die Geschichte" },
        { ru: "случай", tr: "slútschaj", de: "der Vorfall, Zufall" }
      ],
      tips: [
        { title: "Perfektiv vs. Imperfektiv – die Grundidee", body: "**Perfektiv** = eine abgeschlossene, einmalige Handlung mit Ergebnis: Фильм **начался**. – Der Film hat (einmal, fertig) begonnen.\n**Imperfektiv** = Verlauf, Wiederholung, Hintergrund: Фильм **начинался**, когда я пришёл. – Der Film begann gerade (im Verlauf), als ich kam.\nViele Verben bilden Paare wie начать/начинать, закончить/заканчивать – das lernst du nach und nach." },
        { title: "Zeit-Wörter für Geschichten", body: "**сначала** … **потом** … **наконец** strukturieren jede Erzählung:\nСначала мы гуляли, потом обедали, наконец пошли домой. – Zuerst sind wir spazieren gegangen, danach haben wir zu Mittag gegessen, schließlich sind wir nach Hause gegangen." }
      ],
      dialogue: {
        title: "Was ist passiert?",
        context: "Max erzählt von einem verrückten Tag.",
        lines: [
          { who: "Макс", ru: "Вчера случилась смешная история!", de: "Gestern ist eine lustige Geschichte passiert!", gap: "случилась", opts: ["началась", "закончилась"] },
          { who: "Лена", ru: "Расскажи! Что случилось?", de: "Erzähl! Was ist passiert?", gap: "случилось", opts: ["показалось", "осталось"] },
          { who: "Макс", ru: "Сначала я потерял ключи.", de: "Zuerst habe ich meine Schlüssel verloren.", gap: "Сначала", opts: ["Потом", "Наконец"] },
          { who: "Макс", ru: "Потом вдруг позвонил Игорь.", de: "Dann hat plötzlich Igor angerufen.", gap: "вдруг", opts: ["уже", "ещё"] },
          { who: "Макс", ru: "Наконец я нашёл ключи дома!", de: "Schließlich habe ich die Schlüssel zu Hause gefunden!", gap: "Наконец", opts: ["Однажды", "Сначала"] }
        ]
      }
    },
    {
      id: "u12l2",
      title: "Gewohnheit oder einmaliges Ereignis?",
      desc: "Wiederholte Handlungen von einmaligen unterscheiden",
      items: [
        { ru: "раньше", tr: "ránsche", de: "früher" },
        { ru: "привычка", tr: "priwýtschka", de: "die Gewohnheit" },
        { ru: "каждый раз", tr: "káschdyj ras", de: "jedes Mal" },
        { ru: "никогда", tr: "nikagdá", de: "nie" },
        { ru: "всегда", tr: "fsigdá", de: "immer" },
        { ru: "время от времени", tr: "wrjémja at wrjémini", de: "von Zeit zu Zeit" },
        { ru: "продолжать", tr: "pradalschát", de: "fortfahren, weitermachen" },
        { ru: "перестать", tr: "piristát", de: "aufhören (etwas zu tun)" },
        { ru: "измениться", tr: "ismiénitsa", de: "sich ändern (einmalig)" },
        { ru: "меняться", tr: "minjátsa", de: "sich ändern (Verlauf)" },
        { ru: "жизнь", tr: "schysn", de: "das Leben" },
        { ru: "изменение", tr: "ismenjénije", de: "die Veränderung" }
      ],
      tips: [
        { title: "перестать + Infinitiv", body: "„Aufhören, etwas zu tun“ – der Infinitiv danach ist meist **imperfektiv**, weil er den (bisherigen) Verlauf beschreibt:\nЯ **перестал курить**. – Ich habe aufgehört zu rauchen." },
        { title: "измениться und меняться", body: "**измениться** (perfektiv) – sich einmalig/insgesamt verändert haben: Город сильно изменился.\n**меняться** (imperfektiv) – sich gerade verändern/wandeln: Всё меняется каждый день." }
      ],
      dialogue: {
        title: "Das Leben ändert sich",
        context: "Vera trifft eine alte Freundin wieder.",
        lines: [
          { who: "Вера", ru: "Ты так изменилась!", de: "Du hast dich so verändert!", gap: "изменилась", opts: ["перестала", "продолжила"] },
          { who: "Оля", ru: "Раньше я курила, а теперь нет.", de: "Früher habe ich geraucht, aber jetzt nicht mehr.", gap: "Раньше", opts: ["Всегда", "Никогда"] },
          { who: "Вера", ru: "Ты перестала курить? Молодец!", de: "Du hast mit dem Rauchen aufgehört? Gut gemacht!", gap: "перестала", opts: ["продолжила", "изменилась"] },
          { who: "Оля", ru: "Да, и жизнь стала лучше.", de: "Ja, und das Leben ist besser geworden.", gap: "жизнь", opts: ["привычка", "изменение"] },
          { who: "Вера", ru: "Всё меняется, время от времени.", de: "Alles ändert sich, von Zeit zu Zeit.", gap: "меняется", opts: ["продолжается", "случается"] }
        ]
      }
    },
    {
      id: "u12l3",
      title: "Erinnerungen",
      desc: "Über Kindheit und Vergangenes sprechen",
      items: [
        { ru: "помнить", tr: "pómnit", de: "sich erinnern (Zustand)" },
        { ru: "вспомнить", tr: "fspómnit", de: "sich erinnern (einmalig)" },
        { ru: "забыть", tr: "sabýt", de: "vergessen (einmalig)" },
        { ru: "забывать", tr: "sabywát", de: "vergessen (Verlauf, gewohnheitsmäßig)" },
        { ru: "детство", tr: "djétstwa", de: "die Kindheit" },
        { ru: "прошлое", tr: "próschlaje", de: "die Vergangenheit" },
        { ru: "тогда", tr: "tagdá", de: "damals" },
        { ru: "давно", tr: "dawnó", de: "vor langer Zeit" },
        { ru: "недавно", tr: "nidáwna", de: "kürzlich" },
        { ru: "с тех пор", tr: "s tjech por", de: "seitdem" },
        { ru: "казаться", tr: "kasátsa", de: "scheinen" },
        { ru: "интересно", tr: "intirjésna", de: "interessant" }
      ],
      tips: [
        { title: "помнить vs. вспомнить", body: "**помнить** (imperfektiv) – etwas im Gedächtnis behalten (Zustand): Я хорошо помню детство. – Ich erinnere mich gut an die Kindheit.\n**вспомнить** (perfektiv) – sich plötzlich an etwas erinnern (einmaliger Moment): Вдруг я вспомнил его имя! – Plötzlich fiel mir sein Name ein!" },
        { title: "давно und недавно", body: "**давно** – vor langer Zeit / schon lange: Я живу здесь давно.\n**недавно** – erst kürzlich: Я недавно переехал. – Ich bin kürzlich umgezogen." }
      ],
      dialogue: {
        title: "Kindheitserinnerungen",
        context: "Anton und Vera erinnern sich an früher.",
        lines: [
          { who: "Антон", ru: "Ты помнишь наше детство?", de: "Erinnerst du dich an unsere Kindheit?", gap: "помнишь", opts: ["вспомнишь", "забываешь"] },
          { who: "Вера", ru: "Конечно! Это было так давно.", de: "Natürlich! Das war so lange her.", gap: "давно", opts: ["недавно", "тогда"] },
          { who: "Антон", ru: "Вдруг я вспомнил нашу школу.", de: "Plötzlich fiel mir unsere Schule ein.", gap: "вспомнил", opts: ["помнил", "забыл"] },
          { who: "Вера", ru: "Тогда всё казалось таким простым.", de: "Damals schien alles so einfach.", gap: "казалось", opts: ["случилось", "изменилось"] },
          { who: "Антон", ru: "С тех пор многое изменилось.", de: "Seitdem hat sich vieles verändert.", gap: "тех", opts: ["сих", "той"] }
        ]
      }
    }
  ]
}
);
