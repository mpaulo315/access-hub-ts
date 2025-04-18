import { isProxy } from "vue";

export const isValid = (form: Record<string, any>): boolean => {
  const keys = Object.keys(form).filter((e) => isProxy(form[e]));

  return form.valid && keys.every((e) => form[e].touched);
};
