import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../store/actions/clientActions";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname;

  const onSubmit = (data) => {
    dispatch(
      loginUser(
        { email: data.email, password: data.password },
        navigate,
        from,
        data.rememberMe
      )
    ).catch(() => {
      alert("Email veya şifre hatalı");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />

      <label>
        <input type="checkbox" {...register("rememberMe")} />
        Remember me
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
