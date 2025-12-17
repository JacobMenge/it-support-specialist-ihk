---
title: Fragen und Antworten
description: Typische Prüferfragen mit Beispielantworten
---

# Fragen und Antworten

Dieser Katalog enthält über 55 typische Prüferfragen, sortiert nach 7 Kategorien. Zu jeder Frage: Was will der Prüfer hören? Plus eine Beispielantwort.

---

## Das Wichtigste

- Prüferfragen testen **Verständnis**, nicht nur Auswendiglernen
- **Strukturierte Antworten** sind besser als lange Monologe
- Bei Nichtwissen: Ehrlich sein, Lösungsweg zeigen
- Die Kategorien spiegeln typische Prüfungsschwerpunkte wider
- Übe die Fragen laut – mit Stoppuhr (**max. 30-60 Sekunden** pro Antwort)

---

## Kategorie 1: Begriffe und Grundlagen

??? question "Frage 1.1: Was ist der Unterschied zwischen Incident und Problem?"
    **Was will der Prüfer hören?** ITIL-Begriffe verstanden, klare Abgrenzung.

    **Beispielantwort:** Ein Incident ist ein einzelnes Ereignis, das den Service stört – zum Beispiel „User kann nicht drucken". Ein Problem ist die zugrundeliegende Ursache, die einen oder mehrere Incidents verursacht – zum Beispiel „Druckertreiber veraltet". Incident Management stellt den Service schnell wieder her, Problem Management sucht und beseitigt die Ursache dauerhaft.

??? question "Frage 1.2: Was versteht man unter SLA?"
    **Was will der Prüfer hören?** Definition, praktische Bedeutung.

    **Beispielantwort:** SLA steht für Service Level Agreement. Es ist eine Vereinbarung zwischen IT und Kunde, die definiert, welche Servicequalität zu erwarten ist – zum Beispiel Reaktionszeit von 4 Stunden bei Priority 2. SLAs machen Erwartungen messbar und schaffen Verbindlichkeit auf beiden Seiten.

??? question "Frage 1.3: Was ist ein Ticket-System?"
    **Was will der Prüfer hören?** Funktion, Nutzen, Beispiele.

    **Beispielantwort:** Ein Ticket-System dokumentiert und verfolgt Anfragen und Störungen. Jede Anfrage bekommt eine Ticket-Nummer, damit nichts verloren geht. Es ermöglicht Priorisierung, Zuweisung an Bearbeiter und Nachverfolgung bis zur Lösung. Außerdem liefert es Kennzahlen wie Bearbeitungszeit oder First Call Resolution.

??? question "Frage 1.4: Was ist der Unterschied zwischen 1st und 2nd Level Support?"
    **Was will der Prüfer hören?** Eskalationsstufen, typische Aufgaben.

    **Beispielantwort:** Der 1st Level ist die erste Anlaufstelle – er nimmt Anfragen an, dokumentiert, löst Standardprobleme und eskaliert bei Bedarf. Der 2nd Level hat tieferes Fachwissen und bearbeitet komplexere Fälle, die der 1st Level nicht lösen konnte. Es gibt oft auch einen 3rd Level für Spezialisten.

??? question "Frage 1.5: Was bedeutet DHCP?"
    **Was will der Prüfer hören?** Abkürzung, Funktion, warum wichtig.

    **Beispielantwort:** DHCP steht für Dynamic Host Configuration Protocol. Es verteilt automatisch IP-Adressen an Geräte im Netzwerk, zusammen mit Einstellungen wie Subnetzmaske, Gateway und DNS-Server. Ohne DHCP müsste man jedes Gerät manuell konfigurieren.

??? question "Frage 1.6: Was ist DNS und wofür wird es gebraucht?"
    **Was will der Prüfer hören?** Funktion, praktisches Beispiel.

    **Beispielantwort:** DNS steht für Domain Name System. Es übersetzt Hostnamen wie „www.firma.de" in IP-Adressen wie „192.168.1.10". Menschen arbeiten mit Namen, Netzwerke mit Zahlen – DNS ist der Übersetzer dazwischen.

??? question "Frage 1.7: Was ist Active Directory?"
    **Was will der Prüfer hören?** Funktion, Komponenten, Nutzen.

    **Beispielantwort:** Active Directory ist Microsofts Verzeichnisdienst. Es speichert Informationen über Benutzer, Computer, Gruppen und Richtlinien zentral. Damit kann man sich einmal anmelden und auf verschiedene Ressourcen zugreifen – Single Sign-On.

??? question "Frage 1.8: Was ist eine Gruppenrichtlinie (GPO)?"
    **Was will der Prüfer hören?** Funktion, Beispiele, Anwendung.

    **Beispielantwort:** Eine Gruppenrichtlinie ist eine Sammlung von Einstellungen, die zentral auf Benutzer oder Computer angewendet werden. Beispiele: Passwort-Policy, Desktop-Hintergrund, Software-Installation, BitLocker-Aktivierung.

??? question "Frage 1.9: Was ist ein VPN?"
    **Was will der Prüfer hören?** Funktion, Sicherheitsaspekt, Anwendung.

    **Beispielantwort:** VPN steht für Virtual Private Network. Es erstellt einen verschlüsselten Tunnel zwischen dem Endgerät und dem Firmennetzwerk über das Internet. So können Mitarbeiter im Homeoffice sicher auf Firmenressourcen zugreifen.

??? question "Frage 1.10: Was bedeutet MFA/2FA?"
    **Was will der Prüfer hören?** Definition, Faktoren, warum wichtig.

    **Beispielantwort:** MFA ist Multi-Faktor-Authentifizierung. Man braucht mindestens zwei verschiedene Faktoren: Wissen (Passwort), Besitz (Smartphone) oder Biometrie (Fingerabdruck). Das erhöht die Sicherheit erheblich.

---

## Kategorie 2: Vorgehen und Methodik

??? question "Frage 2.1: Wie gehen Sie bei einem unbekannten Problem vor?"
    **Was will der Prüfer hören?** Strukturiertes Vorgehen, Hypothesenbildung.

    **Beispielantwort:** Ich gehe systematisch vor: Erst das Problem genau erfassen – was funktioniert nicht, seit wann, wer ist betroffen. Dann Hypothesen aufstellen und eine nach der anderen testen. Dabei dokumentiere ich jeden Schritt. Wenn ich nicht weiterkomme, eskaliere ich mit allen gesammelten Informationen.

??? question "Frage 2.2: Was ist das OSI-Modell und wie hilft es beim Troubleshooting?"
    **Was will der Prüfer hören?** Schichten kennen, praktische Anwendung.

    **Beispielantwort:** Das OSI-Modell hat 7 Schichten von Physical bis Application. Beim Troubleshooting beginne ich unten: Kabel drin? IP-Adresse da? DNS funktioniert? So kann ich systematisch eingrenzen, auf welcher Ebene das Problem liegt.

??? question "Frage 2.3: Was ist Root Cause Analysis?"
    **Was will der Prüfer hören?** Definition, Methoden, Beispiel.

    **Beispielantwort:** Root Cause Analysis ist die Suche nach der eigentlichen Ursache eines Problems, nicht nur dem Symptom. Methoden sind zum Beispiel 5-Why – fünfmal „Warum?" fragen – oder Ishikawa-Diagramme.

??? question "Frage 2.4: Wie priorisieren Sie Tickets?"
    **Was will der Prüfer hören?** Impact/Urgency-Matrix, Kriterien.

    **Beispielantwort:** Ich nutze die Matrix aus Impact und Urgency. Impact: Wie viele User sind betroffen? Urgency: Wie dringend wird eine Lösung gebraucht? Aus der Kombination ergibt sich die Priority.

??? question "Frage 2.5: Wann eskalieren Sie ein Ticket?"
    **Was will der Prüfer hören?** Eskalationskriterien, funktional vs. hierarchisch.

    **Beispielantwort:** Ich eskaliere funktional, wenn ich mehr Fachwissen brauche. Ich eskaliere hierarchisch, wenn SLA-Verletzung droht, Ressourcen fehlen oder eine Entscheidung auf höherer Ebene nötig ist.

??? question "Frage 2.6: Was gehört in eine gute Ticket-Dokumentation?"
    **Was will der Prüfer hören?** Vollständigkeit, Nachvollziehbarkeit.

    **Beispielantwort:** Symptom, Reproduktionsschritte, betroffene User/Systeme, durchgeführte Diagnose mit Ergebnissen, Root Cause, angewendete Lösung, Validierung und Präventionsmaßnahmen.

---

## Kategorie 3: Alternativen und Entscheidungen

??? question "Frage 3.1: Sie haben Lösung A gewählt. Welche Alternativen gab es?"
    **Was will der Prüfer hören?** Alternativen kennen, Entscheidung begründen.

    **Beispielantwort:** Es gab auch Option B. Ich habe mich für A entschieden, weil [Grund]. Option B hätte den Nachteil gehabt, dass [Nachteil].

??? question "Frage 3.2: Was sind Vor- und Nachteile von Cloud vs. On-Premises?"
    **Was will der Prüfer hören?** Abwägung, keine pauschale Antwort.

    **Beispielantwort:** Cloud-Vorteile: Skalierbarkeit, keine Hardware-Investition. Nachteile: Abhängigkeit, laufende Kosten. On-Premises-Vorteile: Volle Kontrolle, Daten bleiben im Haus. Nachteile: Hohe Anfangsinvestition.

??? question "Frage 3.3: Was wäre Ihr Backout-Plan gewesen?"
    **Was will der Prüfer hören?** Risikobewusstsein, Vorbereitung.

    **Beispielantwort:** Mein Backout-Plan war [Maßnahme]. Ich habe vor der Änderung [Sicherung gemacht], damit ich im Notfall zurückkehren kann.

---

## Kategorie 4: Sicherheit und Datenschutz

??? question "Frage 4.1: Was machen Sie bei einem Phishing-Verdacht?"
    **Was will der Prüfer hören?** Incident-Response, Schutzmaßnahmen.

    **Beispielantwort:** Zuerst fragen, ob der User auf Links geklickt hat. Wenn ja: Passwort ändern, Session invalidieren, Gerät prüfen. Mail an Security melden, andere User warnen.

??? question "Frage 4.2: Was ist der Unterschied zwischen Authentifizierung und Autorisierung?"
    **Was will der Prüfer hören?** Klare Abgrenzung.

    **Beispielantwort:** Authentifizierung ist der Nachweis der Identität – „Wer bin ich?" Autorisierung ist die Prüfung der Berechtigung – „Was darf ich?"

??? question "Frage 4.3: Was bedeutet Least Privilege?"
    **Was will der Prüfer hören?** Sicherheitsprinzip verstanden.

    **Beispielantwort:** Least Privilege bedeutet, dass jeder User nur die minimal notwendigen Rechte bekommt. Das begrenzt den Schaden bei Kompromittierung.

??? question "Frage 4.4: Was ist DSGVO und was bedeutet sie für den IT-Support?"
    **Was will der Prüfer hören?** Grundkenntnisse Datenschutz.

    **Beispielantwort:** DSGVO ist die Datenschutz-Grundverordnung. Für den Support: Daten nur zweckgebunden verarbeiten, User-Identität verifizieren, Logs nicht länger als nötig speichern.

---

## Kategorie 5: Betrieb und Dokumentation

??? question "Frage 5.1: Warum ist Dokumentation wichtig?"
    **Was will der Prüfer hören?** Nutzen verstanden.

    **Beispielantwort:** Dokumentation ermöglicht Nachvollziehbarkeit, Wissenstransfer und Kontinuität. Sie ist auch wichtig für Compliance und Audits.

??? question "Frage 5.2: Was ist Monitoring und warum ist es wichtig?"
    **Was will der Prüfer hören?** Proaktives IT-Management.

    **Beispielantwort:** Monitoring überwacht IT-Systeme auf Verfügbarkeit und Performance. Es ermöglicht, Probleme zu erkennen, bevor User sie melden.

??? question "Frage 5.3: Was ist ein Backup-Konzept?"
    **Was will der Prüfer hören?** 3-2-1-Regel, Wiederherstellung.

    **Beispielantwort:** 3 Kopien, auf 2 verschiedenen Medien, davon 1 offsite. Wichtig: Regelmäßig Restores testen.

---

## Kategorie 6: Kommunikation und Service

??? question "Frage 6.1: Wie gehen Sie mit einem verärgerten User um?"
    **Was will der Prüfer hören?** Deeskalation, Empathie, Struktur.

    **Beispielantwort:** Zuerst zuhören und nicht unterbrechen. Dann Verständnis zeigen. Dann sachlich auf die Lösung fokussieren. Verbindlich sein: nächsten Schritt nennen und einhalten.

??? question "Frage 6.2: Was ist aktives Zuhören?"
    **Was will der Prüfer hören?** Technik kennen, anwenden können.

    **Beispielantwort:** Aktives Zuhören bedeutet: Paraphrasieren, Gefühle spiegeln, Nachfragen. Es hilft, das Problem wirklich zu verstehen.

??? question "Frage 6.3: Wie kommunizieren Sie bei einem längeren Ausfall?"
    **Was will der Prüfer hören?** Proaktive Kommunikation, Transparenz.

    **Beispielantwort:** Proaktiv und regelmäßig. Erst initiale Information, dann Updates alle 30-60 Minuten. Nach Lösung: Abschlussmeldung.

??? question "Frage 6.4: Was ist das 4-Ohren-Modell?"
    **Was will der Prüfer hören?** Kommunikationsmodell kennen.

    **Beispielantwort:** Jede Nachricht hat 4 Seiten: Sachinhalt, Selbstoffenbarung, Beziehung und Appell. Im Support hilft es zu verstehen, dass ein verärgerter User oft nicht nur das Sachproblem meint.

---

## Kategorie 7: Online-Prüfung und Remote Support

??? question "Frage 7.1: Wie stellen Sie bei Remote Support sicher, dass Sie den richtigen User unterstützen?"
    **Was will der Prüfer hören?** Identitätsverifikation, Sicherheitsbewusstsein.

    **Beispielantwort:** Ich verifiziere die Identität durch Rückfragen – Mitarbeiternummer, Abteilung. Bei sensiblen Aktionen nutze ich einen zweiten Kanal wie Rückruf.

??? question "Frage 7.2: Welche Besonderheiten gibt es bei der Online-Kommunikation per Video?"
    **Was will der Prüfer hören?** Online-Kommunikationskompetenz.

    **Beispielantwort:** Blickkontakt = in die Kamera schauen. Deutlicher und langsamer sprechen. Backup-Kanal bereithalten. Bildschirmfreigabe nutzen.

??? question "Frage 7.3: Wie unterscheidet sich Remote-Troubleshooting von Vor-Ort-Support?"
    **Was will der Prüfer hören?** Verständnis beider Szenarien.

    **Beispielantwort:** Remote kann ich nicht selbst sehen und anfassen. Die Kommunikation muss präziser sein. Manche Probleme erfordern aber Vor-Ort-Support.

---

## Übung: Antwortstruktur

Übe, Antworten in dieser Struktur zu geben:

```
1. Definition/Kernaussage (1 Satz)
2. Erklärung/Detail (2-3 Sätze)
3. Beispiel oder praktischer Bezug (1-2 Sätze)
```

**Gesamtzeit pro Antwort:** 30-60 Sekunden

