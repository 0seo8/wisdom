"use server";

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const data = {
    name: formData.get("name") as string,
    organization: formData.get("organization") as string | null,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string | null,
    message: formData.get("message") as string,
    privacyConsent: formData.get("privacyConsent") === "true",
  };

  // Log for debugging (remove in production or integrate with actual service)
  console.log("Contact form submitted:", {
    name: data.name,
    organization: data.organization,
    email: data.email,
    phone: data.phone,
    message: data.message.substring(0, 100) + (data.message.length > 100 ? "..." : ""),
    submittedAt: new Date().toISOString(),
  });

  // TODO: Integrate with Supabase or email service
  // Example Supabase integration:
  // const supabase = createClient();
  // const { error } = await supabase
  //   .from('contact_inquiries')
  //   .insert({
  //     name: data.name,
  //     organization: data.organization,
  //     email: data.email,
  //     phone: data.phone,
  //     message: data.message,
  //     created_at: new Date().toISOString(),
  //   });
  //
  // if (error) {
  //   return { success: false, error: error.message };
  // }

  // TODO: Send email notification
  // Example email integration:
  // await sendEmail({
  //   to: 'info@artswisdom.com',
  //   subject: `새로운 문의 - ${data.name}`,
  //   body: formatContactEmail(data),
  // });

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}
