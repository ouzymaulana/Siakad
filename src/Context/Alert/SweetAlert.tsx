import Swal, { SweetAlertIcon } from "sweetalert2";

export function sweetAlert(icon: SweetAlertIcon, title: string) {
  return Swal.fire({
    position: "center",
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
  });
}
