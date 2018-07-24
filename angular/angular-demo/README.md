
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




## Versionierung
Semver für die Versionen. Größere Änderungen passieren zwischen den einzelnen Versionen.
> Welche?




---
---

# AngularDemo
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
