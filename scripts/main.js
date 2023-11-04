function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid); //print the uid in the browser console
            console.log(user.displayName);  //print the user name in the browser console
            userName = user.displayName;

            //method #1:  insert with JS
            //document.getElementById("name-goes-here").innerText = userName;    

            //method #2:  insert using jquery
            $("#name-goes-here").text(userName); //using jquery

            //method #3:  insert using querySelector
            //document.querySelector("#name-goes-here").innerText = userName

        } else {
            // No user is signed in.
        }
    });
}
getNameFromAuth(); //run the function


// Hospital information data
function writeHospitals() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hospitalsRef = db.collection("hospitals");

    hospitalsRef.add({
        code: "VGH",
        name: "Vancouver General Hospital",
        city: "Vancouver",
        province: "BC",
        address: "920 West 10th Ave Vancouver, BC, V5Z 1M9",          //number value
        phoneNumber: "(604) 875-4111",
        details: "Ages 17 and older/ Adult Hospital",
        hours: "24-7",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    hospitalsRef.add({
        code: "RH",
        name: "Richmond Hospital", //replace with your own city?
        city: "Richmond",
        province: "BC",
        address: "7000 Westminster Highway Richmond, BC, V6X 1A2, BC, V5Z 1M9",          //number value
        phoneNumber: "(604) 278-9711",
        details: "Patients of all ages seen/ Full Service Hospital",
        hours: "24-7",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    hospitalsRef.add({
        code: "SPH",
        name: "St. Paul's Hospital", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        address: "1081 Burrard St Vancouver, BC, V6Z 1Y6",          //number value
        phoneNumber: "(604) 682-2344",
        details: "Patients of all ages seen/ Full Service Hospital",
        hours: "24-7",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    hospitalsRef.add({
        code: "MSJ",
        name: "Mount Saint Joseph Hospital", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        address: "3080 Prince Edward St Vancouver, BC, V5T 3N4",          //number value
        phoneNumber: "(604) 874-1141",
        details: "Patients of all ages seen/ Full Service Hospital",
        hours: "8am to 8pm",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    hospitalsRef.add({
        code: "LGH",
        name: "Lions Gate Hospital", //replace with your own city?
        city: "North Vancouver",
        province: "BC",
        address: "231 East 15th St North Vancouver, BC, V7L 2L7",          //number value
        phoneNumber: "(604) 988-3131",
        details: "Patients of all ages seen/ Full Service Hospital",
        hours: "24-7",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    hospitalsRef.add({
        code: "UBC",
        name: "UBC Hospital", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        address: "2211 Wesbrook Mall Vancouver, BC, V6T 2B5",          //number value
        phoneNumber: "(604) 822-7121",
        details: "Patients of all ages seen",
        hours: "8am to 8pm",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
}