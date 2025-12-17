# Beispielpräsentation: Standardisierter Client-Rollout mit BitLocker

## Wozu ist dieses Dokument?

Eine vollständige Beispielpräsentation mit Technik-Fokus. Zeigt einen strukturierten Rollout-Prozess für neue Clients mit Fokus auf Standardisierung und Sicherheit. Mit Speaker Notes, Artefakt-Hinweisen und Prüferfragen.

---

## Metadaten

| Feld | Inhalt |
|------|--------|
| **Titel** | Standardisierter Client-Rollout mit BitLocker-Verschlüsselung |
| **Zielgruppe** | IT-Leitung / IT-Administratoren |
| **Ausgangslage** | Neue Mitarbeiter warten zu lange auf einsatzbereite Geräte, Konfiguration ist inkonsistent |
| **Ziel** | Rollout-Prozess standardisieren, Sicherheit durch BitLocker gewährleisten |
| **Erfolgskriterien** | Rollout-Zeit <4h, 100% BitLocker-Compliance, dokumentierter Prozess |
| **Scope** | Client-Bereitstellung, keine Server oder Netzwerkinfrastruktur |
| **Risiken** | Datenverlust bei Fehlkonfiguration, Recovery-Key-Verlust |

---

## Folie 1: Titel + Zielgruppe

### Folientitel
**Standardisierter Client-Rollout mit BitLocker**

### Bulletpoints
- Präsentation von: [Dein Name]
- Datum: [Prüfungsdatum]
- Zielgruppe: IT-Leitung

### Speaker Notes
> „Guten Tag, meine Präsentation richtet sich an die IT-Leitung. Ich zeige Ihnen heute, wie ich unseren Client-Rollout-Prozess standardisiert und dabei die Sicherheit durch BitLocker-Verschlüsselung gewährleistet habe. Dabei gehe ich auf die Herausforderungen, meinen Lösungsansatz und das Ergebnis ein."

**Zeit:** 0:30

---

## Folie 2: Ausgangslage & Problem

### Folientitel
**Ausgangslage: Inkonsistente und langsame Bereitstellung**

### Bulletpoints
- Problem 1: Rollout dauerte 1-2 Tage pro Gerät
- Problem 2: Manuelle Installation → Konfigurationsfehler
- Problem 3: Keine einheitliche Sicherheitskonfiguration
- Problem 4: BitLocker nur bei 60% der Geräte aktiv
- Impact: Neue Mitarbeiter können nicht starten, Compliance-Risiko

### Artefakt (Platzhalter)
> [Screenshot: Übersicht Rollout-Zeiten oder BitLocker-Status vor Projekt]

### Speaker Notes
> „Die Ausgangslage war problematisch: Ein neuer Client brauchte 1-2 Tage, weil alles manuell installiert wurde. Das führte zu Fehlern und inkonsistenten Konfigurationen. Besonders kritisch: Nur 60% der Geräte hatten BitLocker aktiviert – ein Compliance-Risiko, falls ein Gerät verloren geht oder gestohlen wird."

**Zeit:** 1:00

---

## Folie 3: Ziel & Anforderungen

### Folientitel
**Ziel: Schnell, sicher, standardisiert**

### Bulletpoints
- Ziel 1: Rollout-Zeit auf unter 4 Stunden reduzieren
- Ziel 2: 100% BitLocker-Verschlüsselung aller Clients
- Ziel 3: Automatisierte, wiederholbare Konfiguration
- Ziel 4: Recovery-Key-Management im Directory Service
- Anforderung: Muss ohne Neuinstallation auf bestehende Prozesse aufsetzen

### Artefakt (Platzhalter)
> [Tabelle: Soll-Ist-Vergleich der Anforderungen]

### Speaker Notes
> „Mein Ziel war klar: Rollout unter 4 Stunden, 100% BitLocker-Compliance und ein standardisierter, wiederholbarer Prozess. Die Recovery-Keys sollten zentral im Directory Service gespeichert werden, damit wir im Notfall zugreifen können. Wichtig war: Die Lösung musste auf unsere bestehende Infrastruktur aufsetzen."

**Zeit:** 1:00

---

## Folie 4: Lösungsansatz & Entscheidung

### Folientitel
**Lösung: Imaging + GPO-basierte BitLocker-Aktivierung**

### Bulletpoints
- Komponente 1: Master-Image mit Standardsoftware erstellen
- Komponente 2: Deployment via MDT/WDS (oder MDM)
- Komponente 3: BitLocker per Gruppenrichtlinie aktivieren
- Komponente 4: Recovery-Key automatisch in AD speichern
- Entscheidung: GPO statt Skript → einfacher, auditierbar, zentral verwaltet

### Artefakt (Platzhalter)
> [Diagramm: Rollout-Workflow mit Komponenten]

### Speaker Notes
> „Mein Lösungsansatz bestand aus vier Komponenten: Erstens ein Master-Image mit allen Standard-Anwendungen. Zweitens ein Deployment-System für die automatische Installation. Drittens BitLocker-Aktivierung per Gruppenrichtlinie. Viertens automatische Speicherung der Recovery-Keys im Active Directory. Ich habe mich für GPO statt Skript entschieden, weil es auditierbar und zentral verwaltet ist."

**Zeit:** 1:30

---

## Folie 5: Umsetzung – Imaging & Deployment

### Folientitel
**Umsetzung Teil 1: Master-Image und Deployment**

### Bulletpoints
- Master-Image erstellt: Windows, Office, Standard-Tools, Treiber
- Sysprep für Generalisierung (SID-Problem vermeiden)
- Deployment-Server konfiguriert
- Task Sequence: Image → Domain-Join → Updates → Software
- Test: 3 Pilot-Geräte erfolgreich deployed

### Artefakt (Platzhalter)
> [Screenshot: Task Sequence oder Deployment-Fortschritt]

### Speaker Notes
> „Die Umsetzung begann mit dem Master-Image. Ich habe ein Windows-System mit Office und unseren Standard-Tools aufgesetzt, dann mit Sysprep generalisiert – das ist wichtig, damit jeder Client eine eigene SID bekommt. Die Task Sequence auf dem Deployment-Server führt dann automatisch Image, Domain-Join, Updates und Software-Installation durch. Drei Pilot-Geräte habe ich erfolgreich getestet."

**Zeit:** 1:30

---

## Folie 6: Umsetzung – BitLocker & Recovery

### Folientitel
**Umsetzung Teil 2: BitLocker-Verschlüsselung**

### Bulletpoints
- GPO erstellt: BitLocker aktivieren bei TPM-Vorhandensein
- Verschlüsselungsmethode: AES-256
- Recovery-Key: Automatisch in AD speichern (Attribut: ms-FVE-RecoveryPassword)
- Ausnahme-Prozess: Geräte ohne TPM → manueller Review
- Test: BitLocker-Status per PowerShell abfragen

### Artefakt (Platzhalter)
> [Screenshot: GPO-Einstellung oder AD-Objekt mit Recovery-Key]

### Speaker Notes
> „Für BitLocker habe ich eine Gruppenrichtlinie erstellt, die die Verschlüsselung automatisch aktiviert, wenn ein TPM-Chip vorhanden ist. Die Verschlüsselungsmethode ist AES-256. Der Recovery-Key wird automatisch im Active Directory gespeichert – das ist wichtig für den Notfall, wenn ein User sein Passwort vergisst oder das TPM defekt ist. Für Geräte ohne TPM gibt es einen manuellen Review-Prozess."

**Zeit:** 1:30

---

## Folie 7: Ergebnis & Validierung

### Folientitel
**Ergebnis: Ziele erreicht**

### Bulletpoints
- Rollout-Zeit: Von 1-2 Tagen auf **3,5 Stunden**
- BitLocker-Compliance: Von 60% auf **100%**
- Fehlerquote: Deutlich reduziert durch Automatisierung
- Recovery-Keys: Alle im AD gespeichert und abrufbar
- Validierung: 10 Geräte erfolgreich ausgerollt, Stichprobe BitLocker-Status

### Artefakt (Platzhalter)
> [Screenshot: BitLocker-Status-Übersicht oder Compliance-Dashboard]

### Speaker Notes
> „Das Ergebnis kann sich sehen lassen: Die Rollout-Zeit ist von 1-2 Tagen auf durchschnittlich 3,5 Stunden gesunken – das Ziel von unter 4 Stunden ist erreicht. Die BitLocker-Compliance liegt jetzt bei 100%. Alle Recovery-Keys sind im AD gespeichert und können im Notfall abgerufen werden. Ich habe das mit einer Stichprobe von 10 Geräten validiert."

**Zeit:** 1:30

---

## Folie 8: Fazit & Lessons Learned

### Folientitel
**Fazit: Standardisierung bringt Sicherheit und Effizienz**

### Bulletpoints
- Nutzen: Schnellerer Onboarding-Prozess, höhere Sicherheit
- Lesson Learned 1: Pilotphase unverzichtbar (3 Geräte haben Probleme aufgedeckt)
- Lesson Learned 2: Dokumentation für Kollegen wichtig
- Backout-Plan war vorhanden: Manueller Rollout als Fallback
- Ich freue mich auf Ihre Fragen!

### Speaker Notes
> „Zusammenfassend: Der standardisierte Rollout bringt schnelleres Onboarding und höhere Sicherheit. Meine wichtigsten Learnings: Eine Pilotphase ist unverzichtbar – die drei Testgeräte haben kleinere Probleme aufgedeckt, die ich vor dem breiten Rollout beheben konnte. Außerdem habe ich den Prozess dokumentiert, damit auch meine Kollegen ihn durchführen können. Als Backout-Plan hätte ich jederzeit auf den manuellen Rollout zurückfallen können. Ich freue mich auf Ihre Fragen."

**Zeit:** 1:00

---

## Artefakte (Platzhalter-Übersicht)

| Folie | Artefakt | Beschreibung |
|-------|----------|--------------|
| 2 | Status vor Projekt | BitLocker-Compliance-Rate, Rollout-Zeiten |
| 3 | Soll-Ist-Vergleich | Anforderungstabelle |
| 4 | Workflow-Diagramm | Rollout-Prozess visualisiert |
| 5 | Task Sequence | Deployment-Schritte |
| 6 | GPO oder AD-Objekt | BitLocker-Einstellung, Recovery-Key |
| 7 | Compliance-Dashboard | BitLocker-Status nach Rollout |

---

## Prüferfragen und Model-Antworten

### Frage 1: Was ist BitLocker und warum ist es wichtig?
> **Antwort:** BitLocker ist die Festplattenverschlüsselung von Microsoft Windows. Sie schützt Daten bei Verlust oder Diebstahl eines Geräts. Ohne BitLocker könnte jemand die Festplatte ausbauen und in einem anderen Gerät auslesen. Mit BitLocker sind die Daten verschlüsselt und ohne Key unlesbar.

### Frage 2: Was ist ein TPM und welche Rolle spielt es?
> **Antwort:** TPM steht für Trusted Platform Module. Es ist ein Sicherheitschip auf dem Mainboard, der kryptografische Schlüssel sicher speichert. Bei BitLocker speichert das TPM den Verschlüsselungsschlüssel und gibt ihn nur frei, wenn das System nicht manipuliert wurde – zum Beispiel beim normalen Bootvorgang.

### Frage 3: Was passiert, wenn ein User sein BitLocker-Passwort vergisst?
> **Antwort:** Dann braucht man den Recovery-Key. In meiner Lösung wird der automatisch im Active Directory gespeichert. Ein Administrator kann den Key aus dem AD-Objekt des Computers auslesen und dem User geben, damit er die Festplatte entsperren kann.

### Frage 4: Warum haben Sie Sysprep verwendet?
> **Antwort:** Sysprep generalisiert ein Windows-System, indem es die eindeutige SID und andere gerätespezifische Informationen entfernt. Ohne Sysprep hätten alle Clients dieselbe SID, was zu Problemen in der Domäne führen würde – zum Beispiel bei Gruppenrichtlinien oder Softwareverteilung.

### Frage 5: Was ist der Unterschied zwischen MDT und MDM?
> **Antwort:** MDT, Microsoft Deployment Toolkit, ist für klassisches Image-Deployment über das Netzwerk – typisch für On-Premises-Umgebungen. MDM, Mobile Device Management, ist cloudbasiert und verwaltet Geräte unabhängig vom Standort. Bei modernen Setups nutzt man oft Autopilot mit Intune als MDM.

### Frage 6: Was wäre Ihr Backout-Plan gewesen?
> **Antwort:** Wenn der automatische Rollout nicht funktioniert hätte, wäre ich auf den manuellen Prozess zurückgefallen. Die Geräte waren vor der Verschlüsselung voll funktionsfähig. Im Notfall hätte ich auch BitLocker per Gruppenrichtlinie wieder deaktivieren können.

### Frage 7: Wie stellen Sie sicher, dass der Recovery-Key nicht verloren geht?
> **Antwort:** Der Recovery-Key wird automatisch im Active Directory gespeichert – das passiert vor der Verschlüsselung. Das AD wird regelmäßig gesichert. Zusätzlich könnte man die Keys auch in ein separates Backup-System exportieren oder einen zweiten Recovery-Mechanismus einrichten.

### Frage 8: Warum GPO statt PowerShell-Skript?
> **Antwort:** Eine GPO ist zentral verwaltet, auditierbar und greift automatisch bei jedem Gruppenrichtlinien-Refresh. Ein Skript müsste man manuell ausführen oder in die Task Sequence einbauen, was fehleranfälliger ist. Außerdem dokumentiert sich die GPO selbst – man sieht in der Konsole sofort, was konfiguriert ist.

### Frage 9: Was ist eine Task Sequence?
> **Antwort:** Eine Task Sequence ist eine Abfolge von automatisierten Schritten beim Deployment – zum Beispiel: Image auf Festplatte kopieren, Windows einrichten, Domain-Join durchführen, Software installieren, BitLocker aktivieren. Sie läuft automatisch ab und macht den Prozess wiederholbar.

### Frage 10: Wie würden Sie den Prozess weiter verbessern?
> **Antwort:** Als nächsten Schritt würde ich Windows Autopilot evaluieren. Damit könnte man neue Geräte direkt vom Hersteller an User schicken, die sich dann selbst provisionieren – komplett ohne dass die IT das Gerät anfassen muss. Das wäre besonders für Remote-Mitarbeiter ideal.

---

## Quellen (Kurz)

- [Microsoft: BitLocker Overview](https://docs.microsoft.com/de-de/windows/security/information-protection/bitlocker/bitlocker-overview) – Funktionsweise BitLocker
- [IT Process Wiki: Change Management](https://wiki.en.it-processmaps.com/index.php/Change_Management) – Rollout als Change
- [IHK Bewertungskriterien](https://www.ihk.de/blueprint/servlet/resource/blob/2618244/21345f4e591a4a035d4e1ca68c3c011f/kriterien-bewertung-praesentation-data.pdf) – Entscheidungsbegründung als Kriterium
