"use client";
import React, { useCallback } from "react";
import styles from "./registration.module.scss";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/app/components/InputField/page";
import { Button } from "@mui/material";
import { z } from "zod";
import DateComponent from "@/app/components/dateComponent/page";
import Dropdown from "@/app/components/dropDown/page";

const Registration = () => {
  const formSchema = z.object({
    fname: z.string().min(3, "Please enter at least 3 letters for your first name"),
    lname: z.string().min(1, "Plese enter at least 3 letters for your last name"),
    email: z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Enter a valid email Id'),
    phone: z.coerce.number().positive('Please enter your phone number').transform((value) => (!isNaN(Number(value)) ? null : value)),
    dob: z.coerce.date().transform((value) => {
      new Date(value);
    }),
    address: z.string().min(1, 'Please Enter your address'),
    district: z.string().min(1, "Please select district"), // to be changed into select dropdown
    state: z.string().min(1, "Please select State"), //to be changed into select dropdown
    postal: z.coerce.number().positive('Please enter a number').transform((value)=>(isNaN(Number(value)) ? null : value)), // to be changed into type number
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors},
  } = useForm({
    mode: "all",
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: null,
      dob:null,
      address: "",
      district: "",
      state: "",
      postal: null,
    },
    resolver: zodResolver(formSchema),
  });

  type RegistrationSchema = z.infer<typeof formSchema>;

  const formSubmit = useCallback((formData: RegistrationSchema) => {
    console.log(formData, 'formData');
  }, []);
  return (
    <div className={styles.mainContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.formTitle}>User Registration Form </div>
        <div className={styles.fieldsContainer}>
          <Controller
            name="fname"
            control={control}
            render={({ field }) => (
              <InputField
                id="fname"
                label="First Name*"
                error={!!errors?.fname}
                type="text"
                helperText={errors?.fname?.message}
                field={field}
              />
            )}
          />
          <Controller
            name="lname"
            control={control}
            render={({ field }) => (
              <InputField
                id="lname"
                label="Last Name*"
                error={!!errors?.lname}
                type="text"
                helperText={errors?.lname?.message}
                field={field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                id="email"
                label="Email Address*"
                error={!!errors?.email}
                type="text"
                helperText={errors?.email?.message}
                field={field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputField
                id="phone"
                label="Phone Number*"
                error={!!errors?.phone}
                type="number"
                helperText={errors?.phone?.message}
                field={field}
              />
            )}
          />
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <DateComponent
              error={!!errors?.dob}
              id="dob"
              label="Date of Birth*"
              field={field}
              helperText={errors?.dob?.message}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <InputField
                id="address"
                label="Address*"
                error={!!errors?.address}
                type="text"
                helperText={errors?.address?.message}
                field={field}
              />
            )}
          />
           <Controller
            name="state"
            control={control}
            render={({ field }) => (
              // <InputField
              //   id="state"
              //   label="State*"
              //   error={!!errors?.state}
              //   type="text"
              //   helperText={errors?.state?.message}
              //   field={field}
              // />
              <Dropdown
              label="State*"/>
                
            )}
          />
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              // <InputField
              //   id="district"
              //   label="District*"
              //   error={!!errors?.district}
              //   type="text"
              //   helperText={errors?.district?.message}
              //   field={field}
              // />
              <Dropdown
              label="District*"/>
            )}
          />
          <Controller
            name="postal"
            control={control}
            render={({ field }) => (
              <InputField
                id="postal"
                label="Postal code*"
                error={!!errors?.postal}
                type="number"
                helperText={errors?.postal?.message}
                field={field}
              />
            )}
          />
         
          <div className={styles.logo}>We Care</div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button  variant="outlined">Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
