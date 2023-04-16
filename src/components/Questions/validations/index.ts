import * as Yup from 'yup';

export const schema = Yup.object().shape({
  password: Yup
  .number()
  .typeError('Informe um valor numérico')
  .positive('O valor não pode ser negativo')
  .required('Senha é obrigatória!'),
});