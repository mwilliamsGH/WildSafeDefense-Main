import Link from "next/link";

interface DisclaimerTextProps {
  variant?: "inline" | "form" | "pdf";
  className?: string;
}

export default function DisclaimerText({
  variant = "inline",
  className = ""
}: DisclaimerTextProps) {
  if (variant === "inline") {
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        WildSafe Defense wildfire risk reports are informational only and not a fire engineering assessment.{" "}
        <Link href="/disclaimer" className="text-primary hover:underline">
          See Disclaimer
        </Link>
        .
      </p>
    );
  }

  if (variant === "form") {
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        By submitting, you agree to our{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    );
  }

  if (variant === "pdf") {
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        This report is informational only.{" "}
        <Link href="/disclaimer" className="text-primary hover:underline">
          See Disclaimer
        </Link>
        .
      </p>
    );
  }

  return null;
}
