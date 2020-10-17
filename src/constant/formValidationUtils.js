export const makeGetInputError = (
  touched,
  errors,
  submitCount,
) => name => (submitCount || touched[name]) && errors[name];

export const makeHandleInputChange = (handleChange, touched, setFieldTouched) => (event) => {
  const { name } = event.target;
  handleChange(event);
  if (!touched[name]) {
    setFieldTouched(name, true, true);
  }
};

export const makeHandleSubFormUpdate = (
  handleInputChange,
  values,
) => (name, newSubFormEntityId) => {
  handleInputChange({
    target: {
      name,
      value: [
        ...values[name] || [],
        newSubFormEntityId,
      ],
    },
  });
};
