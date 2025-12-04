"use client";

import { useEffect } from "react";

interface GoHighLevelFormProps {
  title?: string;
  description?: string;
  propertyId?: string;
}

export default function GoHighLevelForm({
  title = "Schedule Your Free Site Assessment",
  description,
  propertyId
}: GoHighLevelFormProps) {
  useEffect(() => {
    // Load the Go High Level form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="max-w-2xl">
      {title && (
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
          data-testid="heading-go-high-level-form"
        >
          {title}
        </h2>
      )}

      {description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6" data-testid="text-form-description">
          {description}
        </p>
      )}

      <div className="w-full" style={{ minHeight: '1213px' }}>
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/m9ianiUrcz0CEw5wxSuY${propertyId ? `?property_id=${encodeURIComponent(propertyId)}` : ''}`}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '1213px',
            border: 'none',
            borderRadius: '3px'
          }}
          id="inline-m9ianiUrcz0CEw5wxSuY"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Book Consultation - WildSafeDefense"
          data-height="1213"
          data-layout-iframe-id="inline-m9ianiUrcz0CEw5wxSuY"
          data-form-id="m9ianiUrcz0CEw5wxSuY"
          title="Book Consultation - WildSafeDefense"
        />
      </div>
    </div>
  );
}
