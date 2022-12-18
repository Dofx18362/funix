const sampleData = [
    {
    "name": "John Doe",
    "yearOfEmployment": 1995,
    "isActive": false
    },
    {
    "name": "Marissa Williams",
    "yearOfEmployment": 2007,
    "isActive": true
    },
    {
    "name": "Michile Henry",
    "yearOfEmployment": 1996,
    "isActive": true
    },
    {
    "name": "Isabelle Keanna",
    "yearOfEmployment": 2000,
    "isActive": true
    },
    
    {
    "name": "Mark McRolland",
    "yearOfEmployment": 2018,
    "isActive": true
    } ,
    {
    "name": "Shara Lauren",
    "yearOfEmployment": 1999,
    "isActive": false
    },
    {
    "name": "Tom ken",
    "yearOfEmployment": 2001,
    "isActive": true
    }
    ];
    //1. Tính tổng nhân viên
    var getTotalEmployee= function(sampleData) {
    var total = sampleData.length;
    return total;
    }
    var totalEmployee = getTotalEmployee(sampleData);
    console.log("Tổng số nhân viên = " + totalEmployee );
    //2. Tính tổng nhân viên vẫn còn làm việc
    var getTotalActiveEmployee= function(sampleData) {
    var count= 0;
    let length = sampleData.length;
    for(let i = 0; i< length; i++)
    {
    if (sampleData[i].isActive) {
    count = count + 1;
    }
    }
    return count;
    }
    var totalActiveEmployee = getTotalActiveEmployee(sampleData);
    console.log("Tổng số nhân viên vẫn còn đang làm việc = " + totalActiveEmployee );
    //3.Lấy ra danh sách nhân viên trung thành
    var findLoyalEmployees= function(sampleData, year) {
    let loyal = [];
    let length = sampleData.length;
    for(let i = 0; i< length; i++)
    {
    let nYear = year - sampleData[i].yearOfEmployment;
    if (sampleData[i].isActive && nYear>=10) {
    loyal.push(sampleData[i]);
    }
    }
    return loyal;
    }
    const year = (new Date()).getFullYear(); // get the current year
    var loyalEmployees = findLoyalEmployees(sampleData, year);
    console.log("Danh sách nhân viên trung thành = " + JSON.stringify(loyalEmployees));
    
