// stack memory (primitive)

// jo bhi variable declare kiya toh uska copy milta h

let myYoutubeName = "hiteshChoudhary";

let anotherName=myYoutubeName

anotherName="noman"

console.log(myYoutubeName);
console.log(anotherName);

// heap memory (non primitive(reference))
// jo bhi variable declare kiya toh uska ref milta h original val ka(og val m chng hga)

let obj = {
    email:"armn;op@gmail.com",
    name:"arman"
}

let newObj =obj;

newObj.email='newEmail.com';

console.log(obj.email);

// original obj chng hga