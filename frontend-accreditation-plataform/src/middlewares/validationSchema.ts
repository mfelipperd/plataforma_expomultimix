import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório.').notOneOf(['Nome'], 'O nome não pode ser "Nome".'),
  email: Yup.string().email('O e-mail fornecido é inválido.').required('O campo e-mail é obrigatório.'),
  phoneNumber: Yup.string().required('O campo número de telefone é obrigatório.').length(11, 'O número de telefone deve ter 11 dígitos.').max(20, 'O número de telefone deve ter no máximo 20 dígitos.'),
  cnpj: Yup.string().test('cnpj', 'O CNPJ fornecido é inválido.', (value) => {
    if (!value) return false;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/;
    return cnpjRegex.test(value);
  }),
  enterpriseName: Yup.string().required('O campo nome da empresa é obrigatório.').notOneOf(['Nome da Empresa'], 'O nome da empresa não pode ser "Nome da Empresa".'),
  city: Yup.string().required('O campo cidade é obrigatório.').notOneOf(['Cidade/Estado'], 'A cidade não pode ser "Cidade/Estado".'),
  sector: Yup.string().required('O campo setor é obrigatório.').notOneOf(['Setor'], 'O setor não pode ser "Setor".'),
  marketing: Yup.string().required('O campo como soube da feira é obrigatório.').notOneOf(['Como soube da feira?'], 'A opção "Como soube da feira?" não é válida.'),
});

export default validationSchema;