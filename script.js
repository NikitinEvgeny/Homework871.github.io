

let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
    minValue = 0;
    maxValue = 100;
};


minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 999 : maxValue;

if (minValue > maxValue) {
    minValue = 0;
    maxValue = 100;
};

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
let answer = tekstNumber(answerNumber);
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answer}?`;



document.getElementById('btnRetry').addEventListener('click', function (event) {
    event.preventDefault()

    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'))

    if (isNaN(minValue) || isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    };
   
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;


    if (minValue > maxValue) {
        minValue = 0;
        maxValue = 100;
    };


    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    gameRun = true;
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    let answerBtnRetry = tekstNumber(answerNumber);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerBtnRetry}?`;


})



document.getElementById('btnOver').addEventListener('click', function (event) {
    event.preventDefault()
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }

        else {

            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            let answerBtnOver = tekstNumber(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            randomAnswer = Math.round(Math.random() * 4);
            switch (randomAnswer) {
                case 0:
                    answerField.innerText = `Задуманное число: ${answerBtnOver}?`;
                    break;
                case 1:
                    answerField.innerText = `У вас в голове  число: ${answerBtnOver}?`;
                    break;
                case 2:
                    answerField.innerText = `Ваше число: ${answerBtnOver}?`;
                    break;
                case 3:
                    answerField.innerText = `И это цифра: ${answerBtnOver}?`;
                    break;
                case 4:
                    answerField.innerText = ` Да это легко!: ${answerBtnOver}?`;
                    break;
            }

        }
    }
})

document.getElementById('btnLess').addEventListener('click', function btnLess(event) {
    event.preventDefault()
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }
        else {
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            let answerBtnLess = tekstNumber(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            randomAnswer = Math.round(Math.random() * 4);
            switch (randomAnswer) {
                case 0:
                    answerField.innerText = `Вы загадали число: ${answerBtnLess}?`;
                    break;
                case 1:
                    answerField.innerText = `Ваше секретное число: ${answerBtnLess}?`;
                    break;
                case 2:
                    answerField.innerText = `Число, которое вы выбрали: ${answerBtnLess}?`;
                    break;
                case 3:
                    answerField.innerText = `Число, которое вы держите в уме: ${answerBtnLess}?`;
                    break;
                case 4:
                    answerField.innerText = `Число, которое вы выбрали случайно: ${answerBtnLess}?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function (event) {
    event.preventDefault()
    if (gameRun) {
        randomAnswer = Math.round(Math.random() * 5);
        switch (randomAnswer) {
            case 1:
                answerField.innerText = `Я самый умный \uD83E\uDD11   !!!!`;
                break;
            case 2:
                answerField.innerText = `я знал \uD83E\uDD17 !!!`;
                break;
            case 3:
                answerField.innerText = `Урааааа \uD83E\uDD2A !!!!!`;
                break;
            case 4:
                answerField.innerText = `Хвалите меня \uD83E\uDD20 !!!!`;
                break;
            case 5:
                answerField.innerText = `Это было легко \uD83E\uDD14 !!!!`;
                break;
        }
        gameRun = false;
    }
})





/*__________________________________________________________________________________________________________________________*/
function tekstNumber(answerNumber) {
    let text = [];
    let u = Math.abs(answerNumber) % 10;
    let t = Math.trunc(Math.abs(answerNumber) % 100 / 10);
    let h = Math.trunc(Math.abs(answerNumber) % 1000 / 100);

    let units = ["", "один", " два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцаь", "шеснадцать", "семнадцать", "восемнадцаать", "девятнадцать"];

    let tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяноста"];

    let hundreds = ["", "сто", "двести", "триста", "четыресто", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

    if (answerNumber < 0) {
        text.unshift("минус");
    };

    if (answerNumber == 0) {
        text[0] = 0;
    };

    if (Math.abs(answerNumber) > 10 && Math.abs(answerNumber) < 20) {
        u += 10;
        t = "";
        h = "";

    }
    else if (Math.abs(answerNumber) > 100 && Math.abs(answerNumber) < 120) {
        u += 10; t = "";


    } else if (Math.abs(answerNumber) > 200 && Math.abs(answerNumber) < 220) {
        u += 10; t = "";

    }
    else if (Math.abs(answerNumber) > 300 && Math.abs(answerNumber) < 320) {
        u += 10; t = "";

    }
    else if (Math.abs(answerNumber) > 400 && Math.abs(answerNumber) < 420) {
        u += 10; t = "";

    }
    else if (Math.abs(answerNumber) > 500 && Math.abs(answerNumber) < 520) {
        u += 10; t = "";
    }
    else if (Math.abs(answerNumber) > 600 && Math.abs(answerNumber) < 620) {
        u += 10; t = "";
    }
    else if (Math.abs(answerNumber) > 700 && Math.abs(answerNumber) < 720) {
        u += 10; t = "";
    }
    else if (Math.abs(answerNumber) > 800 && Math.abs(answerNumber) < 820) {
        u += 10; t = "";
    }
    else if (Math.abs(answerNumber) > 900 && Math.abs(answerNumber) < 920) {
        u += 10; t = "";
    }


    text.push(hundreds[h], tens[t], units[u]);
    if (text.join(' ').length < 20) {
        return text.join(' ');
    }
    else {
        return answerNumber;
    };

    ;
}







