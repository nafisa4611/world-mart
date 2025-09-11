import AuthPage from "./AuthPage"
import LoginHero from "./LoginHero"

export default function Login() {
  return (
    <div>
      {/* Hero */}
      <LoginHero 
        title="My Account"
        breadcrumbs={["Home", "My Account"]}
      />

      {/* Auth Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
        <AuthPage />
      </section>
    </div>
  )
}
