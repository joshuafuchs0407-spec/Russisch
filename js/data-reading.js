/* Gelesene Texte (Lesetexte): kurze, zusammenhaengende Geschichten, die bewusst
   nur bereits gelehrten Wortschatz (plus Grundgrammatik wie Pronomen, быть,
   Konnektoren) verwenden. Schalten sich frei, sobald die Einheiten bis
   "unlockAfterUnit" abgeschlossen sind. Bauen echtes Leseverstaendnis auf,
   das ueber einzelne Woerter und Dialogzeilen hinausgeht. */
window.READINGS = [
  {
    id: "r1",
    level: "A1",
    title: "Мой день",
    desc: "Anna erzählt von einem ganz normalen Tag",
    unlockAfterUnit: "u4",
    lines: [
      { ru: "Меня зовут Анна.", de: "Ich heiße Anna." },
      { ru: "Я из Германии. Я живу в Берлине.", de: "Ich komme aus Deutschland. Ich wohne in Berlin." },
      { ru: "Это моя семья: мама, папа, брат и сестра.", de: "Das ist meine Familie: Mama, Papa, Bruder und Schwester." },
      { ru: "Доброе утро, мама и папа! Как дела?", de: "Guten Morgen, Mama und Papa! Wie geht's?" },
      { ru: "— Хорошо, спасибо!", de: "— Gut, danke!" },
      { ru: "Утром я ем хлеб. Я пью чай.", de: "Morgens esse ich Brot. Ich trinke Tee." },
      { ru: "Днём я ем суп. Суп очень вкусный!", de: "Mittags esse ich Suppe. Die Suppe ist sehr lecker!" },
      { ru: "Вечером мы пьём чай.", de: "Abends trinken wir Tee." },
      { ru: "Спокойной ночи, мама и папа!", de: "Gute Nacht, Mama und Papa!" }
    ],
    questions: [
      { q: "Woher kommt Anna?", options: ["Aus Deutschland", "Aus Russland", "Aus Frankreich"], correct: 0 },
      { q: "Was isst Anna morgens?", options: ["Suppe", "Brot", "Fisch"], correct: 1 },
      { q: "Was trinkt die Familie abends?", options: ["Kaffee", "Milch", "Tee"], correct: 2 }
    ]
  },
  {
    id: "r2",
    level: "A2",
    title: "Отпуск в Москве",
    desc: "Anna verbringt ihren Urlaub in Moskau",
    unlockAfterUnit: "u8",
    lines: [
      { ru: "Анна едет в Москву. Это её отпуск.", de: "Anna fährt nach Moskau. Das ist ihr Urlaub." },
      { ru: "Анна берёт паспорт, визу и билет.", de: "Anna nimmt Pass, Visum und Ticket." },
      { ru: "Самолёт летит долго.", de: "Das Flugzeug fliegt lange." },
      { ru: "В Москве Анна живёт в гостинице «Москва». Гостиница старая, но очень красивая.", de: "In Moskau wohnt Anna im Hotel „Moskwa“. Das Hotel ist alt, aber sehr schön." },
      { ru: "Утром Анна ест хлеб и пьёт кофе. Завтрак включён.", de: "Morgens isst Anna Brot und trinkt Kaffee. Das Frühstück ist inbegriffen." },
      { ru: "Днём она идёт в центр. Там старый парк и музей.", de: "Mittags geht sie ins Zentrum. Dort sind ein alter Park und ein Museum." },
      { ru: "В городе Анна едет на метро. Метро в Москве очень большое.", de: "In der Stadt fährt Anna mit der Metro. Die Metro in Moskau ist sehr groß." },
      { ru: "В магазине Анна покупает подарки: красивую куртку и книгу.", de: "Im Geschäft kauft Anna Geschenke: eine schöne Jacke und ein Buch." },
      { ru: "Вечером она идёт в ресторан.", de: "Abends geht sie ins Restaurant." },
      { ru: "Официант говорит: «Что вы хотите?» Анна говорит: «Суп и чай, пожалуйста.»", de: "Der Kellner sagt: „Was möchten Sie?“ Anna sagt: „Suppe und Tee, bitte.“" },
      { ru: "Суп очень вкусный!", de: "Die Suppe ist sehr lecker!" },
      { ru: "Анне нравится Москва. Это очень красивый город!", de: "Anna gefällt Moskau. Das ist eine sehr schöne Stadt!" },
      { ru: "Пока, Москва! До свидания!", de: "Tschüss, Moskau! Auf Wiedersehen!" }
    ],
    questions: [
      { q: "Wohin fliegt Anna?", options: ["Nach Moskau", "Nach Berlin", "Nach St. Petersburg"], correct: 0 },
      { q: "Was kauft Anna im Geschäft?", options: ["Ein Buch und eine Jacke", "Ein Handy und Schuhe", "Nur einen Hut"], correct: 0 },
      { q: "Was bestellt Anna im Restaurant?", options: ["Fisch und Wein", "Suppe und Tee", "Brot und Milch"], correct: 1 }
    ]
  },
  {
    id: "r3",
    level: "B1",
    title: "Выходные на даче",
    desc: "Vera und Anton verbringen ein Wochenende auf dem Land",
    unlockAfterUnit: "u16",
    lines: [
      { ru: "В субботу была хорошая погода: солнце и тепло.", de: "Am Samstag war gutes Wetter: Sonne und Wärme." },
      { ru: "Вера и Антон поехали на дачу.", de: "Vera und Anton fuhren zur Datscha." },
      { ru: "Там были бабушка и дедушка.", de: "Dort waren Oma und Opa." },
      { ru: "Утром они собирали грибы и ягоды в лесу.", de: "Morgens sammelten sie Pilze und Beeren im Wald." },
      { ru: "Вера смотрела на реку и горы.", de: "Vera schaute auf den Fluss und die Berge." },
      { ru: "Днём было тепло, и семья гуляла в саду.", de: "Mittags war es warm, und die Familie spazierte im Garten." },
      { ru: "Бабушка готовила суп, а дедушка играл в футбол с Антоном.", de: "Oma kochte Suppe, und Opa spielte mit Anton Fußball." },
      { ru: "Вечером был костёр.", de: "Abends gab es ein Lagerfeuer." },
      { ru: "Вера сказала: «Я люблю природу. Здесь так тихо!»", de: "Vera sagte: „Ich liebe die Natur. Hier ist es so still!“" },
      { ru: "Ночью на небе было много звёзд.", de: "Nachts waren viele Sterne am Himmel." },
      { ru: "Это были очень хорошие выходные!", de: "Das war ein sehr schönes Wochenende!" }
    ],
    questions: [
      { q: "Wohin fuhren Vera und Anton?", options: ["Zur Datscha", "Ins Museum", "Ans Meer"], correct: 0 },
      { q: "Was haben sie morgens im Wald gemacht?", options: ["Pilze und Beeren gesammelt", "Fußball gespielt", "Ein Lagerfeuer gemacht"], correct: 0 },
      { q: "Was hat Oma gekocht?", options: ["Fisch", "Suppe", "Brot"], correct: 1 }
    ]
  },
  {
    id: "r4",
    level: "B2",
    title: "Год в России",
    desc: "Annas Rückblick auf ein ganzes Jahr Russischlernen",
    unlockAfterUnit: "u28",
    lines: [
      { ru: "Прошёл год с тех пор, как Анна впервые приехала в Россию.", de: "Ein Jahr ist vergangen, seit Anna zum ersten Mal nach Russland kam." },
      { ru: "Тогда она знала только несколько слов по-русски.", de: "Damals kannte sie nur ein paar Wörter Russisch." },
      { ru: "Сначала было трудно: она не понимала быстрых разговоров и боялась ошибиться.", de: "Zuerst war es schwer: sie verstand schnelle Gespräche nicht und hatte Angst, Fehler zu machen." },
      { ru: "Но она не сдавалась и каждый день изучала новые слова.", de: "Aber sie gab nicht auf und lernte jeden Tag neue Wörter." },
      { ru: "Она познакомилась с Петром в поезде, и с тех пор они хорошие друзья.", de: "Sie lernte Pjotr im Zug kennen, und seitdem sind sie gute Freunde." },
      { ru: "Летом Анна путешествовала по стране: она видела горы, леса и море.", de: "Im Sommer reiste Anna durch das Land: sie sah Berge, Wälder und das Meer." },
      { ru: "Осенью она нашла работу в Москве и переехала в новую квартиру.", de: "Im Herbst fand sie Arbeit in Moskau und zog in eine neue Wohnung." },
      { ru: "Зимой она отмечала Новый год с русскими друзьями — с ёлкой и салютом.", de: "Im Winter feierte sie Neujahr mit russischen Freunden — mit Tannenbaum und Feuerwerk." },
      { ru: "Сегодня Анна говорит по-русски намного лучше, чем год назад.", de: "Heute spricht Anna viel besser Russisch als vor einem Jahr." },
      { ru: "Если бы кто-то спросил её, стоило ли это всех усилий, она бы сразу ответила: «Да!»", de: "Wenn jemand sie fragen würde, ob es all die Mühe wert war, würde sie sofort antworten: „Ja!“" },
      { ru: "В следующем году она хочет поехать в Санкт-Петербург и, может быть, начать изучать украинский язык.", de: "Im nächsten Jahr möchte sie nach St. Petersburg fahren und vielleicht anfangen, Ukrainisch zu lernen." },
      { ru: "Её история показывает: каждый может выучить новый язык — нужны только время, терпение и немного смелости.", de: "Ihre Geschichte zeigt: Jeder kann eine neue Sprache lernen — man braucht nur Zeit, Geduld und ein bisschen Mut." }
    ],
    questions: [
      { q: "Wen lernte Anna im Zug kennen?", options: ["Pjotr", "Anton", "Max"], correct: 0 },
      { q: "Was machte Anna im Herbst?", options: ["Sie fand Arbeit und zog um", "Sie fuhr nach Hause", "Sie lernte Ukrainisch"], correct: 0 },
      { q: "Was braucht man laut dem Text, um eine Sprache zu lernen?", options: ["Nur Talent", "Zeit, Geduld und Mut", "Ein teures Buch"], correct: 1 }
    ]
  }
];
