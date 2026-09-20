"use client";
import { ResetPassword } from "@/app/services/users.services";
import RegisterLayout from "@/components/register-layout";
import AppButton from "@/components/ui/app-buttom";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { resetPasswordSchema } from "@/lib/schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

function ResetPass() {
  const router = useRouter();
  const params = useParams();
  const resetToken = params.resetToken as string;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

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

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, data, isPending, error, isSuccess } = useMutation({
    mutationFn: ResetPassword,
    onSuccess: () => {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
  });

  const onSubmit = (data: { password: string; confirmPassword: string }) => {
    console.log(data);
    mutate({ resetToken, data });
  };

  return (
    <RegisterLayout layout="resetPassword">
      <form onClick={form.handleSubmit(onSubmit)}>
        <FieldGroup>
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
                    className="pl-7 rounded-full"
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
                    className="pl-7 rounded-full"
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
        {isSuccess && (
          <span className="bg-secondary/10 text-secondary font-medium text-sm block py-2 px-3 rounded-full mb-4">
            Password Reset was successful! You can now log in with your new
            password.
          </span>
        )}
        {error && (
          <span className="bg-destructive/10 text-destructive font-medium text-sm block py-2 px-3 rounded-full mb-4">
            {error?.message}
          </span>
        )}
        <AppButton type="submit" className="w-full py-5 rounded-full">
          {isPending ? (
            <Icon icon="eos-icons:loading" className="text-background" />
          ) : (
            "Sign in"
          )}
        </AppButton>
      </form>
    </RegisterLayout>
  );
}

export default ResetPass;
