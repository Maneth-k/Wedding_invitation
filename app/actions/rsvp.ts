"use server";

export interface RSVPPayload {
  fullName: string;
  attending: "yes" | "no";
  dietary?: string;
  message?: string;
}

export interface RSVPResponse {
  success: boolean;
  error?: string;
}

const DEFAULT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwG9uoDV7cxTLHNNGFHD1D0lbu6_Ibd34wkdP3oM1it9RRRt0HFB2MpLd4QfTLLY5X7/exec";

export async function submitRSVP(data: RSVPPayload): Promise<RSVPResponse> {
  const webhookUrl = process.env.GOOGLE_SHEET_RSVP_URL || DEFAULT_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      success: false,
      error: "Configuration error: Webhook URL is missing.",
    };
  }

  if (!data || !data.fullName?.trim() || !data.attending) {
    return {
      success: false,
      error: "Please provide a valid name and select whether you will attend.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.fullName.trim(),
        attending: data.attending,
        dietary: data.dietary || "",
        message: data.message || "",
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        success: false,
        error: `Submission failed with HTTP status ${res.status}. Please try again.`,
      };
    }

    const responseText = await res.text();
    try {
      const json = JSON.parse(responseText);
      if (json.status === "error") {
        return {
          success: false,
          error: json.message || "Failed to record response. Please try again.",
        };
      }
    } catch {
      // In case Google Apps Script returns HTML redirect or plain text with 200 OK
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting RSVP to Google Sheets:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected network error occurred while submitting your RSVP.",
    };
  }
}
