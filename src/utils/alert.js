import Swal from "sweetalert2"

export const registerSuccessAlert = () => {
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registration successful",
        iconColor: "#93d413",
        showConfirmButton: true,
        confirmButtonColor: "#93d413",
        html: "Signup successful. Check your email for login details.",
        footer: `<a href="/login">Go to login</a>`,
      });
}

export const registerFailureAlert = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registration failed",
        iconColor: "#93d413",
        showConfirmButton: true,
        confirmButtonColor: "#93d413",
        html: "Signup failed. Please try again.",
        footer: `<a href="/login">Go to login</a>`,
      });
}

export const loginSuccessAlert = () => {
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful",
        iconColor: "#93d413",
        showConfirmButton: true,
        confirmButtonColor: "#93d413",
        html: "Login successful. Check your email for login details.",
        footer: `<a href="/login">Go to login</a>`,
      });
}

export const loginFailureAlert = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed",
        iconColor: "#93d413",
        showConfirmButton: true,
        confirmButtonColor: "#93d413",
        html: "Login failed. Please try again.",
        footer: `<a href="/login">Go to login</a>`,
      });
}