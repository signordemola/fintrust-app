interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({ message = "Loading..." }: LoadingSpinnerProps) => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/90 to-accent-600/90 backdrop-blur-lg rounded-3xl">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div
          className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-chart-4 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
        ></div>
      </div>
      <p className="text-white/80 text-sm font-medium">{message}</p>
    </div>
  </div>
);

export default LoadingSpinner;
