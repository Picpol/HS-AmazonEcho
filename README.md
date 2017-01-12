# GiraHS-AmazonEcho
Achtung: Verwendung erfolgt auf eigenes Risiko!

Ziel dieses Projekts ist die Anbindung von Amazon-Echo (Alexa) über den Gira Homeserver an den KNX Bus zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter Logikbaustein und eine dazugehörige AWS (Amazon Web Service) Lambda-Function.
In der aktuellen Implementierung V0.2 wurden über die Smart Home Skill API, die "Discovery Messages", "On/Off Messages", "Percentage Messages" und die "Temperature Control Messages" umgesetzt.

Voraussetzungen:
* Gira Homeserver (getestet mit Firmware 4.2, 4.4 und 4.5)
* Amazon Echo/Echo Dot
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Weiterleitung im Internet-Router
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto (Hinweis: für die Registrierung am AWS müssen Kreditkarteninformationen eingegeben werden, siehe auch Hinweise zum AWS-Konto unter https://github.com/Picpol/HS-AmazonEcho/wiki)

**Zur Einrichtung der Amazon Dienste bitte die PDF-Anleitung https://github.com/Picpol/HS-AmazonEcho/blob/master/Einrichtung%20eines%20Amazon%20Account%20f%C3%BCr%20Nutzung%20eines%20Echos%20oder%20Dots%20_V2.1.pdf verwenden.**  
(Hinweis: Die Wiki-Version ist in diesem Bereich evtl. noch unvollständig.)  

**Download des Bausteins über `rechte Maustaste -> Ziel speichern unter ...` der nachfolgenden URL**  
https://raw.githubusercontent.com/Picpol/HS-AmazonEcho/master/13626_Amazon%20Echo%20(13626)_V0.2.hsl

Ausblick auf die V0.3:  
zusätzliche Anbindung eines Custom Skill um auch Werte des KNX-Bus abzufragen. z.B.:
* Welche Temperatur hast das Wohnzimmer?
* Ist das Licht im Büro eingeschaltet?
* Welche Temperatur hat das Wasser im Pool?
* Ist das Fenster im Büro geschlossen?

