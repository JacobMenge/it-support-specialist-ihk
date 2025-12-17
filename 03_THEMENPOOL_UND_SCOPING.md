# Themenpool und Scoping

## Wozu ist dieses Dokument?

Hier findest du über 25 Themenideen für deine Präsentation, gruppiert nach Kategorien. Zu jedem Thema: Was ist der Kern? Welche Ergebnisse kannst du zeigen? Welche Prüferfragen drohen? Plus: Drei Methoden, um DEIN Thema zu finden.

---

## In 2 Minuten gelesen

- Wähle ein Thema aus deiner echten Praxis (Kurs, Praktikum, Job)
- Grenze ein: Ein Problem vollständig statt drei oberflächlich
- Frage dich: „Kann ich Problem, Vorgehen und Ergebnis in 10 Min. zeigen?"
- Prüfer fragen nach Alternativen, Risiken und Lessons Learned
- Nutze die 3 Methoden unten, um dein persönliches Thema zu finden

---

## Themenpool: 28 Ideen nach Kategorien

### Kategorie 1: Netzwerk & Connectivity

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 1 | **DNS-Auflösungsproblem** | Client kann Dienste nicht erreichen, DNS-Troubleshooting | Vorher/Nachher nslookup, Ticket-Dokumentation | Was ist DNS? Welche DNS-Server gibt es? Wie funktioniert Caching? |
| 2 | **DHCP-Lease-Problem** | Client bekommt keine IP, Scope-Analyse | ipconfig-Ausgaben, DHCP-Scope-Screenshot | Was macht DHCP? Was ist eine Lease-Zeit? Alternativen zu DHCP? |
| 3 | **WLAN-Verbindungsprobleme** | Instabile Verbindung, Analyse, Optimierung | Signal-Messung, Kanalwechsel-Dokumentation | Was ist der Unterschied 2.4/5 GHz? Was sind Interferenzen? |
| 4 | **VPN-Connectivity-Issue** | Remote-Zugriff schlägt fehl | Verbindungslogs, Firewall-Regeln | Was ist ein VPN-Tunnel? Split vs. Full Tunnel? |
| 5 | **Netzwerkdrucker nicht erreichbar** | Drucker offline, Diagnose Netzwerk vs. Drucker | Ping-Tests, Treiber-Status, Lösung | Welche Druckprotokolle gibt es? Was ist ein Print-Server? |

### Kategorie 2: Client / Windows / Linux

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 6 | **Bluescreen-Analyse (BSOD)** | Systemabsturz analysieren, Ursache finden | Event-Logs, Treiber-Update, Stabilitätsnachweis | Was sind Stop-Codes? Wie liest man Minidumps? |
| 7 | **Performance-Problem** | Langsamer PC, Ressourcen-Analyse | Task-Manager-Screenshots, Maßnahmen, Vorher/Nachher | Was verbraucht RAM/CPU? Wie priorisiert Windows Prozesse? |
| 8 | **Windows-Update-Fehler** | Updates schlagen fehl, Troubleshooting | Update-Historie, CBS-Log-Auszug, Lösung | Was ist WSUS? Wie funktioniert Windows Update? |
| 9 | **Softwareverteilung/Paketierung** | Software zentral ausrollen | Deployment-Log, Erfolgsquote | Was ist ein MSI? Silent Install Parameter? |
| 10 | **Linux-Client-Integration** | Linux in Windows-Domäne einbinden | Konfigurationsdateien, Authentifizierungs-Test | Was ist SSSD? Kerberos vs. NTLM? |

### Kategorie 3: Identity & Access Management

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 11 | **Account-Lockout-Analyse** | Ständige Sperrungen, Ursache finden | Event-Logs, Lockout-Quelle, Lösung | Was ist Account-Lockout-Policy? Warum sperrt man Accounts? |
| 12 | **Passwort-Reset-Prozess** | Sicherer Self-Service oder Support-Prozess | Prozessdiagramm, Sicherheitsmaßnahmen | Was ist MFA? Wie verifiziert man Identität? |
| 13 | **MFA-Rollout für Benutzergruppe** | Multi-Faktor-Authentifizierung einführen | Rollout-Plan, Benutzer-Kommunikation, Erfolgsrate | Welche MFA-Methoden gibt es? Backup-Codes? |
| 14 | **Conditional Access Policy** | Zugriff nach Bedingungen steuern | Policy-Screenshot, Testfälle | Was ist Zero Trust? Device Compliance? |
| 15 | **Berechtigungsproblem (NTFS/Share)** | User kann nicht auf Ressource zugreifen | Berechtigungs-Analyse, effektive Rechte | Was ist Vererbung? Share vs. NTFS-Rechte? |

### Kategorie 4: M365 / Collaboration (generisch)

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 16 | **E-Mail-Zustellproblem** | Mails kommen nicht an, Analyse | Message-Trace, Spam-Filter-Logs | Was ist SPF/DKIM/DMARC? Wie funktioniert Mail-Routing? |
| 17 | **Collaboration-Tool-Einführung** | Teams/Chat für Abteilung einrichten | Governance-Konzept, Schulungsplan | Was ist ein Mandant? Gastzugriff? |
| 18 | **SharePoint-Berechtigungsproblem** | Zugriff auf Dokumente klappt nicht | Berechtigungs-Hierarchie, Lösung | Was sind SharePoint-Gruppen? Vererbung brechen? |
| 19 | **OneDrive-Sync-Problem** | Dateien synchronisieren nicht | Sync-Status, Konfliktlösung | Was ist Known Folder Move? Offline-Dateien? |

### Kategorie 5: Security / Phishing / Hardening

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 20 | **Phishing-Incident bearbeiten** | User hat auf Link geklickt, Reaktion | Incident-Timeline, Maßnahmen, Lessons Learned | Was sind Indicators of Compromise? Wie erkenne ich Phishing? |
| 21 | **Endpoint-Hardening** | Client absichern nach Standard | Checkliste, GPO-Einstellungen | Was ist CIS Benchmark? Least Privilege? |
| 22 | **Malware-Verdacht analysieren** | Auffälliges Verhalten untersuchen | Scan-Ergebnisse, Quarantäne, Bereinigung | Was ist ein False Positive? Sandbox-Analyse? |
| 23 | **BitLocker-Aktivierung** | Festplattenverschlüsselung ausrollen | Deployment-Status, Recovery-Key-Management | Warum verschlüsseln? Was ist TPM? |

### Kategorie 6: Prozesse / Ticket / Onboarding

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 24 | **Ticket-Prozess optimieren** | Kategorisierung/Routing verbessern | Vorher/Nachher-Metriken, neuer Workflow | Was ist SLA? First Call Resolution? |
| 25 | **User-Onboarding-Prozess** | Neuer Mitarbeiter, alle Zugänge einrichten | Checkliste, Zeitersparnis, Automatisierung | Was gehört zum Onboarding? Provisioning? |
| 26 | **Offboarding/Deprovisioning** | Mitarbeiter verlässt Firma, Zugänge entziehen | Prozess-Dokumentation, Sicherheitsaspekte | Was ist ein Deprovisioning-Workflow? Revocation? |

### Kategorie 7: Kommunikation / Service Recovery

| # | Thema | Kern | Zeigbare Ergebnisse | Typische Prüferfragen |
|---|-------|------|---------------------|----------------------|
| 27 | **Eskalation managen** | Kritischer Incident, VIP-User, Zeitdruck | Kommunikationsprotokoll, Lessons Learned | Was ist funktionale/hierarchische Eskalation? |
| 28 | **Service Recovery nach Major Incident** | Wiederherstellung + Vertrauensaufbau | Timeline, Kommunikationsstrategie, Follow-up | Was ist ein Post-Incident-Review? RCA? |

---

## So findest du DEIN Thema: 3 Methoden

### Methode 1: Ticket-Rückblick
Geh deine letzten 20-30 Tickets durch und frage:
- Welches Ticket war am interessantesten?
- Wo habe ich etwas Neues gelernt?
- Wo gab es ein klares Vorher/Nachher?

**Kriterium:** Du solltest das Ticket in 2 Sätzen zusammenfassen können.

### Methode 2: Kurs-Projekt-Reflexion
Falls du ein Abschlussprojekt im Kurs hattest:
- Was war die zentrale Aufgabe?
- Welchen Teil davon kann ich in 10 Minuten vollständig darstellen?
- Wo habe ich Entscheidungen getroffen?

**Kriterium:** Es muss ein messbares Ergebnis geben.

### Methode 3: Problem-Lösungs-Interview
Stell dir selbst diese Fragen:
1. Welches IT-Problem habe ich in den letzten Monaten gelöst?
2. Was war die Herausforderung dabei?
3. Wie bin ich vorgegangen?
4. Was war das Ergebnis?
5. Was würde ich heute anders machen?

**Kriterium:** Wenn du alle 5 Fragen beantworten kannst, hast du dein Thema.

---

## Scoping-Checkliste: Ist mein Thema passend?

```
[ ] Kann ich das Problem in 1-2 Sätzen erklären?
[ ] Ist der Impact klar (Wer war betroffen? Wie stark?)?
[ ] Habe ich ein strukturiertes Vorgehen (nicht „Trial and Error")?
[ ] Gibt es ein messbares Ergebnis?
[ ] Kann ich Artefakte zeigen (Screenshots, Logs, Diagramme)?
[ ] Kenne ich mindestens eine Alternative, die ich verworfen habe?
[ ] Kann ich Risiken und Gegenmaßnahmen benennen?
[ ] Passt alles in 10 Minuten?
```

**Wenn du 6+ Häkchen setzen kannst:** Gutes Thema, loslegen!
**Wenn du 4-5 Häkchen hast:** Überlege, ob du den Scope anpassen kannst.
**Wenn du unter 4 Häkchen hast:** Wähle ein anderes Thema.

---

## Scope richtig setzen: Beispiele

### Zu breit (schlecht)
> „Ich präsentiere unser gesamtes Ticketsystem und alle Prozesse."

### Richtig eingegrenzt (gut)
> „Ich zeige, wie ich ein wiederkehrendes DNS-Problem für die Buchhaltungsabteilung analysiert und dauerhaft gelöst habe."

### Zu klein (problematisch)
> „Ich zeige, wie ich ein Passwort zurückgesetzt habe."

### Richtig eingegrenzt (gut)
> „Ich zeige, wie ich einen sicheren Self-Service-Passwort-Reset implementiert habe, der die Support-Tickets um 30% reduziert hat."

---

## Quellen (Kurz)

- [IHK Merkblatt IT-Berufe](https://www.ihk.de/blueprint/servlet/resource/blob/5025172/1659802233c53ffe145011d80396badc/merkblatt-it-berufe-data.pdf) – Anforderungen an Projektarbeit und Präsentation
- [IHK Bodensee-Oberschwaben: Projektarbeit](https://www.ihk.de/bodensee-oberschwaben/ausbildung/ausbildungspruefungen/berufsbezogene-pruefungsanforderungen/it-berufe/praesentation-der-projektarbeit-und-fachgespraech-3013362) – Echte betriebliche Aufgaben, keine künstlichen Szenarien
- [Atlassian: Problem Management](https://www.atlassian.com/itsm/problem-management) – ITIL-Konzepte für Themenfindung
- [IT Process Wiki: Incident Management](https://wiki.en.it-processmaps.com/index.php/Incident_Management) – Incident vs. Problem vs. Change
