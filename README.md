# GiraHS-AmazonEcho
Achtung: Verwendung erfolgt auf eigenes Risiko!

Ziel dieses Projekts ist die Anbindung von Amazon-Echo (Alexa) über den Gira Homeserver an den KNX Bus zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter Logikbaustein und eine dazugehörige AWS (Amazon Web Service) Lambda-Function.  
In der aktuellen Implementierung V0.3 wurden über die Smart Home Skill API, die "Discovery Messages", "On/Off Messages", "Percentage Messages" und die "Temperature Control Messages" umgesetzt. Zusätzlich kann man optional den in diesem "Softwarepaket" enthaltenen Custom Skill anbinden, mit welchem auch Abfragen auf den KNX Bus möglich sind. 

Voraussetzungen:
* Gira Homeserver (Firmware 4.2, 4.4 und 4.5)
* Amazon Echo/Echo Dot
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Weiterleitung im Internet-Router
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto  

weitere Informationen siehe Wiki https://github.com/Picpol/HS-AmazonEcho/wiki



