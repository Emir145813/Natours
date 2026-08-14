"use client";
import RegisterLayout from "@/components/register-layout";
import AppButton from "@/components/ui/app-buttom";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const signupSchema = z
  .object({
    name: z.string(),
    email: z.email(),
    password: z
      .string()
      .min(8, "Password  must be at least 8 characters")
      .max(16, "Password  must be at most 16 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password  must be at least 8 characters")
      .max(16, "Password  must be at most 16 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(data: z.infer<typeof signupSchema>) {
    console.log(data);
  }

  const showPasswordHandler = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const showConfirmPasswordHandler = () => {
    if (showConfirmPassword) {
      setConfirmShowPassword(false);
    } else {
      setConfirmShowPassword(true);
    }
  };

  return (
    <RegisterLayout layout="signup">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-0">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="h-23">
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    placeholder="Enter your Full Name"
                    aria-invalid={fieldState.invalid}
                    className="pl-7"
                  />
                  <Icon
                    icon="lucide:user"
                    className="absolute top-1/4 left-2 text-foreground/50"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError
                    className="font-medium"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="h-23">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="email"
                    type="text"
                    placeholder="Enter your Email"
                    aria-invalid={fieldState.invalid}
                    className="pl-7"
                  />
                  <Icon
                    icon="mdi:email"
                    className="absolute top-1/4 left-2 text-foreground/50"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError
                    className="font-medium"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="h-23" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Passwaord</FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="password"
                    type={showPassword === true ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-invalid={fieldState.invalid}
                    className="pl-7"
                  />
                  <Icon
                    icon="solar:eye-bold"
                    className={`${showPassword ? "text-primary" : "text-foreground/50"} transition-colors duration-200 absolute top-1/4 right-2 cursor-pointer`}
                    onClick={showPasswordHandler}
                  />
                  <Icon
                    icon="mdi:password"
                    className="absolute top-1/4 left-2 text-foreground/50"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError
                    className="font-medium"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="h-23" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Passwaord
                </FieldLabel>
                <div className="relative">
                  <Input
                    {...field}
                    id="confirmPassword"
                    type={showConfirmPassword === true ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-invalid={fieldState.invalid}
                    className="pl-7"
                  />
                  <Icon
                    icon="solar:eye-bold"
                    className={`${showConfirmPassword ? "text-primary" : "text-foreground/50"} transition-colors duration-200 absolute top-1/4 right-2 cursor-pointer`}
                    onClick={showConfirmPasswordHandler}
                  />
                  <Icon
                    icon="mdi:password"
                    className="absolute top-1/4 left-2 text-foreground/50"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError
                    className="font-medium"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <AppButton type="submit" className="w-full rounded-xl py-5">
          Sign in
        </AppButton>
      </form>
    </RegisterLayout>
  );
}

export default SignUp;
