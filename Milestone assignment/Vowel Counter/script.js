function countAndDisplay() {
    const userName = document.getElementById("userName").value;
    const vowelCount = countVowels(userName);
    document.getElementById("result").textContent = `The number of vowels in ${userName} is: ${vowelCount}`;
}

function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}
