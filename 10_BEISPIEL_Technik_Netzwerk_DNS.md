# Beispielpräsentation: DNS-Auflösungsproblem in der Buchhaltung

## Wozu ist dieses Dokument?

Eine vollständige Beispielpräsentation mit Technik-Fokus. Zeigt einen typischen Netzwerk-/DNS-Incident von Symptom bis Lösung. Mit Speaker Notes, Artefakt-Hinweisen und Prüferfragen.

---

## Metadaten

| Feld | Inhalt |
|------|--------|
| **Titel** | Analyse und Lösung eines DNS-Auflösungsproblems in der Buchhaltung |
| **Zielgruppe** | IT-Administratoren / IT-Leitung |
| **Ausgangslage** | Mehrere User der Buchhaltung können seit Montagmorgen nicht auf das ERP-System zugreifen |
| **Ziel** | Ursache identifizieren und beheben, Wiederholung verhindern |
| **Erfolgskriterien** | ERP-System erreichbar, Dokumentation erstellt, Prävention implementiert |
| **Scope** | DNS-Troubleshooting, keine ERP-Anwendungsprobleme |
| **Risiken** | Fehlkonfiguration könnte weitere Dienste beeinträchtigen |

---

## Folie 1: Titel + Zielgruppe

### Folientitel
**DNS-Auflösungsproblem in der Buchhaltung – Analyse und Lösung**

### Bulletpoints
- Präsentation von: [Dein Name]
- Datum: [Prüfungsdatum]
- Zielgruppe: IT-Administratoren

### Speaker Notes
> „Guten Tag, meine Präsentation richtet sich an IT-Administratoren. Ich zeige Ihnen heute, wie ich ein DNS-Problem analysiert und gelöst habe, das mehrere User in der Buchhaltung betroffen hat. Dabei gehe ich auf mein systematisches Vorgehen ein und zeige, wie ich die Wiederholung verhindert habe."

**Zeit:** 0:30

---

## Folie 2: Ausgangslage & Problem

### Folientitel
**Ausgangslage: Buchhaltung kann nicht arbeiten**

### Bulletpoints
- Montagmorgen, 08:15 Uhr: Mehrere Tickets aus der Buchhaltung
- Symptom: ERP-System „nicht erreichbar"
- Betroffen: 8 von 12 Arbeitsplätzen in der Buchhaltung
- Impact: Rechnungsstellung, Mahnwesen blockiert
- Dringlichkeit: Hoch (Monatsabschluss)

### Artefakt (Platzhalter)
> [Screenshot: Ticket mit Fehlermeldung „Server nicht gefunden"]

### Speaker Notes
> „Am Montagmorgen gingen mehrere Tickets ein. Die Buchhaltung konnte nicht auf das ERP-System zugreifen – die Fehlermeldung war ‚Server nicht gefunden'. 8 von 12 Arbeitsplätzen waren betroffen, 4 funktionierten noch. Das war kritisch, weil der Monatsabschluss anstand und Rechnungen rausmussten."

**Zeit:** 1:00

---

## Folie 3: Analyse-Ansatz

### Folientitel
**Systematische Analyse: Wo liegt das Problem?**

### Bulletpoints
- Hypothese 1: ERP-Server ist down
- Hypothese 2: Netzwerkverbindung unterbrochen
- Hypothese 3: DNS-Auflösung funktioniert nicht
- Vorgehen: OSI-Modell von unten nach oben
- Erste Tests: Ping Server-IP, Ping Server-Name

### Artefakt (Platzhalter)
> [Diagramm: Troubleshooting-Workflow oder OSI-Layer-Übersicht]

### Speaker Notes
> „Ich habe systematisch vorgegangen. Meine Hypothesen waren: Server down, Netzwerkproblem oder DNS-Problem. Da 4 Clients funktionierten, war der Server vermutlich nicht das Problem. Ich habe mit dem OSI-Modell gearbeitet: erst physisch prüfen, dann Netzwerk, dann DNS."

**Zeit:** 1:00

---

## Folie 4: Troubleshooting – Diagnose

### Folientitel
**Diagnose: Was funktioniert, was nicht?**

### Bulletpoints
- Test 1: `ping 192.168.1.50` (ERP-Server-IP) → **Erfolgreich**
- Test 2: `ping erp-server.firma.local` → **Fehlgeschlagen**
- Erkenntnis: IP erreichbar, aber DNS-Auflösung schlägt fehl
- Test 3: `nslookup erp-server.firma.local` → **Timeout**
- Test 4: `ipconfig /all` → DNS-Server: 192.168.1.5

### Artefakt (Platzhalter)
> [Screenshot: nslookup-Output mit Timeout-Fehlermeldung]

### Speaker Notes
> „Der Ping auf die IP funktionierte – der Server war also erreichbar. Aber der Ping auf den Hostnamen schlug fehl. Das deutete auf ein DNS-Problem hin. Mit nslookup habe ich bestätigt, dass die DNS-Auflösung nicht funktionierte. Die betroffenen Clients hatten als DNS-Server 192.168.1.5 konfiguriert."

**Zeit:** 1:30

---

## Folie 5: Root Cause & Entscheidung

### Folientitel
**Ursache gefunden: Falscher DNS-Server**

### Bulletpoints
- Root Cause: DHCP-Scope hatte falschen DNS-Server konfiguriert
- Änderung am Freitag: Neuer DNS-Server 192.168.1.10 eingeführt
- Alter DNS 192.168.1.5 wurde abgeschaltet
- DHCP-Scope nicht aktualisiert → Clients bekamen alten DNS
- Funktionierende Clients: Statische IP oder Lease nicht erneuert

### Artefakt (Platzhalter)
> [Screenshot: DHCP-Scope mit markierter DNS-Einstellung]

### Speaker Notes
> „Die Ursache war schnell gefunden: Am Freitag wurde ein neuer DNS-Server eingeführt, aber der DHCP-Scope wurde nicht aktualisiert. Clients, die am Wochenende oder Montagmorgen eine neue IP-Lease bekommen haben, erhielten den alten, abgeschalteten DNS-Server. Clients mit statischer IP oder noch gültiger Lease funktionierten noch."

**Zeit:** 1:30

---

## Folie 6: Lösung & Validierung

### Folientitel
**Lösung: DHCP korrigiert, Clients aktualisiert**

### Bulletpoints
- Maßnahme 1: DHCP-Scope auf neuen DNS-Server 192.168.1.10 aktualisiert
- Maßnahme 2: Betroffene Clients: `ipconfig /release` → `ipconfig /renew`
- Alternativ: Neustart der Clients
- Validierung: `nslookup erp-server.firma.local` → **Erfolgreich**
- Ergebnis: Alle 8 Clients können wieder auf ERP zugreifen

### Artefakt (Platzhalter)
> [Screenshot: Erfolgreicher nslookup nach der Korrektur]

### Speaker Notes
> „Die Lösung war einfach: Ich habe den DHCP-Scope auf den neuen DNS-Server aktualisiert. Dann habe ich die betroffenen Clients angewiesen, ihre IP-Lease zu erneuern. Nach dem Renew hatten alle Clients den richtigen DNS-Server und konnten das ERP-System wieder erreichen. Ich habe das mit nslookup validiert."

**Zeit:** 1:30

---

## Folie 7: Dokumentation & Prävention

### Folientitel
**Dokumentation und Maßnahmen zur Prävention**

### Bulletpoints
- Ticket-Dokumentation: Symptom, Diagnose, Root Cause, Fix
- Knowledge-Base-Eintrag: „DNS-Probleme nach Infrastrukturänderung"
- Prävention:
  - Change-Prozess: DHCP-Scope bei DNS-Änderung prüfen
  - Monitoring: Alert bei DNS-Server-Nichterreichbarkeit
- Kommunikation: Info an Team über Root Cause

### Artefakt (Platzhalter)
> [Screenshot: Knowledge-Base-Eintrag oder Ticket-Abschluss]

### Speaker Notes
> „Ich habe das Ticket vollständig dokumentiert: Symptom, Diagnose, Ursache und Lösung. Außerdem habe ich einen Knowledge-Base-Eintrag erstellt, damit das Team bei ähnlichen Problemen schneller reagieren kann. Als Präventionsmaßnahme habe ich vorgeschlagen, bei DNS-Änderungen den DHCP-Scope zu prüfen und ein Monitoring für DNS-Erreichbarkeit einzurichten."

**Zeit:** 1:00

---

## Folie 8: Fazit & Lessons Learned

### Folientitel
**Fazit: Systematik zahlt sich aus**

### Bulletpoints
- Problem in 45 Minuten gelöst
- Strukturiertes Vorgehen (OSI-Modell) hat Zeit gespart
- Lesson Learned: Änderungen immer ganzheitlich betrachten
- Nutzen: Buchhaltung konnte Monatsabschluss rechtzeitig machen
- Ich freue mich auf Ihre Fragen!

### Speaker Notes
> „Zusammenfassend: Das Problem wurde in 45 Minuten gelöst. Das systematische Vorgehen nach dem OSI-Modell hat mir geholfen, schnell die richtige Ursache zu finden. Meine wichtigste Erkenntnis: Bei Infrastrukturänderungen müssen alle abhängigen Systeme geprüft werden – in diesem Fall der DHCP-Scope. Die Buchhaltung konnte ihren Monatsabschluss rechtzeitig durchführen. Ich freue mich auf Ihre Fragen."

**Zeit:** 1:00

---

## Artefakte (Platzhalter-Übersicht)

| Folie | Artefakt | Beschreibung |
|-------|----------|--------------|
| 2 | Ticket-Screenshot | Fehlermeldung „Server nicht gefunden" |
| 3 | Troubleshooting-Workflow | OSI-Layer oder Hypothesen-Diagramm |
| 4 | nslookup-Output | Timeout-Fehlermeldung |
| 5 | DHCP-Scope | DNS-Server-Einstellung markiert |
| 6 | nslookup erfolgreich | Nachweis der Lösung |
| 7 | KB-Eintrag/Ticket | Dokumentation |

---

## Prüferfragen und Model-Antworten

### Frage 1: Was ist DNS und wofür wird es gebraucht?
> **Antwort:** DNS steht für Domain Name System. Es übersetzt Hostnamen wie ‚erp-server.firma.local' in IP-Adressen wie ‚192.168.1.50'. Das ist nötig, weil Menschen mit Namen arbeiten, aber Netzwerke mit IP-Adressen. Ohne DNS müssten wir uns alle IP-Adressen merken.

### Frage 2: Warum haben Sie mit dem OSI-Modell gearbeitet?
> **Antwort:** Das OSI-Modell hilft, Probleme systematisch einzugrenzen. Ich beginne bei Layer 1 – physische Verbindung – und arbeite mich nach oben. So kann ich schnell ausschließen, welche Schichten funktionieren, und mich auf die fehlerhafte Schicht konzentrieren.

### Frage 3: Was ist ein DHCP-Lease?
> **Antwort:** Ein DHCP-Lease ist die zeitlich begrenzte Zuweisung einer IP-Adresse an einen Client durch den DHCP-Server. Nach Ablauf der Lease-Zeit muss der Client die Adresse erneuern. Dabei bekommt er auch aktualisierte Einstellungen wie DNS-Server.

### Frage 4: Welche Alternative hätten Sie zur DHCP-Korrektur gehabt?
> **Antwort:** Kurzfristig hätte ich den Clients manuell einen statischen DNS-Server konfigurieren können. Das wäre aber nur ein Workaround gewesen – bei der nächsten Lease-Erneuerung wäre das Problem wieder aufgetreten. Die DHCP-Korrektur ist die nachhaltige Lösung.

### Frage 5: Was ist der Unterschied zwischen A-Record und CNAME?
> **Antwort:** Ein A-Record mappt einen Hostnamen direkt auf eine IP-Adresse. Ein CNAME ist ein Alias, der auf einen anderen Hostnamen zeigt. Zum Beispiel könnte ‚erp.firma.local' ein CNAME sein, der auf ‚erp-server.firma.local' zeigt.

### Frage 6: Was wäre passiert, wenn auch die IP-Ping nicht funktioniert hätte?
> **Antwort:** Dann hätte ich das Problem weiter unten im OSI-Modell gesucht: Netzwerkverbindung prüfen, Gateway erreichbar?, Routing-Problem? Eventuell wäre dann der Server selbst oder die Netzwerkinfrastruktur das Problem gewesen.

### Frage 7: Warum haben Sie ein Monitoring vorgeschlagen?
> **Antwort:** Damit wir beim nächsten Mal proaktiv informiert werden, bevor User sich melden. Ein Alert bei DNS-Nichterreichbarkeit hätte uns am Montagmorgen sofort informiert, bevor die ersten Tickets reinkamen.

### Frage 8: Was ist der Unterschied zwischen internem und externem DNS?
> **Antwort:** Internes DNS löst Namen innerhalb des Firmennetzwerks auf, zum Beispiel für Server und Dienste. Externes DNS löst Internetnamen auf. In vielen Firmen gibt es beide: interne DNS-Server für Firmenressourcen, die dann externe Anfragen an öffentliche DNS-Server weiterleiten.

### Frage 9: Was verstehen Sie unter DNS-Caching?
> **Antwort:** DNS-Caching bedeutet, dass aufgelöste Namen zwischengespeichert werden – sowohl auf dem Client als auch auf DNS-Servern. Das beschleunigt weitere Anfragen, kann aber auch dazu führen, dass veraltete Einträge verwendet werden. Mit ‚ipconfig /flushdns' kann man den Client-Cache leeren.

### Frage 10: Wie hätten Sie das Problem anders dokumentieren können?
> **Antwort:** Alternativ zum Ticket hätte ich ein Post-Incident-Review machen können, wenn das Problem größer gewesen wäre. Bei einem Major Incident wäre auch eine Timeline und ein Lessons-Learned-Workshop angebracht gewesen.

---

## Quellen (Kurz)

- [IT Process Wiki: Incident Management](https://wiki.en.it-processmaps.com/index.php/Incident_Management) – Dokumentationsstandards
- [Atlassian: Problem Management](https://www.atlassian.com/itsm/problem-management) – Root Cause Analysis
- [IHK Bewertungskriterien](https://www.ihk.de/blueprint/servlet/resource/blob/2618244/21345f4e591a4a035d4e1ca68c3c011f/kriterien-bewertung-praesentation-data.pdf) – Strukturierte Darstellung
