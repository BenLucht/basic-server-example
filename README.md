# Der Server 
## Vorbereitungen

Wie kann ich mit JavaScript ein Backend aufziehen? Wie betreibe ich einen Server? 

Als erstes braucht es einen Weg JS auf dem eigenen Rechner laufen zu lassen. Ursprünglich gab es nur genau eine Laufzeitumgebung für Javascript: den Browser. Dann kam vom Erfinder eine Umgebung für den PC. Darüber hinaus gibt es seit ein paar Jahren (seit 2009, also ein paar Jahre mehr) NodeJS (https://nodejs.org/en/), welches sich prinzipiell als Standard durchgesetzt hat. Das kann man im Grunde einfach wie ein normales Programm installieren (wenn irgendwo gefragt wird, ob man etwas zum "Pfad" hinzufügen will, dann ja klicken, dazu später mehr). 

## Vorbereitungen - Test
_```Zugehörige Datei 01_server.js```_

Um auszuprobieren, ob alles geklappt hat, kann man ein kleines Beispiel ausprobieren. 

Einfachste Methode meiner Meinung nach: 
- VSCode installieren (https://code.visualstudio.com/download) 
- Neue Datei erstellen und den Namen ```test.js``` geben. 
- In dieser Datei einfach ```console.log('test');``` eingeben und speichern. 
- Unten in der linken Ecke des Fensters sind ein "x" und ein "Warndreieck". Darauf klicken. Es öffnet sich ein neues Panel mit den Optionen Problems, Output, Debug Console und Terminal. 
- Terminal auswählen und dort eintippen ```node test.js``` und "Enter" drücken (wichtig ist, dass die Konsole im selben Ordner läuft, wie die Datei. Da steht am Zeilenanfang sowas wie meinPC:Desktop auf dem Mac oder ein Dateipfad bei Windows .. jedenfalls immer gucken, dass da der selbe Ordner steht, wo auch die Datei liegt! Im Zweifel einfach VSCode schließen und Datei neu in VSCode öffnen. Ansonsten könnt ihr mit ```cd ..``` einen Ordner nach oben gehen und mit ```cd Ordnername``` in einen Ordner hinein. Aber genug davon, bei Fragen fragen, das soll ja kein Konsolentutorial sein.). Dieser Befehl bedeutet einfach nur, dass Node die Datei ```test.js``` ausführen soll. Der Befehl funktioniert allerdings nur, wenn das Betriebssystem auch weiß, dass es ihn gibt. Deshalb bei der Installation der Hinweis zu akzeptieren, falls man gefragt wird, ob etwas zum "Pfad" hinzugefügt werden soll. Wenn alles klappt, dann sollte in einer der nächsten Zeilen unser Text "test" zu lesen sein. Falls das der Fall ist, steht dem Betrieb eines kleinen Servers nicht mehr viel im Wege! (Und wenn nicht, dann hilft Tom ;) )

## Vorbereitungen - Wie funktioniert ein Server eigentlich?
Wir sind also so weit gekommen. Bevor wir unseren ersten Server programmieren noch ein Wort zur Funktion: Ein Server ist ein Programm, das man ein mal startet und das läuft dann einfach erst mal. Unser ```test.js``` lief ja einfach durch; wir haben es aufgerufen, es ist alle Zeilen durchlaufen und hat dabei gemacht, was da stand, dann war es fertig und hat sich beendet. Der Server startet und hört erst mal nicht wieder auf. Während er läuft, hört er auf eine "Internetadresse" und sobald diese aufgerufen wird, tut der Server das, was man ihm einprogrammiert hat (in der Regel an den Aufrufenden eine HTML-Datei zurücksenden, oder Daten empfangen und eine Antwort zurückgeben). Das kann man beliebig komplex machen, aber im Grunde ist das die Essenz eines Servers.

## Durchführung
_```Zugehörige Datei 02_server.js```_

Um unseren ersten Server zu schreiben bedarf es wenig. In Node integriert ist das Modul „http“ und das ist alles, was wir für den Moment brauchen. Wir bleiben einfach in unserer Datei ```test.js```. Um die Konsolenausgabe bauen wir jetzt unseren Server herum:
```javascript
var http = require('http');

http.createServer(function (request, response) {
    console.log("test");
}).listen(8125);
```
Was passiert hier? Wir laden das Modul ```http```. Dieses Modul besitzt eine Funktion, die ```createServer``` heißt. Diese rufen wir auf. Normalerweise schreibt man in die Klammern einer Funktion irgendwelche Argumente (Zahlen, Wörter, Zeug), man kann aber als Argument auch eine andere Funktion verwenden. 

Noch mal einen Schritt zurück: wenn der Server läuft, dann hört er darauf, bis er aufgerufen wird und führt dann etwas aus. Genauso ist es hier, die Funktion „außen“ ist die, die zuhört, die Funktion „innen drin“ ist die, die ausgeführt wird, wenn die außen etwas gehört hat. 

Die Funktion "innen" muss eine gewisse Struktur haben, damit etwas sinnvolles dabei herauskommen kann. Auch die innere Funktion bekommt Argumente, hier „request“ und „response“. Ignorieren wir diese erst mal geschickt und belassen es in dieser Funktion einfach mal bei unserer Konsolenausgabe. Fehlt noch eins: am Ende muss unser Server noch wissen, auf was er hören soll. Also hängen wir noch ein ```.listen(1337)``` an. Das Argument kann nur eine Zahl sein (möglichst 4- bis 5-stellig, warum ist nicht so entscheidend). Das ist der sogenannte "Port". Zur IP-Adresse gehört ein Port. So zum Beispiel "123.231.312.222:PORT". Der "Port" steht also am Ende der IP-Adresse, getrennt durch einen Doppelpunkt. Man hätte das auch anders lösen können, aber die Erfinder des Internets haben es so gemacht (und es funktioniert auch recht gut).

Die Funktion "innen" muss eine gewisse Struktur haben, damit etwas sinnvolles dabei herauskommen kann. Auch die innere Funktion bekommt Argumente, hier „request“ und „response“. Ignorieren wir diese erst mal geschickt und belassen es in dieser Funktion einfach mal bei unserer Konsolenausgabe. Fehlt noch eins: am Ende muss unser Server noch wissen, auf was er hören soll. Also hängen wir noch ein ```.listen(1337)``` an. Das Argument kann nur eine Zahl sein (möglichst 4- bis 5-stellig, warum ist nicht so entscheidend). Das ist der sogenannte "Port". Zur IP-Adresse gehört ein Port. So zum Beispiel "123.231.312.222:PORT". Der "Port" steht also am Ende der IP-Adresse, getrennt durch einen Doppelpunkt. Man hätte das auch anders lösen können, aber die Erfinder des Internets haben es so gemacht (und es funktioniert auch recht gut).
Was bleibt also noch? Genau, Datei speichern und wieder ```node test.js``` im Terminal eintippen. Wenn in der nächsten Zeile erst mal nichts steht, dann sieht es gut aus. Gehen wir in einen Internetbrowser und geben in die Adresszeile "127.0.0.1:1337" ein ("127.0.0.1" ist immer die Adresse des eigenen Computers, wird auch "localhost" genannt, man kann also auch "localhost:1337" eintippen) und drücken „Enter“. Wenn wir wieder ins Terminal schauen, dann sollte dort "test" stehen! Die Adresse in den Browser zu geben wurde vom Server gehört und der hat die Funktion aufgerufen, die die Konsolenausgabe auslöst! Wir haben unsere erste sogenannte "get-request" durchgeführt. Apropos request: wir können den Server mit "control+c" stoppen und die Datei verändern. 

## Durchführung - Was passiert im Server?
_```Zugehörige Datei 03_server.js```_

Ersetzen wir "test" gegen das Wort request,
```javascript
var http = require('http');

http.createServer(function (request, response) {
    console.log(request);
}).listen(8125);
```
speichern und wieder ```node test.js```. Wenn wir jetzt im Browser die Adresse neu laden, dann sollte in der Konsole eine Unmenge an Informationen erscheinen. Das ist alles, was der Browser so in die Welt schickt, wenn man versucht eine Internetseite zu öffnen. Ihr könnt ja mal durchlesen, was da alles so enthalten ist, aber kleiner Spoiler: eine Menge über eure Anfrage und euren Computer.

## Durchführung - Im Browser 
_```Zugehörige Datei 04_server.js```_

Bis jetzt haben wir ausschließlich Informationen in der Konsole. Nachdem wir im Browser die Adresse aufrufen passieren Dinge im Server, aber im Browser tut sich nichts. Das wollen wir jetzt ändern. In unserer "inneren" Funktion haben wir noch ein Argument, das wir bis jetzt nicht benutzen: ```response```. Wie das Wort schon aussagt, das ist die Antwort des Servers an die ihm gestellte Anfrage ```request```. Wir sollten also die FUnktionalität von ```response``` nutzen, um dem Browser etwas zurückzusenden. Das funktinoiert sehr einfach
```javascript
var http = require('http');

http.createServer(function (request, response) {
    console.log(request);
    response.end('This is a response');
}).listen(8125);
```
Unser Text "This is a response" sollte nun im Browserfenster zu lesen sein. Die Antwort sieht nicht schön aus, einfach nur Text, aber das muss nicht sein, man kann auch HTML zurücksenden und die meisten Browser sind intelligent genug programmiert, um das Format auch zu erkennen
```javascript
var http = require('http');

http.createServer(function (request, response) {
    response.end('<html><body><h1 style="color: red;">This is a HTML response!</h1></body></html>');
}).listen(8125);
```
Im Browser sollte nun formatierter, roter Text zu lesen sein! 

## Fazit

Das sollte für den Moment erst mal an Informationen ausreichen. Funktionsfähiger Code befindet sich auch in den Dateien, die im Text als Referenz angegben sind (die Dateien heißen nicht alle ```test.js```, weil das schnell verwirrend würde, die funktionalität bleibt aber die selbe, wenn man ```node Dateiname.js``` in der Konsole/im Terminal eingibt). Es macht auch Sinn mal in die Dateien zu schauen, da sind noch ein paar Tricks und hilfreiche Tipps enthalten. Wenn es Fragen gibt, dann kommt einfach in Slack oder im nächsten Meetup auf euren Mentor zu und fragt nach. Bis dahin viel Spaß beim ausprobieren!

Ben

# TODOs
- [ ] Quellen finden und hinzufügen
- [ ] Weiterführende Links finden und hinzufügen
- [ ] Englische Version schreiben
