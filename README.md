# HS-AmazonEcho
Gira Homeserver Anbindung an Amazon-Echo

Der Autor dieses Programms haftet nicht für Schäden an Soft- oder Hardware
oder Vermögensschäden, die durch das Benutzen des Programms entstehen, es
sei denn diese beruhen auf einem grob fahrlässigen oder vorsätzlichen
Handeln des Autors, seiner Erfüllungsgehilfen oder seiner gesetzlichen
Vertreter.

Ziel dieses Projekts ist die Anbindung von Amazon-Echo (Alexa) über den Gira Homeserver an den KNX Bus zur Gebäudeautomation.
Kern dieser Anbindung ist ein für den Gira Homeserver entwickelter Logikbaustein und eine dazugehörige AWS (Amazon Web Service) Lambda-Function.
In der aktuellen Implementierung wurden über die Smart Home Skill API, die "Discovery Messages", "On/Off Messages" und die "Percentage Messages" umgesetzt.

Hardware-Voraussetzungen:
* Amazon Echo/Echo Dot
* Gira Homeserver

Was wird ausser der hier bereitgestellten Software sonst noch benötigt:
* Amazon Konto
* Amazon Developer Konto
* Amazon Webservice Konto
* Self Signed SSL-Certificate
* Dynamic DNS über MyFritz!, DynDns ...
* Port-Forwarding

...

Die Beschreibung zur Installation und Konfiguration wird gerade im Wiki aufgebaut
