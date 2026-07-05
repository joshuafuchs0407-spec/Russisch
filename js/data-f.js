/* Kursdaten Teil F: Einheiten 21-24 (B1 → B2)
   Dienstleistungen im Alltag, Sport, Konflikte & Kompromisse, Geld & Finanzen. */
window.COURSE_UNITS = window.COURSE_UNITS || [];
window.COURSE_UNITS.push(
{
  id: "u21",
  level: "B2",
  title: "Dinge erledigen",
  desc: "Post, Friseur, Reparaturen und Behördengänge",
  lessons: [
    {
      id: "u21l1",
      title: "Auf der Post",
      desc: "Pakete, Briefe und Sendungen",
      items: [
        { ru: "почта", tr: "pótschta", de: "die Post" },
        { ru: "письмо", tr: "pismó", de: "der Brief" },
        { ru: "посылка", tr: "passýlka", de: "das Paket" },
        { ru: "марка", tr: "márka", de: "die Briefmarke" },
        { ru: "конверт", tr: "kanwjért", de: "der Umschlag" },
        { ru: "адрес", tr: "ádris", de: "die Adresse" },
        { ru: "получатель", tr: "palutschátil", de: "der Empfänger" },
        { ru: "отправитель", tr: "atprawítil", de: "der Absender" },
        { ru: "вес", tr: "wjes", de: "das Gewicht" },
        { ru: "доставка", tr: "dastáfka", de: "die Zustellung, Lieferung" },
        { ru: "заказное письмо", tr: "sakasnóje pismó", de: "das Einschreiben" },
        { ru: "весить", tr: "wjéssit", de: "wiegen" }
      ],
      tips: [
        { title: "Verben mit от- und по-", body: "Viele Verben entstehen aus Vorsilben:\n**от-** (weg): **от**править = abschicken, **от**дать = weggeben.\n**по-** (kurz/hin): **по**слать = (ver)schicken, **по**лучить = erhalten.\nDie Grundbedeutung des Präfixes hilft dir, neue Verben zu erraten." }
      ],
      dialogue: {
        title: "Ein Paket nach Deutschland",
        context: "Anna verschickt ein Paket am Postschalter.",
        lines: [
          { who: "Анна", ru: "Здравствуйте, я хочу отправить посылку.", de: "Guten Tag, ich möchte ein Paket verschicken.", gap: "посылку", opts: ["марку", "почту"] },
          { who: "Сотрудник", ru: "Куда? И какой вес?", de: "Wohin? Und welches Gewicht?", gap: "вес", opts: ["адрес", "конверт"] },
          { who: "Анна", ru: "В Германию. Она весит два килограмма.", de: "Nach Deutschland. Es wiegt zwei Kilogramm.", gap: "весит", opts: ["стоит", "получает"] },
          { who: "Сотрудник", ru: "Напишите адрес получателя здесь.", de: "Schreiben Sie hier die Adresse des Empfängers.", gap: "получателя", opts: ["отправителя", "адреса"] },
          { who: "Анна", ru: "А доставка сколько дней?", de: "Und wie viele Tage dauert die Zustellung?", gap: "доставка", opts: ["марка", "посылка"] },
          { who: "Сотрудник", ru: "Примерно неделю.", de: "Etwa eine Woche." }
        ]
      }
    },
    {
      id: "u21l2",
      title: "Beim Friseur",
      desc: "Haare schneiden und Aussehen",
      items: [
        { ru: "парикмахерская", tr: "parikmáchirskaja", de: "der Friseursalon" },
        { ru: "стрижка", tr: "stríschka", de: "der Haarschnitt" },
        { ru: "постричься", tr: "pastrítschsa", de: "sich die Haare schneiden lassen" },
        { ru: "волосы", tr: "wólassy", de: "die Haare" },
        { ru: "короткий", tr: "karótkij", de: "kurz" },
        { ru: "длинный", tr: "dlínnyj", de: "lang" },
        { ru: "покрасить", tr: "pakrássit", de: "färben" },
        { ru: "борода", tr: "baradá", de: "der Bart" },
        { ru: "запись", tr: "sápis", de: "der Termin, die Anmeldung" },
        { ru: "зеркало", tr: "sjérkala", de: "der Spiegel" },
        { ru: "нравиться", tr: "nráwitsa", de: "gefallen" },
        { ru: "чуть-чуть", tr: "tschut-tschút", de: "ein kleines bisschen" }
      ],
      tips: [
        { title: "Das reflexive -ся beim Service", body: "Wenn man etwas an sich selbst machen lässt, hilft **-ся**:\n**постричься** = sich schneiden lassen, **побриться** = sich rasieren.\nVergleiche: постричь кого-то (jemanden schneiden) → постричь**ся** (sich schneiden lassen)." }
      ],
      dialogue: {
        title: "Nur ein bisschen kürzer",
        context: "Max ist beim Friseur.",
        lines: [
          { who: "Мастер", ru: "Как вас постричь?", de: "Wie soll ich Ihnen die Haare schneiden?", gap: "постричь", opts: ["покрасить", "весить"] },
          { who: "Макс", ru: "Чуть-чуть короче, пожалуйста.", de: "Ein kleines bisschen kürzer, bitte.", gap: "короче", opts: ["длиннее", "больше"] },
          { who: "Мастер", ru: "А бороду?", de: "Und den Bart?", gap: "бороду", opts: ["волосы", "запись"] },
          { who: "Макс", ru: "Бороду не трогайте.", de: "Den Bart bitte nicht anrühren." },
          { who: "Мастер", ru: "Готово! Посмотрите в зеркало.", de: "Fertig! Schauen Sie in den Spiegel.", gap: "зеркало", opts: ["стрижку", "запись"] },
          { who: "Макс", ru: "Отлично, мне нравится!", de: "Perfekt, das gefällt mir!", gap: "нравится", opts: ["весит", "стоит"] }
        ]
      }
    },
    {
      id: "u21l3",
      title: "Reparaturen und Ämter",
      desc: "Etwas reparieren lassen und Formulare ausfüllen",
      items: [
        { ru: "мастерская", tr: "mastirskája", de: "die Werkstatt" },
        { ru: "сломанный", tr: "slómannyj", de: "kaputt, defekt" },
        { ru: "исправить", tr: "isprávit", de: "in Ordnung bringen, beheben" },
        { ru: "гарантия", tr: "garántija", de: "die Garantie" },
        { ru: "справка", tr: "spráfka", de: "die Bescheinigung" },
        { ru: "документ", tr: "dakumjént", de: "das Dokument" },
        { ru: "заполнить", tr: "sapólnit", de: "ausfüllen" },
        { ru: "бланк", tr: "blank", de: "das Formular" },
        { ru: "подпись", tr: "pótpis", de: "die Unterschrift" },
        { ru: "очередь", tr: "ótschirit", de: "die Warteschlange" },
        { ru: "печать", tr: "pitschát", de: "der Stempel" },
        { ru: "срок", tr: "srok", de: "die Frist" }
      ],
      tips: [
        { title: "Der Genitiv der Verneinung", body: "Nach **нет / не было / не будет** steht das Fehlende im Genitiv:\nУ меня **нет справки**. – Ich habe keine Bescheinigung.\n**Не было печати** на документе. – Auf dem Dokument war kein Stempel.\nMännlich: -а/-я, weiblich: -ы/-и." }
      ],
      dialogue: {
        title: "Im Amt",
        context: "Anna braucht eine Bescheinigung.",
        lines: [
          { who: "Анна", ru: "Мне нужна справка. Что делать?", de: "Ich brauche eine Bescheinigung. Was muss ich tun?", gap: "справка", opts: ["очередь", "печать"] },
          { who: "Сотрудник", ru: "Заполните этот бланк.", de: "Füllen Sie dieses Formular aus.", gap: "бланк", opts: ["срок", "документ"] },
          { who: "Анна", ru: "А где поставить подпись?", de: "Und wo setze ich die Unterschrift?", gap: "подпись", opts: ["печать", "гарантию"] },
          { who: "Сотрудник", ru: "Внизу. Потом нужна печать.", de: "Unten. Danach braucht es einen Stempel.", gap: "печать", opts: ["очередь", "справка"] },
          { who: "Анна", ru: "А какой срок?", de: "Und welche Frist gilt?", gap: "срок", opts: ["бланк", "документ"] },
          { who: "Сотрудник", ru: "Три рабочих дня.", de: "Drei Werktage." }
        ]
      }
    }
  ]
},
{
  id: "u22",
  level: "B1",
  title: "Sport und Bewegung",
  desc: "Trainieren, Wettkämpfe und Fitness",
  lessons: [
    {
      id: "u22l1",
      title: "Sport treiben",
      desc: "Sportarten und Bewegung",
      items: [
        { ru: "бегать", tr: "bjégat", de: "laufen, joggen" },
        { ru: "прыгать", tr: "prýgat", de: "springen" },
        { ru: "тренироваться", tr: "trinirawátsa", de: "trainieren" },
        { ru: "тренировка", tr: "trinirófka", de: "das Training" },
        { ru: "спортзал", tr: "sportsál", de: "das Fitnessstudio" },
        { ru: "бассейн", tr: "basséjn", de: "das Schwimmbad" },
        { ru: "мяч", tr: "mjatsch", de: "der Ball" },
        { ru: "разминка", tr: "rasmínka", de: "das Aufwärmen" },
        { ru: "мышцы", tr: "mýschtsy", de: "die Muskeln" },
        { ru: "форма", tr: "fórma", de: "die (Fitness-)Form" },
        { ru: "лыжи", tr: "lýschy", de: "die Ski" },
        { ru: "коньки", tr: "kankí", de: "die Schlittschuhe" }
      ],
      tips: [
        { title: "заниматься + Instrumental", body: "„Sich mit etwas beschäftigen / eine Sportart betreiben“ = **заниматься** + Instrumental:\nЯ занимаюсь **спортом**. – Ich treibe Sport.\nОна занимается **плаванием**. – Sie schwimmt (als Sport).\nDer Instrumental endet auf -ом/-ем bzw. -ой/-ей." }
      ],
      dialogue: {
        title: "Im Fitnessstudio",
        context: "Anton trifft Vera im Sportzentrum.",
        lines: [
          { who: "Антон", ru: "Ты часто ходишь в спортзал?", de: "Gehst du oft ins Fitnessstudio?", gap: "спортзал", opts: ["бассейн", "мяч"] },
          { who: "Вера", ru: "Да, я тренируюсь три раза в неделю.", de: "Ja, ich trainiere dreimal pro Woche.", gap: "тренируюсь", opts: ["бегаю", "прыгаю"] },
          { who: "Антон", ru: "А зимой?", de: "Und im Winter?" },
          { who: "Вера", ru: "Зимой я катаюсь на лыжах и коньках.", de: "Im Winter fahre ich Ski und Schlittschuh.", gap: "лыжах", opts: ["мяче", "силе"] },
          { who: "Антон", ru: "Спорт полезен для здоровья!", de: "Sport ist gut für die Gesundheit!", gap: "здоровья", opts: ["формы", "силы"] },
          { who: "Вера", ru: "Именно! Поэтому я в хорошей форме.", de: "Genau! Deshalb bin ich in guter Form.", gap: "форме", opts: ["силе", "тренировке"] }
        ]
      }
    },
    {
      id: "u22l2",
      title: "Wettkampf",
      desc: "Spiele gewinnen und verlieren",
      items: [
        { ru: "матч", tr: "matsch", de: "das Match, Spiel" },
        { ru: "команда", tr: "kamánda", de: "die Mannschaft" },
        { ru: "игрок", tr: "igrók", de: "der Spieler" },
        { ru: "соревнование", tr: "sariwnawánije", de: "der Wettkampf" },
        { ru: "выиграть", tr: "wýigrat", de: "gewinnen" },
        { ru: "проиграть", tr: "praigrát", de: "verlieren" },
        { ru: "победа", tr: "pabjéda", de: "der Sieg" },
        { ru: "чемпион", tr: "tschimpión", de: "der Meister, Champion" },
        { ru: "медаль", tr: "midál", de: "die Medaille" },
        { ru: "болеть за", tr: "baljét sa", de: "anfeuern, mitfiebern für" },
        { ru: "стадион", tr: "stadión", de: "das Stadion" },
        { ru: "судья", tr: "sudjá", de: "der Schiedsrichter" }
      ],
      tips: [
        { title: "болеть – jetzt dritte Bedeutung!", body: "Du kennst болеть als „krank sein“ und „wehtun“. Als Fan gibt es noch: **болеть за** + Akkusativ = mitfiebern für:\nЯ болею **за нашу команду**. – Ich bin Fan unserer Mannschaft.\nEin Fan heißt deshalb **болельщик**." }
      ],
      dialogue: {
        title: "Das Finale",
        context: "Max und Lena schauen ein Spiel.",
        lines: [
          { who: "Макс", ru: "За какую команду ты болеешь?", de: "Für welche Mannschaft bist du?", gap: "команду", opts: ["победу", "медаль"] },
          { who: "Лена", ru: "За нашу, конечно! Она может выиграть.", de: "Für unsere, natürlich! Sie kann gewinnen.", gap: "выиграть", opts: ["проиграть", "болеть"] },
          { who: "Макс", ru: "Этот игрок — настоящий чемпион.", de: "Dieser Spieler ist ein echter Champion.", gap: "игрок", opts: ["матч", "стадион"] },
          { who: "Лена", ru: "Гол! Победа!", de: "Tor! Sieg!", gap: "Победа", opts: ["Медаль", "Команда"] },
          { who: "Макс", ru: "Я знал, что мы не проиграем!", de: "Ich wusste, dass wir nicht verlieren!", gap: "проиграем", opts: ["выиграем", "болеем"] }
        ]
      }
    },
    {
      id: "u22l3",
      title: "Vergleiche ziehen",
      desc: "Besser, schneller, am stärksten – der Komparativ",
      items: [
        { ru: "быстрее", tr: "bystrjéje", de: "schneller" },
        { ru: "сильнее", tr: "silnjéje", de: "stärker" },
        { ru: "выше", tr: "wýsche", de: "höher" },
        { ru: "хуже", tr: "chúsche", de: "schlechter" },
        { ru: "дальше", tr: "dálsche", de: "weiter, ferner" },
        { ru: "меньше", tr: "mjénsche", de: "weniger, kleiner" },
        { ru: "самый", tr: "sámyj", de: "der/die/das ...ste (am meisten)" },
        { ru: "чем", tr: "tschem", de: "als (im Vergleich)" },
        { ru: "результат", tr: "risultát", de: "das Ergebnis" },
        { ru: "рекорд", tr: "rikórt", de: "der Rekord" },
        { ru: "уровень", tr: "úrawin", de: "das Niveau, Level" },
        { ru: "одинаково", tr: "adinákawa", de: "gleich (auf gleiche Weise)" }
      ],
      tips: [
        { title: "Der Komparativ mit чем", body: "Zwei Wege zu vergleichen:\n1) **чем**: Он бегает быстрее, **чем** я. – Er läuft schneller als ich.\n2) Genitiv (ohne чем): Он бегает быстрее **меня**. – dieselbe Bedeutung, eleganter.\nDer Superlativ nutzt **самый** + Adjektiv: самый быстрый (der schnellste)." }
      ],
      dialogue: {
        title: "Wer ist besser?",
        context: "Anton und Vera vergleichen ihre Ergebnisse.",
        lines: [
          { who: "Антон", ru: "Мой результат лучше, чем вчера!", de: "Mein Ergebnis ist besser als gestern!", gap: "лучше", opts: ["хуже", "меньше"] },
          { who: "Вера", ru: "А я сегодня бегала быстрее тебя.", de: "Und ich bin heute schneller gelaufen als du.", gap: "быстрее", opts: ["сильнее", "больше"] },
          { who: "Антон", ru: "Правда? У тебя новый рекорд?", de: "Wirklich? Hast du einen neuen Rekord?", gap: "рекорд", opts: ["уровень", "результат"] },
          { who: "Вера", ru: "Почти. Но твой уровень выше.", de: "Fast. Aber dein Niveau ist höher.", gap: "уровень", opts: ["рекорд", "результат"] },
          { who: "Антон", ru: "Значит, мы почти одинаково сильные!", de: "Also sind wir fast gleich stark!", gap: "одинаково", opts: ["больше", "меньше"] }
        ]
      }
    }
  ]
},
{
  id: "u23",
  level: "B2",
  title: "Konflikte und Kompromisse",
  desc: "Streiten, sich entschuldigen und Lösungen finden",
  lessons: [
    {
      id: "u23l1",
      title: "Ein Missverständnis",
      desc: "Wenn etwas schiefgeht",
      items: [
        { ru: "конфликт", tr: "kanflíkt", de: "der Konflikt" },
        { ru: "недоразумение", tr: "nidarasumjénije", de: "das Missverständnis" },
        { ru: "виноват", tr: "winawát", de: "schuld (m)" },
        { ru: "ошибиться", tr: "aschybítsa", de: "sich irren, einen Fehler machen" },
        { ru: "напомнить", tr: "napómnit", de: "erinnern (jmdn. an etw.)" },
        { ru: "перепутать", tr: "piripútat", de: "verwechseln" },
        { ru: "жаловаться", tr: "schálawatsa", de: "sich beschweren" },
        { ru: "обидеться", tr: "abídjetsa", de: "beleidigt sein" },
        { ru: "нарочно", tr: "narótschna", de: "absichtlich" },
        { ru: "случайно", tr: "slutschájna", de: "zufällig, aus Versehen" },
        { ru: "серьёзно", tr: "sirjózna", de: "ernsthaft, im Ernst" },
        { ru: "спокойно", tr: "spakójna", de: "in Ruhe, ruhig" }
      ],
      tips: [
        { title: "жаловаться на + Akkusativ", body: "Sich beschweren ÜBER etwas/jemanden:\nОн жалуется **на шум**. – Er beschwert sich über den Lärm.\nОна пожаловалась **на соседа**. – Sie hat sich über den Nachbarn beschwert.\nGrund einer Beschwerde beim Arzt: жаловаться на головную боль." }
      ],
      dialogue: {
        title: "Das war ein Versehen",
        context: "Vera und Anton klären ein Missverständnis.",
        lines: [
          { who: "Вера", ru: "Ты забыл про нашу встречу!", de: "Du hast unser Treffen vergessen!", gap: "забыл", opts: ["перепутал", "обиделся"] },
          { who: "Антон", ru: "Извини, я перепутал день.", de: "Entschuldige, ich habe den Tag verwechselt.", gap: "перепутал", opts: ["пожаловался", "ошибся"] },
          { who: "Вера", ru: "Ты сделал это нарочно?", de: "Hast du das absichtlich gemacht?", gap: "нарочно", opts: ["случайно", "спокойно"] },
          { who: "Антон", ru: "Нет, конечно случайно! Я виноват.", de: "Nein, natürlich aus Versehen! Ich bin schuld.", gap: "случайно", opts: ["нарочно", "серьёзно"] },
          { who: "Вера", ru: "Хорошо, давай спокойно поговорим.", de: "Gut, lass uns in Ruhe reden.", gap: "спокойно", opts: ["серьёзно", "нарочно"] }
        ]
      }
    },
    {
      id: "u23l2",
      title: "Entschuldigen und versöhnen",
      desc: "Um Verzeihung bitten und Frieden schließen",
      items: [
        { ru: "извиниться", tr: "iswinítsa", de: "sich entschuldigen" },
        { ru: "простить", tr: "prastít", de: "verzeihen, vergeben" },
        { ru: "Прости меня.", tr: "prastí minjá", de: "Verzeih mir." },
        { ru: "виноватый", tr: "winawátyj", de: "schuldig" },
        { ru: "признать", tr: "prisnát", de: "zugeben, anerkennen" },
        { ru: "обещать", tr: "abischtschát", de: "versprechen" },
        { ru: "исправиться", tr: "isprávitsa", de: "sich bessern" },
        { ru: "понимание", tr: "panimánije", de: "das Verständnis" },
        { ru: "терпение", tr: "tirpjénije", de: "die Geduld" },
        { ru: "спор", tr: "spor", de: "der Streit, die Debatte" },
        { ru: "мир", tr: "mir", de: "der Frieden; die Welt" },
        { ru: "больше не", tr: "bólsche ni", de: "nicht mehr" }
      ],
      tips: [
        { title: "Zwei Wege, sorry zu sagen", body: "**Извини!** (du) / **Извините!** (Sie) – für kleine Anlässe, wie unser „Entschuldigung“.\n**Прости!** / **Простите!** – tieferes „Verzeih mir“, wenn wirklich etwas passiert ist.\nDas Verb извиниться (sich entschuldigen) trägt -ся: Я хочу извиниться." }
      ],
      dialogue: {
        title: "Frieden schließen",
        context: "Anton entschuldigt sich richtig.",
        lines: [
          { who: "Антон", ru: "Прости меня. Я был неправ.", de: "Verzeih mir. Ich hatte unrecht.", gap: "Прости", opts: ["Обещай", "Признай"] },
          { who: "Вера", ru: "Ты признаёшь свою ошибку?", de: "Gibst du deinen Fehler zu?", gap: "признаёшь", opts: ["обещаешь", "прощаешь"] },
          { who: "Антон", ru: "Да. И обещаю: больше не забуду.", de: "Ja. Und ich verspreche: Ich vergesse es nicht mehr.", gap: "обещаю", opts: ["прощаю", "жалуюсь"] },
          { who: "Вера", ru: "Хорошо, я тебя прощаю.", de: "Gut, ich verzeihe dir.", gap: "прощаю", opts: ["обещаю", "признаю"] },
          { who: "Антон", ru: "Спасибо за понимание. Мир?", de: "Danke fürs Verständnis. Frieden?", gap: "Мир", opts: ["Спор", "Терпение"] },
          { who: "Вера", ru: "Мир!", de: "Frieden!" }
        ]
      }
    },
    {
      id: "u23l3",
      title: "Wenn ich könnte …",
      desc: "Höflich bitten und Hypothesen bilden mit бы",
      items: [
        { ru: "если бы", tr: "jésli by", de: "wenn (hypothetisch)" },
        { ru: "хотел бы", tr: "chatjél by", de: "würde gern, möchte" },
        { ru: "мог бы", tr: "mok by", de: "könnte" },
        { ru: "на твоём месте", tr: "na twajóm mjéstje", de: "an deiner Stelle" },
        { ru: "совет", tr: "sawjét", de: "der Rat, Ratschlag" },
        { ru: "советовать", tr: "sawjétawat", de: "raten, empfehlen" },
        { ru: "предложить", tr: "pridlaschít", de: "vorschlagen, anbieten" },
        { ru: "решение", tr: "rischénije", de: "die Lösung, Entscheidung" },
        { ru: "договориться", tr: "dagawarítsa", de: "sich einigen, verabreden" },
        { ru: "уступить", tr: "ustupít", de: "nachgeben" },
        { ru: "справедливо", tr: "sprawidlíwa", de: "gerecht, fair" },
        { ru: "выход", tr: "wýchat", de: "der Ausweg, Ausgang" }
      ],
      tips: [
        { title: "Der Konjunktiv mit бы", body: "Für Höflichkeit und Hypothesen: **Vergangenheitsform + бы**.\n**Я хотел бы** кофе. – Ich hätte gern einen Kaffee. (höflicher als хочу)\n**Если бы** у меня было время, я **помог бы**. – Wenn ich Zeit hätte, würde ich helfen.\nEin einziges Wörtchen бы – und du klingst sofort erwachsen und höflich." }
      ],
      dialogue: {
        title: "Ein guter Kompromiss",
        context: "Max und Lena finden eine Lösung.",
        lines: [
          { who: "Макс", ru: "Я хотел бы решить это вместе.", de: "Ich würde das gern gemeinsam lösen.", gap: "хотел бы", opts: ["мог бы", "если бы"] },
          { who: "Лена", ru: "На твоём месте я бы уступила.", de: "An deiner Stelle würde ich nachgeben.", gap: "уступила", opts: ["предложила", "советовала"] },
          { who: "Макс", ru: "Что ты предлагаешь?", de: "Was schlägst du vor?", gap: "предлагаешь", opts: ["советуешь", "решаешь"] },
          { who: "Лена", ru: "Давай договоримся: каждый уступит немного.", de: "Lass uns einigen: Jeder gibt ein bisschen nach.", gap: "договоримся", opts: ["обидимся", "поспорим"] },
          { who: "Макс", ru: "Это справедливо. Хорошее решение!", de: "Das ist fair. Eine gute Lösung!", gap: "справедливо", opts: ["случайно", "серьёзно"] }
        ]
      }
    }
  ]
},
{
  id: "u24",
  level: "B1",
  title: "Geld und Finanzen",
  desc: "Sparen, ausgeben, Konto und Budget",
  lessons: [
    {
      id: "u24l1",
      title: "Sparen und ausgeben",
      desc: "Mit Geld umgehen",
      items: [
        { ru: "тратить", tr: "trátit", de: "ausgeben" },
        { ru: "копить", tr: "kapít", de: "sparen, ansparen" },
        { ru: "экономить", tr: "ikanómit", de: "sparsam sein, sparen" },
        { ru: "сумма", tr: "súmma", de: "die Summe, der Betrag" },
        { ru: "богатый", tr: "bagátyj", de: "reich" },
        { ru: "бедный", tr: "bjédnyj", de: "arm" },
        { ru: "бюджет", tr: "bjudschét", de: "das Budget" },
        { ru: "расходы", tr: "raschódy", de: "die Ausgaben" },
        { ru: "доход", tr: "dachót", de: "das Einkommen" },
        { ru: "хватать", tr: "chwatát", de: "reichen, genügen" },
        { ru: "занять", tr: "sanját", de: "(sich) leihen" },
        { ru: "долг", tr: "dolk", de: "die Schuld(en)" }
      ],
      tips: [
        { title: "хватать – (nicht) genug haben", body: "Unpersönlich mit Dativ + Genitiv:\n**Мне хватает денег.** – Ich habe genug Geld.\n**Мне не хватает времени.** – Mir fehlt die Zeit. (wörtlich: reicht nicht)\nSehr häufig im Alltag – merk dir die Struktur: Person (Dativ) + хватать + Sache (Genitiv)." }
      ],
      dialogue: {
        title: "Am Monatsende",
        context: "Anton und Vera sprechen übers Geld.",
        lines: [
          { who: "Антон", ru: "Я хочу копить на отпуск.", de: "Ich will für den Urlaub sparen.", gap: "копить", opts: ["тратить", "занять"] },
          { who: "Вера", ru: "Хорошая идея. Надо экономить.", de: "Gute Idee. Man muss sparsam sein.", gap: "экономить", opts: ["тратить", "хватать"] },
          { who: "Антон", ru: "Но моей зарплаты не хватает.", de: "Aber mein Gehalt reicht nicht.", gap: "зарплаты", opts: ["расходы", "долга"] },
          { who: "Вера", ru: "Составь бюджет: доходы и расходы.", de: "Mach ein Budget: Einnahmen und Ausgaben.", gap: "бюджет", opts: ["долг", "доход"] },
          { who: "Антон", ru: "Ты права. И не буду занимать деньги.", de: "Du hast recht. Und ich leihe mir kein Geld.", gap: "занимать", opts: ["копить", "экономить"] }
        ]
      }
    },
    {
      id: "u24l2",
      title: "In der Bank",
      desc: "Konto, Karte und Überweisung",
      items: [
        { ru: "счёт в банке", tr: "schtschot w bánkje", de: "das Bankkonto" },
        { ru: "открыть счёт", tr: "atkrýt schtschot", de: "ein Konto eröffnen" },
        { ru: "перевод", tr: "piriwót", de: "die Überweisung" },
        { ru: "положить", tr: "palaschít", de: "einzahlen; legen" },
        { ru: "снять деньги", tr: "snjat djéngi", de: "Geld abheben" },
        { ru: "банкомат", tr: "bankamát", de: "der Geldautomat" },
        { ru: "кредит", tr: "kridít", de: "der Kredit" },
        { ru: "процент", tr: "pratsént", de: "der Prozent, Zins" },
        { ru: "наличные", tr: "nalítschnyje", de: "das Bargeld" },
        { ru: "валюта", tr: "waljúta", de: "die Währung" },
        { ru: "комиссия", tr: "kamíssija", de: "die Gebühr, Provision" },
        { ru: "обменять", tr: "abminját", de: "wechseln, tauschen" }
      ],
      tips: [
        { title: "снять – ein Wort, viele Rollen", body: "Du kennst **снять** schon als „(Wohnung) mieten“. Es heißt auch „abnehmen/abheben“:\nснять деньги (Geld abheben), снять шапку (die Mütze abnehmen), снять квартиру (eine Wohnung mieten).\nDer Kontext entscheidet – Russisch liebt solche Mehrfach-Verben." }
      ],
      dialogue: {
        title: "Geld wechseln",
        context: "Anna ist in einer russischen Bank.",
        lines: [
          { who: "Анна", ru: "Я хочу обменять евро на рубли.", de: "Ich möchte Euro in Rubel wechseln.", gap: "обменять", opts: ["перевести", "снять"] },
          { who: "Сотрудник", ru: "Какой курс сегодня, вы знаете?", de: "Kennen Sie den heutigen Kurs?", gap: "курс", opts: ["процент", "кредит"] },
          { who: "Анна", ru: "Нет. А где банкомат?", de: "Nein. Und wo ist der Geldautomat?", gap: "банкомат", opts: ["перевод", "счёт"] },
          { who: "Сотрудник", ru: "Справа. Вам нужны наличные?", de: "Rechts. Brauchen Sie Bargeld?", gap: "наличные", opts: ["проценты", "валюту"] },
          { who: "Анна", ru: "Да. И хочу открыть счёт.", de: "Ja. Und ich möchte ein Konto eröffnen.", gap: "счёт", opts: ["кредит", "курс"] }
        ]
      }
    },
    {
      id: "u24l3",
      title: "Online kaufen",
      desc: "Bestellen, bezahlen und zurückschicken",
      items: [
        { ru: "заказ", tr: "sakás", de: "die Bestellung" },
        { ru: "оплата", tr: "apláta", de: "die Bezahlung" },
        { ru: "скидка", tr: "skítka", de: "der Rabatt" },
        { ru: "распродажа", tr: "raspradáscha", de: "der Ausverkauf" },
        { ru: "бесплатно", tr: "bisplátna", de: "kostenlos, gratis" },
        { ru: "выгодно", tr: "wýgadna", de: "günstig, vorteilhaft" },
        { ru: "качество", tr: "kátschistwa", de: "die Qualität" },
        { ru: "вернуть", tr: "wirnút", de: "zurückgeben, erstatten" },
        { ru: "обменять товар", tr: "abminját tawár", de: "die Ware umtauschen" },
        { ru: "отзыв", tr: "ótzyf", de: "die Bewertung, Rezension" },
        { ru: "корзина", tr: "karsína", de: "der Warenkorb" },
        { ru: "выбор", tr: "wýbar", de: "die Auswahl" }
      ],
      tips: [
        { title: "Perfektiv fürs Ergebnis", body: "Beim Einkaufen zählt das Ergebnis – deshalb oft Perfektiv:\n**заказать** (bestellen, fertig), **оплатить** (bezahlen, fertig), **вернуть** (zurückgeben).\nMit **буду + Imperfektiv** planst du: Я буду выбирать долго. – Ich werde lange aussuchen." }
      ],
      dialogue: {
        title: "Ein Schnäppchen",
        context: "Lena zeigt Max ihren Online-Fund.",
        lines: [
          { who: "Лена", ru: "Смотри, на эту куртку большая скидка!", de: "Schau, auf diese Jacke gibt es einen großen Rabatt!", gap: "скидка", opts: ["оплата", "корзина"] },
          { who: "Макс", ru: "А доставка бесплатно?", de: "Und ist der Versand kostenlos?", gap: "бесплатно", opts: ["выгодно", "качество"] },
          { who: "Лена", ru: "Да! И отзывы хорошие.", de: "Ja! Und die Bewertungen sind gut.", gap: "отзывы", opts: ["заказ", "выбор"] },
          { who: "Макс", ru: "А если не подойдёт размер?", de: "Und wenn die Größe nicht passt?" },
          { who: "Лена", ru: "Можно вернуть товар бесплатно.", de: "Man kann die Ware kostenlos zurückgeben.", gap: "вернуть", opts: ["заказать", "обменять"] },
          { who: "Макс", ru: "Тогда добавляй в корзину!", de: "Dann leg sie in den Warenkorb!", gap: "корзину", opts: ["оплату", "скидку"] }
        ]
      }
    }
  ]
}
);
