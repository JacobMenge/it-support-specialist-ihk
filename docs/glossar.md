---
title: Glossar
description: Wichtige Fachbegriffe für die IHK-Prüfung IT Support Specialist
---

# Glossar

Hier findest du alle wichtigen Fachbegriffe, die du für die Prüfung kennen musst. Die Begriffe sind nach Themengebieten sortiert.

---

## ITIL und Service-Management

### Störung (Incident)
Ein einzelnes Ereignis, das den normalen Betrieb eines IT-Dienstes unterbricht oder beeinträchtigt.

**Beispiel:** Ein Benutzer kann sich nicht anmelden.

**In der Prüfung wichtig:** Der Begriff beschreibt das WAS (das Symptom), nicht das WARUM (die Ursache).

### Problem
Die unbekannte Ursache einer oder mehrerer Störungen. Ein Problem wird erst zum Problem, wenn die Ursache noch nicht bekannt ist.

**Beispiel:** Mehrere Benutzer können sich nicht anmelden → Problem: Der Domänencontroller ist ausgefallen.

**Unterschied zur Störung:** Die Störung ist das Symptom, das Problem ist die Ursache.

### Änderung (Change)
Eine geplante Veränderung an der IT-Infrastruktur oder an IT-Diensten.

**Beispiel:** Aktualisierung des Betriebssystems auf allen Arbeitsplätzen.

**In der Prüfung wichtig:** Änderungen müssen dokumentiert und genehmigt werden.

### Serviceanfrage (Service Request)
Eine Anfrage eines Benutzers nach Informationen, Beratung oder einer Standardänderung.

**Beispiel:** Benutzer braucht Zugriff auf einen Ordner.

**Unterschied zur Störung:** Bei einer Serviceanfrage funktioniert alles – der Benutzer braucht nur etwas Neues.

### Dienstgütevereinbarung (SLA – Service Level Agreement)
Eine schriftliche Vereinbarung zwischen IT und Kunde über die zu erbringende Servicequalität.

**Enthält typischerweise:**

- Reaktionszeit (wie schnell reagiert der Support?)
- Lösungszeit (wie schnell wird das Problem behoben?)
- Verfügbarkeit (wie oft ist der Dienst erreichbar?)

**Beispiel:** „Priorität 1 wird innerhalb von 4 Stunden gelöst."

### Erstlösungsquote (First Call Resolution)
Der Anteil der Störungen, die bereits beim ersten Kontakt gelöst werden.

**Berechnung:** (Beim ersten Kontakt gelöste Tickets / Alle Tickets) × 100

**Guter Wert:** 60-80%

---

## Netzwerk

### DHCP (Dynamic Host Configuration Protocol)
Ein Protokoll, das automatisch IP-Adressen und Netzwerkkonfiguration an Geräte verteilt.

**Verteilt:**

- IP-Adresse
- Subnetzmaske
- Standardgateway
- DNS-Server

**Warum wichtig:** Ohne DHCP müsste jedes Gerät manuell konfiguriert werden.

**Häufiges Problem:** Gerät bekommt keine IP-Adresse → DHCP-Server nicht erreichbar oder Adresspool erschöpft.

### DNS (Domain Name System)
Ein System, das Hostnamen in IP-Adressen übersetzt.

**So funktioniert es:** Wenn du „www.beispiel.de" eingibst, fragt dein Computer den DNS-Server nach der zugehörigen IP-Adresse.

**Wichtige Begriffe:**

- **A-Eintrag:** Übersetzt Name zu IPv4-Adresse
- **AAAA-Eintrag:** Übersetzt Name zu IPv6-Adresse
- **MX-Eintrag:** Zeigt auf den Mailserver
- **CNAME:** Alias-Eintrag (ein Name verweist auf einen anderen Namen)

**Typischer Befehl:** `nslookup beispiel.de`

### IP-Adresse
Eine eindeutige Nummer, die ein Gerät im Netzwerk identifiziert.

**IPv4-Format:** 192.168.1.100 (4 Zahlen von 0-255)

**IPv6-Format:** 2001:0db8:85a3::8a2e:0370:7334

**Private Adressbereiche (nicht im Internet routbar):**

- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

### Subnetzmaske
Definiert, welcher Teil der IP-Adresse das Netzwerk identifiziert und welcher Teil das Gerät.

**Beispiel:** 255.255.255.0 bedeutet: Die ersten drei Zahlen sind das Netzwerk, die letzte Zahl ist das Gerät.

**CIDR-Schreibweise:** /24 entspricht 255.255.255.0

### Standardgateway
Die IP-Adresse des Routers, der Datenpakete aus dem lokalen Netzwerk in andere Netzwerke weiterleitet.

**Einfach erklärt:** Der Standardgateway ist die „Tür nach draußen" für dein Netzwerk.

### VPN (Virtual Private Network)
Eine verschlüsselte Verbindung über ein unsicheres Netzwerk (z.B. Internet).

**Anwendung:** Sichere Verbindung zum Firmennetzwerk aus dem Homeoffice.

**Arten:**

- **Split-Tunnel:** Nur Firmendaten gehen durch VPN, Internet geht direkt
- **Full-Tunnel:** Gesamter Datenverkehr geht durch VPN

### OSI-Modell
Ein Referenzmodell mit 7 Schichten, das beschreibt, wie Netzwerkkommunikation funktioniert.

| Schicht | Name | Beispiel |
|---------|------|----------|
| 7 | Anwendung | HTTP, SMTP, DNS |
| 6 | Darstellung | SSL/TLS, Verschlüsselung |
| 5 | Sitzung | NetBIOS, RPC |
| 4 | Transport | TCP, UDP |
| 3 | Vermittlung | IP, ICMP, Router |
| 2 | Sicherung | Ethernet, MAC-Adresse, Switch |
| 1 | Physisch | Kabel, Hub, Lichtsignal |

**Merksatz:** „Alle Deutschen Studenten Trinken Verschiedene Sorten Bier" (von oben nach unten)

**Bei der Fehlersuche:** Von unten nach oben arbeiten (erst Kabel prüfen, dann IP, dann Dienst).

---

## Identitäts- und Zugriffsverwaltung

### Active Directory (AD)
Microsofts Verzeichnisdienst zur zentralen Verwaltung von Benutzern, Computern und Berechtigungen.

**Enthält:**

- Benutzerkonten
- Computerkonten
- Gruppen
- Organisationseinheiten (OUs)

**Vorteil:** Einmalige Anmeldung (Single Sign-On) für verschiedene Ressourcen.

### Gruppenrichtlinie (GPO – Group Policy Object)
Einstellungen, die zentral auf Benutzer oder Computer angewendet werden.

**Beispiele:**

- Kennwortrichtlinie (Mindestlänge, Ablauf)
- Desktop-Hintergrund
- Softwareinstallation
- Sicherheitseinstellungen

**Typischer Befehl:** `gpupdate /force` (Richtlinien sofort anwenden)

### Authentifizierung
Der Nachweis der Identität – „Wer bist du?"

**Faktoren:**

- **Wissen:** Passwort, PIN
- **Besitz:** Smartphone, Token
- **Biometrie:** Fingerabdruck, Gesicht

### Autorisierung
Die Prüfung der Berechtigung – „Was darfst du?"

**Beispiel:** Nach der Anmeldung prüft das System, auf welche Ordner der Benutzer zugreifen darf.

### Mehrstufige Authentifizierung (MFA)
Authentifizierung mit mindestens zwei verschiedenen Faktoren.

**Beispiel:** Passwort (Wissen) + SMS-Code (Besitz)

**Warum wichtig:** Selbst wenn das Passwort gestohlen wird, fehlt noch der zweite Faktor.

### Kontosperrung (Account Lockout)
Automatische Sperrung eines Kontos nach mehreren falschen Anmeldeversuchen.

**Typische Einstellung:** Sperrung nach 5 Fehlversuchen für 30 Minuten.

**Häufige Ursachen für wiederholte Sperrungen:**

- Altes Passwort in einer Anwendung gespeichert
- Verbundenes Mobilgerät mit falschem Passwort
- Geplante Aufgabe mit abgelaufenen Anmeldedaten

### NTFS-Berechtigungen
Berechtigungen auf Dateiebene im Windows-Dateisystem.

**Wichtige Rechte:**

- **Vollzugriff:** Alles erlaubt, auch Berechtigungen ändern
- **Ändern:** Lesen, schreiben, löschen
- **Lesen und Ausführen:** Nur anschauen und Programme starten
- **Lesen:** Nur anschauen

**Vererbung:** Berechtigungen werden von übergeordneten Ordnern übernommen.

### Freigabeberechtigungen
Berechtigungen für den Netzwerkzugriff auf einen freigegebenen Ordner.

**Wichtig:** Es gelten immer BEIDE – NTFS- und Freigabeberechtigungen. Die restriktivere gewinnt.

---

## Sicherheit

### Phishing
Betrugsversuch per E-Mail oder Website, um an vertrauliche Daten zu kommen.

**Erkennungsmerkmale:**

- Dringlichkeit („Sofort handeln!")
- Rechtschreibfehler
- Verdächtige Absenderadresse
- Unbekannte Links

**Bei Verdacht:** Nicht klicken, IT-Sicherheit informieren.

### Schadsoftware (Malware)
Oberbegriff für schädliche Software.

**Arten:**

- **Virus:** Verbreitet sich durch Infektion anderer Dateien
- **Trojaner:** Tarnt sich als nützliche Software
- **Ransomware:** Verschlüsselt Daten und fordert Lösegeld
- **Wurm:** Verbreitet sich selbstständig im Netzwerk

### Minimale Rechtevergabe (Least Privilege)
Prinzip, dass jeder Benutzer nur die minimal notwendigen Rechte erhält.

**Warum:** Begrenzt den Schaden bei einer Kompromittierung.

### Härtung (Hardening)
Absicherung eines Systems durch Entfernen unnötiger Funktionen und Anwenden sicherer Einstellungen.

**Beispiele:**

- Nicht benötigte Dienste deaktivieren
- Sichere Passwortrichtlinie
- Automatische Updates aktivieren
- Firewall einschalten

### BitLocker
Windows-Funktion zur Festplattenverschlüsselung.

**Schützt vor:** Datendiebstahl bei Geräteverlust.

**Wiederherstellungsschlüssel:** Muss sicher gespeichert werden, um bei Problemen auf die Daten zugreifen zu können.

---

## Datenschutz

### DSGVO (Datenschutz-Grundverordnung)
EU-Verordnung zum Schutz personenbezogener Daten.

**Wichtig für den Support:**

- Nur notwendige Daten erheben
- Identität vor Auskünften verifizieren
- Protokolle nicht länger als nötig speichern

### Personenbezogene Daten
Alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.

**Beispiele:** Name, E-Mail, IP-Adresse, Telefonnummer.

---

## Kommunikation

### Vier-Seiten-Modell (Schulz von Thun)
Jede Nachricht hat vier Aspekte.

| Seite | Bedeutung | Beispiel bei „Der Drucker geht nicht!" |
|-------|-----------|----------------------------------------|
| Sachinhalt | Was wird gesagt? | Der Drucker funktioniert nicht |
| Selbstoffenbarung | Was sagt der Sender über sich? | Ich bin frustriert |
| Beziehung | Was hält der Sender vom Empfänger? | Ihr (IT) macht eure Arbeit nicht |
| Appell | Was soll der Empfänger tun? | Repariere den Drucker! |

**Im Support:** Erst auf die emotionale Seite eingehen, dann auf die Sachebene.

### Gewaltfreie Kommunikation (GFK)
Kommunikationsmethode in vier Schritten.

1. **Beobachtung:** Was ist passiert? (ohne Bewertung)
2. **Gefühl:** Wie fühle ich mich dabei?
3. **Bedürfnis:** Was brauche ich?
4. **Bitte:** Was wünsche ich mir konkret?

### Aktives Zuhören
Technik, um dem Gesprächspartner zu zeigen, dass man zuhört und versteht.

**Elemente:**

- **Paraphrasieren:** „Wenn ich Sie richtig verstehe..."
- **Gefühle spiegeln:** „Das klingt frustrierend."
- **Nachfragen:** „Können Sie mir mehr dazu sagen?"

### Deeskalation
Techniken, um eine angespannte Situation zu beruhigen.

**Schritte:**

1. Zuhören (nicht unterbrechen)
2. Verständnis zeigen („Ich verstehe Ihre Frustration")
3. Lösung anbieten („Ich kümmere mich darum")

---

## Dokumentation

### Wissensdatenbank (Knowledge Base)
Sammlung von dokumentierten Lösungen für bekannte Probleme.

**Vorteile:**

- Schnellere Problemlösung
- Wissenstransfer im Team
- Konsistente Lösungen

### Ursachenanalyse (Root Cause Analysis)
Systematische Suche nach der eigentlichen Ursache eines Problems.

**Methoden:**

- **Fünf-Warum-Methode:** Fünfmal „Warum?" fragen
- **Ishikawa-Diagramm:** Mögliche Ursachen nach Kategorien sortieren

### Eskalation
Weitergabe eines Problems an eine höhere Instanz.

**Arten:**

- **Fachliche Eskalation:** An Spezialisten mit mehr Fachwissen
- **Hierarchische Eskalation:** An Vorgesetzte für Entscheidungen oder Ressourcen

---

## Wichtige Befehle (Windows)

| Befehl | Funktion |
|--------|----------|
| `ipconfig /all` | Zeigt Netzwerkkonfiguration |
| `ping [Ziel]` | Testet Erreichbarkeit |
| `nslookup [Name]` | Testet DNS-Auflösung |
| `tracert [Ziel]` | Zeigt Route zum Ziel |
| `gpupdate /force` | Aktualisiert Gruppenrichtlinien |
| `gpresult /r` | Zeigt angewendete Richtlinien |
| `netstat -an` | Zeigt Netzwerkverbindungen |
| `whoami /all` | Zeigt Benutzer und Gruppenmitgliedschaften |

---

## Abkürzungsverzeichnis

| Abkürzung | Bedeutung |
|-----------|-----------|
| AD | Active Directory |
| DHCP | Dynamic Host Configuration Protocol |
| DNS | Domain Name System |
| DSGVO | Datenschutz-Grundverordnung |
| GPO | Group Policy Object (Gruppenrichtlinie) |
| IP | Internet Protocol |
| ITIL | IT Infrastructure Library |
| LAN | Local Area Network |
| MFA | Mehrstufige Authentifizierung |
| NTFS | New Technology File System |
| OSI | Open Systems Interconnection |
| RCA | Root Cause Analysis (Ursachenanalyse) |
| SLA | Service Level Agreement |
| SSO | Single Sign-On |
| VPN | Virtual Private Network |
| WLAN | Wireless Local Area Network |
