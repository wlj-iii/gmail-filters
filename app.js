// jshint esversion: 9
// jshint laxbreak: true

import 'dumpster';

function mainCleaner() {
  //Scholarships
    new DeleteBatch({
      query: 'label:new-scholarships',
      daysOld: 15,});
  //Mailing Lists
    new DeleteBatch({
      query: 'label:filter',
      daysOld: 14,});
  // SkyNet
    new DeleteBatch({
      query: 'label:skynet-log',
      daysOld: 30,});
  // GDrive Notifications
    new DeleteBatch({
      query: 'from: "notify@google.com"',
      daysOld: 5,});
  // Read GDrive Notifications
    new DeleteBatch({
      query: 'is:read from: "notify@google.com"',
      daysOld: 0,});
  // Apps Script Notifications
    new DeleteBatch({
      query: 'is: read from: "apps-scripts-notifications@google.com"',
      daysOld: 0,});
  // Voicemails
    new DeleteBatch({
      query: 'is:read label:lakers-voicemails',
      daysOld: 0,});
}
