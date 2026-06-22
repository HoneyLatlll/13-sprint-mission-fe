import AuthFooter from "../_components/AuthFooter";
import AuthForm from "../_components/AuthForm";
import AuthHeader from "../_components/AuthHeader";

export default function page() {
  return (
    <section className="mx-auto flex w-[343px] flex-col md:w-[640px]">
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </section>
  );
}
