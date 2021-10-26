/**
 * This is the entry point to the program
 * Question 1 - Classifier
 *
 * @param {any} input Array of student objects
 */
function classifier(input) {
    let groupArray = [...input];

    if(typeof input !== "object"){
        throw new Error ("Invalid Input");
    }
    groupArray = groupArray.map((eachMember) => {
        eachMember.age = new Date().getFullYear() - new Date(eachMember.dob).getFullYear();
        return eachMember;
    });
    groupArray = groupArray.sort((a, b) => a.age-b.age);
    let memberGroup = [];
    let memberAgeGroup = [];
    let limit = 0;
    for (let i = 0; i < groupArray.length; i++) {
        let person = groupArray[i];
        if (limit === 0){
            limit = person.age;
        }
        if(person.age-limit <= 5 && memberAgeGroup.length < 3){
            memberAgeGroup.push(person)
        } else {
            memberGroup.push(memberAgeGroup);
            memberAgeGroup = [];
            memberAgeGroup.push(person)
            limit = person.age;
        }
    }
        if (memberAgeGroup.length) memberGroup.push(memberAgeGroup);
        let result = {};
        for (let i = 0; i < memberGroup.length; i++){
            let res = "group"  + (i +1)
            let eachAge = memberGroup[i].map(e => e.age)
            eachAge;
            result[res] = {
                members : memberGroup[i],
                oldest : Math.max(...eachAge),
                sum: eachAge.reduce((num, tot) => num+ tot, 0),
                regNos : memberGroup[i].map(e => parseInt(e.regNo)).sort ((a,b) => a - b)
            }
        }
        result.noOfGroups = memberGroup.length;
        return result;
    
    
}

module.exports = classifier;
