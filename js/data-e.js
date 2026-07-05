/* Kursdaten Teil E: Einheiten 17-20 (B1)
   Lernen & Wissen, Charakter & Beziehungen, Essen & Kochen, Kultur & Feste. */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u17",
  level: "B1",
  title: "Lernen und Wissen",
  desc: "Unterricht, Sprachenlernen, wissen und können",
  lessons: [
    {
      id: "u17l1",
      title: "Im Unterricht",
      desc: "Schule, Uni und Prüfungen",
      items: [
        { ru: "урок", tr: "urók", de: "die Unterrichtsstunde, Lektion" },
        { ru: "экзамен", tr: "eksámin", de: "die Prüfung" },
        { ru: "оценка", tr: "atsénka", de: "die Note" },
        { ru: "домашнее задание", tr: "damáschneje sadánije", de: "die Hausaufgabe" },
        { ru: "учебник", tr: "utschjébnik", de: "das Lehrbuch" },
        { ru: "тетрадь", tr: "titrát", de: "das Heft" },
        { ru: "ручка", tr: "rútschka", de: "der Kugelschreiber" },
        { ru: "карандаш", tr: "karandásch", de: "der Bleistift" },
        { ru: "преподаватель", tr: "pripadawátil", de: "der Dozent, Lehrer" },
        { ru: "класс", tr: "klas", de: "die Klasse, das Klassenzimmer" },
        { ru: "курс", tr: "kurs", de: "der Kurs" },
        { ru: "лекция", tr: "ljéktsyja", de: "die Vorlesung" }
      ],
      tips: [
        { title: "сдавать oder сдать?", body: "Beim Wort „Prüfung“ zeigt der Aspekt seine volle Kraft:\n**сдавать экзамен** (imperfektiv) = die Prüfung ablegen, dabei sein.\n**сдать экзамен** (perfektiv) = die Prüfung BESTEHEN!\nЯ сдавал, но не сдал. – Ich habe sie abgelegt, aber nicht bestanden." }
      ],
      dialogue: {
        title: "Vor der Prüfung",
        context: "Max ist nervös vor seiner Prüfung.",
        lines: [
          { who: "Макс", ru: "Завтра у меня экзамен!", de: "Morgen habe ich eine Prüfung!", gap: "экзамен", opts: ["урок", "курс"] },
          { who: "Лена", ru: "Ты выучил все уроки?", de: "Hast du alle Lektionen gelernt?", gap: "уроки", opts: ["оценки", "ручки"] },
          { who: "Макс", ru: "Почти. Но я забыл учебник в классе.", de: "Fast. Aber ich habe das Lehrbuch im Klassenzimmer vergessen.", gap: "учебник", opts: ["карандаш", "тетрадь"] },
          { who: "Лена", ru: "Возьми мой. И вот тетрадь с лекциями.", de: "Nimm meins. Und hier ist ein Heft mit den Vorlesungen.", gap: "тетрадь", opts: ["ручка", "оценка"] },
          { who: "Макс", ru: "Спасибо! Надеюсь, оценка будет хорошая.", de: "Danke! Ich hoffe, die Note wird gut.", gap: "оценка", opts: ["лекция", "задание"] }
        ]
      }
    },
    {
      id: "u17l2",
      title: "Sprachen lernen",
      desc: "Wortschatz rund ums Lernen einer Sprache",
      items: [
        { ru: "слово", tr: "slówa", de: "das Wort" },
        { ru: "предложение", tr: "pridlaschénije", de: "der Satz" },
        { ru: "грамматика", tr: "gramátika", de: "die Grammatik" },
        { ru: "произношение", tr: "praisnaschénije", de: "die Aussprache" },
        { ru: "переводить", tr: "piriwadít", de: "übersetzen (Verlauf)" },
        { ru: "перевести", tr: "piriwistí", de: "übersetzen (einmalig)" },
        { ru: "повторять", tr: "paftarját", de: "wiederholen (Verlauf)" },
        { ru: "запоминать", tr: "sapaminát", de: "sich einprägen (Verlauf)" },
        { ru: "запомнить", tr: "sapómnit", de: "sich merken (einmalig)" },
        { ru: "ошибка", tr: "aschípka", de: "der Fehler" },
        { ru: "упражнение", tr: "upraschnjénije", de: "die Übung" },
        { ru: "словарь", tr: "slawár", de: "das Wörterbuch" }
      ],
      tips: [
        { title: "Fehler gehören dazu", body: "**делать ошибки** – Fehler machen – ist beim Sprachenlernen normal und nützlich:\nНе бойся делать ошибки! – Hab keine Angst, Fehler zu machen!\nGenau dafür gibt es diese App: Jeder Fehler schickt das Wort zurück in die Wiederholung." }
      ],
      dialogue: {
        title: "Wie lernst du?",
        context: "Vera und Anton tauschen Lerntipps aus.",
        lines: [
          { who: "Вера", ru: "Как ты запоминаешь новые слова?", de: "Wie merkst du dir neue Wörter?", gap: "слова", opts: ["ошибки", "словари"] },
          { who: "Антон", ru: "Я повторяю их каждый день.", de: "Ich wiederhole sie jeden Tag.", gap: "повторяю", opts: ["перевожу", "пишу"] },
          { who: "Вера", ru: "А грамматика?", de: "Und die Grammatik?", gap: "грамматика", opts: ["произношение", "предложение"] },
          { who: "Антон", ru: "Я делаю упражнения и не боюсь ошибок.", de: "Ich mache Übungen und habe keine Angst vor Fehlern.", gap: "ошибок", opts: ["уроков", "слов"] },
          { who: "Вера", ru: "Молодец! А я всё перевожу со словарём.", de: "Super! Und ich übersetze alles mit dem Wörterbuch.", gap: "словарём", opts: ["учебником", "карандашом"] }
        ]
      }
    },
    {
      id: "u17l3",
      title: "Wissen und Können",
      desc: "знать, уметь, мочь – die drei Arten von „können“",
      items: [
        { ru: "знать", tr: "snat", de: "wissen, kennen" },
        { ru: "узнать", tr: "usnát", de: "erfahren, herausfinden" },
        { ru: "уметь", tr: "umjét", de: "können (gelernt haben)" },
        { ru: "мочь", tr: "motsch", de: "können (möglich sein)" },
        { ru: "научиться", tr: "nautschítsa", de: "erlernen" },
        { ru: "объяснить", tr: "abjisnít", de: "erklären" },
        { ru: "понять", tr: "panját", de: "verstehen, begreifen (einmalig)" },
        { ru: "значит", tr: "snátschit", de: "also, das heißt" },
        { ru: "правило", tr: "práwila", de: "die Regel" },
        { ru: "пример", tr: "primjér", de: "das Beispiel" },
        { ru: "легко", tr: "lichkó", de: "leicht, einfach" },
        { ru: "трудно", tr: "trúdna", de: "schwer, schwierig" }
      ],
      tips: [
        { title: "знать – уметь – мочь", body: "Drei Wörter für unser „wissen/können“:\n**знать** + Fakten: Я знаю ответ. – Ich weiß die Antwort.\n**уметь** + Fähigkeit: Я умею плавать. – Ich kann schwimmen (habe es gelernt).\n**мочь** + Möglichkeit: Я не могу прийти сегодня. – Ich kann heute nicht kommen (Umstände)." }
      ],
      dialogue: {
        title: "Kannst du das erklären?",
        context: "Max versteht eine Grammatikregel nicht.",
        lines: [
          { who: "Макс", ru: "Ты можешь объяснить это правило?", de: "Kannst du mir diese Regel erklären?", gap: "правило", opts: ["пример", "слово"] },
          { who: "Лена", ru: "Конечно. Смотри, вот пример.", de: "Natürlich. Schau, hier ist ein Beispiel.", gap: "пример", opts: ["ответ", "вопрос"] },
          { who: "Макс", ru: "А, теперь я понял! Это легко!", de: "Ah, jetzt habe ich es verstanden! Das ist leicht!", gap: "легко", opts: ["трудно", "быстро"] },
          { who: "Лена", ru: "Видишь? Ты умеешь учиться.", de: "Siehst du? Du kannst lernen.", gap: "умеешь", opts: ["знаешь", "можешь"] },
          { who: "Макс", ru: "Значит, скоро я буду говорить свободно!", de: "Das heißt, bald spreche ich fließend!", gap: "Значит", opts: ["Кстати", "Однако"] }
        ]
      }
    }
  ]
},
{
  id: "u18",
  level: "B1",
  title: "Charakter und Beziehungen",
  desc: "Menschen beschreiben, Liebe und Freundschaft, Feste feiern",
  lessons: [
    {
      id: "u18l1",
      title: "Der Charakter",
      desc: "Charaktereigenschaften beschreiben",
      items: [
        { ru: "характер", tr: "charáktir", de: "der Charakter" },
        { ru: "честный", tr: "tschjésnyj", de: "ehrlich" },
        { ru: "ленивый", tr: "liníwyj", de: "faul" },
        { ru: "трудолюбивый", tr: "trudaljubíwyj", de: "fleißig" },
        { ru: "скромный", tr: "skrómnyj", de: "bescheiden" },
        { ru: "смелый", tr: "smjélyj", de: "mutig" },
        { ru: "вежливый", tr: "wjéschliwyj", de: "höflich" },
        { ru: "грубый", tr: "grúbyj", de: "grob, unhöflich" },
        { ru: "серьёзный", tr: "sirjóznyj", de: "ernst, seriös" },
        { ru: "странный", tr: "stránnyj", de: "seltsam, merkwürdig" },
        { ru: "милый", tr: "mílyj", de: "nett, süß" },
        { ru: "терпеливый", tr: "tirpilíwyj", de: "geduldig" }
      ],
      tips: [
        { title: "Nach dem Charakter fragen", body: "**Какой он?** – Wie ist er? (allgemein)\n**Какой у него характер?** – Was für einen Charakter hat er?\nAntwort mit Adjektiven, die sich anpassen: Он честн**ый**, она честн**ая**, они честн**ые**." }
      ],
      dialogue: {
        title: "Der neue Nachbar",
        context: "Vera fragt nach dem neuen Nachbarn.",
        lines: [
          { who: "Вера", ru: "Какой у него характер?", de: "Was für einen Charakter hat er?", gap: "характер", opts: ["вопрос", "пример"] },
          { who: "Антон", ru: "Он честный и трудолюбивый.", de: "Er ist ehrlich und fleißig.", gap: "честный", opts: ["ленивый", "грубый"] },
          { who: "Вера", ru: "Но немного странный, да?", de: "Aber ein bisschen seltsam, oder?", gap: "странный", opts: ["смелый", "милый"] },
          { who: "Антон", ru: "Нет, просто скромный!", de: "Nein, einfach nur bescheiden!", gap: "скромный", opts: ["серьёзный", "вежливый"] },
          { who: "Вера", ru: "Ну хорошо. Главное — не грубый.", de: "Na gut. Hauptsache, nicht unhöflich.", gap: "грубый", opts: ["терпеливый", "честный"] }
        ]
      }
    },
    {
      id: "u18l2",
      title: "Freundschaft und Liebe",
      desc: "Über Beziehungen sprechen",
      items: [
        { ru: "любовь", tr: "ljubóf", de: "die Liebe" },
        { ru: "влюбиться", tr: "wljubítsa", de: "sich verlieben" },
        { ru: "свидание", tr: "swidánije", de: "das Date, die Verabredung" },
        { ru: "пара", tr: "pára", de: "das Paar" },
        { ru: "отношения", tr: "atnaschénija", de: "die Beziehung" },
        { ru: "познакомиться", tr: "pasnakómitsa", de: "sich kennenlernen" },
        { ru: "доверять", tr: "dawirját", de: "vertrauen" },
        { ru: "ссориться", tr: "ssóritsa", de: "sich streiten" },
        { ru: "мириться", tr: "mirítsa", de: "sich versöhnen" },
        { ru: "расстаться", tr: "rastátsa", de: "sich trennen" },
        { ru: "скучать", tr: "skutschát", de: "vermissen; sich langweilen" },
        { ru: "навсегда", tr: "nafsigdá", de: "für immer" }
      ],
      tips: [
        { title: "Jetzt verstehst du „до свидания“!", body: "**свидание** heißt Treffen/Verabredung – **до свидания** ist wörtlich „bis zum (nächsten) Wiedersehen“.\nUnd: **скучать по** + Dativ = jemanden vermissen: Я скучаю по тебе. – Ich vermisse dich." },
        { title: "познакомиться с + Instrumental", body: "Mit wem man sich bekannt macht, steht im Instrumental:\nЯ познакомился **с Верой**. – Ich habe Vera kennengelernt.\nПознакомьтесь **с моим братом**! – Lernen Sie meinen Bruder kennen!" }
      ],
      dialogue: {
        title: "Verliebt",
        context: "Olja erzählt von ihrer neuen Beziehung.",
        lines: [
          { who: "Лена", ru: "Как вы познакомились?", de: "Wie habt ihr euch kennengelernt?", gap: "познакомились", opts: ["расстались", "ссорились"] },
          { who: "Оля", ru: "На концерте. Это была любовь с первого взгляда!", de: "Auf einem Konzert. Es war Liebe auf den ersten Blick!", gap: "любовь", opts: ["пара", "встреча"] },
          { who: "Лена", ru: "Как романтично! У вас скоро свидание?", de: "Wie romantisch! Habt ihr bald ein Date?", gap: "свидание", opts: ["отношения", "собеседование"] },
          { who: "Оля", ru: "Да, завтра. Я ему доверяю.", de: "Ja, morgen. Ich vertraue ihm.", gap: "доверяю", opts: ["скучаю", "мирюсь"] },
          { who: "Лена", ru: "Вы красивая пара!", de: "Ihr seid ein schönes Paar!", gap: "пара", opts: ["любовь", "жизнь"] }
        ]
      }
    },
    {
      id: "u18l3",
      title: "Feste feiern",
      desc: "Geburtstag, Hochzeit und Glückwünsche",
      items: [
        { ru: "праздник", tr: "práznik", de: "das Fest, der Feiertag" },
        { ru: "день рождения", tr: "djen raschdjénija", de: "der Geburtstag" },
        { ru: "свадьба", tr: "swádba", de: "die Hochzeit" },
        { ru: "гость", tr: "gost", de: "der Gast" },
        { ru: "приглашать", tr: "priglaschát", de: "einladen (Verlauf)" },
        { ru: "пригласить", tr: "priglassít", de: "einladen (einmalig)" },
        { ru: "поздравлять", tr: "pasdrawlját", de: "gratulieren" },
        { ru: "Поздравляю!", tr: "pasdrawljáju", de: "Herzlichen Glückwunsch!" },
        { ru: "желать", tr: "schylát", de: "wünschen" },
        { ru: "счастье", tr: "schtschástje", de: "das Glück" },
        { ru: "подарить", tr: "padarít", de: "schenken" },
        { ru: "торт", tr: "tort", de: "die Torte, der Kuchen" }
      ],
      tips: [
        { title: "Wünschen mit Genitiv", body: "Nach **желать** stehen die Wünsche im Genitiv:\nЖелаю **счастья**, **любви** и **здоровья**! – Ich wünsche Glück, Liebe und Gesundheit!\nGlückwünsche mit **с + Instrumental**: С днём рождения! – Alles Gute zum Geburtstag!" }
      ],
      dialogue: {
        title: "Die Geburtstagsfeier",
        context: "Vera kommt zu Antons Geburtstag.",
        lines: [
          { who: "Вера", ru: "Поздравляю с днём рождения!", de: "Herzlichen Glückwunsch zum Geburtstag!", gap: "Поздравляю", opts: ["Желаю", "Приглашаю"] },
          { who: "Антон", ru: "Спасибо, что пришла! Ты первый гость.", de: "Danke, dass du gekommen bist! Du bist der erste Gast.", gap: "гость", opts: ["праздник", "торт"] },
          { who: "Вера", ru: "Желаю тебе счастья и здоровья! Вот подарок.", de: "Ich wünsche dir Glück und Gesundheit! Hier ist ein Geschenk.", gap: "счастья", opts: ["свадьбы", "торта"] },
          { who: "Антон", ru: "Спасибо! А теперь — торт!", de: "Danke! Und jetzt – Torte!", gap: "торт", opts: ["гость", "праздник"] },
          { who: "Вера", ru: "А кого ещё ты пригласил?", de: "Und wen hast du noch eingeladen?", gap: "пригласил", opts: ["поздравил", "подарил"] },
          { who: "Антон", ru: "Всех друзей и соседей!", de: "Alle Freunde und Nachbarn!" }
        ]
      }
    }
  ]
},
{
  id: "u19",
  level: "B1",
  title: "Essen und Kochen",
  desc: "Geschmack beschreiben, kochen, Gastfreundschaft",
  lessons: [
    {
      id: "u19l1",
      title: "Der Geschmack",
      desc: "Gerichte und Geschmacksrichtungen",
      items: [
        { ru: "блюдо", tr: "bljúda", de: "das Gericht" },
        { ru: "закуска", tr: "sakúska", de: "die Vorspeise" },
        { ru: "десерт", tr: "dissért", de: "der Nachtisch" },
        { ru: "напиток", tr: "napítak", de: "das Getränk" },
        { ru: "вкус", tr: "fkus", de: "der Geschmack" },
        { ru: "сладкий", tr: "slátkij", de: "süß" },
        { ru: "солёный", tr: "saljónyj", de: "salzig" },
        { ru: "острый", tr: "óstryj", de: "scharf" },
        { ru: "кислый", tr: "kíslyj", de: "sauer" },
        { ru: "горький", tr: "górkij", de: "bitter" },
        { ru: "голодный", tr: "galódnyj", de: "hungrig" },
        { ru: "сытый", tr: "sýtyj", de: "satt" }
      ],
      tips: [
        { title: "Ich bin hungrig – kurz gesagt", body: "Wie bei рад gibt es Kurzformen:\nЯ **голоден** (m) / Я **голодна** (f). – Ich bin hungrig.\nЯ **сыт** / Я **сыта**. – Ich bin satt.\nDie Kurzform klingt natürlicher als die Langform im Satz." }
      ],
      dialogue: {
        title: "Im georgischen Restaurant",
        context: "Max und Lena bestellen georgisch.",
        lines: [
          { who: "Макс", ru: "Я такой голодный!", de: "Ich bin so hungrig!", gap: "голодный", opts: ["сытый", "довольный"] },
          { who: "Лена", ru: "Возьмём закуски и горячее блюдо?", de: "Nehmen wir Vorspeisen und ein warmes Gericht?", gap: "блюдо", opts: ["напиток", "десерт"] },
          { who: "Макс", ru: "Да! Только не очень острое.", de: "Ja! Nur nicht zu scharf.", gap: "острое", opts: ["сладкое", "кислое"] },
          { who: "Лена", ru: "А на десерт — что-нибудь сладкое.", de: "Und zum Nachtisch etwas Süßes.", gap: "десерт", opts: ["вкус", "закуску"] },
          { who: "Макс", ru: "И какой-нибудь холодный напиток!", de: "Und irgendein kaltes Getränk!", gap: "напиток", opts: ["суп", "торт"] }
        ]
      }
    },
    {
      id: "u19l2",
      title: "Kochen",
      desc: "Zutaten und Küchenverben",
      items: [
        { ru: "варить", tr: "warít", de: "kochen (in Wasser)" },
        { ru: "жарить", tr: "schárit", de: "braten" },
        { ru: "резать", tr: "rjésat", de: "schneiden" },
        { ru: "добавить", tr: "dabáwit", de: "hinzufügen" },
        { ru: "соль", tr: "sol", de: "das Salz" },
        { ru: "сахар", tr: "sáchar", de: "der Zucker" },
        { ru: "перец", tr: "pjérits", de: "der Pfeffer, die Paprika" },
        { ru: "масло", tr: "másla", de: "das Öl, die Butter" },
        { ru: "лук", tr: "luk", de: "die Zwiebel" },
        { ru: "картофель", tr: "kartófil", de: "die Kartoffeln" },
        { ru: "овощи", tr: "ówaschtschi", de: "das Gemüse" },
        { ru: "фрукты", tr: "frúkty", de: "das Obst" }
      ],
      tips: [
        { title: "Der Imperativ im Rezept", body: "Rezepte und Anweisungen nutzen den Imperativ:\ndu-Form: **режь** лук, **добавь** соль, **вари** 10 минут.\nSie-/ihr-Form mit -те: **режьте**, **добавьте**, **варите**.\nDamit kannst du jedes russische Rezept lesen!" }
      ],
      dialogue: {
        title: "Wir kochen Borschtsch",
        context: "Vera und Anton kochen zusammen.",
        lines: [
          { who: "Вера", ru: "Сегодня варим борщ!", de: "Heute kochen wir Borschtsch!", gap: "варим", opts: ["жарим", "режем"] },
          { who: "Антон", ru: "Что мне делать?", de: "Was soll ich machen?" },
          { who: "Вера", ru: "Режь лук и картофель.", de: "Schneide die Zwiebel und die Kartoffeln.", gap: "лук", opts: ["перец", "сахар"] },
          { who: "Антон", ru: "А потом?", de: "Und dann?" },
          { who: "Вера", ru: "Жарь овощи и добавь соль и перец.", de: "Brate das Gemüse an und füge Salz und Pfeffer hinzu.", gap: "соль", opts: ["масло", "фрукты"] },
          { who: "Антон", ru: "Пахнет отлично!", de: "Das riecht großartig!" }
        ]
      }
    },
    {
      id: "u19l3",
      title: "Zu Gast",
      desc: "Russische Gastfreundschaft am Tisch",
      items: [
        { ru: "угощать", tr: "ugaschtschát", de: "bewirten" },
        { ru: "Угощайтесь!", tr: "ugaschtschájtis", de: "Greifen Sie zu! / Bedient euch!" },
        { ru: "тарелка", tr: "tarjélka", de: "der Teller" },
        { ru: "вилка", tr: "wílka", de: "die Gabel" },
        { ru: "нож", tr: "nosch", de: "das Messer" },
        { ru: "ложка", tr: "lóschka", de: "der Löffel" },
        { ru: "салфетка", tr: "salfjétka", de: "die Serviette" },
        { ru: "кусок", tr: "kussók", de: "das Stück" },
        { ru: "налить", tr: "nalít", de: "eingießen" },
        { ru: "вкусный", tr: "fkúsnyj", de: "lecker (Adjektiv)" },
        { ru: "ещё немного", tr: "jischtschó nimnóga", de: "noch ein bisschen" },
        { ru: "Всё было очень вкусно!", tr: "wsjo býla ótschin fkúsna", de: "Alles war sehr lecker!" }
      ],
      tips: [
        { title: "Höflich zu Gast", body: "Russische Gastgeber tischen gern reichlich auf. Nützliche Sätze:\n**Угощайтесь!** – Greifen Sie zu! (sagt der Gastgeber)\n**Спасибо, я сыт / сыта.** – Danke, ich bin satt. (höflich ablehnen)\n**Всё было очень вкусно!** – das perfekte Kompliment zum Schluss." }
      ],
      dialogue: {
        title: "Bei Babuschka",
        context: "Anna ist bei einer russischen Oma eingeladen.",
        lines: [
          { who: "Бабушка", ru: "Угощайтесь! Вот пироги.", de: "Greifen Sie zu! Hier sind Piroggen.", gap: "Угощайтесь", opts: ["Поздравляю", "Помогите"] },
          { who: "Анна", ru: "Спасибо! Очень вкусный пирог!", de: "Danke! Sehr leckere Pirogge!", gap: "вкусный", opts: ["сладкий", "солёный"] },
          { who: "Бабушка", ru: "Налить ещё чаю?", de: "Soll ich noch Tee eingießen?", gap: "Налить", opts: ["Добавить", "Резать"] },
          { who: "Анна", ru: "Да, и ещё немного торта...", de: "Ja, und noch ein bisschen Torte …", gap: "немного", opts: ["кусок", "сыта"] },
          { who: "Бабушка", ru: "Возьми самый большой кусок!", de: "Nimm das größte Stück!", gap: "кусок", opts: ["нож", "тарелку"] },
          { who: "Анна", ru: "Всё было очень вкусно!", de: "Alles war sehr lecker!" }
        ]
      }
    }
  ]
},
{
  id: "u20",
  level: "B1",
  title: "Kultur und Feste",
  desc: "Kunst, Medien und russische Feiertage",
  lessons: [
    {
      id: "u20l1",
      title: "Kunst und Kultur",
      desc: "Über Ausstellungen, Musik und Kunst sprechen",
      items: [
        { ru: "выставка", tr: "wýstafka", de: "die Ausstellung" },
        { ru: "картина", tr: "kartína", de: "das Gemälde, Bild" },
        { ru: "художник", tr: "chudóschnik", de: "der Maler, Künstler" },
        { ru: "писатель", tr: "pissátil", de: "der Schriftsteller" },
        { ru: "песня", tr: "pjésnja", de: "das Lied" },
        { ru: "певец", tr: "piwjéts", de: "der Sänger" },
        { ru: "сцена", tr: "stséna", de: "die Bühne" },
        { ru: "зал", tr: "sal", de: "der Saal" },
        { ru: "зритель", tr: "srítil", de: "der Zuschauer" },
        { ru: "известный", tr: "iswjésnyj", de: "berühmt, bekannt" },
        { ru: "популярный", tr: "papuljárnyj", de: "populär, beliebt" },
        { ru: "современный", tr: "sawrimjénnyj", de: "modern, zeitgenössisch" }
      ],
      tips: [
        { title: "известен чем?", body: "„Bekannt für/durch etwas“ – wieder der Instrumental:\nОн известен **своими картинами**. – Er ist für seine Gemälde bekannt.\nМосква известна **своим метро**. – Moskau ist für seine Metro berühmt." }
      ],
      dialogue: {
        title: "In der Galerie",
        context: "Lena und Max besuchen eine Ausstellung.",
        lines: [
          { who: "Лена", ru: "Смотри, какая картина!", de: "Schau, was für ein Gemälde!", gap: "картина", opts: ["песня", "сцена"] },
          { who: "Макс", ru: "Кто художник?", de: "Wer ist der Maler?", gap: "художник", opts: ["писатель", "певец"] },
          { who: "Лена", ru: "Очень известный. Его выставка сейчас популярна.", de: "Ein sehr berühmter. Seine Ausstellung ist gerade sehr beliebt.", gap: "выставка", opts: ["картина", "сцена"] },
          { who: "Макс", ru: "Мне нравится современное искусство.", de: "Mir gefällt moderne Kunst.", gap: "современное", opts: ["известное", "популярное"] },
          { who: "Лена", ru: "А вечером в этом зале будет концерт.", de: "Und abends ist in diesem Saal ein Konzert.", gap: "зале", opts: ["сцене", "выставке"] }
        ]
      }
    },
    {
      id: "u20l2",
      title: "Medien und Nachrichten",
      desc: "Zeitung, Fernsehen und aktuelle Ereignisse",
      items: [
        { ru: "газета", tr: "gasjéta", de: "die Zeitung" },
        { ru: "журнал", tr: "schurnál", de: "die Zeitschrift" },
        { ru: "статья", tr: "statjá", de: "der Artikel" },
        { ru: "новости", tr: "nówasti", de: "die Nachrichten" },
        { ru: "телевидение", tr: "tiliwídinije", de: "das Fernsehen" },
        { ru: "канал", tr: "kanál", de: "der Kanal, Sender" },
        { ru: "передача", tr: "piridátscha", de: "die Sendung" },
        { ru: "реклама", tr: "rikláma", de: "die Werbung" },
        { ru: "радио", tr: "rádio", de: "das Radio" },
        { ru: "интервью", tr: "intirwjú", de: "das Interview" },
        { ru: "сообщать", tr: "saabschtschát", de: "melden, mitteilen" },
        { ru: "событие", tr: "sabýtije", de: "das Ereignis" }
      ],
      tips: [
        { title: "сообщать о + Präpositiv", body: "Worüber berichtet wird, steht mit **о** im Präpositiv:\nВ новостях сообщают **о погоде**. – In den Nachrichten wird über das Wetter berichtet.\nОн рассказал **о поездке**. – Er erzählte von der Reise." }
      ],
      dialogue: {
        title: "Was gibt's Neues?",
        context: "Anton und Vera sprechen über Medien.",
        lines: [
          { who: "Антон", ru: "Ты читала эту статью?", de: "Hast du diesen Artikel gelesen?", gap: "статью", opts: ["газету", "рекламу"] },
          { who: "Вера", ru: "Нет, я не читаю газеты.", de: "Nein, ich lese keine Zeitungen.", gap: "газеты", opts: ["журналы", "новости"] },
          { who: "Антон", ru: "А откуда ты знаешь новости?", de: "Und woher kennst du die Nachrichten?", gap: "новости", opts: ["события", "передачи"] },
          { who: "Вера", ru: "По радио и в интернете.", de: "Aus dem Radio und dem Internet.", gap: "радио", opts: ["телевидению", "каналу"] },
          { who: "Антон", ru: "По телевидению слишком много рекламы!", de: "Im Fernsehen gibt es zu viel Werbung!", gap: "рекламы", opts: ["статьи", "интервью"] }
        ]
      }
    },
    {
      id: "u20l3",
      title: "Russische Feste",
      desc: "Neujahr, Weihnachten und Masleniza",
      items: [
        { ru: "Новый год", tr: "nówyj got", de: "das Neujahr(sfest)" },
        { ru: "Рождество", tr: "raschdistwó", de: "Weihnachten" },
        { ru: "ёлка", tr: "jólka", de: "der Tannenbaum" },
        { ru: "Дед Мороз", tr: "djet marós", de: "Väterchen Frost" },
        { ru: "салют", tr: "saljút", de: "das Feuerwerk" },
        { ru: "традиция", tr: "tradítsyja", de: "die Tradition" },
        { ru: "отмечать", tr: "atmitschát", de: "feiern, begehen" },
        { ru: "каникулы", tr: "kaníkuly", de: "die Ferien" },
        { ru: "Масленица", tr: "máslinitsa", de: "die Masleniza (Butterwoche)" },
        { ru: "блины", tr: "bliný", de: "die Bliny (Pfannkuchen)" },
        { ru: "полночь", tr: "pólnatsch", de: "die Mitternacht" },
        { ru: "С Новым годом!", tr: "s nówym gódam", de: "Frohes neues Jahr!" }
      ],
      tips: [
        { title: "Neujahr ist das große Fest", body: "In Russland ist **Новый год** wichtiger als Weihnachten: Tannenbaum (ёлка), Geschenke von **Дед Мороз** und Feuerwerk um Mitternacht. Das orthodoxe **Рождество** folgt erst am 7. Januar. Im Februar/März kommt die **Масленица** – eine ganze Woche Bliny!\nGratuliert wird mit с + Instrumental: **С Новым годом! С Рождеством!**" }
      ],
      dialogue: {
        title: "Silvester in Moskau",
        context: "Anna fragt Pjotr nach russischen Bräuchen.",
        lines: [
          { who: "Анна", ru: "Как вы отмечаете Новый год?", de: "Wie feiert ihr Neujahr?", gap: "отмечаете", opts: ["сообщаете", "приглашаете"] },
          { who: "Пётр", ru: "Дома, с семьёй. Ёлка, салют в полночь...", de: "Zu Hause, mit der Familie. Tannenbaum, Feuerwerk um Mitternacht …", gap: "салют", opts: ["ёлка", "торт"] },
          { who: "Анна", ru: "А Дед Мороз приносит подарки?", de: "Und bringt Väterchen Frost die Geschenke?", gap: "подарки", opts: ["блины", "газеты"] },
          { who: "Пётр", ru: "Конечно! А в феврале — Масленица и блины!", de: "Natürlich! Und im Februar Masleniza und Bliny!", gap: "блины", opts: ["каникулы", "традиции"] },
          { who: "Анна", ru: "С Новым годом, Пётр!", de: "Frohes neues Jahr, Pjotr!" }
        ]
      }
    }
  ]
}
);
