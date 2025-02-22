let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);



let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAutheticated = true;
let authenticationStatus = isAutheticated?"Authenticated":"Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let person = prompt("Are you an \n1.Employee, \n2.Enrolled Member, \n3.Subscriber or a \n4.Non-Subscriber\n\n(Enter the number): ");
let dietrySer;

if (person=="Employee" || person==1) {
    dietrySer = "Access";
} else if(person=="Enrolled Member"||person==2) {
    dietrySer = "Access and One-on-One interation with dietician";
} else if(person=="Subscriber"||person==3) {
    dietrySer = "Partial Acesss";
}else{
    dietrySer = "No Access, At least subscribe to our services first";
}
console.log("Your status of dietry services: ",dietrySer);