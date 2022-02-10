export default function ValidateInfoPost(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Le titre est obligatoire';
    }

    if (!values.content.trim()) {
        errors.firstName = 'Le contenu est obligatoire';
    }

    return errors;
}