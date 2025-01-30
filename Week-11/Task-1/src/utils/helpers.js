/**
 * Shuffles an array randomly
 * @param {Array} array - The array to shuffle
 * @returns {Array} Shuffled array
 */
export const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  /**
   * Validates quiz question structure
   * @param {Object} question - The question object to validate
   * @returns {boolean} Whether the question is valid
   */
  export const validateQuizQuestion = (question) => {
    return (
      question &&
      typeof question.question === 'string' &&
      Array.isArray(question.options) &&
      question.options.length > 1 &&
      typeof question.answer === 'string' &&
      question.options.includes(question.answer)
    );
  };