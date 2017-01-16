# GiraHS-AmazonEcho
**Achtung: Verwendung erfolgt auf eigenes Risiko! Beim Update des Logikbausteins von Version V0.2 auf V0.3 geht die JSON-Gerätekonfiguration im Gira Homeserver verloren und muss deshalb im Anschluß neu "hochgeladen" werden**

Ziel dieses Projekts ist die Anbindung von **Amazon-Echo (Alexa)** über den **Gira Homeserver an den KNX Bus** zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter **Logikbaustein** und eine dazugehörige **AWS (Amazon Web Service) Lambda-Function**.  

Die Anbindung erfolgt hierbei über 
* einen Smart-Home-Skill zum Schalten, Dimmen von KNX-Objekten (Geräte)
* einen optionalen Custom-Skill zum Schalten, Dimmen, und Abfragen von KNX-Objekten

Der Custom-Skill muss vor dem gewünschten Sprachkomando über ein selbst festzulegendes Aktivierungswort gestartet werden.

**Voraussetzungen**:
* Gira Homeserver (Firmware 4.2, 4.4 und 4.5)
* Amazon Echo/Echo Dot
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Weiterleitung im Internet-Router
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto  

weitere Informationen siehe Wiki https://github.com/Picpol/HS-AmazonEcho/wiki
