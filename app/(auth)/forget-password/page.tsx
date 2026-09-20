"use client";
import { ForgetPassword } from "@/app/services/users.services";
import RegisterLayout from "@/components/register-layout";
import AppButton from "@/components/ui/app-buttom";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { forgetPasswordSchema } from "@/lib/schemas/forgetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

function ForgetPass() {
  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const {
    mutate,
    data: email,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ForgetPassword,
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data);
    console.log(email);
  };

  return (
    <RegisterLayout layout="forgetPassword">
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                  className="pl-7 rounded-full"
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
        {isSuccess && (
          <span className="bg-secondary/10 text-secondary font-medium text-sm block py-2 px-3 rounded-full mb-4">
            Reset token has been sent to your email.
          </span>
        )}
        {error && (
          <span className="bg-destructive/10 text-destructive font-medium text-sm block py-2 px-3 rounded-full mb-4">
            {error?.message}
          </span>
        )}
        <AppButton type="submit" className="w-full rounded-full py-5">
          {isPending ? (
            <Icon icon="eos-icons:loading" className="text-background" />
          ) : (
            "Submit"
          )}
        </AppButton>
      </form>
    </RegisterLayout>
  );
}

export default ForgetPass;
