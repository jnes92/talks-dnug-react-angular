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


5. Deklarieren von Hilfsmethoden in einer Componente
Time to REFACTOR :D

Aktuell haben wir 2 Funktionen innerhalb der Render Funktion deklariert (sogar schlimmer, innerhalb der Tags: input / button).
Das wollen wir möglichst schnell ändern, damit unser Code gut lesbar bleibt =) 

Dafür müssen wir nur 2 Funktionen innerhalb der Komponente deklarieren:
''' 
  changeInputValue = (e) => {
    console.log(e.target.value);
  }

  handleButtonClick = () => {
    console.log("User clicked the button.");
  }
'''

Dadurch vereinfacht sich unsere Render Funktion enorm:
''<input onChange={this.changeInputValue} type="text" />
''<button onClick={this.handleButtonClick}> Say Hello ! </button>

6. Der Komponenten State

Nun wollen wir den aktuellen Input Wert nicht nur in der Konsole ausgeben, sondern auch den aktuellen User begrüßen. Es soll eine Willkommensnachricht eingeblendet werden, nachdem der User auf den Button gedrückt hat.

a) User Input Wert.
Aber fangen wir erstmal damit an, die aktuelle Eingabe des Users innerhalb unserer Komponente zu speichern.
Dafür gibt es den Komponenten-State, diesen muss man innerhalb des Constructors definieren.

'''   constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }
'''

Als nächstes wollen wir nun das unser Input Feld aus der Render Funktion immer den aktuellen Wert aus dem State anzeigt.
Dafür ergänzen wir unser Input Tag mit dem Attribut 'value' und steuern so den angezeigten Wert.

Danach stellen wir aber fest, dass unser Input Feld nicht mehr auf Eingaben reagiert. Das liegt aber ganz einfach daran, dass unsere Funktion nicht den Wert aus dem State aktualisiert und somit immer mit dem gleichen Wert gerendert wird.

Um nun auch den Wert in dieser State-Variable zu speichern können wir unsere Funktionen leicht anpassen.
'''   changeInputValue = (e) => {
'''    this.setState({input: e.target.value})
'''  }

ACHTUNG:
nur im Konstruktor wird this.state direkt zugewiesen, ansonsten bekommt React nicht mit, dass der Wert geändert wird. Jedes ändern des States über die Funktion setState() triggert einen neuen Render() Vorgang und wir erhalten so die aktuellen Werte !

Danach können wir uns entweder wie vorher über einen console.log den aktuellen Wert aus dem State anzeigen oder in Chrome mit der Erweiterung React-Developer-Tools den State aus der Komponente anzeigen.

b) Anzeige der Willkommensnachricht:

Als erstes ergänzen wir die Render Funktion um einen weiteren Paragraphen:
''' <p> Sei gegrüßt, {this.state.input} ! </p>
Aktuell wird dieser Text, aber immer angezeigt. Wir wollen jedoch, dass der Text erst nach dem Klick auf den Button angezeigt wird.
Auch hier für können wir den State nutzen.

Wir ergänzen unseren initialen State um eine Variable 'showGreeting: false'. 
Nun können wir die Möglichkeiten von JSX auch direkt in der Render Funktion nutzen, um zu prüfen, ob showGreeting true ist.

2 Alternativen:

'''        {this.state.showGreeting ? <p> Sei gegrüßt, {this.state.input} ! </p>: null}
'''        {this.state.showGreeting && <p> Sei gegrüßt, {this.state.input} ! </p>}

Als letzten Mini Schritt müssen wir nun nur noch den State ändern, nachdem wir auf den Button geklickt haben und wir können unsere App wie gewünscht nutzen.

8. Erstellen einer eigenen Komponente
Wenn die App größer wird, dann ist es an der Zeit eine eigene Komponente für einen Teil der Anwendung zu erstellen.

Wir beginnen indem wir innerhalb der App.js eine neue Class erstellen, die von **React.Component** erbt.

Es gibt 2 unterschiedliche Arten von Komponenten, diese nenen sich stateless & stateful components (manchmal auch  funktional, class-based Komponente.) Wir zeigen in dem Beispiel beide.

Zunächst erstellen wir eine Klasse: SayHelloComponent.
Diese soll wie die AppComponent vorher wieder den Namen über den lokalen Komponenten State steuern.
Immer wenn wir den State verwenden wollen, müssen wir eine state-full component (oder auch class-based component) verwenden.

Außerdem wollen wir unsere Hilfsfunktionen aus der App direkt mit in die Komponente ziehen.

-> 2 Gründe für eine class-based component.


An der Stelle wollen wir den Code auch wieder etwas aufräumen... 
Jede Komponente sollte in einer eigenen Datei verwaltet werden.

Danach müssen wir die beiden Klassen innerhalb der Datei auch noch exportieren, damit wir sie innerhalb anderer Code Dateien nutzen können.



9. Benutzen von props

Um nun aus der Parent-Komponente App.js unserer Komponente SayHello einige Parameter übergeben zu können, wollen wir das Prinzip der Properties erklären.

Eine Komponente kann durch verschiedene Properties als Generallösung erstellt werden. Wir möchten zu Beginn einen **defaultValue** für unser input definieren. 


....

Nun haben wir noch unsere funktionale Komponente, die wieder den aktuellen Namen ausgeben soll, also übergeben wir ihr auch Props.