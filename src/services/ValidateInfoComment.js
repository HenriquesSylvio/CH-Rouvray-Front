export default function ValidateInfoComment(values) {
    let errors = {};

    if (!values.content.trim()) {
        errors.firstName = 'Le contenu est obligatoire';
    }

    return errors;
}