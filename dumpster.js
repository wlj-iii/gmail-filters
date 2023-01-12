// jshint esversion: 9
// jshint laxbreak: true

class DeleteBatch {
  constructor(options) {
    let { query, daysOld } = options;
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-daysOld);
    var results = GmailApp.search(query.toString());
    for (var i = 0; i < results.length; i++) {
      if (results[i].getLastMessageDate()<maxDate)
        {
          Logger.log(results[i].getFirstMessageSubject());
          results[i].moveToTrash();
        }
    }
  }
}

class LabelAdder {
  constructor(options) {
    let { terms, newLabel, daysOld } = options;
    var label = GmailApp.getUserLabelByName(newLabe.toString());
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-daysOld);
    var results = GmailApp.search(terms.toString());
    for (var i = 0; i < results.length; i++) {
      if (results[i].getLastMessageDate()<maxDate)
        {
          Logger.log(results[i].getFirstMessageSubject());
          results[i].addLabel(label);
        }
    }
  }
}

class LabelSubtractor {
  constructor(options) {
    let { terms, oldLabel, daysOld } = options;
    var label = GmailApp.getUserLabelByName(oldLabel.toString());
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-daysOld);
    var results = GmailApp.search(terms.toString());
    for (var i = 0; i < results.length; i++) {
      if (results[i].getLastMessageDate()<maxDate)
        {
          Logger.log(results[i].getFirstMessageSubject());
          results[i].removeLabel(label);
        }
    }
  }
}

class LabelChanger {
  constructor(options) {
    let { terms, oldLabel, newLabel, daysOld } = options;
    var rotten = GmailApp.getUserLabelByName(oldLabel.toString());
    var fresh = GmailApp.getUserLabelByName(newLabel.toString());
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()-daysOld);
    var results = GmailApp.search(terms.toString());
    for (var i = 0; i < results.length; i++) {
      if (results[i].getLastMessageDate()<maxDate)
        {
          Logger.log(results[i].getFirstMessageSubject());
          results[i].removeLabel(rotten);
          results[i].addLabel(fresh);
        }
    }
  }
}