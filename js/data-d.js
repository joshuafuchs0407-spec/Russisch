/* Kursdaten Teil D: Einheiten 13-16 (B1)
   Wohnen, Technik & Kommunikation, Gefühle & Meinung, Natur. */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u13",
  level: "B1",
  title: "Wohnen und Zuhause",
  desc: "Die Wohnung beschreiben, mieten, Hausarbeit",
  lessons: [
    {
      id: "u13l1",
      title: "Die Wohnung",
      desc: "Räume und Möbel benennen",
      items: [
        { ru: "квартира", tr: "kwartíra", de: "die Wohnung" },
        { ru: "комната", tr: "kómnata", de: "das Zimmer" },
        { ru: "кухня", tr: "kúchnja", de: "die Küche" },
        { ru: "ванная", tr: "wánnaja", de: "das Badezimmer" },
        { ru: "спальня", tr: "spálnja", de: "das Schlafzimmer" },
        { ru: "окно", tr: "aknó", de: "das Fenster" },
        { ru: "дверь", tr: "dwjer", de: "die Tür" },
        { ru: "стол", tr: "stol", de: "der Tisch" },
        { ru: "стул", tr: "stul", de: "der Stuhl" },
        { ru: "кровать", tr: "krawát", de: "das Bett" },
        { ru: "диван", tr: "diwán", de: "das Sofa" },
        { ru: "балкон", tr: "balkón", de: "der Balkon" }
      ],
      tips: [
        { title: "есть und нет", body: "„Es gibt“ = **есть**, „es gibt nicht“ = **нет + Genitiv**:\nВ квартире **есть** балкон. – In der Wohnung gibt es einen Balkon.\nЗдесь **нет** балкон**а** / лифт**а** / кухн**и**. – Hier gibt es keinen Balkon/Aufzug/keine Küche.\nMerke: nach нет bekommt das Wort die Genitiv-Endung (-а/-я bzw. -ы/-и)." }
      ],
      dialogue: {
        title: "Die neue Wohnung",
        context: "Lena zeigt Max ihre neue Wohnung.",
        lines: [
          { who: "Лена", ru: "Вот моя новая квартира!", de: "Hier ist meine neue Wohnung!", gap: "квартира", opts: ["комната", "кухня"] },
          { who: "Макс", ru: "Какая большая комната!", de: "Was für ein großes Zimmer!", gap: "комната", opts: ["дверь", "кровать"] },
          { who: "Лена", ru: "Да, а здесь кухня и ванная.", de: "Ja, und hier sind Küche und Bad.", gap: "кухня", opts: ["спальня", "стол"] },
          { who: "Макс", ru: "А балкон есть?", de: "Und gibt es einen Balkon?", gap: "балкон", opts: ["диван", "стул"] },
          { who: "Лена", ru: "Конечно! Но лифта, к сожалению, нет.", de: "Natürlich! Aber einen Aufzug gibt es leider nicht." }
        ]
      }
    },
    {
      id: "u13l2",
      title: "Eine Wohnung mieten",
      desc: "Wohnungssuche, Vermieter, Umzug",
      items: [
        { ru: "снимать", tr: "snimát", de: "mieten (Verlauf)" },
        { ru: "снять", tr: "snjat", de: "mieten, anmieten (einmalig)" },
        { ru: "аренда", tr: "arjénda", de: "die Miete" },
        { ru: "хозяин", tr: "chasjáin", de: "der Vermieter, Hausherr" },
        { ru: "сосед", tr: "sassjét", de: "der Nachbar" },
        { ru: "переехать", tr: "pirijéchat", de: "umziehen" },
        { ru: "район", tr: "rajón", de: "das Stadtviertel" },
        { ru: "удобный", tr: "udóbnyj", de: "bequem, praktisch" },
        { ru: "мебель", tr: "mjébil", de: "die Möbel" },
        { ru: "ремонт", tr: "rimónt", de: "die Renovierung" },
        { ru: "договор", tr: "dagawór", de: "der Vertrag" },
        { ru: "платить за квартиру", tr: "platít sa kwartíru", de: "Miete zahlen" }
      ],
      tips: [
        { title: "за + Akkusativ", body: "„Bezahlen für“ = **платить за** + Akkusativ:\nплатить за квартиру, за интернет, за билет.\nAuch: Спасибо за помощь! – Danke für die Hilfe!" },
        { title: "снимать / снять", body: "Wieder ein Aspekt-Paar: **снимать** квартиру = zur Miete wohnen (Zustand), **снять** квартиру = eine Wohnung (neu) anmieten (einmaliger Abschluss)." }
      ],
      dialogue: {
        title: "Die Wohnungssuche",
        context: "Anton sucht eine neue Wohnung.",
        lines: [
          { who: "Антон", ru: "Я хочу снять квартиру в центре.", de: "Ich will eine Wohnung im Zentrum mieten.", gap: "снять", opts: ["купить", "переехать"] },
          { who: "Вера", ru: "Это дорого! Какой район ты ищешь?", de: "Das ist teuer! Welches Viertel suchst du?", gap: "район", opts: ["ремонт", "договор"] },
          { who: "Антон", ru: "Удобный, рядом с метро.", de: "Ein praktisches, in der Nähe der Metro.", gap: "Удобный", opts: ["Старый", "Плохой"] },
          { who: "Вера", ru: "А мебель там есть?", de: "Und gibt es dort Möbel?", gap: "мебель", opts: ["аренда", "хозяин"] },
          { who: "Антон", ru: "Да, и ремонт новый. Завтра я говорю с хозяином.", de: "Ja, und die Renovierung ist neu. Morgen spreche ich mit dem Vermieter.", gap: "хозяином", opts: ["соседом", "другом"] }
        ]
      }
    },
    {
      id: "u13l3",
      title: "Hausarbeit",
      desc: "Aufräumen, putzen und im Haushalt helfen",
      items: [
        { ru: "убирать", tr: "ubirát", de: "aufräumen, putzen (Verlauf)" },
        { ru: "убрать", tr: "ubrát", de: "aufräumen (einmalig)" },
        { ru: "мыть", tr: "myt", de: "waschen, spülen" },
        { ru: "посуда", tr: "passúda", de: "das Geschirr" },
        { ru: "стирать", tr: "stirát", de: "Wäsche waschen" },
        { ru: "мусор", tr: "mússar", de: "der Müll" },
        { ru: "порядок", tr: "parjádak", de: "die Ordnung" },
        { ru: "грязный", tr: "grjásnyj", de: "schmutzig" },
        { ru: "чистый", tr: "tschístyj", de: "sauber" },
        { ru: "помогать", tr: "pamagát", de: "helfen (Verlauf)" },
        { ru: "помочь", tr: "pamótsch", de: "helfen (einmalig)" },
        { ru: "холодильник", tr: "chaladílnik", de: "der Kühlschrank" }
      ],
      tips: [
        { title: "помогать + Dativ", body: "Wem hilft man? – Dativ:\nЯ помогаю **маме**. – Ich helfe Mama.\nПомоги **мне**, пожалуйста! – Hilf mir bitte! (du-Form)\nПомогите! kennst du schon – das ist die Sie-Form davon." }
      ],
      dialogue: {
        title: "Der Samstagsputz",
        context: "Die Familie räumt gemeinsam auf.",
        lines: [
          { who: "Мама", ru: "В комнате беспорядок! Убери, пожалуйста.", de: "Im Zimmer ist Unordnung! Räum bitte auf.", gap: "Убери", opts: ["Помоги", "Мой"] },
          { who: "Сын", ru: "Сейчас! А кто моет посуду?", de: "Gleich! Und wer spült das Geschirr?", gap: "посуду", opts: ["мусор", "мебель"] },
          { who: "Мама", ru: "Ты. И вынеси мусор.", de: "Du. Und bring den Müll raus.", gap: "мусор", opts: ["порядок", "стол"] },
          { who: "Сын", ru: "А папа что делает?", de: "Und was macht Papa?" },
          { who: "Мама", ru: "Папа стирает. Вместе быстро будет порядок!", de: "Papa wäscht die Wäsche. Zusammen ist schnell Ordnung!", gap: "порядок", opts: ["ремонт", "мусор"] }
        ]
      }
    }
  ]
},
{
  id: "u14",
  level: "B1",
  title: "Technik und Kommunikation",
  desc: "Telefonieren, schreiben, Technikprobleme lösen",
  lessons: [
    {
      id: "u14l1",
      title: "Telefon und Computer",
      desc: "Anrufen, Nachrichten senden, Geräte benennen",
      items: [
        { ru: "телефон", tr: "tilifón", de: "das Telefon, Handy" },
        { ru: "звонить", tr: "swanít", de: "anrufen (Verlauf)" },
        { ru: "позвонить", tr: "paswanít", de: "anrufen (einmalig)" },
        { ru: "сообщение", tr: "saabschtschénije", de: "die Nachricht" },
        { ru: "отправить", tr: "atpráwit", de: "senden, abschicken" },
        { ru: "получить", tr: "palutschít", de: "erhalten, bekommen" },
        { ru: "интернет", tr: "intirnét", de: "das Internet" },
        { ru: "компьютер", tr: "kampjútir", de: "der Computer" },
        { ru: "ноутбук", tr: "noutbúk", de: "der Laptop" },
        { ru: "экран", tr: "ekrán", de: "der Bildschirm" },
        { ru: "сайт", tr: "sajt", de: "die Website" },
        { ru: "скачать", tr: "skatschát", de: "herunterladen" }
      ],
      tips: [
        { title: "звонить + Dativ", body: "Wen man anruft, steht im Dativ:\nЯ позвоню **тебе** вечером. – Ich rufe dich heute Abend an.\nПозвони **маме**! – Ruf Mama an!\nAspekt-Paar: звонить (immer wieder) / позвонить (einmal)." }
      ],
      dialogue: {
        title: "Ruf mich an!",
        context: "Vera und Anton verabreden, wie sie in Kontakt bleiben.",
        lines: [
          { who: "Вера", ru: "Позвони мне вечером, хорошо?", de: "Ruf mich heute Abend an, okay?", gap: "Позвони", opts: ["Отправь", "Скачай"] },
          { who: "Антон", ru: "Лучше я отправлю сообщение.", de: "Ich schicke lieber eine Nachricht.", gap: "сообщение", opts: ["телефон", "экран"] },
          { who: "Вера", ru: "Почему?", de: "Warum?" },
          { who: "Антон", ru: "Мой телефон почти не работает.", de: "Mein Telefon funktioniert fast nicht mehr.", gap: "телефон", opts: ["интернет", "ноутбук"] },
          { who: "Вера", ru: "Тогда пиши с компьютера!", de: "Dann schreib vom Computer!", gap: "компьютера", opts: ["сайта", "экрана"] }
        ]
      }
    },
    {
      id: "u14l2",
      title: "Schreiben und Antworten",
      desc: "Nachrichten, Fragen und Antworten im Alltag",
      items: [
        { ru: "писать", tr: "pissát", de: "schreiben (Verlauf)" },
        { ru: "написать", tr: "napissát", de: "schreiben, fertig schreiben (einmalig)" },
        { ru: "отвечать", tr: "atwitschát", de: "antworten (Verlauf)" },
        { ru: "ответить", tr: "atwjétit", de: "antworten (einmalig)" },
        { ru: "вопрос", tr: "waprós", de: "die Frage" },
        { ru: "ответ", tr: "atwjét", de: "die Antwort" },
        { ru: "искать", tr: "iskát", de: "suchen" },
        { ru: "найти", tr: "najtí", de: "finden" },
        { ru: "фотография", tr: "fatagráfija", de: "das Foto" },
        { ru: "видео", tr: "wídeo", de: "das Video" },
        { ru: "страница", tr: "stranítsa", de: "die Seite" },
        { ru: "делиться", tr: "dilítsa", de: "teilen (mit jemandem)" }
      ],
      tips: [
        { title: "отвечать на вопрос", body: "„Auf eine Frage antworten“ = **отвечать/ответить на** + Akkusativ:\nОн не ответил **на моё сообщение**. – Er hat auf meine Nachricht nicht geantwortet.\nWem man antwortet, steht im Dativ: Ответь **мне**!" }
      ],
      dialogue: {
        title: "Die E-Mail",
        context: "Im Büro fehlt eine wichtige Antwort.",
        lines: [
          { who: "Начальник", ru: "Вы написали ответ клиенту?", de: "Haben Sie dem Kunden die Antwort geschrieben?", gap: "ответ", opts: ["вопрос", "видео"] },
          { who: "Вера", ru: "Ещё нет. У меня вопрос.", de: "Noch nicht. Ich habe eine Frage.", gap: "вопрос", opts: ["ответ", "сайт"] },
          { who: "Начальник", ru: "Какой?", de: "Welche?" },
          { who: "Вера", ru: "Я не могу найти его адрес.", de: "Ich kann seine Adresse nicht finden.", gap: "найти", opts: ["написать", "получить"] },
          { who: "Начальник", ru: "Посмотрите на сайте!", de: "Schauen Sie auf der Website nach!", gap: "сайте", opts: ["экране", "странице"] }
        ]
      }
    },
    {
      id: "u14l3",
      title: "Wenn die Technik streikt",
      desc: "Technikprobleme beschreiben und lösen",
      items: [
        { ru: "не работает", tr: "ni rabótajet", de: "funktioniert nicht" },
        { ru: "сломаться", tr: "slamátsa", de: "kaputtgehen" },
        { ru: "починить", tr: "patschinít", de: "reparieren" },
        { ru: "включить", tr: "fkljutschít", de: "einschalten" },
        { ru: "выключить", tr: "wýkljutschit", de: "ausschalten" },
        { ru: "зарядка", tr: "sarjátka", de: "das Ladegerät" },
        { ru: "батарея", tr: "batarjéja", de: "der Akku, die Batterie" },
        { ru: "медленно", tr: "mjédlinna", de: "langsam" },
        { ru: "быстро", tr: "býstra", de: "schnell" },
        { ru: "попробовать", tr: "papróbawat", de: "versuchen, probieren" },
        { ru: "снова", tr: "snówa", de: "wieder, erneut" },
        { ru: "проблема", tr: "prabljéma", de: "das Problem" }
      ],
      tips: [
        { title: "Der Klassiker der IT-Hilfe", body: "**Выключи и включи снова!** – Schalt es aus und wieder ein!\nPerfektive Imperative für einmalige Handlungen: включи, выключи, попробуй, позвони (du-Form) – mit **-те** wird daraus die Sie-Form: включите, попробуйте." }
      ],
      dialogue: {
        title: "Der kaputte Laptop",
        context: "Max hat ein Technikproblem.",
        lines: [
          { who: "Макс", ru: "Мой ноутбук не работает!", de: "Mein Laptop funktioniert nicht!", gap: "работает", opts: ["сломается", "включает"] },
          { who: "Лена", ru: "Попробуй выключить и включить снова.", de: "Versuch mal, ihn aus- und wieder einzuschalten.", gap: "снова", opts: ["быстро", "медленно"] },
          { who: "Макс", ru: "Уже пробовал. Экран чёрный.", de: "Hab ich schon versucht. Der Bildschirm bleibt schwarz.", gap: "Экран", opts: ["Ноутбук", "Сайт"] },
          { who: "Лена", ru: "А батарея? Где твоя зарядка?", de: "Und der Akku? Wo ist dein Ladegerät?", gap: "зарядка", opts: ["проблема", "батарея"] },
          { who: "Макс", ru: "О... вот проблема. Спасибо!", de: "Oh … da ist das Problem. Danke!", gap: "проблема", opts: ["зарядка", "ошибка"] }
        ]
      }
    }
  ]
},
{
  id: "u15",
  level: "B1",
  title: "Gefühle und Meinungen",
  desc: "Gefühle ausdrücken, Meinung sagen, argumentieren",
  lessons: [
    {
      id: "u15l1",
      title: "Wie fühlst du dich?",
      desc: "Gefühle und Stimmungen benennen",
      items: [
        { ru: "счастливый", tr: "schtschaslíwyj", de: "glücklich" },
        { ru: "грустный", tr: "grúsnyj", de: "traurig" },
        { ru: "злой", tr: "sloj", de: "böse, wütend" },
        { ru: "довольный", tr: "dawólnyj", de: "zufrieden" },
        { ru: "рад", tr: "rat", de: "froh (Kurzform)" },
        { ru: "бояться", tr: "bajátsa", de: "Angst haben, sich fürchten" },
        { ru: "страх", tr: "strach", de: "die Angst" },
        { ru: "радость", tr: "rádast", de: "die Freude" },
        { ru: "волноваться", tr: "walnawátsa", de: "sich Sorgen machen, aufgeregt sein" },
        { ru: "спокойный", tr: "spakójnyj", de: "ruhig, gelassen" },
        { ru: "настроение", tr: "nastrajénije", de: "die Stimmung, Laune" },
        { ru: "устать", tr: "ustát", de: "müde werden (einmalig)" }
      ],
      tips: [
        { title: "рад – die Kurzform", body: "Einige Adjektive haben eine Kurzform, die als „bin/ist“ funktioniert:\nЯ **рад** (m) / Я **рада** (f) тебя видеть! – Ich freue mich, dich zu sehen!\nМы **рады**. – Wir freuen uns." },
        { title: "бояться + Genitiv", body: "Wovor man Angst hat, steht im Genitiv:\nЯ боюсь экзамен**а**. – Ich habe Angst vor der Prüfung.\nОна боится собак. – Sie hat Angst vor Hunden." }
      ],
      dialogue: {
        title: "Schlechte Laune",
        context: "Anton wirkt bedrückt.",
        lines: [
          { who: "Вера", ru: "Почему у тебя плохое настроение?", de: "Warum hast du schlechte Laune?", gap: "настроение", opts: ["радость", "страх"] },
          { who: "Антон", ru: "Я волнуюсь. Завтра собеседование.", de: "Ich bin aufgeregt. Morgen ist das Vorstellungsgespräch.", gap: "волнуюсь", opts: ["боюсь", "устал"] },
          { who: "Вера", ru: "Не бойся! Ты умный и опытный.", de: "Hab keine Angst! Du bist klug und erfahren." },
          { who: "Антон", ru: "Спасибо. Теперь я спокойный... почти.", de: "Danke. Jetzt bin ich ruhig … fast.", gap: "спокойный", opts: ["злой", "грустный"] },
          { who: "Вера", ru: "Я рада! Удачи завтра!", de: "Das freut mich! Viel Glück morgen!", gap: "рада", opts: ["довольна", "счастлива"] }
        ]
      }
    },
    {
      id: "u15l2",
      title: "Meiner Meinung nach",
      desc: "Die eigene Meinung ausdrücken, zustimmen und widersprechen",
      items: [
        { ru: "думать", tr: "dúmat", de: "denken" },
        { ru: "считать", tr: "schtschitát", de: "meinen, der Ansicht sein" },
        { ru: "по-моему", tr: "pa-mójimu", de: "meiner Meinung nach" },
        { ru: "Мне кажется...", tr: "mnje káschitsa", de: "Mir scheint … / Ich glaube …" },
        { ru: "согласен", tr: "saglássin", de: "einverstanden (m)" },
        { ru: "согласна", tr: "saglásna", de: "einverstanden (f)" },
        { ru: "прав", tr: "praf", de: "hat recht (m)" },
        { ru: "права", tr: "prawá", de: "hat recht (f)" },
        { ru: "возможно", tr: "wasmóschna", de: "möglich, möglicherweise" },
        { ru: "вряд ли", tr: "wrjat li", de: "wohl kaum" },
        { ru: "зависит", tr: "sawíssit", de: "es hängt ab (von)" },
        { ru: "мнение", tr: "mnjénije", de: "die Meinung" }
      ],
      tips: [
        { title: "думать, что …", body: "Nach Meinungsverben kommt **что** (dass):\nЯ думаю, **что** это хорошая идея. – Ich denke, dass das eine gute Idee ist.\nIm Russischen steht vor что immer ein Komma." },
        { title: "Das hängt davon ab", body: "**зависит от** + Genitiv:\nЭто зависит **от погоды**. – Das hängt vom Wetter ab.\nВсё зависит **от тебя**. – Alles hängt von dir ab." }
      ],
      dialogue: {
        title: "Diskussion über den Film",
        context: "Max und Lena sind sich uneinig.",
        lines: [
          { who: "Макс", ru: "По-моему, фильм отличный!", de: "Meiner Meinung nach ist der Film großartig!", gap: "По-моему", opts: ["Вряд ли", "Возможно"] },
          { who: "Лена", ru: "Вряд ли. Мне кажется, он скучный.", de: "Wohl kaum. Mir scheint, er ist langweilig.", gap: "кажется", opts: ["зависит", "думаю"] },
          { who: "Макс", ru: "Ты не права! Актёры играют прекрасно.", de: "Du hast nicht recht! Die Schauspieler spielen wunderbar.", gap: "права", opts: ["согласна", "рада"] },
          { who: "Лена", ru: "Возможно. Но история слабая.", de: "Möglich. Aber die Geschichte ist schwach.", gap: "Возможно", opts: ["Однако", "Например"] },
          { who: "Макс", ru: "Ну, это зависит от вкуса.", de: "Na ja, das hängt vom Geschmack ab.", gap: "зависит", opts: ["кажется", "считает"] }
        ]
      }
    },
    {
      id: "u15l3",
      title: "Argumentieren",
      desc: "Sätze verbinden und Argumente strukturieren",
      items: [
        { ru: "потому что", tr: "patamú schta", de: "weil" },
        { ru: "поэтому", tr: "paétamu", de: "deshalb" },
        { ru: "хотя", tr: "chatjá", de: "obwohl" },
        { ru: "однако", tr: "adnáka", de: "jedoch" },
        { ru: "например", tr: "naprimjér", de: "zum Beispiel" },
        { ru: "во-первых", tr: "wa-pjérwych", de: "erstens" },
        { ru: "во-вторых", tr: "wa-ftarých", de: "zweitens" },
        { ru: "с одной стороны", tr: "s adnój staraný", de: "einerseits" },
        { ru: "с другой стороны", tr: "s drugój staraný", de: "andererseits" },
        { ru: "вообще", tr: "waabschtschjé", de: "überhaupt, im Allgemeinen" },
        { ru: "кстати", tr: "kstáti", de: "übrigens" },
        { ru: "важный", tr: "wáschnyj", de: "wichtig (Adjektiv)" }
      ],
      tips: [
        { title: "Ein Argument aufbauen", body: "**Во-первых**, это дёшево. **Во-вторых**, это быстро. **Поэтому** я согласен.\n– Erstens ist es billig. Zweitens ist es schnell. Deshalb bin ich einverstanden.\nMit diesen Wörtern klingen deine Sätze sofort eine Stufe reifer." }
      ],
      dialogue: {
        title: "Stadt oder Land?",
        context: "Vera und Anton diskutieren übers Wohnen.",
        lines: [
          { who: "Вера", ru: "Я хочу жить в деревне.", de: "Ich möchte auf dem Dorf leben." },
          { who: "Антон", ru: "Почему?", de: "Warum?" },
          { who: "Вера", ru: "Во-первых, там тихо. Во-вторых, дёшево.", de: "Erstens ist es dort still. Zweitens billig.", gap: "Во-первых", opts: ["Однако", "Кстати"] },
          { who: "Антон", ru: "Хотя в городе больше работы.", de: "Obwohl es in der Stadt mehr Arbeit gibt.", gap: "Хотя", opts: ["Поэтому", "Например"] },
          { who: "Вера", ru: "Однако жизнь там дорогая.", de: "Jedoch ist das Leben dort teuer.", gap: "Однако", opts: ["Вообще", "Возможно"] },
          { who: "Антон", ru: "Кстати, это важный вопрос. Поэтому подумай хорошо!", de: "Übrigens ist das eine wichtige Frage. Deshalb überleg gut!", gap: "Поэтому", opts: ["Хотя", "Потому что"] }
        ]
      }
    }
  ]
},
{
  id: "u16",
  level: "B1",
  title: "Natur und Land",
  desc: "Natur beschreiben, Tiere, das Leben auf dem Land",
  lessons: [
    {
      id: "u16l1",
      title: "Die Natur",
      desc: "Landschaft und Himmel beschreiben",
      items: [
        { ru: "природа", tr: "priróda", de: "die Natur" },
        { ru: "лес", tr: "ljes", de: "der Wald" },
        { ru: "река", tr: "riká", de: "der Fluss" },
        { ru: "озеро", tr: "ósira", de: "der See" },
        { ru: "гора", tr: "gará", de: "der Berg" },
        { ru: "поле", tr: "pólje", de: "das Feld" },
        { ru: "дерево", tr: "djériwa", de: "der Baum" },
        { ru: "цветок", tr: "zwitók", de: "die Blume" },
        { ru: "трава", tr: "trawá", de: "das Gras" },
        { ru: "небо", tr: "njéba", de: "der Himmel" },
        { ru: "звезда", tr: "swisdá", de: "der Stern" },
        { ru: "луна", tr: "luná", de: "der Mond" }
      ],
      tips: [
        { title: "в лесу – die Sonderendung", body: "Einige kurze Wörter bekommen im Ortsfall **-у** statt -е:\nв лес**у** (im Wald), в сад**у** (im Garten), на мост**у** (auf der Brücke), в год**у** (im Jahr).\nDiese kleine Gruppe lernst du am besten als feste Wendungen." }
      ],
      dialogue: {
        title: "Der Ausflug",
        context: "Lena und Max wandern am Wochenende.",
        lines: [
          { who: "Лена", ru: "Смотри, какая красивая река!", de: "Schau, was für ein schöner Fluss!", gap: "река", opts: ["гора", "трава"] },
          { who: "Макс", ru: "Да! А за рекой — лес и горы.", de: "Ja! Und hinter dem Fluss sind Wald und Berge.", gap: "лес", opts: ["поле", "цветок"] },
          { who: "Лена", ru: "Я хочу посмотреть на озеро.", de: "Ich will mir den See ansehen.", gap: "озеро", opts: ["небо", "дерево"] },
          { who: "Макс", ru: "Вечером на небе будут звёзды.", de: "Am Abend werden Sterne am Himmel sein.", gap: "звёзды", opts: ["цветы", "деревья"] },
          { who: "Лена", ru: "Как романтично!", de: "Wie romantisch!" }
        ]
      }
    },
    {
      id: "u16l2",
      title: "Tiere",
      desc: "Haustiere und wilde Tiere",
      items: [
        { ru: "животное", tr: "schywótnaje", de: "das Tier" },
        { ru: "собака", tr: "sabáka", de: "der Hund" },
        { ru: "кошка", tr: "kóschka", de: "die Katze" },
        { ru: "птица", tr: "ptítsa", de: "der Vogel" },
        { ru: "лошадь", tr: "lóschat", de: "das Pferd" },
        { ru: "корова", tr: "karówa", de: "die Kuh" },
        { ru: "медведь", tr: "midwjét", de: "der Bär" },
        { ru: "волк", tr: "wolk", de: "der Wolf" },
        { ru: "заяц", tr: "sájits", de: "der Hase" },
        { ru: "мышь", tr: "mysch", de: "die Maus" },
        { ru: "слон", tr: "slon", de: "der Elefant" },
        { ru: "домашнее животное", tr: "damáschneje schywótnaje", de: "das Haustier" }
      ],
      tips: [
        { title: "у меня есть собака", body: "Besitz drückt man mit **у + Genitiv + есть** aus:\nУ меня есть собака. – Ich habe einen Hund.\nУ бабушки есть корова. – Oma hat eine Kuh.\nVerneint mit нет + Genitiv: У меня нет собаки." }
      ],
      dialogue: {
        title: "Haustiere",
        context: "Vera und Anton sprechen über Tiere.",
        lines: [
          { who: "Вера", ru: "У тебя есть домашнее животное?", de: "Hast du ein Haustier?", gap: "животное", opts: ["мнение", "настроение"] },
          { who: "Антон", ru: "Да, собака и две кошки.", de: "Ja, einen Hund und zwei Katzen.", gap: "собака", opts: ["птица", "мышь"] },
          { who: "Вера", ru: "А я боюсь собак!", de: "Und ich habe Angst vor Hunden!", gap: "боюсь", opts: ["люблю", "ищу"] },
          { who: "Антон", ru: "Моя собака добрая. А ты любишь птиц?", de: "Mein Hund ist lieb. Und magst du Vögel?", gap: "птиц", opts: ["коров", "волков"] },
          { who: "Вера", ru: "Да, и лошадей. В деревне у бабушки есть корова.", de: "Ja, und Pferde. Im Dorf hat meine Oma eine Kuh.", gap: "корова", opts: ["лошадь", "заяц"] }
        ]
      }
    },
    {
      id: "u16l3",
      title: "Auf dem Land",
      desc: "Datscha, Garten und typisch russische Landfreuden",
      items: [
        { ru: "деревня", tr: "dirjéwnja", de: "das Dorf" },
        { ru: "дача", tr: "dátscha", de: "die Datscha, das Wochenendhaus" },
        { ru: "сад", tr: "sat", de: "der Garten" },
        { ru: "огород", tr: "agarót", de: "der Gemüsegarten" },
        { ru: "воздух", tr: "wósduch", de: "die Luft" },
        { ru: "свежий", tr: "swjéschyj", de: "frisch" },
        { ru: "тихо", tr: "tícha", de: "still, leise" },
        { ru: "шумно", tr: "schúmna", de: "laut (es ist laut)" },
        { ru: "грибы", tr: "gribý", de: "die Pilze" },
        { ru: "ягоды", tr: "jágady", de: "die Beeren" },
        { ru: "рыбалка", tr: "rybálka", de: "das Angeln" },
        { ru: "костёр", tr: "kastjór", de: "das Lagerfeuer" }
      ],
      tips: [
        { title: "Die Datscha – eine Institution", body: "Millionen russische Familien verbringen Sommer-Wochenenden **на даче**: im огород Gemüse ziehen, im Wald **собирать грибы и ягоды** (Pilze und Beeren sammeln), abends костёр und Tee. Wer über die дача reden kann, hat sofort ein Gesprächsthema!" }
      ],
      dialogue: {
        title: "Auf der Datscha",
        context: "Anton erzählt vom Sommer auf dem Land.",
        lines: [
          { who: "Антон", ru: "Летом мы живём на даче.", de: "Im Sommer wohnen wir auf der Datscha.", gap: "даче", opts: ["деревне", "работе"] },
          { who: "Вера", ru: "Как там хорошо! Свежий воздух, тихо...", de: "Wie schön es dort ist! Frische Luft, Stille …", gap: "воздух", opts: ["огород", "костёр"] },
          { who: "Антон", ru: "Утром мы собираем грибы в лесу.", de: "Morgens sammeln wir Pilze im Wald.", gap: "грибы", opts: ["ягоды", "цветы"] },
          { who: "Вера", ru: "А вечером?", de: "Und abends?" },
          { who: "Антон", ru: "Вечером — костёр и рыбалка.", de: "Abends Lagerfeuer und Angeln.", gap: "костёр", opts: ["огород", "воздух"] }
        ]
      }
    }
  ]
}
);
