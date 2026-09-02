import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
const Form = ({ setToggle, setUsers, users, updatedData }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: updatedData,
    });
    return (
        <div>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                    if (updatedData) {
                        setUsers((prev) => {
                            return prev.map((val) => {
                                return val.id === updatedData.id
                                    ? { ...data, id: val.id }
                                    : val;
                            });
                        });
                    } else {
                        let arr = [...users, { ...data, id: nanoid() }];
                        setUsers(arr);
                        localStorage.setItem("users", JSON.stringify(arr));
                    }
                    reset();
                    setToggle((prev) => !prev);
                })}
                className=" w-120  flex flex-col gap-4 p-4 justify-center items-center bg-gray-100 rounded-md"
            >
                <h1 className="text-2xl font-bold">Form</h1>
                <input
                    {...register("name", {
                        required: "Name is required",
                        pattern: {
                            value: /^[A-Za-z][A-Za-z ]*$/,
                            message: "Name can only contain letters and spaces",
                        },
                    })}
                    className=" w-100 border border-gray-300 bg-white rounded p-2"
                    type="text"
                    placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                    })}
                    className=" w-100 border border-gray-300 bg-white rounded p-2"
                    type="email"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <input
                    {...register("age", {
                        required: "Age is required",
                        min: { value: 0, message: "Age must be a positive number" },
                    })}
                    className=" w-100 border border-gray-300 bg-white rounded p-2"
                    type="number"
                    placeholder="Enter your age"
                />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                <input
                    {...register("mobile", {
                        required: "mobile number is required",
                        minLength: { value: 10, message: "Minimum 10 digits is required" },
                        maxLength: { value: 10, message: "maximum 10 digits is required" },
                    })}
                    className=" w-100 border border-gray-300 bg-white rounded p-2"
                    type="number"
                    placeholder="Enter your mobile number"
                />
                {errors.mobile && (
                    <p className="text-red-500">{errors.mobile.message}</p>
                )}
                <input
                    {...register("image_url", { required: "Image URL is required" })}
                    className=" w-100 border border-gray-300 bg-white rounded p-2"
                    type="url"
                    placeholder="Enter your image url"
                />
                {errors.image_url && (
                    <p className="text-red-500">{errors.image_url.message}</p>
                )}

                <button
                    className="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
