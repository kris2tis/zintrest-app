export default function RHFTextField({
    label,
    name,
    register,
    required,
    errors,
    value,
    inputClassName,
    ...rest
}) {
    const hasError = !!(errors && errors[name]);
    const errorMessage = errors[name];
    return (
        <div className="flex flex-col gap-y-3 w-full">
            <div className="flex-row !justify-start">
                <label className="w-max" htmlFor={name}>
                    {label}
                </label>
                {required && <span className="text-error">*</span>}
            </div>
            <input
                className={`${inputClassName} w-full py-3 px-1 border border-transparent rounded-sm transition-all duration-500 focus:border-secondary-100  ${
                    hasError ? "!border-error" : ""
                }`}
                type="text"
                name={name}
            {...register(name)}
                {...rest}
            />
            {errors && errors?.[name] && (
                <span className="text-error">{errorMessage?.message}</span>
            )}
        </div>
    );
}
