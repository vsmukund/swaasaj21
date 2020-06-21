importScripts("https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.0.2/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "855247122329"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const receivedData = JSON.parse(payload.data.default);
  const record = JSON.parse(receivedData.record);
  var notificationTitle =
    receivedData.message === "Assessment generated successfully"
      ? record.recordId
      : "Unable to generate assessment";
  var notificationOptions = {
    body: "Assessment generated successfully"
      ? "Assessment generated successfully"
      : "Unable to generate assessment",
    icon: "./Salcit.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
