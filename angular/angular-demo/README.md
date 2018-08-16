
# DNUG Angular
## Ablauf Demo
- Anzeigen von String (Hardcoded und als Variable)
- Input hinzufügen -> Werte verändern und in View ausgeben (evtl State?)

## Aufsetzen eines Projekts
- CLI installieren
- Projekt über CLI erstellen
  - Erstellt Grundstruktur
  - Inklusive Tests und E2E-Tests
  - Erstellung kann mittels CLI-Parametern konfiguriert werden.
- Über `ng serve` kann der dev-Server gestartet werden.

## Struktur der App
- Hauptanwendung liegt im `src`-Ordner
- Klassiche Web-Aufteilung (HTML, JS, CSS)
- Namens-Konventionen als eine Art Namespace (app besteht aus componente, test, view und styling)
- Die App Komponente wird in der `app.module.ts` eingebunden.

## Demo
### Anzeigen von String
- Anzeigen von Hardcoded Strings in der `app.component.html` 
- Variablen werden in der dazugehörigen `app.component.ts` definiiert und geändert. 
  - Variablen sind dabei 

### Reagieren auf Events
- Events aus dem HTML heraus sind bei Angular Outputs. Diese werden im Markup als html Attribute mit angegeben.
- Semantic Sugar: Um visuell zwischen den Data-Bindings (Input, Output oder Two-Way) zu unterscheiden, werden 
  - Inputs mit Klammern versehen: `(click)="doMagic()"`
  - Outputs werden mit eckigen Kalmmern versehen: `[someAttribute]="myVar"`
  - Two-Way-Binding verwendet beides zusammen (Die Banane in der Box): `[(someAttribute)]="someValue"`

#### Two-Way-Binding 
Einbinden von `FormsModule` ist für das Two-Way-Binding auf `ngModule` nötig.

### State Veränderungen
- Lokaler State ist die Komponenen-Klasse. Es ist alles intern für die angezeigt View.
- Globaler State über die Provider (Servies) ermöglicht.
  - Durch die Dependency Injection haben die Komponenten stets die aktuellen Werte, wenn diese benötigt werden.

### Komponenten Erstellung

### Properties
- Properties können von der Parent-Komponente als Input, Output oder Two-Way-Binding an einer Child-Komponente weitergegeben werden.
- Im Beispiel wird als Input die Variable `myName` definiert, welche im Parent den Wert `DNUG` gesetzt bekommt.
