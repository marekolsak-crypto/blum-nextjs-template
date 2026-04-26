```text
██████╗ ██╗     ██╗   ██╗███╗   ███╗
██╔══██╗██║     ██║   ██║████╗ ████║
██████╔╝██║     ██║   ██║██╔████╔██║
██╔══██╗██║     ██║   ██║██║╚██╔╝██║
██████╔╝███████╗╚██████╔╝██║ ╚═╝ ██║
╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝

       NEXT.JS TEMPLATE FOR STUDENT PROJECTS
```

# BLUM Next.js Template

Šablona projektu pro studentské praxe středních škol v rámci **Blogic University**.

Cílem šablony je, abyste nemuseli zdlouhavě nastavovat projekt od začátku. Repozitář už obsahuje základní infrastrukturu, vývojářské nástroje a doporučené nastavení editoru.

---

## Co v projektu najdete

Projekt používá:

- **Next.js** pro tvorbu webové aplikace
- **TypeScript** pro bezpečnější psaní JavaScriptu
- **Bun** jako package manager a nástroj pro spouštění skriptů
- **Biome.js** jako formatter a linter
- **Husky** pro Git hooky
- **Visual Studio Code** jako doporučené vývojové prostředí
- **EditorConfig** pro sjednocení formátování souborů
- `.gitignore` pro ignorování souborů, které nepatří do Gitu
- `.gitattributes` pro sjednocení chování Gitu napříč operačními systémy

---

## 1. Instalace potřebných nástrojů

Než projekt spustíte, nainstalujte si:

1. Visual Studio Code
2. Git
3. Bun

Níže najdete postup zvlášť pro **Windows** a **macOS**.

---

## 2. Visual Studio Code

Visual Studio Code je editor, ve kterém budeme projekt upravovat.

### Windows

Stáhněte a nainstalujte Visual Studio Code z oficiální stránky:

```text
https://code.visualstudio.com/download
```

Alternativně můžete použít PowerShell:

```powershell
winget install --id Microsoft.VisualStudioCode -e --source winget
```

### macOS

Stáhněte a nainstalujte Visual Studio Code z oficiální stránky:

```text
https://code.visualstudio.com/download
```

Alternativně, pokud používáte Homebrew:

```bash
brew install --cask visual-studio-code
```

### Doporučená rozšíření

Projekt obsahuje nastavení doporučených rozšíření ve složce:

```text
.vscode/extensions.json
```

Po otevření projektu by vám Visual Studio Code mělo nabídnout jejich instalaci.

Nainstalujte hlavně tato rozšíření:

- **Biome**
- **EditorConfig for VS Code**
- **Code Spell Checker**

Pokud se nabídka nezobrazí automaticky:

1. Otevřete Visual Studio Code.
2. Otevřete projektovou složku.
3. Přejděte do části **Extensions**.
4. Do vyhledávání napište `@recommended`.
5. Nainstalujte doporučená rozšíření.

Rozšíření můžete nainstalovat také přes terminál:

```powershell
code --install-extension biomejs.biome
code --install-extension EditorConfig.EditorConfig
code --install-extension streetsidesoftware.code-spell-checker
```

Na macOS použijte stejné příkazy:

```bash
code --install-extension biomejs.biome
code --install-extension EditorConfig.EditorConfig
code --install-extension streetsidesoftware.code-spell-checker
```

Pokud příkaz `code` nefunguje, otevřete Visual Studio Code, stiskněte `Ctrl + Shift + P` na Windows nebo `Cmd + Shift + P` na macOS a spusťte příkaz:

```text
Shell Command: Install 'code' command in PATH
```

---

## 3. Instalace Gitu

Git slouží ke správě verzí kódu. Díky Gitu můžete ukládat změny, vytvářet větve a odevzdávat práci přes GitHub.

### Windows

Doporučená instalace přes PowerShell:

```powershell
winget install --id Git.Git -e --source winget
```

Po instalaci zavřete a znovu otevřete terminál.

Ověření instalace:

```powershell
git --version
```

### macOS

Varianta přes Xcode Command Line Tools:

```bash
xcode-select --install
```

Nebo přes Homebrew:

```bash
brew install git
```

Ověření instalace:

```bash
git --version
```

### První nastavení Gitu

Nastavte své jméno a e-mail. Použijte stejné údaje, které máte na GitHubu.

```bash
git config --global user.name "Jmeno Prijmeni"
git config --global user.email "vas.email@example.com"
```

Ověření nastavení:

```bash
git config --global --list
```

---

## 4. Instalace Bun

Bun používáme místo `npm`.

V tomto projektu tedy používejte hlavně příkazy začínající na:

```bash
bun
```

Nepoužívejte `npm install`, pokud k tomu nedostanete pokyn.

### Windows

Otevřete PowerShell a spusťte:

```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```

Po instalaci zavřete a znovu otevřete PowerShell nebo Visual Studio Code.

Ověření instalace:

```powershell
bun --version
```

### macOS

Otevřete Terminál a spusťte:

```bash
curl -fsSL https://bun.com/install | bash
```

Po instalaci zavřete a znovu otevřete terminál.

Ověření instalace:

```bash
bun --version
```

---

## 5. Získání projektu z GitHubu

Podle instrukcí učitele buď:

- vytvořte vlastní repozitář pomocí tlačítka **Use this template**, nebo
- vytvořte fork repozitáře.

Potom si zkopírujte URL svého repozitáře.

### Stažení projektu do počítače

V terminálu přejděte do složky, kde chcete mít školní projekty.

Příklad:

#### Windows PowerShell

```powershell
cd Documents
mkdir SchoolProjects
cd SchoolProjects
```

#### macOS

```bash
cd ~/Documents
mkdir SchoolProjects
cd SchoolProjects
```

Naklonujte repozitář:

```bash
git clone <repository-url>
```

Přejděte do složky projektu:

```bash
cd <project-folder>
```

Otevřete projekt ve Visual Studio Code:

```bash
code .
```

---

## 6. Instalace závislostí projektu

Po otevření projektu nainstalujte závislosti:

```bash
bun install
```

Tento příkaz stáhne knihovny potřebné pro běh projektu.

---

## 7. Spuštění projektu

Vývojový server spustíte příkazem:

```bash
bun run dev
```

Po spuštění otevřete v prohlížeči adresu:

```text
http://localhost:3000
```

Pokud vše funguje, uvidíte běžící Next.js aplikaci.

Server zastavíte v terminálu klávesovou zkratkou:

```text
Ctrl + C
```

---

## 8. Užitečné příkazy

Nejčastější příkazy v projektu:

```bash
bun install
```

Nainstaluje závislosti.

```bash
bun run dev
```

Spustí projekt pro vývoj.

```bash
bun run build
```

Ověří, že projekt lze sestavit pro produkci.

```bash
bun run lint
```

Spustí kontrolu kódu pomocí Biome.

```bash
bun run format
```

Naformátuje soubory pomocí Biome.

```bash
bun run check
```

Spustí základní kontrolu projektu pomocí Biome.

> Poznámka: Dostupné příkazy najdete vždy v souboru `package.json` v části `scripts`.

---

## 9. Základní práce s Gitem

### Zjištění stavu projektu

```bash
git status
```

Tento příkaz ukáže, které soubory byly změněny.

---

### Stažení posledních změn

Před začátkem práce si vždy stáhněte poslední změny:

```bash
git pull
```

---

### Vytvoření nové branche

Pro každou úlohu vytvořte novou branch.

Doporučený formát:

```text
<type>/<issue-number>-<short-description>
```

Příklad pro issue číslo `1`:

```bash
git switch -c feat/1-create-nextjs-template
```

Další příklady:

```bash
git switch -c chore/2-configure-biome
git switch -c docs/3-update-readme
git switch -c fix/4-fix-vscode-tasks
```

Pravidla pro názvy branchí:

- používejte malá písmena
- používejte angličtinu
- používejte `kebab-case`
- nepoužívejte diakritiku
- číslo issue pište hned za typ branche

---

### Uložení změn do commitu

Nejprve zkontrolujte změny:

```bash
git status
```

Přidejte změny do commitu:

```bash
git add .
```

Vytvořte commit:

```bash
git commit -m "chore: configure development environment and tooling (#1)"
```

Doporučený formát commit message:

```text
<type>: <short-description> (#<issue-number>)
```

Příklady:

```bash
git commit -m "feat: create homepage (#2)"
git commit -m "fix: repair navigation links (#3)"
git commit -m "docs: update student guide (#4)"
git commit -m "chore: configure Biome (#5)"
```

---

### Odeslání branche na GitHub

První odeslání nové branche:

```bash
git push -u origin <branch-name>
```

Příklad:

```bash
git push -u origin feat/1-create-nextjs-template
```

Další změny ve stejné branchi už stačí odeslat pomocí:

```bash
git push
```

---

## 10. Pull request

Po dokončení úlohy vytvořte na GitHubu **Pull Request**.

Postup:

1. Otevřete svůj repozitář na GitHubu.
2. GitHub obvykle nabídne tlačítko **Compare & pull request**.
3. Vyplňte název a popis změn.
4. Propojte Pull Request s issue, například pomocí textu:

```text
Closes #1
```

5. Odešlete Pull Request ke kontrole.

---

## 11. Git hooky

Projekt používá **Husky**, který spouští automatické kontroly při práci s Gitem.

Typicky se mohou spouštět kontroly při těchto akcích:

- `pre-commit` před vytvořením commitu
- `pre-push` před odesláním změn na GitHub
- `post-merge` po sloučení změn

Pokud Git hook najde chybu, commit nebo push se může zastavit. V takovém případě si přečtěte chybovou hlášku v terminálu, opravte problém a zkuste příkaz znovu.

---

## 12. Nejčastější problémy

### Příkaz `bun` nefunguje

Zkuste zavřít a znovu otevřít terminál.

Potom ověřte instalaci:

```bash
bun --version
```

Pokud příkaz stále nefunguje, nainstalujte Bun znovu podle návodu výše.

---

### Příkaz `code .` nefunguje

Otevřete Visual Studio Code ručně.

Potom otevřete Command Palette:

- Windows: `Ctrl + Shift + P`
- macOS: `Cmd + Shift + P`

Spusťte příkaz:

```text
Shell Command: Install 'code' command in PATH
```

Zavřete a znovu otevřete terminál.

---

### Projekt nejde spustit

Zkuste znovu nainstalovat závislosti:

```bash
bun install
```

Potom projekt znovu spusťte:

```bash
bun run dev
```

---

### Biome hlásí chyby

Spusťte formátování:

```bash
bun run format
```

Potom spusťte kontrolu:

```bash
bun run check
```

---

## 13. Doporučený postup práce

Při každé úloze postupujte takto:

1. Stáhněte poslední změny:

```bash
git pull
```

2. Vytvořte novou branch:

```bash
git switch -c feat/1-task-name
```

3. Upravte kód.

4. Zkontrolujte projekt:

```bash
bun run check
bun run build
```

5. Vytvořte commit:

```bash
git add .
git commit -m "feat: complete task name (#1)"
```

6. Odešlete branch:

```bash
git push -u origin feat/1-task-name
```

7. Vytvořte Pull Request na GitHubu.

---

## 14. Užitečné odkazy

- Visual Studio Code: https://code.visualstudio.com/download
- Bun: https://bun.com/docs/installation
- Git: https://git-scm.com/install
- Biome: https://biomejs.dev/
- EditorConfig: https://editorconfig.org/
- Code Spell Checker: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- GitHub Docs: https://docs.github.com/

---

## 15. Poznámka pro studenty

Nebojte se dělat chyby. Git slouží právě k tomu, abyste mohli změny ukládat postupně a v případě potřeby se k nim vracet.

Důležité je:

- pracovat v samostatné branchi
- dělat malé a srozumitelné commity
- pravidelně číst chybové hlášky
- ptát se, když něčemu nerozumíte
