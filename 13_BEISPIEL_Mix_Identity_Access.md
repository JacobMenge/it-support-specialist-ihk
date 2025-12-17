# Beispielpräsentation: Account-Lockout-Analyse mit MFA-Kommunikation

## Wozu ist dieses Dokument?

Eine vollständige Beispielpräsentation mit Mix-Fokus (Technik + Kommunikation). Zeigt einen Account-Lockout-Fall mit technischer Analyse und gleichzeitiger User-Kommunikation. Mit Speaker Notes, Artefakt-Hinweisen und Prüferfragen.

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

### Speaker Notes
> „Guten Tag, meine Präsentation richtet sich an IT-Administratoren. Ich zeige Ihnen heute, wie ich ein wiederkehrendes Account-Lockout-Problem bei einem Mitglied der Geschäftsleitung analysiert und gelöst habe. Der Fall zeigt, wie technische Analyse und User-Kommunikation zusammenspielen – denn die Ursache lag in einer MFA-Konfiguration, die der User nicht verstand."

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

### Speaker Notes
> „Die Ausgangslage war heikel: Der Geschäftsführer konnte sich Freitagmorgen nicht anmelden – sein Account war gesperrt. Das war bereits das vierte Mal in zwei Wochen. Bisherige Lösung war immer nur das Entsperren, aber nach wenigen Minuten war der Account wieder zu. Der Geschäftsführer war verständlicherweise verärgert und machte Druck."

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

### Speaker Notes
> „Mein Ziel war nicht einfach wieder entsperren, sondern die Ursache finden. Gleichzeitig wollte ich dem User erklären, was passiert – damit er versteht und mitarbeiten kann. Mein Analyse-Ansatz: Event-Logs prüfen, Lockout-Quelle finden, MFA-Konfiguration checken. Wichtig war auch, einen Sicherheitsvorfall auszuschließen – ein Brute-Force-Angriff hätte ähnliche Symptome."

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

### Speaker Notes
> „Die technische Analyse startete mit den Event-Logs auf dem Domain Controller. Event-ID 4740 zeigt Account-Lockouts – und da sah ich, dass die Fehlversuche vom Mobilgerät des Users kamen. Bei der weiteren Prüfung stellte sich heraus: Der User hatte eine alte Mail-App installiert, die noch das alte Passwort gespeichert hatte. Dazu war die MFA-App falsch konfiguriert. Jeder Sync-Versuch der App führte zu Fehlversuchen."

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

### Speaker Notes
> „Bei einem VIP wie dem Geschäftsführer ist persönliche Kommunikation wichtig. Ich habe das Gespräch gesucht und das Problem ohne Schuldzuweisung erklärt: Die alte App auf seinem Handy war das Problem, nicht er selbst. Gemeinsam haben wir die App deinstalliert und MFA neu eingerichtet. Ich habe ihm auch erklärt, was MFA ist – der zweite Schlüssel zu seinem Account. Das hat das Verständnis erhöht und verhindert zukünftige Probleme."

**Zeit:** 1:15

---

## Folie 6: Lösung & Sicherheitsaspekte

### Folientitel
**Lösung: App bereinigt, MFA neu konfiguriert**

### Bulletpoints
- Maßnahme 1: Alte Mail-App deinstalliert
- Maßnahme 2: Authenticator-App neu eingerichtet
- Maßnahme 3: Passwort zurückgesetzt (Sicherheit)
- Maßnahme 4: Account entsperrt
- Sicherheits-Check: Event-Logs zeigen keine externen Angriffsversuche

### Artefakt (Platzhalter)
> [Screenshot: MFA-Setup oder Security-Log-Prüfung]

### Speaker Notes
> „Die Lösung bestand aus mehreren Schritten: Alte App deinstallieren, Authenticator neu einrichten, Passwort zurücksetzen – als Sicherheitsmaßnahme – und Account entsperren. Wichtig war auch der Sicherheits-Check: Ich habe die Logs geprüft und bestätigt, dass keine externen Angriffsversuche vorlagen. Die Fehlversuche kamen ausschließlich vom Gerät des Users."

**Zeit:** 1:30

---

## Folie 7: Ergebnis & Dokumentation

### Folientitel
**Ergebnis: Problem dauerhaft gelöst**

### Bulletpoints
- Kein erneuter Lockout seit 2 Wochen
- User versteht MFA und kann bei Problemen selbst helfen
- Dokumentation:
  - Ticket vollständig dokumentiert
  - KB-Artikel: „MFA-Troubleshooting bei Lockout"
  - Prozess: Bei wiederholtem Lockout → Mobilgeräte prüfen

### Artefakt (Platzhalter)
> [Screenshot: Ticket-Abschluss oder KB-Artikel]

### Speaker Notes
> „Das Ergebnis ist positiv: Seit zwei Wochen kein erneuter Lockout. Der User versteht jetzt, wie MFA funktioniert und kann bei kleineren Problemen selbst handeln. Ich habe das Ticket vollständig dokumentiert und einen Knowledge-Base-Artikel erstellt: ‚MFA-Troubleshooting bei Lockout'. Außerdem habe ich als Prozess festgehalten, dass bei wiederholten Lockouts immer auch Mobilgeräte geprüft werden sollten."

**Zeit:** 1:30

---

## Folie 8: Fazit & Lessons Learned

### Folientitel
**Fazit: Technik + Kommunikation = nachhaltige Lösung**

### Bulletpoints
- Technisch: Root Cause Analysis statt nur Entsperren
- Kommunikativ: User einbeziehen und erklären
- Lesson Learned: Bei Lockouts immer Quelle prüfen
- VIP-Handling: Persönlich, zeitnah, ohne Schuldzuweisung
- Ich freue mich auf Ihre Fragen!

### Speaker Notes
> „Mein Fazit: Die Kombination aus technischer Analyse und guter Kommunikation führt zu nachhaltigen Lösungen. Technisch habe ich die Ursache gesucht, statt nur das Symptom zu behandeln. Kommunikativ habe ich den User einbezogen und ihm erklärt, was passiert – so kann er zukünftig selbst aufpassen. Mein Learning: Bei Lockouts immer die Quelle prüfen, und bei VIPs persönlich und ohne Schuldzuweisung kommunizieren. Ich freue mich auf Ihre Fragen."

**Zeit:** 1:00

---

## Artefakte (Platzhalter-Übersicht)

| Folie | Artefakt | Beschreibung |
|-------|----------|--------------|
| 2 | Ticket-Historie | Wiederkehrende Lockouts |
| 3 | Analyse-Workflow | Diagnose-Schritte |
| 4 | Event-Log | Event-ID 4740 mit Quelle |
| 5 | Gesprächsnotizen | Kommunikation mit VIP |
| 6 | MFA-Setup/Security-Log | Lösung und Sicherheitsnachweis |
| 7 | KB-Artikel/Ticket | Dokumentation |

---

## Prüferfragen und Model-Antworten

### Frage 1: Was ist Account-Lockout und wozu dient es?
> **Antwort:** Account-Lockout ist eine Sicherheitsfunktion, die einen Account nach einer bestimmten Anzahl von Fehlversuchen sperrt. Das schützt vor Brute-Force-Angriffen, bei denen ein Angreifer viele Passwörter durchprobiert. Nach der Sperrung muss der Account manuell oder nach einer Wartezeit entsperrt werden.

### Frage 2: Was ist MFA/2FA?
> **Antwort:** MFA steht für Multi-Faktor-Authentifizierung, 2FA für Zwei-Faktor-Authentifizierung. Dabei braucht man neben dem Passwort einen zweiten Faktor – zum Beispiel einen Code aus einer App, eine SMS oder einen Hardware-Token. Das erhöht die Sicherheit erheblich, weil ein gestohlenes Passwort allein nicht mehr ausreicht.

### Frage 3: Wie haben Sie die Lockout-Quelle identifiziert?
> **Antwort:** Über die Event-Logs auf dem Domain Controller. Event-ID 4740 zeigt Account-Lockouts an und enthält das Feld ‚Caller Computer Name' – das ist das Gerät, von dem die Fehlversuche kamen. In diesem Fall war es das Mobilgerät des Users, erkennbar am Gerätenamen.

### Frage 4: Was ist der Unterschied zwischen Passwort und MFA?
> **Antwort:** Das Passwort ist „etwas, das man weiß" – Wissen. MFA fügt einen zweiten Faktor hinzu, typischerweise „etwas, das man hat" wie ein Smartphone oder Token, oder „etwas, das man ist" wie ein Fingerabdruck. Die Kombination macht es für Angreifer deutlich schwerer, sich unberechtigt anzumelden.

### Frage 5: Warum haben Sie das Passwort zusätzlich zurückgesetzt?
> **Antwort:** Als Sicherheitsmaßnahme. Wenn eine App das alte Passwort gespeichert hatte, weiß ich nicht, ob das Passwort kompromittiert wurde oder ob die App es irgendwo hingeschickt hat. Ein neues Passwort stellt sicher, dass nur der User den aktuellen Zugang hat.

### Frage 6: Was wäre gewesen, wenn es ein Brute-Force-Angriff war?
> **Antwort:** Dann hätte ich sofort eskaliert – an den Security-Verantwortlichen oder das SOC, falls vorhanden. Die nächsten Schritte wären: Account zunächst gesperrt lassen, IP-Adressen der Angreifer identifizieren, Firewall-Regeln prüfen, und den Incident als Security-Incident dokumentieren.

### Frage 7: Warum ist VIP-Kommunikation anders?
> **Antwort:** VIPs haben oft weniger Zeit und Geduld, aber mehr Einfluss. Ein Problem bei einem Geschäftsführer kann schnell zu einer Eskalation werden. Deshalb ist persönliche, zeitnahe Kommunikation wichtig. Ich muss das Problem ernst nehmen und schnell handeln, aber auch professionell bleiben und nicht in Hektik verfallen.

### Frage 8: Was ist eine Lockout-Policy?
> **Antwort:** Eine Lockout-Policy definiert die Regeln für Account-Sperrungen: Nach wie vielen Fehlversuchen wird gesperrt? Wie lange bleibt der Account gesperrt? Werden Fehlversuche nach einer Zeit zurückgesetzt? Diese Policy wird typischerweise per Gruppenrichtlinie zentral konfiguriert.

### Frage 9: Wie vermeidet man solche Probleme in Zukunft?
> **Antwort:** Durch Schulung der User – sie sollten wissen, dass alte Apps Probleme verursachen können. Durch einen sauberen Offboarding-Prozess für alte Geräte. Und durch Monitoring: Wenn ein Account sich oft sperrt, sollte das auffallen und proaktiv untersucht werden, nicht erst wenn der User sich beschwert.

### Frage 10: Was ist der Unterschied zwischen Conditional Access und MFA?
> **Antwort:** MFA ist ein Authentifizierungsfaktor – der zweite Beweis neben dem Passwort. Conditional Access ist eine Policy-Engine, die entscheidet, wann welche Anforderungen gelten. Zum Beispiel: MFA nur verlangen, wenn man von außerhalb des Firmennetzwerks zugreift. Conditional Access kann MFA als Anforderung enthalten, aber auch andere Bedingungen prüfen.

---

## Quellen (Kurz)

- [Microsoft: Account Lockout](https://docs.microsoft.com/de-de/windows/security/threat-protection/security-policy-settings/account-lockout-policy) – Lockout-Policy und Event-IDs
- [IT Process Wiki: Incident Management](https://wiki.en.it-processmaps.com/index.php/Incident_Management) – VIP-Incidents und Eskalation
- [IHK Bewertungskriterien](https://www.ihk.de/blueprint/servlet/resource/blob/2618244/21345f4e591a4a035d4e1ca68c3c011f/kriterien-bewertung-praesentation-data.pdf) – Fachliche Tiefe und Kommunikation
