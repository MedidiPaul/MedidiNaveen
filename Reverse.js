function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(' ');
    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('')
        });
        
        const reversedSentence = reversedWords.join('');
        
        return reversedSentence;
}

const inputsentence = "naveen";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);