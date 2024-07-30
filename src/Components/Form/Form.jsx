import { Field, Formik, Form, validateYupSchema } from "formik";
import { useContext, useState } from "react";
import { RootContext } from "../../Context/RootContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../Schema/UserSchema";
import { useMutation, useQueryClient } from "react-query";
import { http } from "../../../api";
import { SvgSpinners3DotsBounce} from "../spinner/spinner";

export default function FormList() {
  const contextData = useContext(RootContext);
  const notify = (a, b) => toast(`add ${a} ${b}`);

//   function emptyValuesForm(values) {
//     values.firstName = "";
//     values.lastName = "";
//     values.phoneNumber = "";
//     values.kinship = "";
//     values.email = "";
//   }

    // Create New Cart
    const queryClient=useQueryClient()

    async function createNewCart(newCart){
        const response = await http.post("/users",newCart)
    }
    const createCartMutation=useMutation({
        mutationFn:createNewCart,
        onSuccess:()=>queryClient.invalidateQueries({queryKey:"carts"})
    })
    // Edit Mode
    async function editCart(EditedCart){
      // console.log()
      const response = await http.put(`/users/${contextData.editMode.id}`,EditedCart)
    }
    const editCartMutation=useMutation({
      mutationFn:editCart,
      onSuccess:()=>queryClient.invalidateQueries({queryKey:"carts"})
    })
    // hookForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      kinship: "",
      email: "",
    },
  });

  const onSubmit = (formValues) => {
    if (!contextData.editMode){
      createCartMutation.mutate(formValues)
      reset()
    }else{
      // console.log(formValues)
      editCartMutation.mutate(formValues)
      contextData.setEditMode(null)
      reset()
    }
  };


  // const OnError = (error) => {
  //   console.log(error);
  //   return 
  // };
  
  // function editeHandel(){
  //   setValue("firstName",contextData.editMode.firstName)
  //     setValue("lastName",contextData.editMode.lastName)
  //     setValue("phoneNumber",contextData.editMode.phoneNumber)
  //     setValue("kinship",contextData.editMode.kinship)
  //     setValue("email",contextData.editMode.email)
  // }
  if(contextData.editMode){
    setValue("firstName",contextData.editMode.firstName)
      setValue("lastName",contextData.editMode.lastName)
      setValue("phoneNumber",contextData.editMode.phoneNumber)
      setValue("kinship",contextData.editMode.kinship)
      setValue("email",contextData.editMode.email)
  }

  return (
    <>
      {/* <ToastContainer position="top-right" /> */}
       <div className="flex flex-col w-2/5 h-auto bg-gradient-to-b from-red-400 to-red-900 p-3 gap-3 rounded-2xl drop-shadow-lg mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">وب اپلیکیشن مدیریت مخاطبین</h1>
                {/* div show errors */}
                <div
                  className={
                    errors.firstName ||
                    errors.lastName ||
                    errors.phoneNumber ||
                    errors.email
                      ? "absolute right-[-330px] top-0 z-10 flex flex-col items-end bg-white/30 p-4 rounded-lg w-fit h-auto"
                      : "hidden"
                  }
                >
                  {errors.firstName && <span className={errors.firstName ? "text-white" : "hidden"}>
                    {errors.firstName.message}
                  </span>}
                  {errors.lastName && <span className={errors.lastName ? "text-white" : "hidden"}>
                    {errors.lastName.message}
                  </span>}
                  {errors.phoneNumber && <span
                    className={errors.phoneNumber ? "text-white" : "hidden"}
                  >
                    {errors.phoneNumber.message}
                  </span>}
                  {errors.email && <span className={errors.email ? "text-white" : "hidden"}>
                    {errors.email.message}
                  </span>}
                </div>
                <input
                  className="py-2 px-3 border-2 border-black rounded-lg drop-shadow-lg"
                  id="firstName"
                  name="firstName"
                  {...register("firstName")}
                  placeholder="نام ..."
                />

                <input
                  className="py-2 px-3 border-2 border-black rounded-lg drop-shadow-lg"
                  id="lastName"
                  name="lastName"
                  {...register("lastName")}
                  placeholder="نام خانوادگی ..."
                />

                <input
                  className="py-2 px-3 border-2 border-black rounded-lg drop-shadow-lg"
                  id="phoneNumber"
                  name="phoneNumber"
                  {...register("phoneNumber" , {valueAsNumber:true})}
                  placeholder="شماره تماس ..."
                />

                <select
                  className="py-2 px-3 border-2 border-black rounded-lg drop-shadow-lg"
                  id="kinship"
                  name="kinship"
                  {...register("kinship")}
                >
                  <option value="">نسبت</option>
                  <option value={"اعضا خانواده"}>اعضا خانواده</option>
                  <option value={"دوستان"}>دوستان</option>
                  <option value={"فامیل"}>فامیل</option>
                  <option value={"همکار"}>همکار</option>
                </select>
                <input
                  className="py-2 px-3 border-2 border-black rounded-lg drop-shadow-lg"
                  id="email"
                  name="email"
                  {...register("email")}
                  placeholder="ایمیل ..."
                />
                <button
                className="flex items-center justify-center py-3 px-5 text-white bg-gradient-to-r from-emerald-500 to-lime-600 rounded-lg border-2"
                //   className={` ${
                //     !(isValid && dirty)
                //       ? "py-3 px-5 text-white bg-gray-500 rounded-lg border-2"
                //       : " py-3 px-5 text-white bg-gradient-to-r from-emerald-500 to-lime-600 rounded-lg border-2"
                //   }`}
                  type="submit"
                >
                   
                  {contextData.editMode ? "تصیح کردن" :createCartMutation.isLoading ? <SvgSpinners3DotsBounce/> : "اضافه کردن"}
                </button>
              </form>  
      </div>
    </>
  );
}



{/* <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            kinship: "",
            email: "",
          }}
          onSubmit={(values) => {
            if (!contextData.editMode) {
              notify(values.firstName, values.lastName);
              const newUser = {
                id: Math.floor(Math.random() * 10000),
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                kinship: values.kinship,
                email: values.email,
              };
              contextData.setContextState([
                ...contextData.contextState,
                newUser,
              ]);
              emptyValuesForm(values);
            } else {
              contextData.setContextState((prev) => {
                contextData.setEditMode(null);
                return prev.map((user) =>
                  user.id == contextData.editMode
                    ? { ...user, ...values }
                    : user
                );
              });
              emptyValuesForm(values);
            }
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required().min(3, "name is short"),
            lastName: Yup.string().required(),
            phoneNumber: Yup.number()
              .required()
              .min(7, "your Phone number is not correct!")
              .positive()
              .integer(),
            email: Yup.string().required().email(),
          })}
        >
          {({ errors, isValid, dirty }) => {
            
          }}
        </Formik> */}
