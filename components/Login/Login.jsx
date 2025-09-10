

import LoginHero from "./loginHero"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegistrationForm"


export default function Login() {
  return (
    <div>
      {/* Hero */}
      <LoginHero
        title="My Account"
        breadcrumbs={["Home", "My Account"]}
      />

      {/* Auth Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <LoginForm />
        <RegisterForm />
      </section>
    </div>
  )
}
