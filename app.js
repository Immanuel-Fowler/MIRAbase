
const cafeList = document.querySelector('#patient-list');

// create element & render cafe
function renderCafe(doc){
    var patientdisplay = document.querySelector("#patient-table").getElementsByTagName('tbody')[0];
    var newRow = patientdisplay.insertRow(patientdisplay.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11= newRow.insertCell(10);
    var cell12 = newRow.insertCell(11);
    var cell13= newRow.insertCell(12);
    var cell14= newRow.insertCell(13);
    cell1.innerHTML = doc.data().FirstName;
    cell2.innerHTML = doc.data().LastName;
    cell3.innerHTML = doc.data().Sex;
    cell4.innerHTML = doc.data().Race;
    cell5.innerHTML = doc.data().Weight;
    cell6.innerHTML = doc.data().Height;
    cell7.innerHTML = doc.data().ZipCode;
    cell8.innerHTML = doc.data().KnownIllnesses;
    cell9.innerHTML = doc.data().DrugAbuse;
    cell10.innerHTML = doc.data().Diet;
    cell11.innerHTML = doc.data().Supplements;
    cell12.innerHTML = doc.data().CurrentMedication;
    cell13.innerHTML = doc.data().PastMedication;
    cell14.innerHTML = doc.data().FamilyHistory;


}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });


// real-time listener
db.collection('subs').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        renderCafe(change.doc);
    });
});

// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });