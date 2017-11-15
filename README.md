# GiraHS-AmazonEcho

:exclamation:**Jetzt gibt es die "Alexa-Gira HomeServer" Anbindung von mir auch als fertiges Produkt.  
Neue Features:**  
* einfach als Skill zu aktivieren, es muss nur noch der Logikbaustein installiert werden
* arbeitet ohne Portfreigabe (somit auch kein SSL-Zertifikat notwendig)
* überarbeitete und verbesserte Funktionalität  

**Weitere Informationen unter http://alexa-knx.de :exclamation:**

**Achtung: Verwendung erfolgt auf eigenes Risiko!**  

Ziel dieses Projekts ist die Anbindung von **Amazon-Echo (Alexa)** über den **Gira Homeserver an den KNX Bus** zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter **Logikbaustein** und eine dazugehörige **AWS (Amazon Web Service) Lambda-Function**.  

Die Anbindung erfolgt hierbei über 
* einen Smart-Home-Skill zum Schalten, Dimmen von KNX-Objekten (Geräte)
* einen optionalen Custom-Skill zum Schalten, Dimmen, und Abfragen von KNX-Objekten quasi als "Proof of Concept"

Der Custom-Skill muss vor dem gewünschten Sprachkomando über ein selbst festzulegendes Aktivierungswort gestartet werden.

**Voraussetzungen**:
* Gira Homeserver (Firmware >= 4.2)
* Amazon Echo/Echo Dot
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Weiterleitung im Internet-Router
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto  

weitere Informationen siehe **Wiki: https://github.com/Picpol/HS-AmazonEcho/wiki**

Diskussion im **KNX-User-Forum : https://knx-user-forum.de/forum/%C3%B6ffentlicher-bereich/knx-eib-forum/1010815-amazon-echo-logikbaustein**

**Änderungen von V0.2 auf V0.3**:
* zusätzliche Möglichkeit über den Custom-Skill Werte vom KNX-Bus abzufragen
* in der JSON-Konfiguration können jetzt Javascript-Kommentare verwendet werden
* statt der Angabe des "onOff" Attributes, kann jetzt ein "on" und/oder "off" Attribut verwendet werden um eine 1-Bit KNX-Gruppenadresse anzugeben. Damit kann man festlegen, ob ein Gerät mit dem jeweiligem Sprachkommando nur ein oder ausgeschaltet werden darf.
* die maximale Länge Bytes (Zeichen) der JSON Konfiguration ist jetzt 50.000 - bislang nur 10.000
* "Favicon-Requests" der Browser werden nicht mehr als unautorisierte Zugriffe gezählt
* im Log wird für die Set-Percentage und Set-Temperature Requestes auch der gesendete Wert ausgegeben
* kleinere Fehlerbehebungen und Verbesserungen

**Änderungen von V0.1 auf V0.2**:
* Unterstützung der "Temperature Control Messages" des Amazon "Smart Home Skill API "
  D.h. auf Raumebene kann optional mit dem Schlüsselwort "targetTemperature":"X/Y/Z" eine KNX Gruppenadresse für die   Solltemperaturvorgabe des Raumes angegeben werden
* auf Raumebene und Geräteebene kann optional mit dem Schlüsselwort "id": die Appliance-ID vorgegeben werden. Der ID darf nur aus Buchstaben und Ziffern bestehen, da Alexa sonst damit nicht klarkommt. Für die Aliasenamen wird zusätzlich automatisch eine laufende Nummer angehängt.
* Log-Ausgabe mit der Möglichkeit diese über die Homeserver Debug-Seite einzusehen
* Die Fehlerbehandlung sollte besser geworden sein
* Das Character-Encoding sollte besser gehandhabt werden z.B.: korrekte Darstellung der Umlaute nach dem abspeichern der Konfiguration
* korrekte Behandlung von Umlauten im im Access-Token
* sonstige kleinere Änderungen
* das erste Gerät in der Appliance-Liste wird nicht mehr unter dem Raumnamen an Alexa gemeldet.
* das optionale Schlüsselwort "value" zur Vorgabe des Einschaltwertes wurde umbenannt in "onValue"

  Zum Update von V0.1 auf V0.2: muss man sowohl die GiraHS.js als auch den Logikbaustein updaten.
  Die Ein- und Ausgänge des Bausteins haben sich allerdings geändert:
* zwei zusätzliche Eingänge zur Steuerung der Log-Ausgabe (am besten erstmal Default-Werte verwenden) der bisherige Textausgang A1 (Systemlog) entfällt und muss durch einen Zählerausgang ersetzt werden.
* Dieser protokolliert die Anzahl der Zugriffe ohne gültiges Access Token.
