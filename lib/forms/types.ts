export type FormSubmissionType =
  | "contact"
  | "get-started"
  | "package"
  | "auto-popup";

export type FormSubmissionMetadata = {
  ipAddress: string;
  userAgent: string;
  submittedAt: string;
  geo?: {
    country?: string;
    city?: string;
    isp?: string;
  };
};

export type FormSubmissionPayload = {
  formType: FormSubmissionType;
  fields: Record<string, string>;
  metadata?: FormSubmissionMetadata;
};
