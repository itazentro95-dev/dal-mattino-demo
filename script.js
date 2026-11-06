/* Dal Mattino, language toggle, scroll reveal, kinetic headline, hero parallax.
   Default language is German and is fully present in the HTML:
   with JavaScript disabled, the complete German site remains visible. */
(function () {
  "use strict";

  var I18N = {
    de: {
      skip: "Zum Angebot springen",
      wordmarkSub: "Café und Gelateria · Luzern",
      navSig: "Highlights",
      navMenu: "Angebot",
      navStory: "Unsere Geschichte",
      navMorning: "Am Morgen",
      navVisit: "Besuch",
      badgeRating: "4.9 · über 350 Google-Bewertungen",
      badgeKind: "Café und Gelateria am Morgen",
      h1a: "Guten Morgen,",
      h1b: "Luzern",
      heroRotatePrefix: "Frisch aus dem Fenster:",
      heroRotateSuffix: ", jeden Morgen.",
      heroLede: "Ein kleines Kaffee- und Gebäckfenster an der Hirschmattstrasse: cremiger Cappuccino, die originalen Crookies und Gelato, persönlich serviert von Inhaber Elias, jeden Morgen ab 7 Uhr.",
      ctaMenu: "Angebot ansehen",
      ctaCall: "Anrufen",
      heroNote: "Klein, persönlich, nur am Morgen: Alles gibt es auch zum Mitnehmen.",
      heroFactHours: "Mo bis Fr 7 bis 14 Uhr, Sa 8 bis 14 Uhr, So geschlossen",
      sigTitle: "Wofür unsere Gäste wiederkommen",
      sigSub: "Vier Dinge, die in den Bewertungen immer wieder auftauchen: die originalen Crookies, der cremige Cappuccino, ein ganz besonderes Gelato und die herzhaften Empanadas.",
      tagOriginal: "Das Original",
      tagFav: "Gäste-Favorit",
      tagTipp: "Gäste-Tipp",
      tagHearty: "Herzhaft",
      sig1Name: "Original Crookies",
      sig1Desc: "Croissant trifft Cookie: blättrig, goldbraun und mit Schokoladenstücken. Gäste nennen sie ein Muss.",
      sig2Name: "Cappuccino",
      sig2Desc: "Cremig und voll im Geschmack, genau so loben ihn unsere Gäste in ihren Bewertungen.",
      sig3Name: "Lulo-Gelato",
      sig3Desc: "Tropisch und frisch, mit Limette, Ananas und grünem Apfel. Ein Gast nennt es das einzige Lulo-Gelato der Schweiz.",
      sig4Name: "Empanadas mit Haussauce",
      sig4Desc: "Goldbraun gebacken, allen voran die Poulet-Empanada. Die Haussauce dazu nicht auslassen, sagen unsere Gäste.",
      sigMoreTitle: "Mehr vom Fenster",
      sl1Name: "Zimtschnecken",
      sl1Desc: "Weich und zimtig, so beliebt, dass sie es in Luzerner Reiseprogramme geschafft haben.",
      sl2Name: "Vanilla Iced Latte",
      sl2Desc: "Der herausragende Favorit unter den kalten Kaffees, sagen unsere Gäste.",
      sl3Name: "Heisse Schokolade",
      sl3Desc: "Von Gästen als himmlisch beschrieben, warm und reichhaltig.",
      sl4Name: "Kapello-Sandwiches",
      sl4Desc: "Frisch und mit Sorgfalt zubereitet, für den kleinen Hunger zwischendurch.",
      sl5Name: "Matcha-Getränke",
      sl5Desc: "Grüner Matcha, von Gästen immer wieder gelobt.",
      sl6Name: "Saisonale Neuheiten",
      sl6Desc: "Jede Saison bringt Elias neue, spannende Kreationen ans Fenster, berichten unsere Gäste.",
      menuTitle: "Das Angebot am Fenster",
      menuSub: "Kaffee, Gebäck und Gelato, jeden Morgen am Fenster. Was es genau gibt, wechselt mit der Saison, frag uns einfach am Fenster oder am Telefon.",
      catDrinks: "Kaffee und Getränke",
      mCapName: "Cappuccino",
      mCap: "Cremig und voll im Geschmack, von Gästen als erstklassig beschrieben.",
      mLatteName: "Vanilla Iced Latte",
      mLatte: "Eiskalt, mit Vanille, der herausragende Favorit unserer Gäste.",
      mMochaName: "Mocha",
      mMocha: "Kaffee und Schokolade in einer Tasse, warm und schokoladig.",
      mMatchaName: "Matcha",
      mMatcha: "Matcha-Getränke, von Gästen immer wieder gelobt.",
      mChocName: "Heisse Schokolade",
      mChoc: "Reichhaltig und warm, von Gästen himmlisch genannt.",
      catGelato: "Gelato",
      mGelatoName: "Gelato des Hauses",
      mGelato: "Cremiges Gelato, von Gästen für seinen Geschmack gelobt. Die Sorten wechseln mit der Saison.",
      mLuloName: "Lulo-Gelato",
      mLulo: "Tropische Zitrusfrucht, mit Limette, Ananas und grünem Apfel. Ein Gast nennt es einzigartig in der Schweiz.",
      menuNote: "Die Preise ergänzen wir auf dieser Karte, sobald sie vom Haus bestätigt sind. Bis dahin frag uns am Fenster oder am Telefon gern nach Preisen und den Sorten des Tages.",
      menuCta: "Am Telefon fragen",
      catPastry: "Aus dem Gebäckfenster",
      mCrookieName: "Original Crookies",
      mCrookie: "Croissant und Cookie in einem, mit Schokoladenstücken.",
      mCroissantName: "Croissants",
      mCroissant: "Goldbraun, blättrig und frisch.",
      mCinnName: "Zimtschnecken",
      mCinn: "Weich, zimtig und bei Gästen wie Reiseführern beliebt.",
      mEmpName: "Empanadas",
      mEmp: "Goldbraun gebacken und herzhaft.",
      mChickenName: "Poulet-Empanada",
      mChicken: "Unser Muss laut Gästen, serviert mit der Haussauce des Hauses.",
      mKapelloName: "Kapello-Sandwiches",
      mKapello: "Frisch und mit Sorgfalt zubereitet.",
      factOwnerLbl: "Inhaber",
      factHoursLbl: "Geöffnet",
      factHoursVal: "Nur am Morgen",
      factFormatLbl: "Format",
      factFormatVal: "Kaffee- und Gebäckfenster",
      factQuarterLbl: "Quartier",
      storyCardNote: "Warm, gemütlich und echt: So beschreiben unsere Gäste das Dal Mattino.",
      storyTitle: "Ein Fenster für den Morgen",
      storyP1: "Dal Mattino heisst auf Italienisch «vom Morgen», und genau dafür ist das kleine Café an der Hirschmattstrasse 28 da: Es öffnet um 7 Uhr und schliesst um 14 Uhr, der ganze Tag ist der Morgen.",
      storyP2: "Geführt wird es von Inhaber Elias, der seine Gäste persönlich bedient und für seine Produkte brennt. Gäste beschreiben die Atmosphäre als warm, freundlich und gemütlich, man fühlt sich willkommen, sobald man hereinkommt.",
      storyP3: "Das Angebot ist klein und eigen: originale Crookies, cremiger Cappuccino, Gelato mit Sorten wie der tropischen Lulo und herzhafte Empanadas. Dazu kommen saisonale Neuheiten und Gelato-Events, die auf Instagram angekündigt werden.",
      chip1: "Von Inhaber Elias geführt",
      chip2: "Nur am Morgen geöffnet",
      chip3: "Alles auch zum Mitnehmen",
      chip4: "Gelato-Events auf Instagram",
      storyRating: "Sterne aus über 350 Google-Bewertungen. Gäste loben vor allem die Crookies, den cremigen Cappuccino und die herzliche Art von Elias.",
      trustTitle: "Gut zu wissen, bevor du kommst",
      trust1Title: "Bewertet mit 4.9 Sternen",
      trust1Desc: "Über 350 Google-Bewertungen sprechen für sich: ein kleines Fenster mit einer grossen Fangemeinde in der Neustadt.",
      trust2Title: "Alles zum Mitnehmen",
      trust2Desc: "Kaffee, Gebäck und Gelato gibt es zum Mitnehmen, perfekt für den Weg in die Altstadt, an den See oder auf den Zug.",
      trust3Title: "Jede Saison etwas Neues",
      trust3Desc: "Unsere Gäste berichten: Jede Saison bringt neue, spannende Kreationen ans Fenster. Ein Blick auf Instagram lohnt sich.",
      trust4Title: "Persönlich von Elias",
      trust4Desc: "Kein anonymer Betrieb: Inhaber Elias ist selbst vor Ort und berät dich gern zu Kaffee, Gebäck und Gelato.",
      morningTitle: "Dein Morgen in der Neustadt",
      morningSub: "Dal Mattino ist ein Morgenhaus: Von 7 bis 14 Uhr gibt es Kaffee, Gebäck und Gelato am Fenster, alles auch zum Mitnehmen.",
      ccTitle: "Zum Mitnehmen, so einfach geht es",
      cc1Title: "Angebot ansehen",
      cc1Desc: "Such dir oben aus, worauf du Lust hast, vom Crookie bis zum Lulo-Gelato.",
      cc2Title: "Ans Fenster kommen",
      cc2Desc: "Du findest uns an der Hirschmattstrasse 28, mitten in der Neustadt.",
      cc3Title: "Mitnehmen und geniessen",
      cc3Desc: "Kaffee, Gebäck oder Gelato in der Hand, und der Luzerner Morgen gehört dir.",
      ccCta: "Route planen",
      dlTitle: "Gut zu wissen am Morgen",
      dlDesc: "Geöffnet ist Montag bis Freitag von 7 bis 14 Uhr und am Samstag von 8 bis 14 Uhr, sonntags bleibt das Fenster geschlossen. Gelato-Events und saisonale Neuheiten kündigt Elias auf Instagram an.",
      dlInsta: "Auf Instagram folgen",
      visitTitle: "An der Hirschmattstrasse, wir freuen uns auf dich",
      visitAddrTitle: "Adresse und Kontakt",
      visitPhoneLabel: "Telefon:",
      visitDirections: "Route planen",
      visitHoursTitle: "Öffnungszeiten",
      dMonFri: "Montag bis Freitag",
      hMonFri: "7:00 bis 14:00",
      dSat: "Samstag",
      hSat: "8:00 bis 14:00",
      dSun: "Sonntag",
      dClosed: "Geschlossen",
      hoursNote: "Öffnungszeiten gemäss Google-Eintrag. Änderungen vorbehalten.",
      visitService: "Ein kleines Fenster für Kaffee, Gebäck und Gelato. Alles gibt es auch zum Mitnehmen.",
      visitTravelTitle: "Anreise",
      travelRoute: "die Hirschmattstrasse ist Teil der offiziellen Neustadt-Wanderroute, vom Theater Luzern durchs Quartier.",
      travelQuarter: "ein lebendiges Quartier mit kleinen Läden, Galerien und Kinos, wenige Gehminuten von der Altstadt entfernt.",
      footerSub: "Café und Gelateria · Hirschmattstrasse 28, 6003 Luzern",
      footerTop: "Nach oben",
      footerNote: "4.9 Sterne aus über 350 Google-Bewertungen, sonntags geschlossen",
      barCall: "Anrufen",
      barMenu: "Angebot",
      barDir: "Route"
    },
    en: {
      skip: "Skip to the menu",
      wordmarkSub: "Café and Gelateria · Lucerne",
      navSig: "Highlights",
      navMenu: "Menu",
      navStory: "Our Story",
      navMorning: "Mornings",
      navVisit: "Visit",
      badgeRating: "4.9 · over 350 Google reviews",
      badgeKind: "Morning café and gelateria",
      h1a: "Good morning,",
      h1b: "Lucerne",
      heroRotatePrefix: "Fresh from the window:",
      heroRotateSuffix: ", every morning.",
      heroLede: "A small coffee and pastry window on Hirschmattstrasse: creamy cappuccino, the original crookies and gelato, served personally by owner Elias, every morning from 7.",
      ctaMenu: "See the menu",
      ctaCall: "Call us",
      heroNote: "Small, personal, mornings only: everything is also available to take away.",
      heroFactHours: "Mon to Fri 7:00 to 14:00, Sat 8:00 to 14:00, Sun closed",
      sigTitle: "What our guests come back for",
      sigSub: "Four things that appear again and again in the reviews: the original crookies, the creamy cappuccino, a very special gelato and the savoury empanadas.",
      tagOriginal: "The original",
      tagFav: "Guest favourite",
      tagTipp: "Guest tip",
      tagHearty: "Savoury",
      sig1Name: "Original Crookies",
      sig1Desc: "Croissant meets cookie: flaky, golden and with chocolate chips. Guests call them a must-try.",
      sig2Name: "Cappuccino",
      sig2Desc: "Creamy and full of flavour, exactly how our guests praise it in their reviews.",
      sig3Name: "Lulo Gelato",
      sig3Desc: "Tropical and fresh, with lime, pineapple and green apple. One guest calls it the only Lulo gelato in Switzerland.",
      sig4Name: "Empanadas with House Sauce",
      sig4Desc: "Baked golden, above all the chicken empanada. Do not skip the house sauce with it, our guests say.",
      sigMoreTitle: "More from the window",
      sl1Name: "Cinnamon Rolls",
      sl1Desc: "Soft and cinnamon-sweet, so loved that they made it into Lucerne travel itineraries.",
      sl2Name: "Vanilla Iced Latte",
      sl2Desc: "The standout favourite among the iced coffees, our guests say.",
      sl3Name: "Hot Chocolate",
      sl3Desc: "Described by guests as heavenly, warm and rich.",
      sl4Name: "Kapello Sandwiches",
      sl4Desc: "Fresh and made with care, for a bite in between.",
      sl5Name: "Matcha Drinks",
      sl5Desc: "Green matcha, praised again and again by guests.",
      sl6Name: "Seasonal Novelties",
      sl6Desc: "Every season Elias brings new, exciting creations to the window, our guests report.",
      menuTitle: "The menu at the window",
      menuSub: "Coffee, pastries and gelato, every morning at the window. What exactly is on offer changes with the season, just ask us at the window or by phone.",
      catDrinks: "Coffee and Drinks",
      mCapName: "Cappuccino",
      mCap: "Creamy and full of flavour, described by guests as top-notch.",
      mLatteName: "Vanilla Iced Latte",
      mLatte: "Ice cold, with vanilla, the standout favourite of our guests.",
      mMochaName: "Mocha",
      mMocha: "Coffee and chocolate in one cup, warm and chocolatey.",
      mMatchaName: "Matcha",
      mMatcha: "Matcha drinks, praised again and again by guests.",
      mChocName: "Hot Chocolate",
      mChoc: "Rich and warm, called heavenly by our guests.",
      catGelato: "Gelato",
      mGelatoName: "House Gelato",
      mGelato: "Creamy gelato, praised by guests for its flavour. The flavours change with the season.",
      mLuloName: "Lulo Gelato",
      mLulo: "A tropical citrus fruit, with lime, pineapple and green apple. One guest calls it unique in Switzerland.",
      menuNote: "We will add prices to this menu as soon as they are confirmed by the house. Until then, ask us at the window or by phone about prices and today's flavours.",
      menuCta: "Ask by phone",
      catPastry: "From the Pastry Window",
      mCrookieName: "Original Crookies",
      mCrookie: "Croissant and cookie in one, with chocolate chips.",
      mCroissantName: "Croissants",
      mCroissant: "Golden, flaky and fresh.",
      mCinnName: "Cinnamon Rolls",
      mCinn: "Soft, cinnamon-sweet and loved by guests and travel guides alike.",
      mEmpName: "Empanadas",
      mEmp: "Baked golden and savoury.",
      mChickenName: "Chicken Empanada",
      mChicken: "A must-try according to our guests, served with the house sauce.",
      mKapelloName: "Kapello Sandwiches",
      mKapello: "Fresh and made with care.",
      factOwnerLbl: "Owner",
      factHoursLbl: "Open",
      factHoursVal: "Mornings only",
      factFormatLbl: "Format",
      factFormatVal: "Coffee and pastry window",
      factQuarterLbl: "Quarter",
      storyCardNote: "Warm, cozy and genuine: that is how our guests describe Dal Mattino.",
      storyTitle: "A window for the morning",
      storyP1: "Dal Mattino is Italian for 'from the morning', and that is exactly what the small café at Hirschmattstrasse 28 is for: it opens at 7 and closes at 14, the whole day is the morning.",
      storyP2: "It is run by owner Elias, who serves his guests personally and is passionate about his products. Guests describe the atmosphere as warm, friendly and cozy, you feel welcome the moment you walk in.",
      storyP3: "The menu is small and distinctive: original crookies, creamy cappuccino, gelato with flavours like the tropical Lulo and savoury empanadas. On top come seasonal novelties and gelato events, announced on Instagram.",
      chip1: "Run by owner Elias",
      chip2: "Open mornings only",
      chip3: "Everything to take away",
      chip4: "Gelato events on Instagram",
      storyRating: "stars from over 350 Google reviews. Guests praise above all the crookies, the creamy cappuccino and Elias's warm manner.",
      trustTitle: "Good to know before you come",
      trust1Title: "Rated 4.9 stars",
      trust1Desc: "Over 350 Google reviews speak for themselves: a small window with a big following in the Neustadt.",
      trust2Title: "Everything to take away",
      trust2Desc: "Coffee, pastries and gelato are all available to take away, perfect on your way to the Old Town, the lake or your train.",
      trust3Title: "Something new every season",
      trust3Desc: "Our guests report: every season brings new, exciting creations to the window. A look at Instagram is worth it.",
      trust4Title: "Personally by Elias",
      trust4Desc: "No anonymous business: owner Elias is there himself and is happy to advise you on coffee, pastries and gelato.",
      morningTitle: "Your morning in the Neustadt",
      morningSub: "Dal Mattino is a morning house: from 7:00 to 14:00 there is coffee, pastries and gelato at the window, everything also to take away.",
      ccTitle: "Takeaway, it is this simple",
      cc1Title: "Browse the menu",
      cc1Desc: "Pick what you fancy from the menu above, from a crookie to the Lulo gelato.",
      cc2Title: "Come to the window",
      cc2Desc: "You will find us at Hirschmattstrasse 28, in the heart of the Neustadt.",
      cc3Title: "Take away and enjoy",
      cc3Desc: "Coffee, pastry or gelato in hand, and the Lucerne morning is yours.",
      ccCta: "Get directions",
      dlTitle: "Good to know in the morning",
      dlDesc: "We are open Monday to Friday from 7:00 to 14:00 and on Saturdays from 8:00 to 14:00, on Sundays the window stays closed. Elias announces gelato events and seasonal novelties on Instagram.",
      dlInsta: "Follow on Instagram",
      visitTitle: "On Hirschmattstrasse, we look forward to seeing you",
      visitAddrTitle: "Address and contact",
      visitPhoneLabel: "Phone:",
      visitDirections: "Get directions",
      visitHoursTitle: "Opening hours",
      dMonFri: "Monday to Friday",
      hMonFri: "7:00 to 14:00",
      dSat: "Saturday",
      hSat: "8:00 to 14:00",
      dSun: "Sunday",
      dClosed: "Closed",
      hoursNote: "Opening hours per the Google listing. Subject to change.",
      visitService: "A small window for coffee, pastries and gelato. Everything is also available to take away.",
      visitTravelTitle: "Getting here",
      travelRoute: "Hirschmattstrasse is part of the official Neustadt walking route, from the Lucerne Theatre through the quarter.",
      travelQuarter: "a lively quarter with small shops, galleries and cinemas, a few minutes on foot from the Old Town.",
      footerSub: "Café and gelateria · Hirschmattstrasse 28, 6003 Lucerne",
      footerTop: "Back to top",
      footerNote: "Rated 4.9 stars from over 350 Google reviews, closed on Sundays",
      barCall: "Call",
      barMenu: "Menu",
      barDir: "Directions"
    }
  };

  var ROTATE = {
    de: ["Crookies", "Cappuccino", "Lulo-Gelato", "Zimtschnecken"],
    en: ["Crookies", "Cappuccino", "Lulo Gelato", "Cinnamon Rolls"]
  };

  var currentLang = "de";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    document.title = lang === "en"
      ? "Dal Mattino: Café and Gelateria in Lucerne"
      : "Dal Mattino: Café und Gelateria in Luzern";
    try { window.localStorage.setItem("dal-mattino-lang", lang); } catch (e) { /* private mode */ }
  }

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }
  try {
    var saved = window.localStorage.getItem("dal-mattino-lang");
    if (saved && saved !== "de" && I18N[saved]) applyLang(saved);
  } catch (e) { /* ignore */ }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Kinetic rotating headline word ---------- */
  var rotateEl = document.getElementById("rotateWord");
  if (rotateEl && !reducedMotion) {
    var idx = 0;
    window.setInterval(function () {
      var words = ROTATE[currentLang] || ROTATE.de;
      rotateEl.classList.add("is-out");
      window.setTimeout(function () {
        idx = (idx + 1) % words.length;
        rotateEl.textContent = words[idx];
        rotateEl.classList.remove("is-out");
      }, 300);
    }, 3200);
  }

  /* ---------- Subtle hero parallax (transform only) ---------- */
  var heroImg = document.getElementById("heroImg");
  if (heroImg && !reducedMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            heroImg.style.transform = "scale(1.06) translateY(" + (y * 0.12) + "px)";
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
