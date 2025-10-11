import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'someone@example.com',
      subject: 'Test Email',
      html: '<p>Hello world!</p>',
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message });
  }
}
