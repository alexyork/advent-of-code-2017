export function getCaptchaResult(captchaInput) {
    let sum = 0;

    for (let i = 0; i < captchaInput.length; i++) {
        const currentDigit = parseInt(captchaInput[i], 10);

        let nextDigit;
        const maybeNextDigit = captchaInput[i + 1];
        if (maybeNextDigit) {
            nextDigit = parseInt(maybeNextDigit, 10);
        } else {
            nextDigit = parseInt(captchaInput[0], 10);
        }

        if (currentDigit === nextDigit) {
            sum += currentDigit;
        }
    }

    return sum;
}

export function getCaptchaResult2(captchaInput) {
    let sum = 0;

    for (let i = 0; i < captchaInput.length; i++) {
        const currentDigit = parseInt(captchaInput[i], 10);
        const digitsAhead = (captchaInput.length / 2);

        let halfwayAroundDigit;
        const potentialHalfwayAroundDigitIndex = i + digitsAhead;
        const potentialHalfwayAroundDigit = captchaInput[potentialHalfwayAroundDigitIndex];
        if (potentialHalfwayAroundDigit) {
            halfwayAroundDigit = parseInt(potentialHalfwayAroundDigit, 10);
        } else {
            const doubledInput = captchaInput + captchaInput;
            halfwayAroundDigit = parseInt(doubledInput[i + digitsAhead], 10);
        }

        if (currentDigit === halfwayAroundDigit) {
            sum += currentDigit;
        }
    }

    return sum;
}