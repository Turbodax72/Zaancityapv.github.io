import { useState } from "react";
import { Search, Menu, X, Book, Shield, Scale, Users, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const menuItems = [
    { id: "home", title: "Home", icon: Home },
    { id: "strafbepaling", title: "Strafbepaling", icon: Scale },
    { id: "openbare-orde", title: "Openbare Orde", icon: AlertTriangle },
    { id: "overheid", title: "Overheid", icon: Shield },
    { id: "criminaliteit", title: "Criminaliteit", icon: Users },
    { id: "overige", title: "Overige", icon: Book }
  ];

  const categories = [
    {
      id: 1,
      name: "Waarschuwing",
      color: "bg-green-100 text-green-800",
      description: "Lichte overtreding"
    },
    {
      id: 2,
      name: "60u taakstraf",
      color: "bg-yellow-100 text-yellow-800",
      description: "Matige overtreding"
    },
    {
      id: 3,
      name: "100u taakstraf",
      color: "bg-orange-100 text-orange-800",
      description: "Ernstige overtreding"
    },
    {
      id: 4,
      name: "3 dagen ban + 50u taakstraf",
      color: "bg-red-100 text-red-800",
      description: "Zeer ernstige overtreding"
    },
    {
      id: 5,
      name: "1 week ban + 50u taakstraf",
      color: "bg-purple-100 text-purple-800",
      description: "Zware overtreding"
    },
    {
      id: 6,
      name: "1 maand ban",
      color: "bg-gray-100 text-gray-800",
      description: "Zeer zware overtreding"
    },
    {
      id: 7,
      name: "Permanente ban",
      color: "bg-red-200 text-red-900",
      description: "Uiterst zware overtreding"
    },
    {
      id: 8,
      name: "Account wipe",
      color: "bg-black text-white",
      description: "Totale reset"
    }
  ];

  const articleDetails = {
    1: {
      title: "Fail-RP en Powergaming",
      fullContent: "FailRP: Het is niet toegestaan om opzettelijk een roleplay van slechte kwaliteit uit te spelen of de roleplay te verstoren. Je behoort je aan te passen aan de situatie waar jij je in bevindt.",
      examples: [
        "Tijdens een achtervolging je voertuig in de garage zetten om te voorkomen dat je herkend wordt",
        "Het expres slecht/niet afmaken van een scenario of te verstoren, ondanks de situatie",
        "Het stelen uit kofferbakken door bijvoorbeeld iemand van de motor af te trappen",
        "Het niet realistisch reageren op je verwondingen. Bijvoorbeeld meteen op de motor stappen, nadat je in je benen geschoten bent",
        "Indien je een harde crash hebt gemaakt, of een crashbeeld hebt, mag je niet meteen door met het scenario. Je moet 30 seconden wachten"
      ],
      powerGaming: "Powergaming: Het is niet toegestaan om opzettelijk de roleplay op een oneerlijke of onrealistische manier te vormen, bijvoorbeeld door de verhaallijn op een onnatuurlijke manier te veranderen of door onrealistische dwang uit te oefenen op de andere partij.",
      powerExamples: [
        "Een agent ontvoeren om een signalering te verwijderen of om iets te bekijken in het politiesysteem (MEOS)",
        "Het gebruiken van enkel /me commands om een actie uit te voeren zonder roleplay",
        "Het gebruiken van de Z-spier om spelers te vinden tijdens scenario's"
      ]
    },
    2: {
      title: "Cheats",
      fullContent: "Het is niet toegestaan om gebruik te maken van software/hulpmiddelen (cheats ofwel hacks) van derde partijen om profijt te krijgen in het spel.",
      examples: [
        "Gebruik van externe software voor voordeel in het spel",
        "Zaancity Roleplay werkt conform de privacyregeling",
        "Besluiten worden genomen op basis van videomateriaal en informatiebronnen",
        "PC-checks zijn niet verplicht maar kunnen onschuld aantonen",
        "Indien geen toestemming voor PC-check, kans op preventieve permanente ban"
      ]
    },
    3: {
      title: "Bugs en exploits",
      fullContent: "Het is niet toegestaan om opzettelijk misbruik te maken van een bug/exploit om voordeel voor jouzelf of anderen te behalen.",
      examples: [
        "Misbruiken van bepaalde animaties (zoals het schoppen vanaf een motor)",
        "Emote bug abuse om te glitchen",
        "Dupliceren van items",
        "In het algemeen het misbruik maken van een bug om daar je voordeel uit te halen"
      ],
      note: "Wanneer het managementteam van mening is dat het misbruik van de bug en/of exploit te veel invloed heeft op de economie, kunnen zij besluiten om af te wijken van de standaard strafmaatregelen en een account wipe toe te passen."
    },
    4: {
      title: "Out Of Character",
      fullContent: "Het is niet toegestaan om je karakter te breken door OOC-informatie te gebruiken in-game.",
      examples: [
        "Termen gebruiken die het in het echte leven niet van toepassing zijn, zoals 'report', 'reloggen', 'desync', 'rdm'",
        "Benoemen dat iemand een artikel van het APV heeft overtreden"
      ]
    },
    5: {
      title: "Meta-gaming",
      fullContent: "Het is niet toegestaan om informatie te gebruiken die is verkregen buiten het spel om, of om in call te zitten in de breedste zin wanneer je in Zaancity bent.",
      examples: [
        "Een bericht op Discord sturen waar je bent",
        "Een eigen server hebben voor je bedrijf of gang met andere burgers erin (zonder toestemming van management)"
      ]
    },
    6: {
      title: "VDM (Vehicle Deathmatch)",
      fullContent: "Het is niet toegestaan om je voertuig als geweldsmiddel te gebruiken. Ook indien iemand niet overlijdt, telt dit als VDM.",
      examples: [
        "Je auto gebruiken om iemand opzettelijk aan te rijden",
        "Voertuig inzetten als wapen tijdens gevechten"
      ]
    },
    7: {
      title: "RDM (Random Deathmatch)",
      fullContent: "Het is niet toegestaan om zonder goede aanleiding iemand van het leven te beroven of te mishandelen. Dit geldt ook voor dieren.",
      examples: [
        "Zonder reden iemand doodschieten",
        "Indien een persoon zonder goede aanleiding mensen van het leven beroofd kan een stafflid besluiten om het gebruikte wapen in beslag te nemen"
      ],
      note: "Indien je iemand achtervolgt, diegene een waarschuwingsschot afvuurt en jij blijft achtervolgen, dan mag jij beschoten worden. Dit geldt ook voor het doorvliegen in een helicopter na een waarschuwingsschot."
    },
    8: {
      title: "No Value Of Life",
      fullContent: "Het is niet toegestaan geen waarde te hechten aan het leven van het karakter dat je speelt.",
      examples: [
        "Indien er een vuurwapen op je gericht staat in de shouting voice range wordt er verwacht dat je blijft staan en mee werkt",
        "Je dropt je items direct bij handsup (binnen 10 seconden)",
        "Met een helikopter en/of vliegtuig vlak boven de grond vliegen of tussen gebouwen door",
        "Weerstand bieden tegen een slag- of steekwapen wanneer deze binnen een meter van jou is",
        "Al rijdend een ander voertuig blokkeren",
        "Een zelfmoordscenario opzetten",
        "Van een brug af springen zonder parachute"
      ]
    },
    9: {
      title: "Combat-logging",
      fullContent: "Het is niet toegestaan om tijdens een actief scenario of 10 minuten daarna de stad te verlaten op welke manier dan ook.",
      examples: [
        "De stad verlaten tijdens een actieve achtervolging",
        "Verbinding verbreken tijdens een overval",
        "Game afsluiten tijdens een gevecht"
      ],
      note: "Mocht je door een crash de stad moeten verlaten, heb je 5 minuten om terug te komen."
    },
    10: {
      title: "Combat-stashing",
      fullContent: "Het is niet toegestaan om wapens of voorwerpen die je in een scenario actief hebt gebruikt binnen 10 minuten te stashen.",
      examples: [
        "Wapens wegzetten in een kluis direct na een schietpartij",
        "Gestolen spullen snel opbergen tijdens een achtervolging",
        "Drugs verstoppen terwijl je nog achtervolgd wordt"
      ]
    },
    11: {
      title: "New Life Rule",
      fullContent: "Als jouw karakter is komen te overlijden wordt er verwacht dat jij alle roleplay voor jouw dood vergeten bent.",
      examples: [
        "Teruggaan naar de plek waar je bent overleden",
        "Wraak nemen op de persoon die je heeft gedood",
        "Informatie gebruiken van voor je dood"
      ]
    },
    12: {
      title: "Microfoon",
      fullContent: "Het is tijdens het spelen ten allen tijden verplicht om een werkende microfoon te hebben waarin je duidelijk te verstaan bent.",
      examples: [
        "Earrapen door te hard te praten",
        "Muziek afspelen door je microfoon",
        "Storende soundpads gebruiken",
        "Blazen in de microfoon"
      ]
    },
    13: {
      title: "Talen",
      fullContent: "Er wordt verwacht dat je de Nederlands of Engelse taal beheerst binnen Zaancity Roleplay.",
      examples: [
        "Andere talen gebruiken op een provocerende manier",
        "Tijdens staffzaken andere talen dan Nederlands spreken",
        "Schelden in vreemde talen om de regels te omzeilen"
      ]
    },
    14: {
      title: "Belediging",
      fullContent: "Het is niet toegestaan om aanstootgevende teksten te plaatsen of uit te spreken op welke mogelijke manier dan ook.",
      examples: [
        "Hedendaagse ziektes gebruiken als belediging",
        "Seksuele opmerkingen maken",
        "Racistische uitingen",
        "Toxic gedrag vertonen",
        "Ongepaste namen gebruiken voor accounts of karakters"
      ]
    },
    15: {
      title: "Deelname aan het verkeer",
      fullContent: "Het is niet toegestaan om onrealistische rijstijlen aan te nemen.",
      examples: [
        "Gebruik maken van 'jumps' of 'ramps' in de stad",
        "Harder dan 100 km/u rijden op onverharde wegen (tenzij off-road voertuig)",
        "Onverantwoorde pits uitvoeren boven 100 km/u",
        "Lichtere voertuigen laten pitten door zwaardere voertuigen"
      ]
    },
    16: {
      title: "Reporting",
      fullContent: "De in-game functie om spelers te rapporteren (/report) is alleen bedoeld voor gevallen dat dit ter plekke opgelost kan worden.",
      examples: [
        "Report spammen (meerdere reports binnen 5 minuten)",
        "Reports maken voor eigen rechter spelen",
        "Onnodige reports maken voor kleine problemen"
      ]
    },
    17: {
      title: "Greenzone",
      fullContent: "Binnen de greenzone is het verboden om enige vorm van geweld te gebruiken.",
      examples: [
        "Vechten bij het ziekenhuis",
        "Schieten bij de pechhulp",
        "Geweld gebruiken bij het gemeentehuis",
        "Een greenzone invluchten tijdens een scenario"
      ],
      note: "Greenzones: Pechhulp, Ziekenhuis, Gemeentehuis en winkelcentrum, Bitcoin converter"
    },
    18: {
      title: "Kledingregels",
      fullContent: "Het is niet toegestaan om de standaard-outfit te dragen tijdens roleplay scenario's.",
      examples: [
        "De default kleding aanhouden",
        "Doorzichtige lichaamsdelen hebben",
        "Armen die door je t-shirt heenkomen",
        "Niet naar een kledingwinkel gaan om je outfit aan te passen"
      ]
    },
    19: {
      title: "Copbaiting",
      fullContent: "Het is niet toegestaan om opzettelijk de aandacht proberen te trekken van politieagenten zonder goede aanleiding.",
      examples: [
        "Wegrijden bij een reguliere controle zonder illegale spullen",
        "Opzettelijk de politie lokken voor actie",
        "Politie van hun werk houden zonder reden"
      ]
    },
    20: {
      title: "Impersonatie overheidsmedewerker",
      fullContent: "Het is niet toegestaan om jezelf te vermommen als een overheidsmedewerker.",
      examples: [
        "Politie-uniform dragen als burger",
        "Jezelf voordoen als agent",
        "Kogel- of steekwerende vesten dragen met overheidsteksten"
      ]
    },
    21: {
      title: "Overheidsvoertuigen",
      fullContent: "Het is niet toegestaan om overheidsvoertuigen te tunen of te besturen zonder in dienst te zijn.",
      examples: [
        "Politieauto's tunen",
        "Ambulances besturen als burger",
        "Overheidsvoertuigen gebruiken buiten dienst"
      ],
      note: "Uitzondering: diefstal voor goed roleplay scenario"
    },
    22: {
      title: "Gedrag tegen overheidsmedewerkers",
      fullContent: "Er wordt verwacht dat je eerlijk bent over je verwondingen en meewerkt met ambulancezorg.",
      examples: [
        "Liegen tegen ambulancepersoneel over verwondingen",
        "Niet meewerken aan medische roleplay",
        "Hulpdiensten lokken om ze te ontvoeren",
        "Te veel overheidsmedewerkers ontvoeren (max 1 per 6 in dienst)"
      ]
    },
    23: {
      title: "Criminaliteit & Ambtenaren",
      fullContent: "Voor overheidsmedewerkers is het niet toegestaan om zich bezig te houden met illegale praktijken.",
      examples: [
        "Drugs verkopen als politieagent",
        "Wapens smokkelen als ambulancemedewerker",
        "Dienstwapens meenemen naar huis (behalve specialisten)",
        "Illegale spullen in bezit hebben als ambtenaar"
      ],
      note: "24 uur tijd om illegale spullen weg te doen bij start overheidsbaan"
    },
    24: {
      title: "Overvallen & Oplichten",
      fullContent: "Het is alleen toegestaan om iemand te overvallen indien deze persoon bezig is met criminele activiteiten.",
      examples: [
        "Iemand overvallen die drugs plukt",
        "Scammen met wapens (max 2 miljoen)",
        "Rippen van iemand met wapenholster",
        "Overvallen van personen op illegale locaties"
      ],
      note: "Verboden: banksaldo, huizen/loodsen leegroven, verified gang kluizen"
    },
    25: {
      title: "Overval Regels",
      fullContent: "Per hostage krijg je 2 eisen, maximaal 8 eisen bij een overval.",
      examples: [
        "Hostages pakken in kledingwinkels",
        "Setup gooien binnen 10 minuten na groenlicht",
        "Hypercars gebruiken bij overvallen",
        "Kennis gebruiken als hostage"
      ],
      note: "Na 15 minuten zonder politie mag je op eigen risico weg"
    },
    26: {
      title: "Wraak en liquidaties",
      fullContent: "Het is alleen toegestaan om iemand te liquideren als het slachtoffer de reden weet.",
      examples: [
        "Iemand vermoorden zonder uitleg",
        "Wraak nemen binnen 24 uur na je eigen dood",
        "Wraak nemen na 48 uur"
      ]
    },
    27: {
      title: "Overvallen",
      fullContent: "Het is niet toegestaan om een overval te starten een half uur voor en na restarts.",
      examples: [
        "Hostage rippen na fouilleren",
        "Bekenden gebruiken als hostage",
        "Onderhandelaar gijzelen",
        "Aanrijden tijdens achtervolging na overval"
      ]
    },
    28: {
      title: "Campen",
      fullContent: "Het is niet toegestaan om te campen op locaties betrokken bij illegale praktijken.",
      examples: [
        "Wachten bij drugsdealers om mensen te overvallen",
        "Campen bij witwas depot",
        "Lang rondhangen bij illegale locaties (100 meter, zonder reden)"
      ]
    },
    29: {
      title: "Rippen",
      fullContent: "Het is niet toegestaan om dezelfde persoon binnen een uur meerdere malen te overvallen.",
      examples: [
        "Iemand 3x in een uur rippen",
        "Auto leegplunderen zonder wapen",
        "Rippen en daarna vermoorden",
        "Wapens terugeisen van lagere agenten"
      ],
      note: "Uitzondering: als persoon kleding zodanig verandert dat hij onherkenbaar is"
    },
    30: {
      title: "Witwassen",
      fullContent: "Witwassers overvallen is toegestaan onder bepaalde voorwaarden.",
      examples: [
        "Witwasser overvallen die ongepaste kleding draagt",
        "Handelen op witwas app meldingen",
        "Toeterende witwassers overvallen",
        "Overvallen buiten het tijdsbestek van 1 uur"
      ]
    },
    31: {
      title: "Bodycams",
      fullContent: "Het gebruik van bodycam beelden is alleen toegestaan onder bepaalde voorwaarden.",
      examples: [
        "Burgers gebruiken bodycam zonder fysieke camera",
        "Overheidsmedewerkers zonder bodycam gebruiken beelden",
        "Dashcam beelden gebruiken van privé voertuigen"
      ],
      note: "Voor staffzaken mag elk videomateriaal gebruikt worden"
    },
    32: {
      title: "Herkenning",
      fullContent: "Het is alleen toegestaan om iemand aan zijn/haar stem te herkennen onder bepaalde voorwaarden.",
      examples: [
        "Content creators herkennen aan stem",
        "Stemmen herkennen door voicechanger heen",
        "Stemmen herkennen met gezichtsbedekkende kleding",
        "Onrealistische voicechangers gebruiken (robotstemmen)"
      ]
    },
    33: {
      title: "Alternatieve karakters",
      fullContent: "Het is niet toegestaan om gebruik te maken van alternatieve accounts voor voordeel.",
      examples: [
        "Alt account maken om ban te omzeilen",
        "Startersgeld overschrijven naar hoofdaccount",
        "Account delen met anderen",
        "Nieuw account maken zonder ticket"
      ]
    },
    34: {
      title: "Wisselen van baan",
      fullContent: "Bij het wisselen tussen overheidsbanen of verified groeperingen dien je 7 dagen te wachten.",
      examples: [
        "Van politie naar ambulance zonder wachttijd",
        "Van gang naar overheid direct switchen",
        "Van overheid naar verified groepering zonder pauze"
      ]
    },
    35: {
      title: "Real life trading",
      fullContent: "Het is nooit toegestaan om goederen in Zaancity te verkopen tegen echt geld.",
      examples: [
        "Voertuigen verkopen voor echt geld",
        "Donatievoertuigen ruilen",
        "Spullen weggeven aan vertrekkende spelers",
        "Startersgeld vragen van anderen"
      ]
    },
    36: {
      title: "Bedrijven/huizen",
      fullContent: "Het is niet toegestaan om eigenaar te zijn van twee bedrijven of meer dan 2 huizen.",
      examples: [
        "Twee bedrijven bezitten",
        "Bedrijven verkopen aan spelers (moet via gemeente)",
        "Beveiligingscamera's plaatsen buiten eigen terrein",
        "Meer dan 2 huizen op naam hebben"
      ]
    },
    37: {
      title: "Graphic packs",
      fullContent: "Bepaalde graphic packs en beeldscherminstellingen kunnen oneerlijk voordeel opleveren.",
      examples: [
        "Permanente daglicht packs gebruiken",
        "Kogel tracer packs",
        "Custom beeldverhouding instellen",
        "FOV aanpassingen voor voordeel",
        "Kill effect packs",
        "Potato graphic packs"
      ],
      note: "NVE is toegestaan zolang het binnen alle regels valt"
    }
  };

  const articles = [
    { id: 1, title: "Fail-RP en Powergaming", category: "openbare-orde", penalty: 2, description: "Slechte roleplay kwaliteit en onrealistische dwang" },
    { id: 2, title: "Cheats", category: "openbare-orde", penalty: 7, description: "Gebruik van externe software" },
    { id: 3, title: "Bugs en exploits", category: "openbare-orde", penalty: 6, description: "Misbruik van game bugs" },
    { id: 4, title: "Out Of Character", category: "openbare-orde", penalty: 1, description: "OOC informatie gebruiken in-game" },
    { id: 5, title: "Meta-gaming", category: "openbare-orde", penalty: 4, description: "Externe informatie gebruiken" },
    { id: 6, title: "VDM (Vehicle Deathmatch)", category: "openbare-orde", penalty: 4, description: "Voertuig als wapen gebruiken" },
    { id: 7, title: "RDM (Random Deathmatch)", category: "openbare-orde", penalty: 4, description: "Zonder reden iemand doden" },
    { id: 8, title: "No Value Of Life", category: "openbare-orde", penalty: 4, description: "Geen waarde hechten aan leven" },
    { id: 9, title: "Combat-logging", category: "openbare-orde", penalty: 4, description: "Scenario verlaten tijdens actie" },
    { id: 10, title: "Combat-stashing", category: "openbare-orde", penalty: 4, description: "Spullen wegzetten tijdens scenario" },
    { id: 11, title: "New Life Rule", category: "openbare-orde", penalty: 4, description: "Roleplay vergeten na dood" },
    { id: 12, title: "Microfoon", category: "openbare-orde", penalty: 1, description: "Werkende microfoon verplicht" },
    { id: 13, title: "Talen", category: "openbare-orde", penalty: 1, description: "Nederlands of Engels verplicht" },
    { id: 14, title: "Belediging", category: "openbare-orde", penalty: 5, description: "Aanstootgevende uitingen" },
    { id: 15, title: "Deelname aan het verkeer", category: "openbare-orde", penalty: 2, description: "Realistische rijstijl" },
    { id: 16, title: "Reporting", category: "openbare-orde", penalty: 3, description: "Misbruik van report functie" },
    { id: 17, title: "Greenzone", category: "openbare-orde", penalty: 2, description: "Geweld in veilige zones" },
    { id: 18, title: "Kledingregels", category: "openbare-orde", penalty: 1, description: "Juiste kleding dragen" },
    { id: 19, title: "Copbaiting", category: "overheid", penalty: 2, description: "Politie lokken zonder reden" },
    { id: 20, title: "Impersonatie overheidsmedewerker", category: "overheid", penalty: 2, description: "Zich voordoen als ambtenaar" },
    { id: 21, title: "Overheidsvoertuigen", category: "overheid", penalty: 2, description: "Misbruik van dienstvoertuigen" },
    { id: 22, title: "Gedrag tegen overheidsmedewerkers", category: "overheid", penalty: 2, description: "Omgang met hulpdiensten" },
    { id: 23, title: "Criminaliteit & Ambtenaren", category: "overheid", penalty: 5, description: "Ambtenaren en illegale activiteiten" },
    { id: 24, title: "Overvallen & Oplichten", category: "criminaliteit", penalty: 3, description: "Regels voor overvallen" },
    { id: 25, title: "Overval Regels", category: "criminaliteit", penalty: 4, description: "Specifieke overval regels" },
    { id: 26, title: "Wraak en liquidaties", category: "criminaliteit", penalty: 2, description: "Revenge en moord regels" },
    { id: 27, title: "Overvallen", category: "criminaliteit", penalty: 4, description: "Algemene overval regels" },
    { id: 28, title: "Campen", category: "criminaliteit", penalty: 2, description: "Locaties bewaken verboden" },
    { id: 29, title: "Rippen", category: "criminaliteit", penalty: 2, description: "Spullen stelen regels" },
    { id: 30, title: "Witwassen", category: "criminaliteit", penalty: 2, description: "Witwassers overvallen" },
    { id: 31, title: "Bodycams", category: "overige", penalty: 1, description: "Gebruik van camera's" },
    { id: 32, title: "Herkenning", category: "overige", penalty: 2, description: "Spelers herkennen" },
    { id: 33, title: "Alternatieve karakters", category: "overige", penalty: 6, description: "Alt accounts verboden" },
    { id: 34, title: "Wisselen van baan", category: "overige", penalty: null, description: "Wachttijd tussen banen" },
    { id: 35, title: "Real life trading", category: "overige", penalty: 7, description: "Echt geld handel verboden" },
    { id: 36, title: "Bedrijven/huizen", category: "overige", penalty: 5, description: "Eigendom regels" },
    { id: 37, title: "Graphic packs", category: "overige", penalty: 6, description: "Grafische modificaties" }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    if (selectedSection === "home") {
      return (
        <div className="space-y-8">
          <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Algemene Plaatselijke Verordening
            </h1>
            <p className="text-xl text-gray-600 mb-2">Zaancity Roleplay</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Door het betreden van Zaancity gaat u automatisch akkoord met deze wet- en regelgeving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Openbare Orde
                </CardTitle>
                <CardDescription>
                  Regels voor algemeen gedrag en roleplay kwaliteit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  18 artikelen over basis roleplay regels, van Fail-RP tot kledingvoorschriften.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Overheid
                </CardTitle>
                <CardDescription>
                  Regels specifiek voor overheidsmedewerkers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  5 artikelen over gedrag van en tegen overheidsmedewerkers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-500" />
                  Criminele Activiteiten
                </CardTitle>
                <CardDescription>
                  Regels voor illegale handelingen en overvallen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  7 artikelen over overvallen, wraak, rippen en criminele activiteiten.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Strafcategorieën</CardTitle>
              <CardDescription>
                Overzicht van de verschillende strafmaatregelen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <div key={category.id} className="text-center">
                    <Badge className={`${category.color} mb-2 text-xs px-2 py-1`}>
                      Categorie {category.id}
                    </Badge>
                    <p className="text-sm font-medium">{category.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    if (selectedSection === "strafbepaling") {
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strafbepaling</h2>
            <p className="text-gray-600 mb-6">
              De straffen zijn verdeeld in de volgende categorieën en kunnen preventief opgelegd worden voor nader onderzoek.
            </p>
          </div>

          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className={`${category.color} text-sm`}>
                        Categorie {category.id}
                      </Badge>
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Belangrijke informatie</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Staff kan straffen verhogen of verlagen op basis van context en eerdere overtredingen</li>
                <li>• Herhaalde overtredingen leiden tot zwaardere straffen</li>
                <li>• Bij veel bans is er kans op permanente verbanning</li>
                <li>• Categorieën zijn richtlijnen en kunnen per situatie aangepast worden</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      );
    }

    const sectionArticles = filteredArticles.filter(article => article.category === selectedSection);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
            {selectedSection.replace('-', ' ')}
          </h2>
        </div>

        <div className="space-y-4">
          {sectionArticles.map((article) => (
            <Card 
              key={article.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Artikel {article.id} - {article.title}
                  </h3>
                  {article.penalty && (
                    <Badge className={`${categories[article.penalty - 1]?.color} ml-4 flex-shrink-0`}>
                      Categorie {article.penalty}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600">{article.description}</p>
                <p className="text-sm text-blue-600 mt-2">Klik voor meer details en voorbeelden →</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Zaancity APV</h1>
                <p className="text-xs text-gray-500">Algemene Plaatselijke Verordening</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Zoek in artikelen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`w-64 flex-shrink-0 ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Inhoudsopgave</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-96">
                  <nav className="space-y-1 p-4">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSection(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors ${
                            selectedSection === item.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Mobile Search */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Zoek in artikelen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {renderContent()}
          </main>
        </div>
      </div>

      {/* Article Detail Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedArticle && articleDetails[selectedArticle.id] && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-xl">
                  Artikel {selectedArticle.id} - {articleDetails[selectedArticle.id].title}
                  {selectedArticle.penalty && (
                    <Badge className={categories[selectedArticle.penalty - 1]?.color}>
                      Categorie {selectedArticle.penalty}
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription>
                  Gedetailleerde uitleg en voorbeelden
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Beschrijving</h3>
                  <p className="text-gray-700">{articleDetails[selectedArticle.id].fullContent}</p>
                </div>

                {articleDetails[selectedArticle.id].examples && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Voorbeelden</h3>
                    <ul className="space-y-2">
                      {articleDetails[selectedArticle.id].examples.map((example, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {articleDetails[selectedArticle.id].powerGaming && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Powergaming</h3>
                    <p className="text-gray-700 mb-3">{articleDetails[selectedArticle.id].powerGaming}</p>
                    {articleDetails[selectedArticle.id].powerExamples && (
                      <ul className="space-y-2">
                        {articleDetails[selectedArticle.id].powerExamples.map((example, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {articleDetails[selectedArticle.id].note && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-yellow-800">Belangrijk</h3>
                    <p className="text-yellow-700">{articleDetails[selectedArticle.id].note}</p>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-blue-800">Strafmaat</h3>
                  <p className="text-blue-700">
                    {categories[selectedArticle.penalty - 1]?.name} - {categories[selectedArticle.penalty - 1]?.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 Zaancity Roleplay - Algemene Plaatselijke Verordening</p>
            <p className="mt-2">Door het betreden van Zaancity gaat u automatisch akkoord met deze regelgeving.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
