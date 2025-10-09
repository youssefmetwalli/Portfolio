import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface InputFieldProps<TFormValue extends FieldValues> {
  register: UseFormRegister<TFormValue>;
  name: Path<TFormValue>;
  error: FieldErrors<TFormValue>;
  rule?: RegisterOptions<TFormValue, Path<TFormValue>>; // ✅ properly typed rule
  isTextArea?: boolean;
  placeholder?: string;
  rows?: number;
}

const InputField = <TFormValue extends FieldValues>({
  name,
  rule,
  error,
  isTextArea = false,
  placeholder = "",
  rows = 2,
  register,
}: InputFieldProps<TFormValue>) => {
  const renderPlaceholder =
    placeholder || name.charAt(0).toUpperCase() + name.slice(1);

  const fieldError = error[name];

  return (
    <div className="w-full space-y-2">
      {isTextArea ? (
        <textarea
          rows={rows}
          placeholder={renderPlaceholder}
          {...register(name, rule ?? {})} 
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={renderPlaceholder}
          {...register(name, rule ?? {})}
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        />
      )}

      {fieldError?.type === "required" && (
        <p role="alert" className="text-[10px] text-red-400">
          *{name} is required
        </p>
      )}

      {fieldError?.type === "pattern" && (
        <p role="alert" className="text-[10px] text-red-400">
          *{String(fieldError?.message)}
        </p>
      )}
    </div>
  );
};

export default InputField;
