# GiraHS-AmazonEcho
Achtung: Verwendung erfolgt auf eigenes Risiko!

Ziel dieses Projekts ist die Anbindung von Amazon-Echo (Alexa) über den Gira Homeserver an den KNX Bus zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter Logikbaustein und eine dazugehörige AWS (Amazon Web Service) Lambda-Function.
In der aktuellen Implementierung V0.1 wurden über die Smart Home Skill API, die "Discovery Messages", "On/Off Messages" und die "Percentage Messages" umgesetzt.

Voraussetzungen:
* Gira Homeserver (getestet mit Firmware 4.4)
* Amazon Echo/Echo Dot
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Weiterleitung im Internet-Router
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto (Hinweis: für die Registrierung am AWS müssen Kreditkarteninformationen eingegeben werden, siehe https://github.com/Picpol/HS-AmazonEcho/wiki)



weitere Informationen siehe https://github.com/Picpol/HS-AmazonEcho/wiki
