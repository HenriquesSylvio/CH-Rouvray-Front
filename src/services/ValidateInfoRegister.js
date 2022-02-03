export default function ValidateInfoRegister(values) {
    let errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = 'Le prénom est obligatoire';
    } else if (/\d/.test(values.firstName)) {
        errors.firstName = "Le prénom est invalide";
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'Le nom est obligatoire';
    } else if (/\d/.test(values.lastName)) {
        errors.lastName = "Le nom est invalide";
    }

    if (!values.email) {
        errors.email = "L'email est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "L'email est invalide";
    }
    if (!values.password) {
        errors.password = 'Le mot de passe est obligatoire';
    } else if (values.password.length < 8) {
        errors.password = 'Le mot de passe doit contenir un minimum de 8 caractères';
    } else if (values.password.length > 20) {
        errors.password = 'Le mot de passe doit contenir un maximum de 20 caractères';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/.test(values.password)){
        errors.password = 'Les mots de passe doivent contenir au moins 8 caractères et contenir au moins une des catégories suivantes : majuscules, minuscules, chiffres et symboles.';
    }


    if (!values.password2) {
        errors.password2 = 'Le mot de passe de confirmation est obligatoire';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Le mot de passe et le mot de passe de confirmation ne sont pas les mêmes';
    }
    return errors;
}