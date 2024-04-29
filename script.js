const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");

const output = document.getElementById("output");

const converter = [
    {
        romanNumerals: 'M',
        arabicNumerals: 1000
    },
    {
        romanNumerals: 'CM',
        arabicNumerals: 900
    },
    {
        romanNumerals: 'D',
        arabicNumerals: 500
    },
    {
        romanNumerals: 'CD',
        arabicNumerals: 400
    },
    {
        romanNumerals: 'C',
        arabicNumerals: 100
    },
    {
        romanNumerals: 'XC',
        arabicNumerals: 90
    },
    {
        romanNumerals: 'L',
        arabicNumerals: 50
    },
    {
        romanNumerals: 'XL',
        arabicNumerals: 40
    },
    {
        romanNumerals: 'X',
        arabicNumerals: 10
    },
    {
        romanNumerals: 'IX',
        arabicNumerals: 9
    },
    {
        romanNumerals: 'V',
        arabicNumerals: 5
    },
    {
        romanNumerals: 'IV',
        arabicNumerals: 4
    },
    {
        romanNumerals: 'I',
        arabicNumerals: 1
    },
];
const clickConvertButton = () => {
    const inputInt = parseInt(number.value);
    if (isNaN(inputInt)) {
        output.innerText = 'Please enter a valid number';
        return;
    }
    if (inputInt <= 0) {
        output.innerText = 'Please enter a number greater than or equal to 1';
        return;
    }
    if (inputInt >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999';
        return;
    }

    output.innerText = convertArabicNumber(number.value);

}

const convertArabicNumber = (myInput) => {
    let result = '';
    let input = myInput;

    converter.forEach((obj) => {
        const romanNumerals = obj.romanNumerals;
        const arabicNumerals = obj.arabicNumerals;

        const fact = Math.floor(input / arabicNumerals);
        input = (input % arabicNumerals);

        for (let i = 0; i < fact; i++) {
            result = result + romanNumerals;
        }

    });
    return result;
}

convertBtn.addEventListener("click", clickConvertButton);