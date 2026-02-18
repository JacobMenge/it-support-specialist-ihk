---
title: Glossar
description: Wichtige Fachbegriffe für die IHK-Prüfung IT Support Specialist
---

# Glossar

Nachschlagewerk mit allen wichtigen Fachbegriffen für die Prüfung. Nutze die Suchfunktion (++ctrl+k++) oder navigiere über das Inhaltsverzeichnis rechts.

!!! tip "Prüfungs-Tipp"
    In der Prüfung wird erwartet, dass du Fachbegriffe korrekt verwendest und voneinander abgrenzen kannst. Achte besonders auf die Unterschiede zwischen ähnlichen Begriffen.

---

## ITIL und Service-Management

Diese Begriffe stammen aus ITIL (IT Infrastructure Library) und beschreiben standardisierte IT-Service-Prozesse.

### Störung vs. Problem vs. Änderung

| Begriff | Definition | Beispiel | Prüfungsrelevant |
|---------|------------|----------|------------------|
| **Störung (Incident)** | Einzelnes Ereignis, das den Betrieb unterbricht | User kann sich nicht anmelden | Beschreibt das Symptom (WAS) |
| **Problem** | Unbekannte Ursache einer oder mehrerer Störungen | Domänencontroller ausgefallen | Beschreibt die Ursache (WARUM) |
| **Änderung (Change)** | Geplante Veränderung an der IT-Infrastruktur | Betriebssystem-Update | Muss dokumentiert und genehmigt werden |

!!! warning "Häufiger Prüfungsfehler"
    Störung und Problem werden oft verwechselt. Merke: Die Störung ist das, was der User meldet (Symptom). Das Problem ist das, was du als Support findest (Ursache).

### Serviceanfrage (Service Request)

Eine Anfrage nach Informationen, Beratung oder einer Standardänderung – **keine Störung**.

**Typische Beispiele:**

- Neuer Benutzer braucht Zugriff auf einen Ordner
- Anfrage nach einem zweiten Monitor
- Rückfrage zu einer Anwendung

**Abgrenzung:** Bei einer Serviceanfrage funktioniert alles – der User braucht nur etwas Neues oder eine Information.

### SLA (Service Level Agreement)

Schriftliche Vereinbarung zwischen IT und Kunde über die Servicequalität.

| SLA-Element | Bedeutung | Typischer Wert |
|-------------|-----------|----------------|
| **Reaktionszeit** | Wie schnell meldet sich der Support? | P1: 15 Min, P4: 8 Std |
| **Lösungszeit** | Wie schnell wird das Problem behoben? | P1: 4 Std, P4: 72 Std |
| **Verfügbarkeit** | Wie oft ist der Dienst erreichbar? | 99,9% (8,76 Std Ausfall/Jahr) |

### SLA-Priority-Stufen

Die Priorität ergibt sich aus **Impact × Urgency** und bestimmt Reaktions- und Lösungszeiten.

| Priority | Bedeutung | Reaktionszeit | Lösungszeit | Beispiel |
|----------|-----------|---------------|-------------|----------|
| **P1 – Kritisch** | Geschäftskritischer Ausfall, viele User betroffen | 15 Minuten | 4 Stunden | E-Mail-Server für gesamte Firma ausgefallen |
| **P2 – Hoch** | Wichtige Funktion eingeschränkt, Workaround möglich | 1 Stunde | 8 Stunden | CRM-System langsam, Arbeit möglich aber beeinträchtigt |
| **P3 – Mittel** | Einzelner User betroffen, keine Deadline | 4 Stunden | 24 Stunden | Drucker in einem Büro funktioniert nicht |
| **P4 – Gering** | Kosmetisch oder Wunsch, kein Arbeitsausfall | 8 Stunden | 72 Stunden | Desktop-Hintergrund stimmt nicht |

!!! warning "Prüfungsrelevant"
    Die Priorität ist **nicht** dasselbe wie Dringlichkeit. Priority = Impact × Urgency. Ein laut klagender User hat nicht automatisch P1 – entscheidend ist die objektive Auswirkung.

### Service-Metriken

Kennzahlen zur Messung der Servicequalität im IT-Support.

| Metrik | Bedeutung | Typischer Zielwert |
|--------|-----------|-------------------|
| **First Call Resolution (FCR)** | Beim ersten Kontakt gelöst | 60-80% |
| **Mean Time to Respond (MTTR)** | Durchschnittliche Reaktionszeit | Abhängig von Priority |
| **Mean Time to Resolve (MTTR)** | Durchschnittliche Lösungszeit | Abhängig von Priority |
| **SLA-Einhaltungsquote** | Anteil fristgerecht gelöster Tickets | >95% |
| **Kundenzufriedenheit (CSAT)** | Bewertung durch den User nach Lösung | >4/5 |
| **Ticket-Backlog** | Anzahl offener Tickets | Soll stabil bleiben / sinken |

### Erstlösungsquote (First Call Resolution)

Anteil der Störungen, die beim **ersten Kontakt** gelöst werden.

**Formel:** (Beim ersten Kontakt gelöste Tickets / Alle Tickets) × 100

**Benchmark:** 60-80% gilt als guter Wert im 1st-Level-Support.

---

## Netzwerk

Grundlegende Netzwerkbegriffe, die du für Troubleshooting kennen musst.

### DHCP (Dynamic Host Configuration Protocol)

Protokoll zur automatischen Vergabe von Netzwerkkonfiguration.

**Was DHCP verteilt:**

| Parameter | Bedeutung |
|-----------|-----------|
| IP-Adresse | Eindeutige Adresse des Geräts |
| Subnetzmaske | Definiert Netzwerk- und Hostanteil |
| Standardgateway | Router ins Internet/andere Netze |
| DNS-Server | Für Namensauflösung |

**Typische Probleme:**

| Problem | Symptom | Lösung |
|---------|---------|--------|
| DHCP-Server nicht erreichbar | IP beginnt mit 169.254.x.x (APIPA) | Server-Erreichbarkeit prüfen |
| Adresspool erschöpft | Neue Geräte bekommen keine IP | Pool erweitern oder Leases verkürzen |
| Falsche DHCP-Antwort | Falsche Konfiguration | Rogue DHCP Server suchen |

### DNS (Domain Name System)

Übersetzt Hostnamen in IP-Adressen (und umgekehrt).

**Wichtige Eintragstypen:**

| Typ | Funktion | Beispiel |
|-----|----------|----------|
| **A** | Name → IPv4 | www.example.de → 93.184.216.34 |
| **AAAA** | Name → IPv6 | www.example.de → 2001:db8::1 |
| **MX** | Mailserver für Domain | example.de → mail.example.de |
| **CNAME** | Alias (Name → Name) | ftp.example.de → server1.example.de |
| **PTR** | Reverse-Lookup (IP → Name) | 93.184.216.34 → www.example.de |

**Diagnose-Befehle:**

```cmd
nslookup example.de           # Standard-Abfrage
nslookup -type=MX example.de  # MX-Records abfragen
nslookup example.de 8.8.8.8   # Bestimmten DNS-Server fragen
```

### IP-Adressen

**IPv4-Format:** 4 Zahlen (0-255), getrennt durch Punkte → `192.168.1.100`

**Private Adressbereiche (nicht im Internet routbar):**

| Bereich | Klasse | Typische Verwendung |
|---------|--------|---------------------|
| 10.0.0.0 – 10.255.255.255 | A | Große Unternehmen |
| 172.16.0.0 – 172.31.255.255 | B | Mittlere Netze |
| 192.168.0.0 – 192.168.255.255 | C | Heimnetze, kleine Firmen |

**Sonderadressen:**

| Adresse | Bedeutung |
|---------|-----------|
| 127.0.0.1 | Localhost (eigener Rechner) |
| 169.254.x.x | APIPA (kein DHCP verfügbar) |
| 0.0.0.0 | Alle Interfaces / unspezifisch |
| 255.255.255.255 | Broadcast |

### Subnetzmaske und CIDR

Definiert, welcher Teil der IP das Netzwerk und welcher das Gerät ist.

| Subnetzmaske | CIDR | Hosts | Erklärung |
|--------------|------|-------|-----------|
| 255.0.0.0 | /8 | 16.777.214 | Erste Zahl = Netzwerk |
| 255.255.0.0 | /16 | 65.534 | Erste zwei Zahlen = Netzwerk |
| 255.255.255.0 | /24 | 254 | Erste drei Zahlen = Netzwerk |
| 255.255.255.128 | /25 | 126 | Halbes /24-Netz |

### Standardgateway

Die IP-Adresse des Routers – die „Tür nach draußen" für das lokale Netzwerk.

**Prüfen:** `ipconfig` (Windows) oder `ip route` (Linux)

**Problem:** Ohne Gateway kann der Rechner nur lokale Geräte erreichen, kein Internet.

### VPN (Virtual Private Network)

Verschlüsselte Verbindung über ein unsicheres Netzwerk.

| VPN-Typ | Beschreibung | Vor-/Nachteil |
|---------|--------------|---------------|
| **Split-Tunnel** | Nur Firmendaten durch VPN | Schneller, aber weniger sicher |
| **Full-Tunnel** | Gesamter Traffic durch VPN | Sicherer, aber langsamer |

### OSI-Modell

7-Schichten-Referenzmodell für Netzwerkkommunikation.

| Layer | Name | Protokolle/Geräte | Troubleshooting |
|-------|------|-------------------|-----------------|
| 7 | Anwendung | HTTP, SMTP, DNS | Dienst-Logs prüfen |
| 6 | Darstellung | SSL/TLS | Zertifikate prüfen |
| 5 | Sitzung | NetBIOS, RPC | Session-Status |
| 4 | Transport | TCP, UDP | Ports prüfen (netstat) |
| 3 | Vermittlung | IP, ICMP | ping, tracert |
| 2 | Sicherung | Ethernet, MAC | Switch-Port, VLAN |
| 1 | Physisch | Kabel, Hub | LED, Kabeltest |

!!! tip "Merksatz"
    **Von oben:** „**A**lle **D**eutschen **S**tudenten **T**rinken **V**erschiedene **S**orten **B**ier"
    **Von unten:** „**B**itte **S**chicken **V**iele **T**ausend **S**chöne **D**aten **A**n"

**Fehlersuche:** Immer von unten (Layer 1) nach oben arbeiten!

---

## Identitäts- und Zugriffsverwaltung

Begriffe rund um Benutzer, Berechtigungen und Authentifizierung.

### Active Directory (AD)

Microsofts Verzeichnisdienst für zentrale Verwaltung.

**Enthält:**

| Objekt | Beschreibung |
|--------|--------------|
| Benutzerkonten | Login-Daten, Attribute |
| Computerkonten | Domänenmitgliedschaft |
| Gruppen | Berechtigungsbündel |
| OUs | Organisationseinheiten (Struktur) |

**Vorteile:** Single Sign-On (SSO), zentrale Richtlinien, einheitliche Verwaltung.

### Gruppenrichtlinie (GPO)

Zentrale Einstellungen für Benutzer oder Computer.

**Typische Anwendungen:**

| Bereich | Beispiel-Einstellung |
|---------|---------------------|
| Sicherheit | Kennwortlänge, Sperrrichtlinie |
| Desktop | Hintergrund, Startmenü |
| Software | Automatische Installation |
| Netzwerk | Proxy-Einstellungen, VPN |

**Wichtige Befehle:**

```cmd
gpupdate /force     # Richtlinien sofort anwenden
gpresult /r         # Angewendete Richtlinien anzeigen
rsop.msc            # Resultant Set of Policy (grafisch)
```

### Authentifizierung vs. Autorisierung

| Begriff | Frage | Beispiel |
|---------|-------|----------|
| **Authentifizierung** | Wer bist du? | Login mit Passwort |
| **Autorisierung** | Was darfst du? | Zugriff auf Ordner X erlaubt |

!!! warning "Prüfungsrelevant"
    Diese Begriffe werden oft verwechselt. Authentifizierung kommt immer **vor** Autorisierung.

### Authentifizierungsfaktoren

| Faktor | Beschreibung | Beispiele |
|--------|--------------|-----------|
| **Wissen** | Etwas, das du weißt | Passwort, PIN, Sicherheitsfrage |
| **Besitz** | Etwas, das du hast | Smartphone, Token, Smartcard |
| **Biometrie** | Etwas, das du bist | Fingerabdruck, Gesicht, Iris |

### MFA (Mehrstufige Authentifizierung)

Authentifizierung mit mindestens **zwei verschiedenen** Faktoren.

**Beispiel:** Passwort (Wissen) + Authenticator-App (Besitz)

**Warum wichtig:** Selbst bei gestohlenem Passwort fehlt der zweite Faktor.

### Kontosperrung (Account Lockout)

Automatische Sperrung nach mehreren Fehlversuchen.

**Typische Einstellungen:**

| Parameter | Wert | Bedeutung |
|-----------|------|-----------|
| Schwelle | 5 | Nach 5 Fehlversuchen sperren |
| Dauer | 30 Min | Automatische Entsperrung nach 30 Min |
| Zähler-Reset | 30 Min | Fehlversuche vergessen nach 30 Min |

**Häufige Ursachen für wiederholte Sperrungen:**

- Altes Passwort in Anwendung gespeichert
- Mobilgerät mit falschem Passwort verbunden
- Geplante Aufgabe mit abgelaufenen Credentials
- Netzlaufwerk mit gespeichertem altem Passwort

### NTFS- vs. Freigabeberechtigungen

| Typ | Gilt für | Prüfung bei |
|-----|----------|-------------|
| **NTFS** | Lokaler + Netzwerkzugriff | Dateisystem-Ebene |
| **Freigabe** | Nur Netzwerkzugriff | Netzwerkpfad (\\\\server\\share) |

**Wichtig:** Bei Netzwerkzugriff gelten **beide** – die restriktivere gewinnt!

**NTFS-Rechte im Detail:**

| Recht | Lesen | Schreiben | Löschen | Rechte ändern |
|-------|-------|-----------|---------|---------------|
| Lesen | Ja | - | - | - |
| Lesen/Ausführen | Ja | - | - | - |
| Ändern | Ja | Ja | Ja | - |
| Vollzugriff | Ja | Ja | Ja | Ja |

---

## Sicherheit

Wichtige Begriffe zur IT-Sicherheit.

### Phishing

Betrugsversuch per E-Mail, SMS oder Website.

**Erkennungsmerkmale:**

| Merkmal | Beispiel |
|---------|----------|
| Dringlichkeit | „Sofort handeln!" „Letzte Warnung!" |
| Rechtschreibfehler | Tippfehler, schlechte Grammatik |
| Verdächtige Absender | support@amaz0n.evil.com |
| Unbekannte Links | Link zeigt anders als der Text |
| Generische Anrede | „Sehr geehrter Kunde" statt Name |

**Reaktion:** Nicht klicken, IT-Sicherheit informieren, E-Mail melden.

### Schadsoftware-Typen

| Typ | Beschreibung | Verbreitung |
|-----|--------------|-------------|
| **Virus** | Infiziert andere Dateien | Durch Ausführen infizierter Dateien |
| **Wurm** | Verbreitet sich selbstständig | Über Netzwerk automatisch |
| **Trojaner** | Tarnt sich als nützliche Software | Download, E-Mail-Anhang |
| **Ransomware** | Verschlüsselt Daten, fordert Lösegeld | Phishing, Exploits |
| **Spyware** | Spioniert Benutzer aus | Gebündelt mit Software |

### Least Privilege (Minimale Rechtevergabe)

Prinzip: Jeder erhält nur die **minimal notwendigen** Rechte.

**Warum:** Begrenzt Schaden bei Kompromittierung oder Fehlbedienung.

**Beispiel:** Buchhaltung braucht keinen Admin-Zugriff auf den Mailserver.

### Hardening (Härtung)

Absicherung durch Entfernen unnötiger Funktionen und Anwenden sicherer Einstellungen.

**Maßnahmen:**

- Nicht benötigte Dienste deaktivieren
- Sichere Passwortrichtlinie durchsetzen
- Automatische Updates aktivieren
- Firewall konfigurieren
- Unnötige Ports schließen

### Incident Response (Vorfallreaktion)

Strukturierter Ablauf zur Reaktion auf Sicherheitsvorfälle.

**Die 5 Phasen:**

| Phase | Maßnahme | Beispiel |
|-------|----------|----------|
| **1. Erkennen** | Vorfall identifizieren und melden | Phishing-Mail erkannt, Alarm vom Virenscanner |
| **2. Eindämmen** | Schaden begrenzen, Ausbreitung verhindern | Gerät vom Netzwerk trennen, Konto sperren |
| **3. Beseitigen** | Ursache entfernen | Malware entfernen, kompromittiertes Passwort ändern |
| **4. Wiederherstellen** | Systeme in Normalbetrieb bringen | Aus Backup wiederherstellen, Dienste starten |
| **5. Nachbereiten** | Lessons Learned, Maßnahmen zur Prävention | Dokumentation, Prozessanpassung, User-Schulung |

!!! tip "Prüfungs-Tipp"
    Im IT-Support betrifft dich vor allem Phase 1 und 2: Erkennen und Eindämmen. Wichtig ist, dass du weißt, wen du informieren musst (Eskalation an IT-Security) und was du sofort tun kannst (Gerät isolieren, Konto sperren).

### BitLocker

Windows-Festplattenverschlüsselung.

**Schützt vor:** Datendiebstahl bei Geräteverlust oder -diebstahl.

**Wichtig:** Wiederherstellungsschlüssel sicher speichern (AD, Azure AD, oder manuell).

---

## Datenschutz

### DSGVO (Datenschutz-Grundverordnung)

EU-Verordnung zum Schutz personenbezogener Daten.

**Relevanz für den Support:**

| Grundsatz | Bedeutung für Support |
|-----------|----------------------|
| Datenminimierung | Nur notwendige Daten erheben |
| Identitätsprüfung | Vor Auskünften Identität verifizieren |
| Speicherbegrenzung | Logs nicht länger als nötig speichern |
| Integrität | Daten vor unbefugtem Zugriff schützen |

### Personenbezogene Daten

Alle Informationen zu einer identifizierten oder identifizierbaren Person.

**Beispiele:** Name, E-Mail, IP-Adresse, Telefonnummer, Standortdaten, Gerätekennungen.

---

## Kommunikation

Modelle und Techniken für professionelle Kundenkommunikation.

### Vier-Seiten-Modell (Schulz von Thun)

Jede Nachricht hat vier Aspekte:

| Seite | Frage | Bei „Der Drucker geht nicht!" |
|-------|-------|-------------------------------|
| **Sachinhalt** | Was wird gesagt? | Drucker funktioniert nicht |
| **Selbstoffenbarung** | Was sagt der Sender über sich? | Ich bin frustriert/unter Druck |
| **Beziehung** | Wie steht der Sender zum Empfänger? | Ihr (IT) macht eure Arbeit nicht |
| **Appell** | Was soll der Empfänger tun? | Repariere das sofort! |

!!! tip "Praxis-Tipp"
    Im Support erst auf **Beziehungs-** und **Selbstoffenbarungsseite** eingehen, dann Sachebene bedienen.

### GFK (Gewaltfreie Kommunikation)

Vier-Schritte-Methode nach Marshall Rosenberg:

1. **Beobachtung:** Was ist passiert? (ohne Bewertung)
2. **Gefühl:** Wie fühle ich mich dabei?
3. **Bedürfnis:** Was brauche ich?
4. **Bitte:** Was wünsche ich mir konkret?

### Aktives Zuhören

| Technik | Beispiel |
|---------|----------|
| **Paraphrasieren** | „Wenn ich Sie richtig verstehe, können Sie seit heute Morgen nicht drucken?" |
| **Gefühle spiegeln** | „Das klingt frustrierend, besonders mit Ihrer Deadline." |
| **Nachfragen** | „Können Sie mir mehr dazu sagen? Was haben Sie schon versucht?" |

### Deeskalation

**3-Schritte-Ablauf:**

1. **Zuhören** (0-20 Sek): Nicht unterbrechen, kurze Bestätigungen
2. **Verstehen zeigen** (20-40 Sek): „Ich verstehe Ihre Frustration"
3. **Lösung anbieten** (40-60 Sek): „Ich kümmere mich sofort darum"

---

## Dokumentation und Prozesse

### Wissensdatenbank (Knowledge Base)

Dokumentierte Lösungen für bekannte Probleme.

**Nutzen:**

- Schnellere Problemlösung
- Wissenstransfer im Team
- Konsistente Lösungsqualität
- Einarbeitung neuer Mitarbeiter

### Ursachenanalyse (Root Cause Analysis)

**Fünf-Warum-Methode:** 5× „Warum?" fragen bis zur Ursache.

| Iteration | Frage | Antwort |
|-----------|-------|---------|
| 1 | Warum konnte der User nicht drucken? | Drucker war offline |
| 2 | Warum war der Drucker offline? | IP hatte sich geändert |
| 3 | Warum hatte sich die IP geändert? | DHCP-Lease abgelaufen |
| 4 | Warum gab es keine Reservierung? | Drucker nicht reserviert |
| 5 | Warum war er nicht reserviert? | Kein Onboarding-Prozess |

**Root Cause:** Fehlender Prozess → **Maßnahme:** DHCP-Reservierung für alle Drucker.

### Eskalation

| Typ | Wann | An wen |
|-----|------|--------|
| **Fachlich** | Mehr Expertise nötig | Spezialisten, 2nd/3rd Level |
| **Hierarchisch** | Entscheidung/Ressourcen nötig | Vorgesetzte, Management |

---

## Wichtige Befehle

### Windows

| Befehl | Funktion |
|--------|----------|
| `ipconfig /all` | Netzwerkkonfiguration anzeigen |
| `ipconfig /release` | DHCP-Lease freigeben |
| `ipconfig /renew` | Neue IP vom DHCP anfordern |
| `ipconfig /flushdns` | DNS-Cache leeren |
| `ping [Ziel]` | Erreichbarkeit testen |
| `nslookup [Name]` | DNS-Auflösung testen |
| `tracert [Ziel]` | Route zum Ziel anzeigen |
| `netstat -an` | Netzwerkverbindungen anzeigen |
| `gpupdate /force` | Gruppenrichtlinien aktualisieren |
| `gpresult /r` | Angewendete Richtlinien anzeigen |
| `whoami /all` | Benutzer und Gruppen anzeigen |
| `net user [Name] /domain` | Benutzerinfos aus AD |

### Linux

| Befehl | Funktion |
|--------|----------|
| `ip a` / `ifconfig` | Netzwerkkonfiguration |
| `ping [Ziel]` | Erreichbarkeit testen |
| `nslookup` / `dig` / `host` | DNS-Auflösung |
| `traceroute [Ziel]` | Route anzeigen |
| `ss -tuln` / `netstat -tuln` | Offene Ports |
| `systemctl status [Dienst]` | Dienststatus |
| `systemctl restart [Dienst]` | Dienst neu starten |
| `journalctl -u [Dienst]` | Logs eines bestimmten Dienstes |
| `journalctl -f` | Live-Log-Ausgabe (wie `tail -f`) |
| `cat /var/log/syslog` | Allgemeines System-Log |
| `cat /var/log/auth.log` | Authentifizierungs-Log |
| `chmod` / `chown` | Berechtigungen / Besitzer ändern |
| `df -h` | Festplattennutzung anzeigen |
| `top` / `htop` | Prozesse und Ressourcenverbrauch |

### Linux-Systemdienste (systemd)

Linux verwendet `systemd` zur Verwaltung von Diensten (Services).

| Befehl | Funktion |
|--------|----------|
| `systemctl start [Dienst]` | Dienst starten |
| `systemctl stop [Dienst]` | Dienst stoppen |
| `systemctl restart [Dienst]` | Dienst neu starten |
| `systemctl status [Dienst]` | Status prüfen (aktiv, fehlerhaft, gestoppt) |
| `systemctl enable [Dienst]` | Dienst beim Systemstart automatisch starten |
| `systemctl disable [Dienst]` | Autostart deaktivieren |

### Linux-Log-Analyse

Wichtige Log-Dateien und ihre Funktion:

| Log-Datei | Inhalt |
|-----------|--------|
| `/var/log/syslog` | Allgemeine Systemmeldungen |
| `/var/log/auth.log` | Login-Versuche, sudo-Nutzung |
| `/var/log/kern.log` | Kernel-Meldungen (Hardware, Treiber) |
| `/var/log/dpkg.log` | Paketinstallationen |
| `journalctl` | Zentrale Log-Abfrage (systemd) |

**Typische Log-Analyse:**

```bash
journalctl -u ssh --since "1 hour ago"  # SSH-Logs der letzten Stunde
journalctl -p err                        # Nur Fehlermeldungen
grep "Failed password" /var/log/auth.log # Fehlgeschlagene Logins suchen
```

---

## Windows-Fehleranalyse

Wichtige Werkzeuge und Konzepte für die Windows-Fehleranalyse im Support.

### Event Logs (Ereignisanzeige)

Die Windows-Ereignisanzeige (`eventvwr.msc`) ist das zentrale Werkzeug zur Fehleranalyse.

**Wichtige Log-Kategorien:**

| Log | Inhalt | Typische Einträge |
|-----|--------|-------------------|
| **System** | Betriebssystem, Treiber, Dienste | Dienstfehler, Hardwareprobleme |
| **Anwendung** | Programme und Anwendungen | Abstürze, Anwendungsfehler |
| **Sicherheit** | Anmeldungen, Rechtezugriffe | Login-Versuche, Kontosperrungen |

**Wichtige Event-IDs:**

| Event-ID | Bedeutung |
|----------|-----------|
| **4624** | Erfolgreiche Anmeldung |
| **4625** | Fehlgeschlagene Anmeldung |
| **4740** | Konto gesperrt (Account Lockout) |
| **7036** | Dienst gestartet/gestoppt |
| **1001** | Windows Error Reporting (Anwendungsabsturz) |
| **41** | Unerwarteter Neustart (Kernel-Power) |

**Befehle:**

```powershell
Get-EventLog -LogName System -Newest 20     # Letzte 20 Systemereignisse
Get-EventLog -LogName Security -InstanceId 4740  # Kontosperrungen
eventvwr.msc                                  # Grafische Ereignisanzeige
```

### Performance-Analyse

| Tool | Funktion | Aufruf |
|------|----------|--------|
| **Task-Manager** | Schneller Überblick CPU, RAM, Disk | `Ctrl+Shift+Esc` |
| **Ressourcenmonitor** | Detaillierte Analyse pro Prozess | `resmon.exe` |
| **Leistungsüberwachung** | Langzeit-Monitoring mit Countern | `perfmon.exe` |

**Typische Engpässe:**

| Ressource | Symptom | Prüfung |
|-----------|---------|---------|
| **CPU** | System reagiert langsam, hohe Auslastung | Task-Manager → CPU-Spalte |
| **RAM** | Swapping, Programme starten langsam | Task-Manager → Arbeitsspeicher |
| **Festplatte** | Lange Ladezeiten, 100% Datenträger | Task-Manager → Datenträger |
| **Netzwerk** | Langsame Verbindungen, Timeouts | Task-Manager → Netzwerk |

### Blue Screen (BSOD)

Ein Blue Screen of Death (BSOD) zeigt einen kritischen Systemfehler an, der Windows zum Absturz bringt.

**Häufige Ursachen:**

| Ursache | Typischer Stopp-Code | Maßnahme |
|---------|---------------------|----------|
| Treiberkonflikt | DRIVER_IRQL_NOT_LESS_OR_EQUAL | Treiber aktualisieren/zurücksetzen |
| Defekter RAM | MEMORY_MANAGEMENT | Speichertest (`mdsched.exe`) |
| Festplattenfehler | KERNEL_DATA_INPAGE_ERROR | `chkdsk /f` ausführen |
| Überhitzung | KERNEL_POWER | Lüfter/Kühlung prüfen |

**Analyse-Schritte:**

1. Stopp-Code notieren (auf dem Bluescreen angezeigt)
2. Ereignisanzeige → System-Log prüfen (Event-ID 41, 1001)
3. Zuverlässigkeitsverlauf prüfen (`perfmon /rel`)
4. Ggf. Minidump analysieren (`C:\Windows\Minidump\`)

---

## Abkürzungsverzeichnis

| Abkürzung | Bedeutung |
|-----------|-----------|
| AD | Active Directory |
| APIPA | Automatic Private IP Addressing |
| BSOD | Blue Screen of Death |
| CIDR | Classless Inter-Domain Routing |
| CSAT | Customer Satisfaction Score |
| DHCP | Dynamic Host Configuration Protocol |
| DNS | Domain Name System |
| DSGVO | Datenschutz-Grundverordnung |
| FCR | First Call Resolution |
| GFK | Gewaltfreie Kommunikation |
| GPO | Group Policy Object |
| IP | Internet Protocol |
| ITIL | IT Infrastructure Library |
| LAN | Local Area Network |
| MFA | Multi-Factor Authentication |
| MTTR | Mean Time to Resolve |
| NTFS | New Technology File System |
| OSI | Open Systems Interconnection |
| OU | Organizational Unit |
| RCA | Root Cause Analysis |
| SLA | Service Level Agreement |
| SSO | Single Sign-On |
| TPM | Trusted Platform Module |
| VPN | Virtual Private Network |
| WLAN | Wireless Local Area Network |
