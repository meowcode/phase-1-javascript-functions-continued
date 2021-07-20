// Your code here
function saturdayFun(activity="roller-skate"){//activity is an unknown variable in a math equation (ie a*b)
    return `This Saturday, I want to ${activity}!`
}

saturdayFun("bathe my dog")

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(message="special"){
        return `You are ${flair}${message}${flair}!`
    }
}
