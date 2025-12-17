---
title: "Beispiel: Client-Rollout mit BitLocker"
description: Vollständige Beispielpräsentation mit Technik-Fokus - Standardisierter Rollout
---

# Beispielpräsentation: Standardisierter Client-Rollout mit BitLocker

!!! abstract "Auf einen Blick"
    Eine vollständige Beispielpräsentation mit **Technik-Fokus**. Zeigt einen strukturierten Rollout-Prozess für neue Clients mit Fokus auf Standardisierung und Sicherheit. Mit Speaker Notes, Artefakt-Hinweisen und Prüferfragen.

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

!!! quote "Speaker Notes"
    „Guten Tag, meine Präsentation richtet sich an die IT-Leitung. Ich zeige Ihnen heute, wie ich unseren Client-Rollout-Prozess standardisiert und dabei die Sicherheit durch BitLocker-Verschlüsselung gewährleistet habe. Dabei gehe ich auf die Herausforderungen, meinen Lösungsansatz und das Ergebnis ein."

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

!!! quote "Speaker Notes"
    „Die Ausgangslage war problematisch: Ein neuer Client brauchte 1-2 Tage, weil alles manuell installiert wurde. Das führte zu Fehlern und inkonsistenten Konfigurationen. Besonders kritisch: Nur 60% der Geräte hatten BitLocker aktiviert – ein Compliance-Risiko, falls ein Gerät verloren geht oder gestohlen wird."

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

!!! quote "Speaker Notes"
    „Mein Ziel war klar: Rollout unter 4 Stunden, 100% BitLocker-Compliance und ein standardisierter, wiederholbarer Prozess. Die Recovery-Keys sollten zentral im Directory Service gespeichert werden, damit wir im Notfall zugreifen können. Wichtig war: Die Lösung musste auf unsere bestehende Infrastruktur aufsetzen."

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

!!! quote "Speaker Notes"
    „Mein Lösungsansatz bestand aus vier Komponenten: Erstens ein Master-Image mit allen Standard-Anwendungen. Zweitens ein Deployment-System für die automatische Installation. Drittens BitLocker-Aktivierung per Gruppenrichtlinie. Viertens automatische Speicherung der Recovery-Keys im Active Directory. Ich habe mich für GPO statt Skript entschieden, weil es auditierbar und zentral verwaltet ist."

**Zeit:** 1:30

---

## Folie 5: Umsetzung – Imaging & Deployment

### Folientitel
**Umsetzung: Master-Image und automatisches Deployment**

### Bulletpoints
- Master-Image erstellt: Windows 11 + Office + Standardsoftware
- Sysprep für Generalisierung (eindeutige SID pro Client)
- WDS-Server konfiguriert für PXE-Boot
- Task Sequence in MDT: Image → Domain Join → Software → Treiber
- Testlauf mit 5 Pilot-Geräten erfolgreich

### Artefakt (Platzhalter)
> [Screenshot: MDT Task Sequence oder WDS-Konsole]

!!! quote "Speaker Notes"
    „In der Umsetzung habe ich zunächst ein Master-Image erstellt mit Windows 11, Office und unserer Standardsoftware. Das Image wurde mit Sysprep generalisiert, damit jeder Client eine eigene SID erhält. Dann habe ich den WDS-Server für PXE-Boot konfiguriert und eine Task Sequence in MDT angelegt, die automatisch das Image installiert, den Client in die Domäne aufnimmt und die Treiber installiert. Mit fünf Pilot-Geräten habe ich den Prozess erfolgreich getestet."

**Zeit:** 1:30

---

## Folie 6: Umsetzung – BitLocker & Recovery Keys

### Folientitel
**Umsetzung: BitLocker per Gruppenrichtlinie**

### Bulletpoints
- GPO erstellt: „Workstation-BitLocker-Policy"
- Einstellungen: AES-256, TPM erforderlich, keine PIN
- Recovery-Key automatisch in AD speichern aktiviert
- Test: Client verschlüsselt, Key im AD-Computerobjekt sichtbar
- Rollout auf alle neuen Clients nach Pilot-Phase

### Artefakt (Platzhalter)
> [Screenshot: GPO-Einstellungen oder AD-Recovery-Key]

!!! quote "Speaker Notes"
    „Für BitLocker habe ich eine Gruppenrichtlinie erstellt. Die Einstellungen: AES-256-Verschlüsselung, TPM als Schutz erforderlich, keine zusätzliche PIN für bessere Benutzerfreundlichkeit. Entscheidend war die Option, den Recovery-Key automatisch im Active Directory zu speichern. Im Test konnte ich sehen, dass der Key im Computerobjekt hinterlegt wurde. Nach der erfolgreichen Pilot-Phase habe ich die Policy auf alle neuen Clients ausgerollt."

**Zeit:** 1:30

---

## Folie 7: Ergebnis & Validierung

### Folientitel
**Ergebnis: Schneller, sicherer, standardisiert**

### Bulletpoints
- Rollout-Zeit: 1-2 Tage → **unter 4 Stunden** (Ziel erreicht)
- BitLocker-Compliance: 60% → **100%** (Ziel erreicht)
- Fehlerquote bei Konfiguration: deutlich reduziert
- Recovery-Keys: 100% zentral im AD gespeichert
- Validierung: 20 Clients erfolgreich ausgerollt, Stichproben-Audit bestanden

### Artefakt (Platzhalter)
> [Tabelle/Grafik: Vorher-Nachher-Vergleich der Metriken]

!!! quote "Speaker Notes"
    „Das Ergebnis: Die Rollout-Zeit ist von 1-2 Tagen auf unter 4 Stunden gesunken – Ziel erreicht. Die BitLocker-Compliance liegt jetzt bei 100 Prozent statt vorher 60 Prozent. Die Fehlerquote bei der Konfiguration ist deutlich gesunken, weil alles automatisiert läuft. Alle Recovery-Keys sind zentral im AD gespeichert. Zur Validierung habe ich 20 Clients ausgerollt und ein Stichproben-Audit durchgeführt – alles bestanden."

**Zeit:** 1:30

---

## Folie 8: Fazit & Lessons Learned

### Folientitel
**Fazit: Was ich gelernt habe**

### Bulletpoints
- Standardisierung spart Zeit und reduziert Fehler
- Automatisierung ermöglicht Skalierung (auch 100 Clients kein Problem)
- BitLocker per GPO ist einfacher als Skript-Lösungen
- Recovery-Key-Management ist kritisch – immer zentral speichern
- Nächster Schritt: Migration auf Autopilot für Cloud-Deployment

### Artefakt (Platzhalter)
> [Optional: Roadmap für zukünftige Verbesserungen]

!!! quote "Speaker Notes"
    „Mein Fazit: Standardisierung spart Zeit und reduziert Fehler erheblich. Durch die Automatisierung können wir jetzt skalieren – auch 100 Clients wären kein Problem. BitLocker per GPO hat sich als einfacher und wartbarer erwiesen als Skript-Lösungen. Ein kritischer Punkt ist das Recovery-Key-Management – ohne zentrale Speicherung stehen wir bei Problemen hilflos da. Als nächsten Schritt plane ich die Migration auf Microsoft Autopilot für Cloud-basiertes Deployment."

**Zeit:** 1:00

---

## Prüferfragen und Model-Antworten

??? question "Frage 1: Was ist BitLocker und warum ist es wichtig?"
    **Antwort:** BitLocker ist die Festplattenverschlüsselung von Microsoft Windows. Sie schützt Daten bei Verlust oder Diebstahl eines Geräts. Ohne BitLocker könnte jemand die Festplatte ausbauen und in einem anderen Gerät auslesen. Mit BitLocker sind die Daten verschlüsselt und ohne Key unlesbar.

??? question "Frage 2: Was ist ein TPM und welche Rolle spielt es?"
    **Antwort:** TPM steht für Trusted Platform Module. Es ist ein Sicherheitschip auf dem Mainboard, der kryptografische Schlüssel sicher speichert. Bei BitLocker speichert das TPM den Verschlüsselungsschlüssel und gibt ihn nur frei, wenn das System nicht manipuliert wurde.

??? question "Frage 3: Was passiert, wenn ein User sein BitLocker-Passwort vergisst?"
    **Antwort:** Dann braucht man den Recovery-Key. In meiner Lösung wird der automatisch im Active Directory gespeichert. Ein Administrator kann den Key aus dem AD-Objekt des Computers auslesen und dem User geben.

??? question "Frage 4: Warum haben Sie Sysprep verwendet?"
    **Antwort:** Sysprep generalisiert ein Windows-System, indem es die eindeutige SID und andere gerätespezifische Informationen entfernt. Ohne Sysprep hätten alle Clients dieselbe SID, was zu Problemen in der Domäne führen würde.

??? question "Frage 5: Was ist der Unterschied zwischen MDT und MDM?"
    **Antwort:** MDT, Microsoft Deployment Toolkit, ist für klassisches Image-Deployment über das Netzwerk. MDM, Mobile Device Management, ist cloudbasiert und verwaltet Geräte unabhängig vom Standort. Bei modernen Setups nutzt man oft Autopilot mit Intune als MDM.

??? question "Frage 6: Warum GPO statt PowerShell-Skript?"
    **Antwort:** Eine GPO ist zentral verwaltet, auditierbar und greift automatisch bei jedem Gruppenrichtlinien-Refresh. Ein Skript müsste man manuell ausführen oder in die Task Sequence einbauen, was fehleranfälliger ist.

