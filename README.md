# Be My Valentine - Interaktivní Webová Aplikace
## Tento soubor Byl opravdu vygenerován AI :()
Tento projekt je interaktivní webová aplikace navržená k hravému pozvání na valentýnské rande. Uživatel postupně odpovídá na otázky a vybírá datum, jídlo a dezert. Výsledky se ukládají do Google Sheets pomocí Google Apps Script.

---

## 🏗 Struktura projektu

```
/project-root
│-- index.html         # Úvodní stránka s otázkou „Will you be my Valentine?“
│-- date.html          # Výběr data pro schůzku
│-- food.html          # Výběr hlavního jídla
│-- dessert.html       # Výběr dezertu
│-- config.js          # Konfigurace API a dostupných možností jídel
│-- googleAction.js    # Google Apps Script pro zpracování odpovědí
│
├── css/               # Složka pro styly
│   ├── valentine.css
│   ├── date.css
│   ├── food.css
│   ├── dessert.css
│
├── food/              # Obrázky pro výběr jídla
│   ├── burger.jpg
│   ├── sushi.jpeg
│   ├── ...
│
└── willYouBeMyValentine.gif  # GIF s pejskem
```

---

## 🚀 Jak projekt spustit?

1. **Stažení a spuštění**
   ```bash
   git clone https://github.com/your-repository.git
   cd your-repository
   open index.html
   ```

2. **Nastavení Google Sheets API**
   - Vytvoř Google Sheets a přidej list s názvem `Responses`
   - Otevři Apps Script (`Extensions > Apps Script`)
   - Nahraj `googleAction.js`, uprav `SpreadsheetApp.openById()` podle svého Sheet ID
   - Publikuj skript jako Web App (Deployment type: „Anyone“)

3. **Konfigurace API URL**
   - V `config.js` změň `API_URL` na URL publikovaného Google Apps Scriptu

---

## 🎨 Funkce

✅ **Hravý začátek** – Uživatel nemůže odmítnout, protože tlačítko „Ano“ se zvětšuje 🥰

✅ **Výběr termínu** – Formulář pro výběr dne rande

✅ **Výběr jídla a dezertu** – Možnost vybrat si oblíbené jídlo a dezert

✅ **Google Sheets integrace** – Odpovědi se ukládají do Google tabulky

✅ **Přizpůsobitelnost** – Snadno přidáš vlastní možnosti jídla/dezertu v `config.js`

---

## 🔧 Jak upravit projekt pro vlastní potřeby?

- **Změna otázek** → Uprav texty v `.html` souborech
- **Přidání jídel** → Přidej nové položky do `FOOD_OPTIONS` a `DESSERT_OPTIONS` v `config.js`
- **Vlastní styl** → Uprav `.css` soubory podle svého vkusu
- **Změna API backendu** → Nahraď Google Sheets vlastní databází

---

## 📌 Poznámky

- Projekt byl testován v moderních prohlížečích (Chrome, Firefox)
- Pro správnou funkčnost Google Apps Scriptu musí být skript veřejný
- Vhodné pro romantická pozvání nebo interaktivní dotazníky 🥰

