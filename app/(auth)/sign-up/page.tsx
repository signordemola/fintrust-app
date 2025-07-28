import SignUpForm from "@/components/forms/auth/sign-up-form";

const SignUpPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="min-h-screen flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold capitalize">
            Create your account
          </h2>
          <p className="text-sm text-muted">Join FinsTrust Digital Bank</p>
        </div>

        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-4xl">
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
