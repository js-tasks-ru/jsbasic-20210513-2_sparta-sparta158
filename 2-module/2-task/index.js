function isEmpty(obj) 
{for (const i in obj) {
  if (obj.hasOwnProperty(i)) {
    return false;
  }
} return true; }
let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) )
