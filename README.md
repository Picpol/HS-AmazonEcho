# HS-AmazonEcho
Gira Homeserver Anbindung an Amazon-Echo

Ziel dieses Projekts ist die Anbindung von Amazon-Echo (Alexa) über den Gira Homeserver an den KNX Bus zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter Logikbaustein und eine dazugehörige AWS (Amazon Web Service) Lambda-Function.
In der aktuellen Implementierung wurden über die Smart Home Skill API, die "Discovery Messages", "On/Off Messages" und die "Percentage Messages" umgesetzt.

Auch wenn ich die Software bei mir erfolgreich im Einsatz habe, erfolgt die Verwendung auf eigenes Risiko!

Hardware-Voraussetzungen:
* Amazon Echo/Echo Dot
* Gira Homeserver (getestet mit Firmware 4.4)

Was wird ausser der hier bereitgestellten Software sonst noch benötigt:
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Forwarding

...

Die Beschreibung zur Installation und Konfiguration wird gerade im Wiki aufgebaut
