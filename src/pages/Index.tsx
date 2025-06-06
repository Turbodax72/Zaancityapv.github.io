
import { useState } from "react";
import { Search, Menu, X, Book, Shield, Scale, Users, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Waarschuwing",
      color: "bg-green-100 text-green-800",
      description: "Lichte overtreding"
    },
    {
      id: 2,
      name: "1 dag ban + 20u taakstraf",
      color: "bg-yellow-100 text-yellow-800",
      description: "Matige overtreding"
    },
    {
      id: 3,
      name: "2 dagen ban + 25u taakstraf",
      color: "bg-orange-100 text-orange-800",
      description: "Ernstige overtreding"
    },
    {
      id: 4,
      name: "3 dagen ban + 30u taakstraf",
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

  const menuItems = [
    { id: "home", title: "Home", icon: Home },
    { id: "strafbepaling", title: "Strafbepaling", icon: Scale },
    { id: "openbare-orde", title: "Openbare Orde", icon: AlertTriangle },
    { id: "overheid", title: "Overheid", icon: Shield },
    { id: "criminaliteit", title: "Criminele Activiteiten", icon: Users },
    { id: "overige", title: "Overige Bepalingen", icon: Book }
  ];

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
            <p className="text-xl text-gray-600 mb-2">Springbank Roleplay</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Door het betreden van Springbank gaat u automatisch akkoord met deze wet- en regelgeving.
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
            <Card key={article.id} className="hover:shadow-md transition-shadow">
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
                <h1 className="text-xl font-bold text-gray-900">Springbank APV</h1>
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

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 Springbank Roleplay - Algemene Plaatselijke Verordening</p>
            <p className="mt-2">Door het betreden van Springbank gaat u automatisch akkoord met deze regelgeving.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
