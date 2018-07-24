1. Aufsetzen des Projekts
es gibt verschiedene Wege mit der Nutzung von React zu beginnen

A) Einfache .html Datei mit kurzem script
B) Starter Pakete, die viel Arbeit abnehmen (bspw. create-react-app)
C) Boilerplate Code, bspw. BRICKMAKERS react-redux-starter
D) Selbst konfigurieren von Anfang bis Ende (klingt schwerer als es ist)

Wir wählen zunächst Variante B:

''' npx create-react-app react-demo
''' cd react-demo
''' npm start

2. Anzeige von Text und Bildern

Um die erste Änderung zu sehen, bearbeiten wir wie von unserer Anwendung empfohlen die Datei "src/App.js".

Die render() Funktion gibt JSX zurück, das sieht im ersten Moment aus wie ganz normales HTML. 
In React müssen wir jedoch das Attribut classNames verwenden, statt des üblichen css class.

a) Anzeige von Text: 
Um nun einen beliebigen Text in unserem Browser zu sehen fügen wir diesen einfach in der render() Funktion ein.

b) Anzeige von Bildern:
Bilder werden zunächst per import ''import logo from './logo.png';'' geladen und danach wieder mit klassischem html eingebunden ''<img src={logo} >

-> Hier sehen wir das erste Mal eine neue Funktion mit JSX. wir können ganz einfach das oben geladene Bild als Variable verwenden und dem src Attribut zuweisen.

3. Anzeige von Text aus Variablen:
Nun wissen wir ja bereits, dass wir im JSX Code auch direkt Variablen verwenden können, also lagern wir die Willkommensnachricht in einen String aus.

Dafür definieren wir einfach eine Variable oberhalb des return statements. In JSX kann man jederzeit JavaScript verwenden, dafür muss man einfach die {} verwenden.

4. Reagieren auf Events

Als nächstes wollen wir uns Events genauer ansehen. Dafür erstellen wir uns erst einmal mit html ein input Feld sowie einen button zum bestätigen der Text Eingabe.

a) onChange Event mit einem Text Input:
''' <input type="text" />
Wir fügen ein einfaches Event hinzu:
''' <input onChange={(e) => console.log(e.target.value)} type="text" />
Hier deklarieren wir innerhalb der geschweiften Klammern eine Funktion die mit dem Event Parameter e aufgerufen wird und danach eine Konsolenausgabe mit dem aktuellen Wert startet.

b) onClick Event mit Button
Für den Button geht das genauso, der Event Handler dafür ist ''onClick''


