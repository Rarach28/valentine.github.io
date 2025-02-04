function doPost(e) {
    try {
      const sheet = SpreadsheetApp.openById("1WhFlSZrRZ_P2Tlm11tZkqLE8U_mt3GiWt13Up51DRzw").getSheetByName("Responses");
      const params = e.parameter;
      const person = params.pookie;
      const dateChoice = params.date || "";
      const foodChoice = params.food || "";
      const dessertChoice = params.dessert || "";
      const timestamp = new Date();
  
      if (!person) {
        return ContentService.createTextOutput("Error: Missing person").setMimeType(ContentService.MimeType.TEXT);
      }
  
      let row = sheet.getDataRange().getValues().findIndex(r => r[0] === person);
      if (row > 0) {
        if (dateChoice) sheet.getRange(row + 1, 3).setValue(dateChoice);
        if (foodChoice) sheet.getRange(row + 1, 4).setValue(foodChoice);
        if (dessertChoice) sheet.getRange(row + 1, 5).setValue(dessertChoice);
        sheet.getRange(row + 1, 2).setValue(timestamp);
      } else {
        sheet.appendRow([person, timestamp, dateChoice, foodChoice, dessertChoice]);
      }
  
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }