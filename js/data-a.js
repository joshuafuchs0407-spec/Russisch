/* Kursdaten Teil A: Einheiten 1-4 (A1)
   Modell:
   Unit   { id, title, desc, lessons }
   Lesson { id, title, desc, items, tips, dialogue }
   Item   { ru, tr (dt. Lautschrift mit Betonungsakzent), de, note? }
   Dialog { title, context, lines: [{ who, ru, de, gap?, opts? }] }
   gap  = Wort in ru, das als Lücke geübt wird; opts = 2 falsche Alternativen */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u1",
  title: "Erste Schritte",
  desc: "Begrüßen, sich vorstellen, sagen woher man kommt",
  lessons: [
    {
      id: "u1l1",
      title: "Hallo und Tschüss",
      desc: "Die wichtigsten Begrüßungen und Höflichkeitswörter",
      items: [
        { ru: "привет", tr: "priwjét", de: "hallo (informell)" },
        { ru: "здравствуйте", tr: "sdrástwujtje", de: "guten Tag (formell)", note: "Das erste в wird nicht gesprochen." },
        { ru: "доброе утро", tr: "dóbraje útra", de: "guten Morgen" },
        { ru: "добрый день", tr: "dóbryj djen", de: "guten Tag" },
        { ru: "добрый вечер", tr: "dóbryj wjétschir", de: "guten Abend" },
        { ru: "пока", tr: "paká", de: "tschüss (informell)" },
        { ru: "до свидания", tr: "da swidánija", de: "auf Wiedersehen" },
        { ru: "спасибо", tr: "spassíba", de: "danke" },
        { ru: "пожалуйста", tr: "paschálusta", de: "bitte / gern geschehen" },
        { ru: "да", tr: "da", de: "ja" },
        { ru: "нет", tr: "njet", de: "nein" },
        { ru: "Спокойной ночи!", tr: "spakójnaj nótschi", de: "Gute Nacht!" }
      ],
      tips: [
        { title: "Du oder Sie?", body: "Im Russischen gibt es wie im Deutschen zwei Ebenen:\n**привет** und **пока** sagst du zu Freunden und Familie (du = ты).\n**здравствуйте** und **до свидания** benutzt du bei Fremden und in formellen Situationen (Sie = вы)." },
        { title: "Ein Wort, zwei Bedeutungen", body: "**пожалуйста** heißt sowohl „bitte“ (wenn du um etwas bittest) als auch „bitte sehr / gern geschehen“ (als Antwort auf спасибо)." }
      ],
      dialogue: {
        title: "Am Kiosk",
        context: "Anna kauft eine Zeitung am Kiosk.",
        lines: [
          { who: "Продавец", ru: "Добрый день!", de: "Guten Tag!", gap: "день", opts: ["вечер", "утро"] },
          { who: "Анна", ru: "Здравствуйте!", de: "Guten Tag!" },
          { who: "Анна", ru: "Спасибо!", de: "Danke!", gap: "Спасибо", opts: ["Пока", "Нет"] },
          { who: "Продавец", ru: "Пожалуйста! До свидания!", de: "Bitte sehr! Auf Wiedersehen!", gap: "свидания", opts: ["утро", "спасибо"] },
          { who: "Анна", ru: "До свидания!", de: "Auf Wiedersehen!" }
        ]
      }
    },
    {
      id: "u1l2",
      title: "Wie heißt du?",
      desc: "Sich vorstellen und nach dem Befinden fragen",
      items: [
        { ru: "Как тебя зовут?", tr: "kak tibjá sawút", de: "Wie heißt du?" },
        { ru: "Как вас зовут?", tr: "kak was sawút", de: "Wie heißen Sie?" },
        { ru: "Меня зовут Анна.", tr: "minjá sawút Ánna", de: "Ich heiße Anna." },
        { ru: "Очень приятно!", tr: "ótschin prijátna", de: "Sehr erfreut!" },
        { ru: "Как дела?", tr: "kak dilá", de: "Wie geht's?" },
        { ru: "хорошо", tr: "charaschó", de: "gut" },
        { ru: "нормально", tr: "narmálna", de: "ganz okay" },
        { ru: "плохо", tr: "plócha", de: "schlecht" },
        { ru: "А у тебя?", tr: "a u tibjá", de: "Und bei dir?" },
        { ru: "Кто это?", tr: "kto éta", de: "Wer ist das?" },
        { ru: "Это мой друг.", tr: "éta moj druk", de: "Das ist mein Freund." },
        { ru: "тоже", tr: "tósche", de: "auch" }
      ],
      tips: [
        { title: "Kein „ist“, kein „bin“", body: "Russisch lässt „sein“ im Präsens einfach weg:\n**Это мой друг.** – wörtlich: „Das mein Freund.“\n**Я Анна.** – „Ich (bin) Anna.“\nDas macht die ersten Sätze herrlich einfach!" },
        { title: "зовут = „man nennt“", body: "**Меня зовут Анна** heißt wörtlich „Mich nennt man Anna“. Deshalb ändert sich nur das Pronomen: меня зовут (ich heiße), тебя зовут (du heißt), вас зовут (Sie heißen)." }
      ],
      dialogue: {
        title: "Auf der Party",
        context: "Max und Lena lernen sich kennen.",
        lines: [
          { who: "Макс", ru: "Привет! Как тебя зовут?", de: "Hallo! Wie heißt du?", gap: "зовут", opts: ["дела", "тебя"] },
          { who: "Лена", ru: "Меня зовут Лена. А тебя?", de: "Ich heiße Lena. Und du?" },
          { who: "Макс", ru: "Меня зовут Макс. Очень приятно!", de: "Ich heiße Max. Sehr erfreut!", gap: "приятно", opts: ["хорошо", "нормально"] },
          { who: "Лена", ru: "Как дела?", de: "Wie geht's?", gap: "дела", opts: ["зовут", "это"] },
          { who: "Макс", ru: "Хорошо, спасибо! А у тебя?", de: "Gut, danke! Und bei dir?" },
          { who: "Лена", ru: "Тоже хорошо!", de: "Auch gut!", gap: "Тоже", opts: ["Плохо", "Нет"] }
        ]
      }
    },
    {
      id: "u1l3",
      title: "Woher kommst du?",
      desc: "Über Herkunft und Sprachen sprechen",
      items: [
        { ru: "Откуда ты?", tr: "atkúda ty", de: "Woher kommst du?" },
        { ru: "Я из Германии.", tr: "ja is Germánii", de: "Ich komme aus Deutschland." },
        { ru: "Россия", tr: "Rassíja", de: "Russland" },
        { ru: "Германия", tr: "Germánija", de: "Deutschland" },
        { ru: "страна", tr: "straná", de: "das Land" },
        { ru: "город", tr: "górat", de: "die Stadt" },
        { ru: "Я живу в Берлине.", tr: "ja schywú w Birlínje", de: "Ich wohne in Berlin." },
        { ru: "Я говорю по-русски.", tr: "ja gawarjú pa-rússki", de: "Ich spreche Russisch." },
        { ru: "по-немецки", tr: "pa-nimjétski", de: "(auf) Deutsch" },
        { ru: "немного", tr: "nimnóga", de: "ein bisschen" },
        { ru: "Я понимаю.", tr: "ja panimáju", de: "Ich verstehe." },
        { ru: "Я не понимаю.", tr: "ja ni panimáju", de: "Ich verstehe nicht." }
      ],
      tips: [
        { title: "aus + Land, in + Stadt", body: "Nach **из** (aus) und **в** (in) ändern Wörter ihre Endung:\nГермания → я из Герман**ии** (aus Deutschland)\nБерлин → я живу в Берлин**е** (in Berlin)\nMerke dir die Muster erst mal als feste Wendungen – die Fälle kommen später Schritt für Schritt." },
        { title: "Verneinung mit не", body: "Einfach **не** vor das Verb setzen:\nЯ понимаю → Я **не** понимаю.\nЯ говорю по-русски → Я **не** говорю по-русски." }
      ],
      dialogue: {
        title: "Im Zug",
        context: "Anna kommt mit einem Mitreisenden ins Gespräch.",
        lines: [
          { who: "Пётр", ru: "Извините, вы говорите по-русски?", de: "Entschuldigung, sprechen Sie Russisch?" },
          { who: "Анна", ru: "Да, немного. Я из Германии.", de: "Ja, ein bisschen. Ich komme aus Deutschland.", gap: "немного", opts: ["хорошо", "тоже"] },
          { who: "Пётр", ru: "О, а я из России. Откуда вы?", de: "Oh, und ich komme aus Russland. Woher kommen Sie?", gap: "Откуда", opts: ["Кто", "Как"] },
          { who: "Анна", ru: "Я живу в Берлине. А вы?", de: "Ich wohne in Berlin. Und Sie?", gap: "живу", opts: ["говорю", "понимаю"] },
          { who: "Пётр", ru: "Я живу в Москве.", de: "Ich wohne in Moskau." },
          { who: "Анна", ru: "Очень приятно!", de: "Sehr erfreut!" }
        ]
      }
    }
  ]
},
{
  id: "u2",
  title: "Menschen und Familie",
  desc: "Familie vorstellen, Pronomen, erste Adjektive",
  lessons: [
    {
      id: "u2l1",
      title: "Die Familie",
      desc: "Familienmitglieder benennen",
      items: [
        { ru: "семья", tr: "simjá", de: "die Familie" },
        { ru: "мама", tr: "máma", de: "die Mama" },
        { ru: "папа", tr: "pápa", de: "der Papa" },
        { ru: "родители", tr: "radítjeli", de: "die Eltern" },
        { ru: "брат", tr: "brat", de: "der Bruder" },
        { ru: "сестра", tr: "sistrá", de: "die Schwester" },
        { ru: "сын", tr: "syn", de: "der Sohn" },
        { ru: "дочь", tr: "dotsch", de: "die Tochter" },
        { ru: "муж", tr: "musch", de: "der Ehemann" },
        { ru: "жена", tr: "schiná", de: "die Ehefrau" },
        { ru: "бабушка", tr: "bábuschka", de: "die Oma" },
        { ru: "дедушка", tr: "djéduschka", de: "der Opa" }
      ],
      tips: [
        { title: "mein und dein", body: "Besitzwörter richten sich nach dem Geschlecht des Substantivs:\n**мой** брат / **твой** брат (mein/dein Bruder)\n**моя** сестра / **твоя** сестра (meine/deine Schwester)\nMännlich endet meist auf Konsonant, weiblich auf -а/-я." }
      ],
      dialogue: {
        title: "Das Familienfoto",
        context: "Lena zeigt Max ein Foto ihrer Familie.",
        lines: [
          { who: "Лена", ru: "Это моя семья. Вот мама и папа.", de: "Das ist meine Familie. Hier sind Mama und Papa.", gap: "семья", opts: ["сестра", "жена"] },
          { who: "Макс", ru: "А кто это?", de: "Und wer ist das?" },
          { who: "Лена", ru: "Это мой брат. Его зовут Игорь.", de: "Das ist mein Bruder. Er heißt Igor.", gap: "брат", opts: ["папа", "муж"] },
          { who: "Макс", ru: "А это твоя сестра?", de: "Und ist das deine Schwester?", gap: "сестра", opts: ["бабушка", "мама"] },
          { who: "Лена", ru: "Да, это моя сестра Оля.", de: "Ja, das ist meine Schwester Olja." }
        ]
      }
    },
    {
      id: "u2l2",
      title: "Ich, du, wir",
      desc: "Die Personalpronomen und Wörter für Menschen",
      items: [
        { ru: "я", tr: "ja", de: "ich" },
        { ru: "ты", tr: "ty", de: "du" },
        { ru: "он", tr: "on", de: "er" },
        { ru: "она", tr: "aná", de: "sie (Einzahl)" },
        { ru: "мы", tr: "my", de: "wir" },
        { ru: "вы", tr: "wy", de: "ihr / Sie" },
        { ru: "они", tr: "aní", de: "sie (Mehrzahl)" },
        { ru: "человек", tr: "tschilawjék", de: "der Mensch" },
        { ru: "люди", tr: "ljúdi", de: "die Leute" },
        { ru: "друг", tr: "druk", de: "der Freund" },
        { ru: "подруга", tr: "padrúga", de: "die Freundin" },
        { ru: "дети", tr: "djéti", de: "die Kinder" }
      ],
      tips: [
        { title: "вы = ihr UND Sie", body: "**вы** benutzt du für mehrere Personen (ihr) und als Höflichkeitsform für eine Person (Sie). In Briefen wird das höfliche Вы oft großgeschrieben." },
        { title: "друг und подруга", body: "**друг** = Freund, **подруга** = Freundin (platonisch). Die Mehrzahl von друг ist unregelmäßig: **друзья** (Freunde)." }
      ],
      dialogue: {
        title: "Wer ist auf dem Bild?",
        context: "Max schaut sich weitere Fotos an.",
        lines: [
          { who: "Макс", ru: "Кто это? Это твои друзья?", de: "Wer ist das? Sind das deine Freunde?" },
          { who: "Лена", ru: "Да. Это мой друг Антон и моя подруга Вера.", de: "Ja. Das ist mein Freund Anton und meine Freundin Vera.", gap: "подруга", opts: ["сестра", "мама"] },
          { who: "Макс", ru: "А это кто?", de: "Und wer ist das?" },
          { who: "Лена", ru: "Это мы: я, мама и папа.", de: "Das sind wir: ich, Mama und Papa.", gap: "мы", opts: ["вы", "они"] },
          { who: "Макс", ru: "Они тоже из Москвы?", de: "Kommen sie auch aus Moskau?", gap: "Они", opts: ["Мы", "Ты"] },
          { who: "Лена", ru: "Да, мы все из Москвы.", de: "Ja, wir sind alle aus Moskau." }
        ]
      }
    },
    {
      id: "u2l3",
      title: "Wie ist er?",
      desc: "Personen und Dinge beschreiben",
      items: [
        { ru: "какой", tr: "kakój", de: "was für ein / wie" },
        { ru: "большой", tr: "balschój", de: "groß" },
        { ru: "маленький", tr: "málinkij", de: "klein" },
        { ru: "новый", tr: "nówyj", de: "neu" },
        { ru: "старый", tr: "stáryj", de: "alt" },
        { ru: "хороший", tr: "charóschij", de: "gut (Adjektiv)" },
        { ru: "плохой", tr: "plachój", de: "schlecht (Adjektiv)" },
        { ru: "красивый", tr: "krassíwyj", de: "schön" },
        { ru: "молодой", tr: "maladój", de: "jung" },
        { ru: "умный", tr: "úmnyj", de: "klug" },
        { ru: "добрый", tr: "dóbryj", de: "gutherzig, lieb" },
        { ru: "весёлый", tr: "wisjólyj", de: "fröhlich, lustig" }
      ],
      tips: [
        { title: "Adjektive passen sich an", body: "Adjektive richten sich nach dem Substantiv:\nнов**ый** дом (neues Haus, männlich)\nнов**ая** машина (neues Auto, weiblich)\nнов**ое** метро (neue Metro, sächlich)\nDie Grundform im Wörterbuch endet auf -ый/-ий/-ой." }
      ],
      dialogue: {
        title: "Der neue Kollege",
        context: "Vera und Anton sprechen über einen neuen Kollegen.",
        lines: [
          { who: "Вера", ru: "Кто это?", de: "Wer ist das?" },
          { who: "Антон", ru: "Это наш новый коллега Иван.", de: "Das ist unser neuer Kollege Ivan.", gap: "новый", opts: ["старый", "плохой"] },
          { who: "Вера", ru: "Он молодой?", de: "Ist er jung?", gap: "молодой", opts: ["маленький", "большой"] },
          { who: "Антон", ru: "Да, молодой и очень умный.", de: "Ja, jung und sehr klug.", gap: "умный", opts: ["старый", "весёлый"] },
          { who: "Вера", ru: "А какой он человек?", de: "Und was für ein Mensch ist er?" },
          { who: "Антон", ru: "Он добрый и весёлый.", de: "Er ist gutherzig und fröhlich.", gap: "добрый", opts: ["плохой", "новый"] }
        ]
      }
    }
  ]
},
{
  id: "u3",
  title: "Zahlen und Zeit",
  desc: "Zählen, Alter angeben, Uhrzeit und Wochentage",
  lessons: [
    {
      id: "u3l1",
      title: "Zahlen 1 bis 10",
      desc: "Die Grundzahlen und die Frage „wie viel?“",
      items: [
        { ru: "один", tr: "adín", de: "eins" },
        { ru: "два", tr: "dwa", de: "zwei" },
        { ru: "три", tr: "tri", de: "drei" },
        { ru: "четыре", tr: "tschitýrje", de: "vier" },
        { ru: "пять", tr: "pjat", de: "fünf" },
        { ru: "шесть", tr: "schest", de: "sechs" },
        { ru: "семь", tr: "sjem", de: "sieben" },
        { ru: "восемь", tr: "wóssim", de: "acht" },
        { ru: "девять", tr: "djéwit", de: "neun" },
        { ru: "десять", tr: "djéssit", de: "zehn" },
        { ru: "ноль", tr: "nol", de: "null" },
        { ru: "Сколько?", tr: "skólka", de: "Wie viel? / Wie viele?" }
      ],
      tips: [
        { title: "eins und zwei haben Formen", body: "**один** passt sich an: один дом, одн**а** машина, одн**о** окно.\n**два** wird bei weiblichen Wörtern zu **две**: два брата, aber две сестры." }
      ],
      dialogue: {
        title: "Die Telefonnummer",
        context: "Max fragt Lena nach ihrer Nummer.",
        lines: [
          { who: "Макс", ru: "Какой у тебя номер телефона?", de: "Wie ist deine Telefonnummer?" },
          { who: "Лена", ru: "Восемь – девять – ноль – три – пять – пять – два.", de: "Acht – neun – null – drei – fünf – fünf – zwei.", gap: "ноль", opts: ["один", "десять"] },
          { who: "Макс", ru: "Два?", de: "Zwei?", gap: "Два", opts: ["Три", "Пять"] },
          { who: "Лена", ru: "Да, два. А какой у тебя номер?", de: "Ja, zwei. Und wie ist deine Nummer?" },
          { who: "Макс", ru: "Семь – один – четыре – шесть – восемь.", de: "Sieben – eins – vier – sechs – acht.", gap: "четыре", opts: ["десять", "девять"] },
          { who: "Лена", ru: "Спасибо!", de: "Danke!" }
        ]
      }
    },
    {
      id: "u3l2",
      title: "Zahlen bis 100 und das Alter",
      desc: "Größere Zahlen und über das Alter sprechen",
      items: [
        { ru: "одиннадцать", tr: "adínatsat", de: "elf" },
        { ru: "двенадцать", tr: "dwinátsat", de: "zwölf" },
        { ru: "пятнадцать", tr: "pitnátsat", de: "fünfzehn" },
        { ru: "двадцать", tr: "dwátsat", de: "zwanzig" },
        { ru: "тридцать", tr: "trítsat", de: "dreißig" },
        { ru: "сорок", tr: "sórak", de: "vierzig" },
        { ru: "пятьдесят", tr: "pidissját", de: "fünfzig" },
        { ru: "сто", tr: "sto", de: "hundert" },
        { ru: "Сколько тебе лет?", tr: "skólka tibjé ljet", de: "Wie alt bist du?" },
        { ru: "Мне тридцать лет.", tr: "mnje trítsat ljet", de: "Ich bin dreißig Jahre alt." },
        { ru: "год", tr: "got", de: "das Jahr" },
        { ru: "лет", tr: "ljet", de: "Jahre (nach 5, 6, 7 …)" }
      ],
      tips: [
        { title: "Jahr, Jahre, Jahre …", body: "Nach Zahlen ändert sich das Wort „Jahr“:\n1 → год (один год)\n2, 3, 4 → год**а** (два года)\n5 und mehr → **лет** (пять лет, тридцать лет)" },
        { title: "Zahlen kombinieren", body: "Zusammengesetzte Zahlen werden einfach gereiht:\n21 = двадцать один\n35 = тридцать пять\n42 = сорок два" }
      ],
      dialogue: {
        title: "Wie alt bist du?",
        context: "Vera und Anton sprechen über das Alter.",
        lines: [
          { who: "Вера", ru: "Сколько тебе лет?", de: "Wie alt bist du?", gap: "лет", opts: ["год", "сто"] },
          { who: "Антон", ru: "Мне двадцать восемь лет. А тебе?", de: "Ich bin achtundzwanzig. Und du?", gap: "двадцать", opts: ["сорок", "пятнадцать"] },
          { who: "Вера", ru: "Мне двадцать пять.", de: "Ich bin fünfundzwanzig." },
          { who: "Антон", ru: "А сколько лет твоему брату?", de: "Und wie alt ist dein Bruder?", gap: "сколько", opts: ["какой", "кто"] },
          { who: "Вера", ru: "Ему пятнадцать лет.", de: "Er ist fünfzehn." }
        ]
      }
    },
    {
      id: "u3l3",
      title: "Heute, morgen, Wochentage",
      desc: "Zeitangaben für den Alltag",
      items: [
        { ru: "сегодня", tr: "siwódnja", de: "heute", note: "Das г wird hier wie w gesprochen." },
        { ru: "завтра", tr: "sáftra", de: "morgen" },
        { ru: "вчера", tr: "ftschirá", de: "gestern" },
        { ru: "сейчас", tr: "sitschás", de: "jetzt" },
        { ru: "утром", tr: "útram", de: "morgens" },
        { ru: "днём", tr: "dnjom", de: "mittags, tagsüber" },
        { ru: "вечером", tr: "wjétschiram", de: "abends" },
        { ru: "ночью", tr: "nótschju", de: "nachts" },
        { ru: "понедельник", tr: "panidjélnik", de: "der Montag" },
        { ru: "суббота", tr: "subóta", de: "der Samstag" },
        { ru: "воскресенье", tr: "waskrissjénje", de: "der Sonntag" },
        { ru: "Который час?", tr: "katóryj tschas", de: "Wie spät ist es?" }
      ],
      tips: [
        { title: "Alle Wochentage", body: "понедельник (Mo), вторник (Di), среда (Mi), четверг (Do), пятница (Fr), суббота (Sa), воскресенье (So).\n„Am Montag“ = **в** понедельник, „am Samstag“ = **в** субботу." },
        { title: "Uhrzeit einfach", body: "Сейчас девять часов. = Es ist jetzt neun Uhr.\n1 → час, 2–4 → часа, 5+ → часов:\nодин час, три часа, девять часов." }
      ],
      dialogue: {
        title: "Schon so spät!",
        context: "Max hat die Zeit vergessen.",
        lines: [
          { who: "Макс", ru: "Который час?", de: "Wie spät ist es?", gap: "час", opts: ["день", "год"] },
          { who: "Лена", ru: "Сейчас девять часов.", de: "Es ist jetzt neun Uhr.", gap: "Сейчас", opts: ["Вчера", "Утром"] },
          { who: "Макс", ru: "Уже девять?!", de: "Schon neun?!" },
          { who: "Лена", ru: "Да. А завтра суббота!", de: "Ja. Aber morgen ist Samstag!", gap: "завтра", opts: ["сегодня", "ночью"] },
          { who: "Макс", ru: "Ура! Завтра — выходной!", de: "Hurra! Morgen ist frei!" }
        ]
      }
    }
  ]
},
{
  id: "u4",
  title: "Essen und Trinken",
  desc: "Lebensmittel, im Café bestellen, sagen was man mag",
  lessons: [
    {
      id: "u4l1",
      title: "Grundnahrungsmittel",
      desc: "Die wichtigsten Lebensmittel",
      items: [
        { ru: "хлеб", tr: "chljep", de: "das Brot" },
        { ru: "вода", tr: "wadá", de: "das Wasser" },
        { ru: "чай", tr: "tschaj", de: "der Tee" },
        { ru: "кофе", tr: "kófje", de: "der Kaffee" },
        { ru: "молоко", tr: "malakó", de: "die Milch" },
        { ru: "сок", tr: "sok", de: "der Saft" },
        { ru: "суп", tr: "sup", de: "die Suppe" },
        { ru: "мясо", tr: "mjássa", de: "das Fleisch" },
        { ru: "рыба", tr: "rýba", de: "der Fisch" },
        { ru: "сыр", tr: "syr", de: "der Käse" },
        { ru: "яблоко", tr: "jáblaka", de: "der Apfel" },
        { ru: "или", tr: "íli", de: "oder" }
      ],
      tips: [
        { title: "Das Geschlecht erkennen", body: "Meist verrät die Endung das Geschlecht:\nKonsonant → männlich: хлеб, сок, суп\n-а / -я → weiblich: вода, рыба\n-о / -е → sächlich: молоко, мясо\nAusnahme: **кофе** ist männlich!" }
      ],
      dialogue: {
        title: "Das Frühstück",
        context: "Anna und Pjotr frühstücken zusammen.",
        lines: [
          { who: "Анна", ru: "Что ты хочешь: чай или кофе?", de: "Was möchtest du: Tee oder Kaffee?", gap: "или", opts: ["и", "нет"] },
          { who: "Пётр", ru: "Кофе, пожалуйста. С молоком.", de: "Kaffee, bitte. Mit Milch.", gap: "Кофе", opts: ["Суп", "Сыр"] },
          { who: "Анна", ru: "А вот хлеб и сыр.", de: "Und hier sind Brot und Käse.", gap: "хлеб", opts: ["сок", "мясо"] },
          { who: "Пётр", ru: "Спасибо! О, это вкусно!", de: "Danke! Oh, das ist lecker!" }
        ]
      }
    },
    {
      id: "u4l2",
      title: "Im Café",
      desc: "Bestellen und bezahlen",
      items: [
        { ru: "меню", tr: "minjú", de: "die Speisekarte" },
        { ru: "официант", tr: "afitsyánt", de: "der Kellner" },
        { ru: "счёт", tr: "schtschot", de: "die Rechnung" },
        { ru: "Можно меню?", tr: "móschna minjú", de: "Kann ich die Karte haben?" },
        { ru: "Я хочу...", tr: "ja chatschú", de: "Ich möchte / will …" },
        { ru: "заказать", tr: "sakasát", de: "bestellen" },
        { ru: "чашка", tr: "tscháschka", de: "die Tasse" },
        { ru: "стакан", tr: "stakán", de: "das Glas" },
        { ru: "пиво", tr: "píwa", de: "das Bier" },
        { ru: "вино", tr: "winó", de: "der Wein" },
        { ru: "вкусно", tr: "fkúsna", de: "lecker" },
        { ru: "Приятного аппетита!", tr: "prijátnawa apitíta", de: "Guten Appetit!" }
      ],
      tips: [
        { title: "Das Zauberwort можно", body: "**Можно...?** heißt wörtlich „Ist es möglich?“ und ist die einfachste Art, höflich zu bitten:\nМожно меню? – Die Karte, bitte.\nМожно счёт? – Die Rechnung, bitte.\nМожно воду? – Ein Wasser, bitte." },
        { title: "Ich will einen Tee", body: "Nach **я хочу** steht der Akkusativ. Bei weiblichen Wörtern wird -а zu -у:\nя хочу чай (unverändert)\nя хочу вод**у**, чашк**у** чая" }
      ],
      dialogue: {
        title: "Im Café",
        context: "Anna bestellt etwas zu trinken.",
        lines: [
          { who: "Официант", ru: "Добрый день! Что вы хотите?", de: "Guten Tag! Was möchten Sie?" },
          { who: "Анна", ru: "Можно меню, пожалуйста?", de: "Kann ich bitte die Karte haben?", gap: "меню", opts: ["счёт", "стакан"] },
          { who: "Официант", ru: "Вот, пожалуйста.", de: "Hier, bitte sehr." },
          { who: "Анна", ru: "Я хочу чашку чая и суп.", de: "Ich möchte eine Tasse Tee und eine Suppe.", gap: "чашку", opts: ["пиво", "вино"] },
          { who: "Официант", ru: "Приятного аппетита!", de: "Guten Appetit!", gap: "аппетита", opts: ["спасибо", "вкусно"] },
          { who: "Анна", ru: "Спасибо! ... Очень вкусно! Можно счёт?", de: "Danke! … Sehr lecker! Kann ich die Rechnung haben?", gap: "счёт", opts: ["меню", "официант"] }
        ]
      }
    },
    {
      id: "u4l3",
      title: "Mögen und möchten",
      desc: "Vorlieben ausdrücken, essen und trinken",
      items: [
        { ru: "Я люблю...", tr: "ja ljubljú", de: "Ich mag / liebe …" },
        { ru: "Мне нравится...", tr: "mnje nráwitsa", de: "Mir gefällt …" },
        { ru: "есть", tr: "jest", de: "essen" },
        { ru: "пить", tr: "pit", de: "trinken" },
        { ru: "Я ем", tr: "ja jem", de: "ich esse" },
        { ru: "Я пью", tr: "ja pju", de: "ich trinke" },
        { ru: "завтрак", tr: "sáftrak", de: "das Frühstück" },
        { ru: "обед", tr: "abjét", de: "das Mittagessen" },
        { ru: "ужин", tr: "úschyn", de: "das Abendessen" },
        { ru: "готовить", tr: "gatówit", de: "kochen" },
        { ru: "очень", tr: "ótschin", de: "sehr" },
        { ru: "что", tr: "schto", de: "was", note: "что wird „schto“ gesprochen." }
      ],
      tips: [
        { title: "хотеть – wollen (unregelmäßig)", body: "я хоч**у** – ich will\nты хóч**ешь** – du willst\nон/она хóч**ет** – er/sie will\nмы хот**им** – wir wollen\nвы хот**ите** – ihr wollt / Sie wollen\nони хот**ят** – sie wollen" },
        { title: "любить + Akkusativ", body: "Я люблю чай. – Ich mag Tee.\nЯ люблю рыб**у**. – Ich mag Fisch. (weiblich: -а → -у)\nЯ люблю готовить. – Ich koche gern. (люблю + Verb = etwas gern tun)" }
      ],
      dialogue: {
        title: "Was isst du gern?",
        context: "Vera und Anton sprechen über Essen.",
        lines: [
          { who: "Вера", ru: "Что ты любишь есть?", de: "Was isst du gern?", gap: "есть", opts: ["пить", "готовить"] },
          { who: "Антон", ru: "Я очень люблю суп и рыбу. А ты?", de: "Ich mag Suppe und Fisch sehr. Und du?", gap: "очень", opts: ["тоже", "или"] },
          { who: "Вера", ru: "Я люблю мясо. И я люблю готовить!", de: "Ich mag Fleisch. Und ich koche gern!", gap: "готовить", opts: ["есть", "пить"] },
          { who: "Антон", ru: "А что ты пьёшь утром: чай или кофе?", de: "Und was trinkst du morgens: Tee oder Kaffee?" },
          { who: "Вера", ru: "Утром я пью кофе с молоком.", de: "Morgens trinke ich Kaffee mit Milch.", gap: "пью", opts: ["ем", "хочу"] }
        ]
      }
    }
  ]
}
);
