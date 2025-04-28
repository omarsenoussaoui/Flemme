
export const passwordValidationRules = {
    minLength: {
      pattern: /^.{6,}$/,
      message: "Password must be at least 6 characters",
    },
    uppercase: {
      pattern: /[A-Z]/,
      message: "Password must contain at least one uppercase letter",
    },
    number: {
      pattern: /\d/,
      message: "Password must contain at least one number",
    },
    specialChar: {
      pattern: /[!@#$%^&*(),.?":{}|<>_\-+=/\\\[\]~`]/,
      message: "Password must contain at least one special character",
    },
  };
  