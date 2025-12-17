# Q&A Fragenkatalog: Typische Prüferfragen

## Wozu ist dieses Dokument?

Dieser Katalog enthält über 55 typische Prüferfragen, sortiert nach 7 Kategorien. Zu jeder Frage: Was will der Prüfer hören? Plus eine Beispielantwort. Nutze den Katalog zum Üben für das Fachgespräch.

---

## In 2 Minuten gelesen

- Prüferfragen testen Verständnis, nicht nur Auswendiglernen
- Strukturierte Antworten sind besser als lange Monologe
- Bei Nichtwissen: Ehrlich sein, Lösungsweg zeigen
- Die Kategorien spiegeln typische Prüfungsschwerpunkte wider
- Übe die Fragen laut – mit Stoppuhr (max. 30-60 Sekunden pro Antwort)

---

## Kategorie 1: Verständnis & Begriffe (12 Fragen)

### Frage 1.1: Was ist der Unterschied zwischen Incident und Problem?
**Was will der Prüfer hören?** ITIL-Begriffe verstanden, klare Abgrenzung.

> **Beispielantwort:** Ein Incident ist ein einzelnes Ereignis, das den Service stört – zum Beispiel „User kann nicht drucken". Ein Problem ist die zugrundeliegende Ursache, die einen oder mehrere Incidents verursacht – zum Beispiel „Druckertreiber veraltet". Incident Management stellt den Service schnell wieder her, Problem Management sucht und beseitigt die Ursache dauerhaft.

---

### Frage 1.2: Was versteht man unter SLA?
**Was will der Prüfer hören?** Definition, praktische Bedeutung.

> **Beispielantwort:** SLA steht für Service Level Agreement. Es ist eine Vereinbarung zwischen IT und Kunde, die definiert, welche Servicequalität zu erwarten ist – zum Beispiel Reaktionszeit von 4 Stunden bei Priority 2. SLAs machen Erwartungen messbar und schaffen Verbindlichkeit auf beiden Seiten.

---

### Frage 1.3: Was ist ein Ticket-System?
**Was will der Prüfer hören?** Funktion, Nutzen, Beispiele.

> **Beispielantwort:** Ein Ticket-System dokumentiert und verfolgt Anfragen und Störungen. Jede Anfrage bekommt eine Ticket-Nummer, damit nichts verloren geht. Es ermöglicht Priorisierung, Zuweisung an Bearbeiter und Nachverfolgung bis zur Lösung. Außerdem liefert es Kennzahlen wie Bearbeitungszeit oder First Call Resolution.

---

### Frage 1.4: Was ist der Unterschied zwischen 1st und 2nd Level Support?
**Was will der Prüfer hören?** Eskalationsstufen, typische Aufgaben.

> **Beispielantwort:** Der 1st Level ist die erste Anlaufstelle – er nimmt Anfragen an, dokumentiert, löst Standardprobleme und eskaliert bei Bedarf. Der 2nd Level hat tieferes Fachwissen und bearbeitet komplexere Fälle, die der 1st Level nicht lösen konnte. Es gibt oft auch einen 3rd Level für Spezialisten oder externe Hersteller.

---

### Frage 1.5: Was bedeutet DHCP?
**Was will der Prüfer hören?** Abkürzung, Funktion, warum wichtig.

> **Beispielantwort:** DHCP steht für Dynamic Host Configuration Protocol. Es verteilt automatisch IP-Adressen an Geräte im Netzwerk, zusammen mit Einstellungen wie Subnetzmaske, Gateway und DNS-Server. Ohne DHCP müsste man jedes Gerät manuell konfigurieren – das ist bei vielen Geräten unpraktisch und fehleranfällig.

---

### Frage 1.6: Was ist DNS und wofür wird es gebraucht?
**Was will der Prüfer hören?** Funktion, praktisches Beispiel.

> **Beispielantwort:** DNS steht für Domain Name System. Es übersetzt Hostnamen wie „www.firma.de" in IP-Adressen wie „192.168.1.10". Menschen arbeiten mit Namen, Netzwerke mit Zahlen – DNS ist der Übersetzer dazwischen. Ohne DNS müsste man sich alle IP-Adressen merken.

---

### Frage 1.7: Was ist Active Directory?
**Was will der Prüfer hören?** Funktion, Komponenten, Nutzen.

> **Beispielantwort:** Active Directory ist Microsofts Verzeichnisdienst. Es speichert Informationen über Benutzer, Computer, Gruppen und Richtlinien zentral. Damit kann man sich einmal anmelden und auf verschiedene Ressourcen zugreifen – Single Sign-On. Außerdem ermöglicht es zentrale Verwaltung über Gruppenrichtlinien.

---

### Frage 1.8: Was ist eine Gruppenrichtlinie (GPO)?
**Was will der Prüfer hören?** Funktion, Beispiele, Anwendung.

> **Beispielantwort:** Eine Gruppenrichtlinie ist eine Sammlung von Einstellungen, die zentral auf Benutzer oder Computer angewendet werden. Beispiele: Passwort-Policy, Desktop-Hintergrund, Software-Installation, BitLocker-Aktivierung. GPOs werden im Active Directory verwaltet und automatisch auf die Zielobjekte angewendet.

---

### Frage 1.9: Was ist ein VPN?
**Was will der Prüfer hören?** Funktion, Sicherheitsaspekt, Anwendung.

> **Beispielantwort:** VPN steht für Virtual Private Network. Es erstellt einen verschlüsselten Tunnel zwischen dem Endgerät und dem Firmennetzwerk über das Internet. So können Mitarbeiter im Homeoffice sicher auf Firmenressourcen zugreifen, als wären sie im Büro. Die Verschlüsselung schützt vor Abhören.

---

### Frage 1.10: Was bedeutet MFA/2FA?
**Was will der Prüfer hören?** Definition, Faktoren, warum wichtig.

> **Beispielantwort:** MFA ist Multi-Faktor-Authentifizierung, 2FA ist Zwei-Faktor-Authentifizierung. Man braucht mindestens zwei verschiedene Faktoren: Wissen (Passwort), Besitz (Smartphone, Token) oder Biometrie (Fingerabdruck). Das erhöht die Sicherheit erheblich – ein gestohlenes Passwort allein reicht nicht mehr.

---

### Frage 1.11: Was ist ein Proxy-Server?
**Was will der Prüfer hören?** Funktion, Anwendungsfälle.

> **Beispielantwort:** Ein Proxy-Server ist ein Vermittler zwischen Client und Internet. Anfragen gehen erst zum Proxy, der sie dann weiterleitet. Vorteile: Caching für schnelleren Zugriff, Filterung von Webseiten, Protokollierung des Datenverkehrs, Anonymisierung der internen IP-Adressen nach außen.

---

### Frage 1.12: Was ist Cloud Computing?
**Was will der Prüfer hören?** Definition, Service-Modelle, Vor-/Nachteile.

> **Beispielantwort:** Cloud Computing bedeutet, IT-Ressourcen über das Internet zu beziehen statt lokal zu betreiben. Es gibt verschiedene Modelle: IaaS (Infrastruktur), PaaS (Plattform), SaaS (Software). Vorteile: Skalierbarkeit, keine Hardware-Investition. Nachteile: Abhängigkeit vom Anbieter, Datenschutzfragen.

---

## Kategorie 2: Vorgehen & Methodik (10 Fragen)

### Frage 2.1: Wie gehen Sie bei einem unbekannten Problem vor?
**Was will der Prüfer hören?** Strukturiertes Vorgehen, Hypothesenbildung.

> **Beispielantwort:** Ich gehe systematisch vor: Erst das Problem genau erfassen – was funktioniert nicht, seit wann, wer ist betroffen. Dann Hypothesen aufstellen und eine nach der anderen testen. Dabei dokumentiere ich jeden Schritt. Wenn ich nicht weiterkomme, eskaliere ich mit allen gesammelten Informationen.

---

### Frage 2.2: Was ist das OSI-Modell und wie hilft es beim Troubleshooting?
**Was will der Prüfer hören?** Schichten kennen, praktische Anwendung.

> **Beispielantwort:** Das OSI-Modell hat 7 Schichten von Physical bis Application. Beim Troubleshooting beginne ich unten: Kabel drin? IP-Adresse da? DNS funktioniert? So kann ich systematisch eingrenzen, auf welcher Ebene das Problem liegt. Das verhindert, dass ich auf der falschen Ebene suche.

---

### Frage 2.3: Was ist Root Cause Analysis?
**Was will der Prüfer hören?** Definition, Methoden, Beispiel.

> **Beispielantwort:** Root Cause Analysis ist die Suche nach der eigentlichen Ursache eines Problems, nicht nur dem Symptom. Methoden sind zum Beispiel 5-Why – fünfmal „Warum?" fragen – oder Ishikawa-Diagramme. Das Ziel ist, das Problem dauerhaft zu lösen und nicht nur die Auswirkungen zu beheben.

---

### Frage 2.4: Wie priorisieren Sie Tickets?
**Was will der Prüfer hören?** Impact/Urgency-Matrix, Kriterien.

> **Beispielantwort:** Ich nutze die Matrix aus Impact und Urgency. Impact: Wie viele User oder Geschäftsprozesse sind betroffen? Urgency: Wie dringend wird eine Lösung gebraucht – gibt es einen Workaround? Aus der Kombination ergibt sich die Priority. Ein Mailausfall für alle hat höhere Priority als ein Druckerproblem für einen User.

---

### Frage 2.5: Wann eskalieren Sie ein Ticket?
**Was will der Prüfer hören?** Eskalationskriterien, funktional vs. hierarchisch.

> **Beispielantwort:** Ich eskaliere funktional, wenn ich mehr Fachwissen brauche – zum Beispiel an den Netzwerkspezialisten. Ich eskaliere hierarchisch, wenn SLA-Verletzung droht, Ressourcen fehlen oder eine Entscheidung auf höherer Ebene nötig ist. Wichtig: Vorher alles dokumentieren, damit der nächste nahtlos weitermachen kann.

---

### Frage 2.6: Was gehört in eine gute Ticket-Dokumentation?
**Was will der Prüfer hören?** Vollständigkeit, Nachvollziehbarkeit.

> **Beispielantwort:** Eine gute Dokumentation enthält: Symptom, Reproduktionsschritte, betroffene User/Systeme, durchgeführte Diagnose mit Ergebnissen, Root Cause, angewendete Lösung, Validierung und gegebenenfalls Präventionsmaßnahmen. Ein Kollege sollte den Fall verstehen können, ohne nachfragen zu müssen.

---

### Frage 2.7: Was ist eine Knowledge Base und warum ist sie wichtig?
**Was will der Prüfer hören?** Definition, Nutzen, Best Practices.

> **Beispielantwort:** Eine Knowledge Base ist eine Sammlung von dokumentierten Lösungen für bekannte Probleme. Sie beschleunigt die Bearbeitung, weil man nicht jedes Problem neu lösen muss. Außerdem ermöglicht sie Wissenstransfer im Team. Wichtig: Artikel müssen aktuell und durchsuchbar sein.

---

### Frage 2.8: Was ist ein Workaround?
**Was will der Prüfer hören?** Definition, Abgrenzung zur dauerhaften Lösung.

> **Beispielantwort:** Ein Workaround ist eine temporäre Umgehungslösung, die den Service wiederherstellt, aber die Ursache nicht behebt. Beispiel: Drucker geht nicht, User druckt auf anderem Drucker. Der Workaround ermöglicht Weiterarbeiten, während die echte Lösung vorbereitet wird.

---

### Frage 2.9: Wie testen Sie, ob ein Problem gelöst ist?
**Was will der Prüfer hören?** Validierungsmethoden, User-Einbeziehung.

> **Beispielantwort:** Ich teste selbst, ob das Problem reproduzierbar war und jetzt nicht mehr auftritt. Dann bitte ich den User zu testen und Feedback zu geben. Erst wenn der User bestätigt, dass es funktioniert, schließe ich das Ticket. Bei kritischen Änderungen beobachte ich noch einige Zeit.

---

### Frage 2.10: Was ist Change Management?
**Was will der Prüfer hören?** Prozess, Nutzen, Risikominimierung.

> **Beispielantwort:** Change Management ist der kontrollierte Prozess für Änderungen an IT-Systemen. Jede Änderung wird dokumentiert, bewertet, genehmigt und geplant. Das minimiert Risiken – zum Beispiel durch Backout-Pläne – und stellt sicher, dass alle Beteiligten informiert sind. Ungeplante Änderungen sind eine häufige Ursache für Incidents.

---

## Kategorie 3: Alternativen & Trade-offs (8 Fragen)

### Frage 3.1: Sie haben Lösung A gewählt. Welche Alternativen gab es?
**Was will der Prüfer hören?** Alternativen kennen, Entscheidung begründen.

> **Beispielantwort:** Es gab auch Option B, nämlich [Alternative]. Ich habe mich für A entschieden, weil [Grund – z.B. schneller, sicherer, nachhaltiger]. Option B hätte den Nachteil gehabt, dass [Nachteil]. In einem anderen Kontext könnte B aber die bessere Wahl sein, zum Beispiel wenn [Bedingung].

---

### Frage 3.2: Was sind Vor- und Nachteile von Cloud vs. On-Premises?
**Was will der Prüfer hören?** Abwägung, keine pauschale Antwort.

> **Beispielantwort:** Cloud-Vorteile: Skalierbarkeit, keine Hardware-Investition, Wartung durch Anbieter. Nachteile: Abhängigkeit, laufende Kosten, Datenschutzfragen. On-Premises-Vorteile: Volle Kontrolle, Daten bleiben im Haus. Nachteile: Hohe Anfangsinvestition, eigenes Know-how nötig. Die Wahl hängt von Anforderungen, Budget und Compliance ab.

---

### Frage 3.3: Wann würden Sie eine andere Lösung wählen?
**Was will der Prüfer hören?** Kontextabhängigkeit verstanden.

> **Beispielantwort:** Wenn die Rahmenbedingungen anders wären. Zum Beispiel: Mehr Zeit verfügbar – dann eine nachhaltigere Lösung. Andere Infrastruktur – dann andere Tools. Andere Sicherheitsanforderungen – dann strengere Maßnahmen. Es gibt selten die eine richtige Lösung, sondern die passende für den Kontext.

---

### Frage 3.4: Was wäre Ihr Backout-Plan gewesen?
**Was will der Prüfer hören?** Risikobewusstsein, Vorbereitung.

> **Beispielantwort:** Mein Backout-Plan war [konkrete Maßnahme – z.B. Backup zurückspielen, alte Konfiguration wiederherstellen, manuelle Alternative]. Ich habe vor der Änderung [Sicherung gemacht/Snapshot erstellt], damit ich im Notfall schnell zum vorherigen Zustand zurückkehren kann. Der Backout wurde zwar nicht gebraucht, aber er war vorbereitet.

---

### Frage 3.5: Schnelle Lösung oder nachhaltige Lösung – wie entscheiden Sie?
**Was will der Prüfer hören?** Situative Abwägung.

> **Beispielantwort:** Das hängt von der Dringlichkeit ab. Bei einem Major Incident mit hohem Impact: erst schnelle Lösung, um den Service wiederherzustellen, dann nachhaltige Lösung als Problem-Ticket. Bei weniger Druck: gleich die nachhaltige Lösung. Wichtig ist, einen Workaround nicht als Dauerlösung zu akzeptieren.

---

### Frage 3.6: Automatisierung vs. manueller Prozess – wann was?
**Was will der Prüfer hören?** Kosten-Nutzen-Abwägung.

> **Beispielantwort:** Automatisierung lohnt sich bei wiederkehrenden Aufgaben, die fehleranfällig oder zeitaufwändig sind. Manuelle Prozesse sind besser bei einmaligen Aktionen oder wenn die Automatisierung komplexer wäre als der manuelle Aufwand. Die Faustregel: Wenn ich etwas mehr als dreimal mache, überlege ich Automatisierung.

---

### Frage 3.7: Was ist der Trade-off zwischen Sicherheit und Benutzerfreundlichkeit?
**Was will der Prüfer hören?** Spannungsfeld verstanden, Balance finden.

> **Beispielantwort:** Mehr Sicherheit bedeutet oft mehr Aufwand für User – zum Beispiel MFA, komplexe Passwörter, häufige Änderungen. Zu viel Aufwand führt zu Workarounds wie Passwort-Zetteln. Die Kunst ist, ein Sicherheitsniveau zu erreichen, das dem Risiko angemessen ist, ohne die User zu überfordern.

---

### Frage 3.8: Standardlösung vs. individuelle Anpassung?
**Was will der Prüfer hören?** Abwägung, Wartbarkeit.

> **Beispielantwort:** Standardlösungen sind einfacher zu warten, zu dokumentieren und zu supporten. Individuelle Anpassungen können besser zu spezifischen Anforderungen passen, erhöhen aber die Komplexität. Ich bevorzuge Standards, wo möglich, und passe nur an, wo es einen klaren Mehrwert gibt, der den Mehraufwand rechtfertigt.

---

## Kategorie 4: Sicherheit & Datenschutz (8 Fragen)

### Frage 4.1: Was sind die OWASP Top 10?
**Was will der Prüfer hören?** Kenntnis der wichtigsten Sicherheitsrisiken.

> **Beispielantwort:** Die OWASP Top 10 sind die zehn kritischsten Sicherheitsrisiken für Webanwendungen, zum Beispiel Injection, Broken Authentication, Cross-Site Scripting. Sie dienen als Orientierung für Entwickler und Security-Verantwortliche, worauf man achten muss. Die Liste wird regelmäßig aktualisiert.

---

### Frage 4.2: Was machen Sie bei einem Phishing-Verdacht?
**Was will der Prüfer hören?** Incident-Response, Schutzmaßnahmen.

> **Beispielantwort:** Zuerst den User fragen, ob er auf Links geklickt oder Daten eingegeben hat. Wenn ja: Passwort sofort ändern, Session invalidieren, Gerät auf Malware prüfen. In jedem Fall: Mail analysieren, an Security melden, andere User warnen falls breitere Kampagne. Dokumentieren als Security-Incident.

---

### Frage 4.3: Was ist der Unterschied zwischen Authentifizierung und Autorisierung?
**Was will der Prüfer hören?** Klare Abgrenzung.

> **Beispielantwort:** Authentifizierung ist der Nachweis der Identität – „Wer bin ich?" – zum Beispiel durch Passwort und MFA. Autorisierung ist die Prüfung der Berechtigung – „Was darf ich?" – zum Beispiel Zugriff auf bestimmte Dateien oder Funktionen. Erst Authentifizierung, dann Autorisierung.

---

### Frage 4.4: Was bedeutet „Least Privilege"?
**Was will der Prüfer hören?** Sicherheitsprinzip verstanden.

> **Beispielantwort:** Least Privilege bedeutet, dass jeder User und jedes System nur die minimal notwendigen Rechte bekommt. Nicht mehr, als für die Aufgabe nötig ist. Das begrenzt den Schaden, falls ein Account kompromittiert wird oder ein User einen Fehler macht.

---

### Frage 4.5: Was ist bei der Speicherung von Passwörtern zu beachten?
**Was will der Prüfer hören?** Sicherheitsbewusstsein, Best Practices.

> **Beispielantwort:** Passwörter dürfen nie im Klartext gespeichert werden, sondern nur als Hash – mit Salt für zusätzliche Sicherheit. Als User sollte man Passwort-Manager nutzen statt Passwörter aufzuschreiben oder wiederzuverwenden. Administratoren sollten Passwort-Policies durchsetzen und auf Leaks achten.

---

### Frage 4.6: Was ist DSGVO und was bedeutet sie für den IT-Support?
**Was will der Prüfer hören?** Grundkenntnisse Datenschutz.

> **Beispielantwort:** DSGVO ist die Datenschutz-Grundverordnung der EU. Für den Support bedeutet sie: Personenbezogene Daten nur zweckgebunden verarbeiten, User-Identität vor Auskunft verifizieren, Logs nicht länger als nötig speichern, Datenschutzvorfälle melden. Wir müssen wissen, welche Daten wir verarbeiten und warum.

---

### Frage 4.7: Was tun Sie, wenn Sie einen Sicherheitsvorfall vermuten?
**Was will der Prüfer hören?** Incident-Response, Eskalation.

> **Beispielantwort:** Nicht selbst versuchen, den Angreifer zu bekämpfen oder Spuren zu verwischen. Stattdessen: Vorfall dokumentieren, System gegebenenfalls isolieren, sofort an den Security-Verantwortlichen oder das SOC eskalieren. Beweise sichern – Logs, Screenshots. Dann den Anweisungen der Security-Experten folgen.

---

### Frage 4.8: Was ist Endpoint Protection?
**Was will der Prüfer hören?** Definition, Komponenten.

> **Beispielantwort:** Endpoint Protection schützt Endgeräte wie PCs und Laptops vor Bedrohungen. Komponenten sind Antivirus, Firewall, Web-Filter, Device Control und oft auch EDR – Endpoint Detection and Response – für fortgeschrittene Bedrohungserkennung. Moderne Lösungen sind zentral verwaltet und cloudbasiert.

---

## Kategorie 5: Betrieb & Dokumentation (6 Fragen)

### Frage 5.1: Warum ist Dokumentation wichtig?
**Was will der Prüfer hören?** Nutzen verstanden, nicht nur Pflicht.

> **Beispielantwort:** Dokumentation ermöglicht Nachvollziehbarkeit, Wissenstransfer und Kontinuität. Wenn ich ausfalle, kann ein Kollege weitermachen. Bei wiederkehrenden Problemen spart sie Zeit. Sie ist auch wichtig für Compliance und Audits. Gut dokumentieren heißt, dass andere – und ich selbst später – verstehen, was gemacht wurde und warum.

---

### Frage 5.2: Was ist Monitoring und warum ist es wichtig?
**Was will der Prüfer hören?** Proaktives IT-Management.

> **Beispielantwort:** Monitoring überwacht IT-Systeme kontinuierlich auf Verfügbarkeit und Performance. Es ermöglicht, Probleme zu erkennen, bevor User sie melden – zum Beispiel wenn ein Server langsam wird oder ein Dienst ausfällt. Mit Alerts wird die IT automatisch informiert. Das macht den Support proaktiver statt nur reaktiv.

---

### Frage 5.3: Was ist ein SLA-Report?
**Was will der Prüfer hören?** Reporting verstanden.

> **Beispielantwort:** Ein SLA-Report zeigt, ob die vereinbarten Service Levels eingehalten wurden – zum Beispiel Reaktionszeiten, Lösungszeiten, Verfügbarkeit. Er dient als Grundlage für Gespräche mit Kunden oder Management und zeigt, wo Verbesserungsbedarf besteht. Typische Kennzahlen sind First Call Resolution, Mean Time to Resolve.

---

### Frage 5.4: Wie gehen Sie mit einer veralteten Dokumentation um?
**Was will der Prüfer hören?** Qualitätsbewusstsein.

> **Beispielantwort:** Veraltete Dokumentation kann gefährlich sein – schlimmer als keine. Ich aktualisiere sie, wenn ich darauf stoße und die Abweichung bemerke. Langfristig braucht es einen Review-Prozess: regelmäßig prüfen, ob Dokumente noch aktuell sind, und Verantwortliche benennen. Datum und Version sollten immer sichtbar sein.

---

### Frage 5.5: Was ist ein Backup-Konzept?
**Was will der Prüfer hören?** 3-2-1-Regel, Wiederherstellung.

> **Beispielantwort:** Ein Backup-Konzept definiert, was, wie oft und wohin gesichert wird und wie lange Backups aufbewahrt werden. Die 3-2-1-Regel besagt: 3 Kopien, auf 2 verschiedenen Medien, davon 1 offsite. Wichtig ist auch, regelmäßig Restores zu testen – ein Backup, das sich nicht wiederherstellen lässt, ist wertlos.

---

### Frage 5.6: Was ist der Unterschied zwischen Backup und Archiv?
**Was will der Prüfer hören?** Zweck verstanden.

> **Beispielantwort:** Ein Backup dient der Wiederherstellung bei Datenverlust – es ist eine Kopie aktueller Daten. Ein Archiv dient der Langzeitaufbewahrung – es enthält Daten, die nicht mehr aktiv genutzt werden, aber aufbewahrt werden müssen, zum Beispiel aus rechtlichen Gründen. Unterschiedliche Anforderungen an Aufbewahrungsdauer und Zugriff.

---

## Kategorie 6: Kommunikation & Service (8 Fragen)

### Frage 6.1: Wie gehen Sie mit einem verärgerten User um?
**Was will der Prüfer hören?** Deeskalation, Empathie, Struktur.

> **Beispielantwort:** Zuerst zuhören und nicht unterbrechen. Dann Verständnis zeigen: „Das ist verständlicherweise frustrierend." Nicht rechtfertigen oder schuldzuweisen. Dann sachlich auf die Lösung fokussieren: „Lassen Sie mich schauen, wie ich helfen kann." Verbindlich sein: nächsten Schritt nennen und einhalten.

---

### Frage 6.2: Was ist aktives Zuhören?
**Was will der Prüfer hören?** Technik kennen, anwenden können.

> **Beispielantwort:** Aktives Zuhören bedeutet, dem Gesprächspartner volle Aufmerksamkeit zu schenken. Techniken sind: Paraphrasieren – das Gehörte in eigenen Worten wiederholen, Gefühle spiegeln – „Das klingt frustrierend", und Nachfragen – echtes Interesse zeigen. Es hilft, das Problem wirklich zu verstehen und dem User das Gefühl zu geben, ernst genommen zu werden.

---

### Frage 6.3: Wie kommunizieren Sie bei einem längeren Ausfall?
**Was will der Prüfer hören?** Proaktive Kommunikation, Transparenz.

> **Beispielantwort:** Proaktiv und regelmäßig. Erst eine initiale Information: Was ist das Problem, woran wird gearbeitet. Dann Updates alle 30-60 Minuten, auch wenn sich nichts geändert hat – „Wir arbeiten weiter daran." Nach Lösung: Abschlussmeldung mit kurzer Erklärung. Kanäle nutzen, die die User erreichen – Status-Page, Mail, Teams.

---

### Frage 6.4: Was ist Erwartungsmanagement?
**Was will der Prüfer hören?** Realistische Zusagen, Verbindlichkeit.

> **Beispielantwort:** Erwartungsmanagement bedeutet, dem User realistische Informationen zu geben, was möglich ist und wie lange es dauert. Lieber sagen „Ich melde mich in 2 Stunden" und nach 1 Stunde fertig sein, als „Ich mache das sofort" und dann 3 Stunden brauchen. Zusagen einhalten oder proaktiv informieren, wenn es länger dauert.

---

### Frage 6.5: Wie erklären Sie einem Nicht-Techniker ein technisches Problem?
**Was will der Prüfer hören?** Zielgruppenorientierung, Analogien.

> **Beispielantwort:** Ich verwende Analogien und vermeide Fachbegriffe oder erkläre sie. Statt „DNS-Server nicht erreichbar" sage ich „Der Übersetzer, der Namen in Adressen umwandelt, funktioniert gerade nicht." Ich fokussiere auf die Auswirkung und die Lösung, nicht auf die technischen Details, die der User nicht braucht.

---

### Frage 6.6: Was tun Sie, wenn Sie eine Anfrage nicht erfüllen können?
**Was will der Prüfer hören?** Grenzen setzen, Alternativen anbieten.

> **Beispielantwort:** Ich erkläre sachlich, warum es nicht möglich ist – zum Beispiel Sicherheitsrichtlinien oder technische Einschränkungen. Ich biete wenn möglich eine Alternative an. Und ich zeige Verständnis für das Bedürfnis. Nicht „Das geht nicht", sondern „Das ist so nicht möglich, aber wir könnten alternativ...".

---

### Frage 6.7: Was ist das 4-Ohren-Modell?
**Was will der Prüfer hören?** Kommunikationsmodell kennen.

> **Beispielantwort:** Das 4-Ohren-Modell von Schulz von Thun besagt, dass jede Nachricht vier Seiten hat: Sachinhalt, Selbstoffenbarung, Beziehung und Appell. Der Sender sendet auf allen vier Ebenen, der Empfänger kann auf verschiedenen Ohren hören. Im Support hilft es zu verstehen, dass ein verärgerter User oft nicht nur das Sachproblem meint, sondern auch auf der Beziehungsebene kommuniziert.

---

### Frage 6.8: Wann würden Sie einen User-Wunsch ablehnen?
**Was will der Prüfer hören?** Professionelle Grenzziehung.

> **Beispielantwort:** Wenn der Wunsch gegen Sicherheitsrichtlinien verstößt, gegen Compliance oder Gesetze, oder technisch wirklich nicht machbar ist. Ich lehne freundlich aber bestimmt ab, erkläre warum und biete wenn möglich Alternativen. Wenn der User nicht akzeptiert, eskaliere ich an meinen Vorgesetzten statt nachzugeben.

---

## Kategorie 7: Online-Prüfung & Remote Support (4 Fragen)

### Frage 7.1: Wie stellen Sie bei Remote Support sicher, dass Sie den richtigen User unterstützen?
**Was will der Prüfer hören?** Identitätsverifikation, Sicherheitsbewusstsein.

> **Beispielantwort:** Ich verifiziere die Identität durch Rückfragen – zum Beispiel Mitarbeiternummer, Abteilung, letzte Tickets. Bei sensiblen Aktionen wie Passwort-Reset nutze ich einen zweiten Kanal – zum Beispiel Rückruf auf die hinterlegte Telefonnummer. Ich verlasse mich nie allein auf die Caller-ID oder E-Mail-Absender, da diese gefälscht werden können.

---

### Frage 7.2: Welche Besonderheiten gibt es bei der Online-Kommunikation per Video?
**Was will der Prüfer hören?** Online-Kommunikationskompetenz.

> **Beispielantwort:** Bei Videokonferenzen ist Blickkontakt anders – ich schaue in die Kamera statt auf den Bildschirm. Ich spreche deutlicher und langsamer, da Technik Verzögerungen verursachen kann. Ich achte auf meinen Hintergrund und Beleuchtung. Bei technischen Problemen habe ich einen Backup-Kanal wie Telefon bereit. Bildschirmfreigabe nutze ich, um Probleme zu zeigen oder Lösungen zu demonstrieren.

---

### Frage 7.3: Was machen Sie, wenn die Verbindung während eines wichtigen Gesprächs abbricht?
**Was will der Prüfer hören?** Problemlösungskompetenz, Vorbereitung.

> **Beispielantwort:** Ich habe vorher eine Backup-Kontaktmöglichkeit ausgetauscht – zum Beispiel Telefonnummer. Bei Abbruch versuche ich zuerst die Verbindung wiederherzustellen. Funktioniert das nicht, rufe ich an oder wechsle zu einem anderen Kommunikationskanal. Ich informiere den Gesprächspartner über das Problem und setze dort fort, wo wir unterbrochen wurden.

---

### Frage 7.4: Wie unterscheidet sich Remote-Troubleshooting von Vor-Ort-Support?
**Was will der Prüfer hören?** Verständnis beider Szenarien.

> **Beispielantwort:** Remote kann ich nicht selbst sehen und anfassen – ich bin auf die Beschreibung des Users oder Bildschirmfreigabe angewiesen. Dafür kann ich schneller reagieren, ohne Anfahrt. Die Kommunikation muss präziser sein: „Klicken Sie oben links auf..." statt „Hier drauf klicken". Manche Probleme – wie Hardware-Defekte – erfordern aber Vor-Ort-Support. Ich nutze Remote-Tools wie Screen Sharing, Remote Desktop oder Remote Control nach Zustimmung des Users.

---

## Schnell-Übung: Antwortstruktur

Übe, Antworten in dieser Struktur zu geben:

```
1. Definition/Kernaussage (1 Satz)
2. Erklärung/Detail (2-3 Sätze)
3. Beispiel oder praktischer Bezug (1-2 Sätze)
```

**Gesamtzeit pro Antwort:** 30-60 Sekunden

---

## Quellen (Kurz)

- [IT Process Wiki](https://wiki.en.it-processmaps.com/) – ITIL-Begriffe und Prozesse
- [IHK Bewertungskriterien](https://www.ihk.de/blueprint/servlet/resource/blob/2618244/21345f4e591a4a035d4e1ca68c3c011f/kriterien-bewertung-praesentation-data.pdf) – Fachwissen im Fachgespräch
- [ManageEngine: IT Incident Management](https://www.manageengine.com/products/service-desk/it-incident-management/what-is-it-incident-management.html) – Best Practices
- Schulz von Thun: Miteinander reden – Kommunikationsmodelle
