import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetProtectedContent from "@/components/GetProtectedContent";

export default function GetProtected() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div className="min-h-screen" />}>
        <GetProtectedContent />
      </Suspense>
      <Footer />
    </div>
  );
}
