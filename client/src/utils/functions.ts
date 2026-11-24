export const replaceCharWithDigit = (input: EventTarget & HTMLInputElement) => {
  input.value = input.value.replace(/[^0-9]/g, "");
};
