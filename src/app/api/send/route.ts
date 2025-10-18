import { Resend } from 'resend';

export async function POST() {
  try {
    // Check if we have the required environment variables
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ 
        success: false, 
        error: 'Missing RESEND_API_KEY environment variable' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'someone@example.com',
      subject: 'Test Email',
      html: '<p>Hello world!</p>',
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    });
  }
}
