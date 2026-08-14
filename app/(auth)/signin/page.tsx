"use client";
import RegisterLayout from "@/components/register-layout";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import AppButton from "@/components/ui/app-buttom";
import Link from "next/link";

const signinSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, "Password  must be at least 8 characters")
    .max(16, "Password  must be at most 16 characters"),
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof signinSchema>) {
    console.log(data);
  }

  const showPasswordHandler = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <RegisterLayout layout="signin">
      <div className="space-y-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-0">
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
          </FieldGroup>
          <div className="flex items-center justify-between text-primary text-sm font-medium mb-5 ">
            <Link href="/signup">Dont have account?</Link>
            <Link href="forget-password">Forget Password?</Link>
          </div>
          <AppButton type="submit" className="w-full rounded-xl py-5">
            Sign in
          </AppButton>
        </form>
      </div>
    </RegisterLayout>
  );
}

export default SignIn;
