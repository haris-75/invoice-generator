import { useFormik, FormikHelpers, FormikValues, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';

type FormValues = Record<string, string | number>;

export type UseFormikFormReturnType<TValues extends FormikValues> = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    errors: FormikErrors<TValues>;
    touched: FormikTouched<TValues>;
    values: TValues;
    setFieldError: (field: keyof TValues, message: string | undefined) => void;
    setFieldValue: (field: keyof TValues, value: string|undefined) => void;
  
};

export function useFormikForm<T extends FormValues>(
    initialValues: T,
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<T>,
    validationSchema: Yup.ObjectSchema<T>
) {
    const formik = useFormik<T>({
        initialValues,
        onSubmit,
        validationSchema,
    });

    const clearForm = () => formik.resetForm();

    const setFieldValue = (fieldName: string, value: string | number | symbol) => formik.setFieldValue(fieldName, value);

    const getFieldError = (fieldName: string): string | undefined =>
    formik.touched[fieldName] ? (formik.errors[fieldName] as string | undefined) : undefined;

    const isFieldTouched = (fieldName: string): boolean | undefined => (formik?.touched[fieldName] as boolean | undefined);

    return {
        ...formik,
        clearForm,
        setFieldValue,
        getFieldError,
        isFieldTouched,
    };
}
