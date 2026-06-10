export interface InquiryPayload {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  whatsappNumber?: string;
  email?: string;
  district?: string;
  program: string;
  preferredBranch: string;
  message?: string;
}

interface AppsScriptResponse {
  success?: boolean;
  ok?: boolean;
  message?: string;
  error?: string;
  status?: string;
}

const getInquiryEndpoint = () => import.meta.env.VITE_INQUIRY_ENDPOINT?.trim();

const toFormBody = (payload: InquiryPayload) =>
  new URLSearchParams(
    Object.entries(payload).reduce<Record<string, string>>((acc, [key, value]) => {
      if (typeof value === 'string' && value.trim()) {
        acc[key] = value;
      }
      return acc;
    }, {}),
  );

const isHtmlResponse = (responseText: string) => {
  const normalized = responseText.trim().toLowerCase();
  return normalized.startsWith('<!doctype') || normalized.startsWith('<html');
};

const isFailureResponse = (data: AppsScriptResponse) =>
  data.success === false || data.ok === false || data.status === 'error' || Boolean(data.error);

export const submitInquiry = async (payload: InquiryPayload): Promise<void> => {
  const endpoint = getInquiryEndpoint();

  if (!endpoint) {
    const error = new Error('Missing VITE_INQUIRY_ENDPOINT environment variable');
    console.error('Submission Error:', error);
    throw error;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: toFormBody(payload),
    });

    const responseText = await response.text();

    let parsedResponse: AppsScriptResponse | null = null;
    if (responseText.trim()) {
      try {
        parsedResponse = JSON.parse(responseText) as AppsScriptResponse;
      } catch {
        parsedResponse = null;
      }
    }

    if (!response.ok) {
      const errorMessage =
        parsedResponse?.message ||
        parsedResponse?.error ||
        responseText.trim() ||
        `Request failed with status ${response.status}`;
      console.error('Submission Error:', new Error(errorMessage));
      throw new Error(errorMessage);
    }

    if (parsedResponse && isFailureResponse(parsedResponse)) {
      const errorMessage = parsedResponse.message || parsedResponse.error || 'Invalid API response';
      console.error('Submission Error:', new Error(errorMessage));
      throw new Error(errorMessage);
    }

    if (isHtmlResponse(responseText)) {
      const error = new Error('Invalid API response');
      console.error('Submission Error:', error);
      throw error;
    }

  } catch (error) {
    if (error instanceof TypeError) {
      const networkError = new Error('Network failure');
      console.error('Submission Error:', networkError);
      throw networkError;
    }

    if (error instanceof Error) {
      console.error('Submission Error:', error);
      throw error;
    }

    const unknownError = new Error('Unable to submit inquiry');
    console.error('Submission Error:', unknownError);
    throw unknownError;
  }
};
