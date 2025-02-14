// Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

interface CustomMatchers<R = unknown> {
  toHaveClasses(classes?: string[]): R
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Assertion extends CustomMatchers {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function toHaveClasses(
  this: any,
  received: unknown,
  classes: string[],
) {
  if (!received || !(received instanceof HTMLElement)) {
    return {
      message: () => 'received is not an HTMLElement',
      pass: false,
    }
  }

  if (!classes) {
    return {
      message: () => 'no classes passed',
      pass: false,
    }
  }

  let pass = true
  // const errors: string[] = []

  classes.forEach((className) => {
    const localPass = received.classList.contains(className)
    // if (!localPass) {
    //   errors.push(`class ${className} not found`)
    // }
    pass = pass && localPass
  })

  return {
    message: () =>
      `received element ${
        this.isNot ? 'has' : 'does not have'
      } one of the CSS classes: ${classes.join(
        ' ',
      )}\nClass list: ${received.classList.toString()}`,
    pass,
  }
}
