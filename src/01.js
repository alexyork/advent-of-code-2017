export function getCaptchaResult(captchaInput) {
  let sum = 0;

  for (let i = 0; i < captchaInput.length; i++) {
    const currentDigit = parseInt(captchaInput[i], 10);

    const maybeNextDigit = captchaInput[i + 1];
    const nextDigit = (maybeNextDigit)
      ? parseInt(maybeNextDigit, 10)
      : parseInt(captchaInput[0], 10);

    if (currentDigit === nextDigit) {
      sum += currentDigit;
    }
  }

  return sum;
}

export function getCaptchaResult2(captchaInput) {
  const doubledCaptchaInput = captchaInput + captchaInput; // "foo" -> "foofoo"

  let sum = 0;

  for (let i = 0; i < captchaInput.length; i++) {
    const currentDigit = parseInt(captchaInput[i], 10);
    const digitsAheadWeMustLook = (captchaInput.length / 2);
    const potentialHalfwayAroundDigit = captchaInput[i + digitsAheadWeMustLook]; // Might not exist, if it overflows

    const halfwayAroundDigit = (potentialHalfwayAroundDigit)
      ? parseInt(potentialHalfwayAroundDigit, 10)
      : parseInt(doubledCaptchaInput[i + digitsAheadWeMustLook], 10);

    if (currentDigit === halfwayAroundDigit) {
      sum += currentDigit;
    }
  }

  return sum;
}