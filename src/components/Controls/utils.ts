// React overrides ref.value setter to swallow some events
// Sometimes it's not desired hence this function which uses prototype setter
// if it's been over-ridden
export const setNativeValue = <
  T extends HTMLInputElement | HTMLTextAreaElement
>(
  element: T,
  value: string
) => {
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    "value"
  )?.set;
  prototypeValueSetter?.call(element, value);
};
