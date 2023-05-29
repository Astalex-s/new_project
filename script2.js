//'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
// isNaN - выводит значение True если в переменной не числовое значение.
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], 
    timeData: time,
    savings: true
};

function chooseExpenses() {
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
        };
        
    };
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        alert('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 8000) {
        alert('Средний уровень достатка');
    } else if (appData.moneyPerDay > 8000) {
        alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка!')
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let y = 1; y <= 3; y++) {
        let c = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[y] = c;
        
    }
    console.log(appData.optionalExpenses);
}
chooseOptExpenses();