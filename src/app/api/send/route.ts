import { EmailTemplate } from '@/components/email-template';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return Response.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['roshanganesh06@gmail.com'],
      subject: 'New message from your portfolio',
      react: EmailTemplate({ firstName: 'User', message, email }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('POST error:', errorMessage);
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}