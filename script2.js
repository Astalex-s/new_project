let money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], 
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        b = prompt("Во сколько обойдется?", '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log('done')
        appData.expenses[a] = b;
    } else {
        console.log('bad result');
        i--;
    }
    
};
// let i = 0;
// while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//             b = prompt("Во сколько обойдется?", '');
        
//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//             console.log('done')
//             appData.expenses[a] = b;
//         } else {
//             console.log('bad result');
//             i--;
//         }
//         i++
//     };

    // let i = 0;
    // while (i < 2) {
    //     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    //         b = prompt ("Во сколько обойдется?", "");
    
    //     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
    //         console.log ("done");
    
    //         appData.expenses[a] = b;
    //     } else {
    //          console.log ("bad result");
    //          i--;
    //     }
    
    //     i++;
    // }

appData.moneyPerDay = appData.budget / 30;

alert('Ваш ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 8000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 8000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка!')
}
