---
title: "Beispiel: Identity & Access"
description: Vollständige Beispielpräsentation mit Mix-Fokus - Account-Lockout/MFA
---

# Beispielpräsentation: Account-Lockout-Analyse mit MFA-Kommunikation

!!! abstract "Auf einen Blick"
    Eine vollständige Beispielpräsentation mit **Mix-Fokus** (Technik + Kommunikation). Zeigt einen Account-Lockout-Fall mit technischer Analyse und gleichzeitiger User-Kommunikation. Mit Speaker Notes, Artefakt-Hinweisen und Prüferfragen.

---

## Metadaten

| Feld | Inhalt |
|------|--------|
| **Titel** | Account-Lockout-Analyse und MFA-Troubleshooting mit User-Kommunikation |
| **Zielgruppe** | IT-Administratoren |
| **Ausgangslage** | VIP-User (Geschäftsleitung) kann sich nicht anmelden, Account ständig gesperrt |
| **Ziel** | Ursache finden, Problem lösen, User über MFA-Thematik informieren |
| **Erfolgskriterien** | Kein erneuter Lockout, User versteht MFA, Dokumentation erstellt |
| **Scope** | Account-Lockout und MFA, keine Passwort-Policy-Änderung |
| **Risiken** | VIP-Eskalation, Sicherheitsrelevanz (Brute-Force-Verdacht) |

---

## Folie 1: Titel + Zielgruppe

### Folientitel
**Account-Lockout-Analyse bei VIP-User**

### Bulletpoints
- Präsentation von: [Dein Name]
- Datum: [Prüfungsdatum]
- Zielgruppe: IT-Administratoren

!!! quote "Speaker Notes"
    „Guten Tag, meine Präsentation richtet sich an IT-Administratoren. Ich zeige Ihnen heute, wie ich ein wiederkehrendes Account-Lockout-Problem bei einem Mitglied der Geschäftsleitung analysiert und gelöst habe. Der Fall zeigt, wie technische Analyse und User-Kommunikation zusammenspielen – denn die Ursache lag in einer MFA-Konfiguration, die der User nicht verstand."

**Zeit:** 0:30

---

## Folie 2: Ausgangslage & Problem

### Folientitel
**Ausgangslage: VIP kann nicht arbeiten**

### Bulletpoints
- Freitagmorgen: Geschäftsführer kann sich nicht anmelden
- Symptom: Account-Lockout nach wenigen Sekunden nach Entsperrung
- History: Bereits das 4. Mal in 2 Wochen
- Bisherige Lösung: Account entsperren → funktioniert kurz → wieder gesperrt
- Impact: Geschäftsführer verärgert, Druck auf IT

### Artefakt (Platzhalter)
> [Screenshot: Ticket-Historie oder Account-Status im Directory Service]

!!! quote "Speaker Notes"
    „Die Ausgangslage war heikel: Der Geschäftsführer konnte sich Freitagmorgen nicht anmelden – sein Account war gesperrt. Das war bereits das vierte Mal in zwei Wochen. Bisherige Lösung war immer nur das Entsperren, aber nach wenigen Minuten war der Account wieder zu. Der Geschäftsführer war verständlicherweise verärgert und machte Druck."

**Zeit:** 1:00

---

## Folie 3: Ziel & Analyse-Ansatz

### Folientitel
**Ziel: Ursache finden, nicht nur Symptom behandeln**

### Bulletpoints
- Technisches Ziel: Root Cause identifizieren (nicht nur entsperren)
- Kommunikationsziel: User verstehen lassen, was passiert
- Analyse-Ansatz:
  - Event-Logs auf Domain Controller prüfen
  - Lockout-Quelle identifizieren
  - MFA-Konfiguration prüfen
- Sicherheitsaspekt: Brute-Force-Angriff ausschließen

### Artefakt (Platzhalter)
> [Diagnose-Workflow oder Analyse-Schritte als Liste]

!!! quote "Speaker Notes"
    „Mein Ziel war nicht einfach wieder entsperren, sondern die Ursache finden. Gleichzeitig wollte ich dem User erklären, was passiert – damit er versteht und mitarbeiten kann. Mein Analyse-Ansatz: Event-Logs prüfen, Lockout-Quelle finden, MFA-Konfiguration checken. Wichtig war auch, einen Sicherheitsvorfall auszuschließen."

**Zeit:** 1:00

---

## Folie 4: Technische Analyse

### Folientitel
**Diagnose: Woher kommen die Fehlversuche?**

### Bulletpoints
- Schritt 1: Event-Log auf DC → Event-ID 4740 (Lockout)
- Schritt 2: Lockout-Quelle identifiziert: Mobilgerät des Users
- Schritt 3: Gerät prüfen → Alte App mit gespeichertem Passwort
- Schritt 4: MFA-App → Authenticator-App falsch konfiguriert
- Erkenntnis: Alte Mail-App + falsche MFA = ständige Fehlversuche

### Artefakt (Platzhalter)
> [Screenshot: Event-Log mit Lockout-Event und Quell-Computer]

!!! quote "Speaker Notes"
    „Die technische Analyse startete mit den Event-Logs auf dem Domain Controller. Event-ID 4740 zeigt Account-Lockouts – und da sah ich, dass die Fehlversuche vom Mobilgerät des Users kamen. Bei der weiteren Prüfung stellte sich heraus: Der User hatte eine alte Mail-App installiert, die noch das alte Passwort gespeichert hatte. Dazu war die MFA-App falsch konfiguriert."

**Zeit:** 1:30

---

## Folie 5: User-Kommunikation

### Folientitel
**Kommunikation: Problem erklären, Lösung gemeinsam umsetzen**

### Bulletpoints
- Setting: Persönliches Gespräch, nicht nur Mail oder Telefon
- Erklärung ohne Schuldzuweisung:
  - „Die alte Mail-App auf Ihrem Handy versucht sich mit dem alten Passwort anzumelden."
  - „Jeder Versuch führt zu einer Sperrung."
- Gemeinsam gelöst: App deinstalliert, MFA neu eingerichtet
- Zusatz: MFA-Funktion erklärt („Das ist Ihr zweiter Schlüssel")

### Artefakt (Platzhalter)
> [Gesprächsnotizen oder MFA-Erklärung als Handout]

!!! quote "Speaker Notes"
    „Bei einem VIP wie dem Geschäftsführer ist persönliche Kommunikation wichtig. Ich habe das Gespräch gesucht und das Problem ohne Schuldzuweisung erklärt: Die alte App auf seinem Handy war das Problem, nicht er selbst. Gemeinsam haben wir die App deinstalliert und MFA neu eingerichtet."

**Zeit:** 1:15

---

## Folie 6: Lösung & Umsetzung

### Folientitel
**Lösung: Bereinigung und Neueinrichtung**

### Bulletpoints
- Maßnahme 1: Alte Mail-App vom Mobilgerät entfernt
- Maßnahme 2: Gespeicherte Credentials in Windows gelöscht
- Maßnahme 3: MFA-Registrierung zurückgesetzt und neu durchgeführt
- Maßnahme 4: Outlook-App korrekt mit modernem Auth eingerichtet
- Validierung: 24 Stunden keine erneute Sperrung

### Artefakt (Platzhalter)
> [Screenshot: MFA-Registrierung oder Authenticator-App Setup]

!!! quote "Speaker Notes"
    „Die Lösung bestand aus mehreren Schritten: Zuerst haben wir die alte Mail-App deinstalliert, die noch das veraltete Passwort gespeichert hatte. Dann habe ich im Credential Manager die gespeicherten Zugangsdaten gelöscht. Anschließend habe ich die MFA-Registrierung zurückgesetzt und gemeinsam mit dem User neu eingerichtet. Zum Schluss haben wir die offizielle Outlook-App mit moderner Authentifizierung konfiguriert. Nach 24 Stunden ohne Sperrung war klar: Problem gelöst."

**Zeit:** 1:30

---

## Folie 7: Ergebnis & Dokumentation

### Folientitel
**Ergebnis: Problem nachhaltig gelöst**

### Bulletpoints
- Technisch: Keine erneute Sperrung seit 2 Wochen
- User: Versteht jetzt MFA und weiß, wann er den Code braucht
- Dokumentation: Ticket mit Root Cause, Knowledge-Base-Artikel erstellt
- Sicherheit: Brute-Force-Verdacht ausgeräumt
- Beziehung: Geschäftsführer zufrieden, positives Feedback an IT-Leitung

### Artefakt (Platzhalter)
> [Screenshot: Ticket-Abschluss oder KB-Artikel]

!!! quote "Speaker Notes"
    „Das Ergebnis war rundum positiv: Technisch gab es seit zwei Wochen keine erneute Sperrung. Der User versteht jetzt, wie MFA funktioniert und wann er den Code aus seiner App braucht. Ich habe das Ticket vollständig dokumentiert und einen Knowledge-Base-Artikel erstellt für ähnliche Fälle. Besonders wichtig: Der Geschäftsführer war zufrieden und hat positives Feedback an die IT-Leitung gegeben."

**Zeit:** 1:30

---

## Folie 8: Fazit & Lessons Learned

### Folientitel
**Fazit: Technik und Kommunikation gehören zusammen**

### Bulletpoints
- Lesson 1: Nicht nur Symptom behandeln, sondern Ursache suchen
- Lesson 2: Bei wiederkehrenden Problemen Event-Logs prüfen
- Lesson 3: User-Kommunikation ist Teil der Lösung, nicht Extra
- Lesson 4: VIP-Fälle brauchen persönliche Betreuung
- Prävention: Onboarding-Guide für MFA-Einrichtung erstellt

### Artefakt (Platzhalter)
> [Optional: MFA-Onboarding-Guide oder Prozessverbesserung]

!!! quote "Speaker Notes"
    „Mein Fazit aus diesem Fall: Technik und Kommunikation gehören zusammen. Nur Account entsperren hätte das Problem nicht gelöst – ich musste die Ursache finden. Die Event-Logs waren dabei entscheidend. Aber genauso wichtig war die Kommunikation: Erst als der User verstanden hat, was MFA ist und warum die alte App Probleme macht, konnten wir das Problem gemeinsam lösen. Als Präventionsmaßnahme habe ich einen MFA-Onboarding-Guide erstellt, damit neue User von Anfang an richtig eingerichtet werden."

**Zeit:** 1:00

---

## Prüferfragen und Model-Antworten

??? question "Frage 1: Was ist Account-Lockout und wozu dient es?"
    **Antwort:** Account-Lockout ist eine Sicherheitsfunktion, die einen Account nach einer bestimmten Anzahl von Fehlversuchen sperrt. Das schützt vor Brute-Force-Angriffen, bei denen ein Angreifer viele Passwörter durchprobiert.

??? question "Frage 2: Was ist MFA/2FA?"
    **Antwort:** MFA steht für Multi-Faktor-Authentifizierung. Dabei braucht man neben dem Passwort einen zweiten Faktor – zum Beispiel einen Code aus einer App, eine SMS oder einen Hardware-Token. Das erhöht die Sicherheit erheblich.

??? question "Frage 3: Wie haben Sie die Lockout-Quelle identifiziert?"
    **Antwort:** Über die Event-Logs auf dem Domain Controller. Event-ID 4740 zeigt Account-Lockouts an und enthält das Feld ‚Caller Computer Name' – das ist das Gerät, von dem die Fehlversuche kamen.

??? question "Frage 4: Warum ist VIP-Kommunikation anders?"
    **Antwort:** VIPs haben oft weniger Zeit und Geduld, aber mehr Einfluss. Ein Problem bei einem Geschäftsführer kann schnell zu einer Eskalation werden. Deshalb ist persönliche, zeitnahe Kommunikation wichtig.

??? question "Frage 5: Was ist der Unterschied zwischen Conditional Access und MFA?"
    **Antwort:** MFA ist ein Authentifizierungsfaktor. Conditional Access ist eine Policy-Engine, die entscheidet, wann welche Anforderungen gelten. Conditional Access kann MFA als Anforderung enthalten, aber auch andere Bedingungen prüfen.

